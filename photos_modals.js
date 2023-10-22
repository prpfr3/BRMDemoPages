// Define an array of photographer data
const collectionsData = [
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/008.jpg',
    summary: '<strong><a href="#jjsmithModal" data-toggle="modal">John J Smith</a></strong>:- A large collection taken between 1950-1970 across UK, Ireland & Europe with a focus on Southern England',
    id: 'jjsmithModal',
    name: 'JJ Smith',
    description: 'John J Smith lived in Eastbourne, commuting to London to work for British Railways.<p>His photographs are not just of locomotives but he often took pictures that other photographers ignored such as signals, signal boxes, stations etc.</p><p> Many of his pictures are from the South of England but he travelled all over the UK including Ireland. He photographed many branch lines just before closure. The picture was taken on 19 September 1953 at Watchingwell, Isle of Wight on the last weekend of operation.</p>',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/jjs.jpg',
    photocredit: '',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/009.jpg',
    summary: '<strong><a href="#chogg" data-toggle="modal">Colin Hogg</a></strong>:- Covering mainly the Southern area including some shipping photos',
    id: 'chogg',
    name: 'Colin Hogg',
    description: '<p>Colin Hogg photographed steam locomotives all over the country. His pictures depict trains in action including rare shots of holiday and special excursions. </p><p> Colin took his first railway photographs in the early 1950s and over the years used a variety of equipment, mostly rollfilm, including Agfa Record and Ensign Selfix cameras, processing his own films and prints.</p><p> Although Colin has always lived on "Southern" territory, his railway interest was very wide and he travelled all over the country to photograph steam, including Scotland and Eire.</p><p> Not one to take photographs in locomotive sheds, nearly all his pictures depict trains in action out on the line for which he was aided by various lineside photographic walking permits.</p><p> Particularly noteworthy in his collection are his rare photographs of seasonal holiday trains and special excursions which have long since vanished from the railway scene.</p><p> Colin, who still lives in Surrey, continues to enjoy some railway photography though he now confines himself to colour having given up black and white many years ago. </p>',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/ch.jpg',
    photocredit: '',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/010.jpg',
    summary: '<strong><a href="#apostlethwaite" data-toggle="modal">Alan Postlethwaite</a></strong>:- Covering mainly locomotives in Southern England',
    id: 'apostlethwaite',
    name: 'Alan Postlethwaite',
    description: '<p>Alan Postlethwaite grew up in South London as a model railway enthusiast. </p><p> After leaving school in 1957, he completed an engineering apprenticeship in the Electricity Industry leading to an Honours Degree in Mechanical Engineering at City University. </p><p> Simultaneously, he studied Railway History at Goldsmiths College, through which he discovered the open countryside and steam railways.</p><p> He became a proficient amateur railway photographer, developing an artistic style of his own. Starting with a simple box camera, he progressed to a Zeiss Ikon folding camera (2&frac12; in. sq.) and then to a 35 mm Voitlander Vito B with bright line viewfinder.</p><p> He developed most of his own films and hired workplace social club dark rooms for enlarging. </p><p> His photos are mostly Southern (Kent to Cornwall) with occasional trips to the rest of Britain and Europe.</p>	<p> He stopped taking photographs when BR steam came to an end and, in the same year, he got married. </p><p> His negatives were meticulously catalogued and stored but few were printed at the time. After taking early retirement in 1992, he started to print en masse, leading to nine railway books plus magazine articles.</p><p> In his other passion, model railways, Alan built several complex layouts and organised model railway shows in the Cotswolds where he lived from 1972.</p>',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/afp.jpg',
    photocredit: '',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/015.jpg',
    summary: '<strong><a href="#jkent" data-toggle="modal">Joe Kent</a></strong>:- Covering mainly locomotives in Southern England',
    id: 'jkent',
    name: 'Joe Kent',
    description: '<p>Joe Kent was a long-standing Brighton resident, who worked for much of his career as a carpenter employed by the Pullman Car Company renovating or remodelling an ageing fleet of luxury vehicles. </p><p> Being based at their maintenance depot at Preston Park until closure in 1964, allowed him unlimited access to indulge in his interests with photography creating a comprehensive series of images of trains and rolling stock on the Brighton line. </p><p> For almost twenty years from 1946, he also photographed steam locomotives working at various locations, including mainline stations and yards around London and the South of England.</p>',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/jk.jpg',
    photocredit: 'Joe Kent 1948. &#169; Antony Ford',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/005.jpg',
    summary: '<strong><a href="#jscrace" data-toggle="modal">John Scrace</a></strong>:- A prolific photographer of steam, diesel and electric traction mainly on the Southern network',
    id: 'jscrace',
    name: 'John Scrace',
    description: '<p>John Scrace was born in Horsham in 1933. His father was a railwayman starting with the London Brighton & South Coast railway as a teenager progressing through the ranks to driver, then leading motorman. </p><p>John’s railway photographing started in the early 1950’s and it was towards the end of that decade when it became a more prominent part of his life. John took nearly four thousand photographs of signal boxes and stations, the last recorded in 2005. John was a prolific photographer of steam & diesel locos, and EMUs in the most part all on the Southern network. He also photographed preserved railways across the UK and overseas.</p><p>All of John’s photographs, negatives and slides are now held by the Bluebell Railway Museum Archive and digitalisation work has commenced. All the details are meticulously recorded in John’s unique handwriting on each item. </p>					<p>John was still an active volunteer for the Bluebell Railway Museum Archive up until late 2019.</p>	',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/js.jpg',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/006.jpg',
    summary: '<strong><a href="#desau" data-toggle="modal">David Esau</a></strong>:- Mainly from the Southern region taking his first photo at Ashford works on 6th January 1955',
    id: 'desau',
    name: 'David Esau',
    description: '<p>Most people interested in railway photography will be more familiar with the name of David’s older brother, Mike Esau.</p><p>  Mike, being 8 years older than David, took his little brother with him on many of his railway trips, whether it was David pedalling his tricycle down to the pedestrian bridge over the Waterloo main line at New Malden where they lived – he can just recall seeing a blue liveried Merchant Navy - or further afield to more magical places such as Ashford or Eastleigh.</p><p>  From the earliest years he can remember, railways were part of his life.  His older brother’s influence propelled David into railway photography, and he never went through the usual ‘trainspotting’ phase.</p><p>  At the age of 9, he took his first railway photograph at Ashford works on 6th January 1955 – the last S11, 30400, awaiting scrap – using his mum’s old Ensign camera.</p><p>  Most of his photographs were taken in the South of England, but he travelled to other parts of the country as well. </p><p>  From May 1960, he kept a diary of all his railway trips. Many trips were on the back of Mike’s Lambretta scooter, and latterly on his own Lambretta.  </p><p>  Perhaps the most epic trip was two weeks in 1961 up to the Scottish Highlands.  New Malden to Mallaig, all on Mike’s Lambretta TV 175 with two very modest sized panniers.  Not much room for a change of clothes!</p>',
    imageSrc: 'https://www.bluebell-railway-museum.co.uk/services_files/de.jpg',
    photocredit: '',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/007.jpg',
    summary: "<strong><a href='#rcriley' data-toggle='modal'>RC Riley</a></strong>:- One of the country's leading photographers of railways.",
    id: 'rcriley',
    name: 'R.C. Riley',
    description: '<p>Dick Riley was one of the country"s leading photographers of railways. Born in 1921 he started taking black and white photographs just before the second World War. In 1954 he moved onto taking colour transparencies.</p><p>The Bluebell Railway Museum Archive were kindly gifted over 400 colour slides that Dick took of the Bluebell Railway. These dates from the earliest days of the railway and cover the first three decades of its operation.</p>',
    imageSrc: '',
    photocredit: '',
  },
  {
    image_url: 'https://www.bluebell-railway-museum.co.uk/archive/photos2/000/008.jpg',
    summary: '<strong><a href="#csaunders" data-toggle="modal">Colin Saunders</a></strong>:- A collection of 199 images of mainly ex Brighton locos.',
    id: 'csaunders',
    name: 'Colin Saunders',
    description: '<p>Unfortunately, we know very little about the Colin Saunder &#039;s collection. At some point the negatives were given to the late Klaus Marx when he with the Bluebell Railway Archivist and a label was fixed to the front of the box which said  &#039;Colin Saunders, early 1950s &#039;. The collection consists of 199 images of mainly ex Brighton locos, nearly half the collection are photos of Brighton Atlantics. If you can tell us more about Colin Saunders and this collection, please email photos@bluebell-railway-museum.co.uk</div>',
    imageSrc: '',
    photocredit: '',
  },
];



// Function to generate a modal for each photographer
function generatePhotographerModal(id, name, description, imageSrc, photocredit) {
  return `
    <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="${id}" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="${id}">${name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-6 ">
                <p>${description}</p>
              </div>
              <div class="col-sm-6">
                ${imageSrc ? `<img src="${imageSrc}" class="img-fluid mx-auto d-block" alt="${name} Railway Photographer"><p class="mid220">${photocredit}</p>` : ''}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!--!${name}-->
  `;
}

// Generate modals and append them to the container
const modalContainer = document.getElementById('modalContainer');
collectionsData.forEach(photographer => {
  const modalHTML = generatePhotographerModal(photographer.id, photographer.name, photographer.description, photographer.imageSrc, photographer.photocredit);
  modalContainer.innerHTML += modalHTML;
});