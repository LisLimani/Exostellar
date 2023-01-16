export function getGalleryImages(div) {
  fetch(" https://images-api.nasa.gov/search?media_type=image")
    .then((response) => response.json())
    .then((data) => (div.innerHTML = composeGallery(data)));
}

function composeGallery(gallery) {
  let objectPath = gallery.collection.items;

  let gallery_html = "";

  for (let i = 0; i < objectPath.length; i++) {
    gallery_html += `
   


        <div class="card col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 overflow-hidden ">
        <p class="text-dark card-text">  ${objectPath[i].data[0].title}</p>
        <a href="${objectPath[i].links[0].href}"><img class="img-fluid nasaImg" src="${objectPath[i].links[0].href}"/> </a>
             <div class="card-body">
            
                 <p class="card-text">${objectPath[i].data[0].description}</p>
              
             </div>
             <p class="card-text text-muted align-middle text-center">NASA ID: ${objectPath[i].data[0].nasa_id}</p>
        </div>
        
        `;
  }

  return gallery_html;
}
