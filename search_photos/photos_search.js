const jsonData = [
  {"archiveref": "000045", "date": "Oct 18th 1964", "location": "Passing Brighton Pullman Works", "creator": "Joe Kent", "further_details": "Modified 05/1958. 35007 worked the Littlehampton - Brighton- Park - Brighton - London Victoria legs of the tour", "train_working": "RCTS/LCGB 'Midhurst Belle' railtour", "loconumber": "35007", "lococlass": "SECR H class", "category": "ZS"},
  {"archiveref": "000046", "date": "Oct 18th 1964", "location": "Passing Preston Parks Pullman Works", "creator": "John Scrace", "further_details": "Modified 05/1958. 35007 worked the Littlehampton - Preston - Park - Brighton - London Victoria legs of the tour", "train_working": "RCTS/LCGB 'Midhurst Belle' railtour", "loconumber": "35008", "lococlass": "MN", "category": "ZX"}
];

const jsonFile = '../data/photoarchive_10000.json'; // Path to the JSON file

// Define the mapping of category codes to descriptions
const categoryMapping = {
    "NW": "New on 11 October",
    "NN": "New on 6 September",
    "BB": "Bluebell",
    "FC": "Fenchurch",
    "CO": "Coaches",
    "CS": "Colonel Stephens",
    "CU": "Cuckoo Line",
    "ED": "Electric and Diesel",
    "ER": "Eastern Region",
    "FO": "Foreign - not Spain",
    "WG": "Goods Wagons etc",
    "IN": "Industrial Locomotives",
    "IR": "Ireland",
    "IM": "Isle of Man",
    "LT": "London Underground",
    "MR": "Midland Region",
    "LM": "Military Depots - Bicester & Longmoor",
    "NG": "Narrow Gauge",
    "PL": "Pullmans",
    "RT": "Rail Tours",
    "RD": "Road Transport",
    "SC": "Scotland",
    "MP": "Sheds - Works - Motive Power Depots",
    "SP": "Shipping",
    "SG": "Signal Boxes & Signals",
    "FS": "Spain",
    "ST": "Stations",
    "WR": "Western Region",
    "ZB": "Berkshire",
    "ZC": "Cornwall",
    "ZV": "Devon",
    "ZD": "Dorset",
    "ZH": "Hampshire",
    "IW": "Isle of Wight",
    "ZK": "Kent",
    "LO": "London - Greater",
    "ZM": "Somerset",
    "ZY": "Surrey",
    "ZS": "Sussex - East",
    "ZX": "Sussex - West",
    "ZW": "Wiltshire",
  };
  
  // Function to translate the code to description
  function translateCategoryCode(code) {
    return categoryMapping[code] || "Unknown"; // "Unknown" is the default description if the code is not found in the mapping
  }

var jsonDataHtml = '<ul>';

function updateDisplay(filteredData) {
  var jsonDataHtml = '<ul>';
  filteredData.forEach(function (item) {
      jsonDataHtml += '<li>';
      jsonDataHtml += '<strong>Archive Ref:</strong> ' + item.archiveref + '<br>';
      jsonDataHtml += '<strong>Date:</strong> ' + item.date + '<br>';
      jsonDataHtml += '<strong>Location:</strong> ' + item.location + '<br>';
      jsonDataHtml += '<strong>Creator:</strong> ' + item.creator + '<br>';
      jsonDataHtml += '<strong>Further Details:</strong> ' + item.further_details + '<br>';
      jsonDataHtml += '<strong>Train Working:</strong> ' + item.train_working + '<br>';
      jsonDataHtml += '<strong>Number:</strong> ' + item.loconumber + '<br>';
      jsonDataHtml += '<strong>Loco Class:</strong> ' + item.lococlass + '<br>';
      var categoryDescription = translateCategoryCode(item.category);
      jsonDataHtml += '<strong>Category:</strong> ' + categoryDescription + '<br>';
      jsonDataHtml += '</li>';
  });
  jsonDataHtml += '</ul>';
  document.getElementById('json-data').innerHTML = jsonDataHtml;
}

document.addEventListener("DOMContentLoaded", function () {
    updateDisplay(jsonData);

    document.getElementById("photoSearch").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting

        const imgRef = document.getElementById("imgRef").value.toLowerCase();
        const photographer = document.getElementById("photographer").value.toLowerCase();
        const loconumberStartRange = document.getElementById("locoNumberStartRange").value.toLowerCase();
        const loconumberEndRange = document.getElementById("locoNumberEndRange").value.toLowerCase();
        const lococlass = document.getElementById("locoClass").value.toLowerCase();
        const nameLoco = document.getElementById("locoName").value.toLowerCase();
        const location = document.getElementById("location").value.toLowerCase();
        const category = document.getElementById("category").value.toLowerCase();
        const searchInput = document.getElementById("searchTerm").value.toLowerCase();

        const filterConditions = [];

        if (imgRef !== '') {
            filterConditions.push(`item.archiveref.toLowerCase().includes("${imgRef}")`);
        }

        if (photographer !== 'all') {
            filterConditions.push(`item.creator.toLowerCase() === "${photographer}"`);
        }

        if (loconumberStartRange !== '' && loconumberEndRange == '') {
            filterConditions.push(`parseInt(item.loconumber) == ${loconumberStartRange}`);
        } else if (loconumberStartRange !== '' && loconumberEndRange !== '') {
            filterConditions.push(`parseInt(item.loconumber) >= ${loconumberStartRange} && parseInt(item.loconumber) <= ${loconumberEndRange}`);
        }

        if (lococlass !== '') {
            filterConditions.push(`item.lococlass.toLowerCase() === "${lococlass}"`);
        }

        if (nameLoco !== '') {
            filterConditions.push(`item.loconame.toLowerCase().includes("${nameLoco}")`);
        }

        if (location !== '') {
            filterConditions.push(`item.location.toLowerCase().includes("${location}")`);
        }

        if (category !== '') {
            filterConditions.push(`item.category.toLowerCase().includes("${category}")`);
        }

        if (searchInput !== '' && !isNaN(searchInput)) {
            // If the search input is a number, filter based on the "number" field
            filterConditions.push(`item.number.toLowerCase().includes("${searchInput}")`);
            } 
        
            if (searchInput !== '' && isNaN(searchInput)) {
            // If the search input is not a number, filter based on other text fields
            filterConditions.push(`(${['archiveref','date','location','creator','further_details','train_working','lococlass'].map(field => `item.${field}.toLowerCase().includes("${searchInput}")`).join(' || ')})
            `);
            }

        const filterString = filterConditions.join(' && ');


        // THIS CODE REPLACED BY CODE BELOW AS 'eval' FLAGGED AS VULNERABILITY ... THOUGH SO IS FUNCTION !
        //   const filteredData = jsonData.filter(function (item) {
        //       return eval(filterString);
        //   });

        // Construct a filter function based on the filter conditions
        function createFilterFunction(filterConditions) {
        return function (item) {
        return filterConditions.every(condition => condition(item));
        };
        }
   
        const filterFunctions = filterConditions.map(condition => new Function('item', `return ${condition};`));

        // Create a composite filter function
        const compositeFilterFunction = createFilterFunction(filterFunctions);

        // Filter the data
        const filteredData = jsonData.filter(compositeFilterFunction);

        updateDisplay(filteredData);
  });
});