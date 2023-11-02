// const jsonFile = '../data/references_type_3.json';
const jsonFile = 'references_type_3.json';   

function updateDisplay(jsonData) {
  var jsonDataHtml = '<ul>';

  jsonData.forEach(function (item) {
    jsonDataHtml += '<li>';
    jsonDataHtml += '<strong>Reference:</strong> ' + item.full_reference + '<br>';
    jsonDataHtml += '<strong>Content:</strong> ' + (item.description !== '' ? item.description : 'No content available');
    jsonDataHtml += '</li><br>';
  });

  jsonDataHtml += '</ul>';
  document.getElementById('json-data').innerHTML = jsonDataHtml;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch(jsonFile) // Fetch data from jsonFile
    .then(response => response.json())

    .then(jsonData => {
      document.getElementById("photoSearch").addEventListener("submit", function (e) {
          e.preventDefault(); // Prevent the form from submitting
  
          const journal = document.getElementById("journal").value.toLowerCase();

          const issueStartRange = document.getElementById("issueStartRange").value.toLowerCase();
          const issueEndRange = document.getElementById("issueEndRange").value.toLowerCase();

          const volumeStartRange = document.getElementById("volumeStartRange").value.toLowerCase();
          const volumeEndRange = document.getElementById("volumeEndRange").value.toLowerCase();

          const yearStartRange = document.getElementById("yearStartRange").value.toLowerCase();
          const yearEndRange = document.getElementById("yearEndRange").value.toLowerCase();

          const title = document.getElementById("title").value.toLowerCase();

          const searchInput = document.getElementById("searchTerm").value.toLowerCase();
  
          const filterConditions = [];
  
          if (journal !== 'all') {
              filterConditions.push(`item.journal.toLowerCase() === "${journal}"`);
          }
  
          if (issueStartRange !== '' && issueEndRange == '') {
              filterConditions.push(`parseInt(item.issue) == ${issueStartRange}`);
          } else if (issueStartRange !== '' && issueEndRange !== '') {
              filterConditions.push(`parseInt(item.issue) >= ${issueStartRange} && parseInt(item.issue) <= ${issueEndRange}`);
          }
  
          if (volumeStartRange !== '' && volumeEndRange == '') {
            filterConditions.push(`parseInt(item.volume) == ${volumeStartRange}`);
          } else if (volumeStartRange !== '' && volumeEndRange !== '') {
              filterConditions.push(`parseInt(item.volume) >= ${volumeStartRange} && parseInt(item.volume) <= ${volumeEndRange}`);
          }

          if (yearStartRange !== '' && yearEndRange == '') {
            filterConditions.push(`parseInt(item.year) == ${yearStartRange}`);
          } else if (yearStartRange !== '' && yearEndRange !== '') {
              filterConditions.push(`parseInt(item.year) >= ${yearStartRange} && parseInt(item.year) <= ${yearEndRange}`);
          }
  
          if (title !== '') {
              filterConditions.push(`item.title.toLowerCase().includes("${title}")`);
          }

          if (searchInput !== '') {            
                filterConditions.push(`(${['title','description','full_reference'].map(field => `item.${field}.toLowerCase().includes("${searchInput}")`).join(' || ')})
                `);
              }

          const filterString = filterConditions.join(' && ');
          const filteredData = jsonData.filter(function (item) {
              return eval(filterString);
          });
          updateDisplay(filteredData);

      })
    })

    .catch(error => {
        console.error('Error loading JSON data:', error);
    });
});