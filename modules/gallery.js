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
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-3 overflow-hidden isotope-wrapper landingSection active">
        <div> 
       <img class="img-fluid nasaImg" src="${objectPath[i].links[0].href}"/> 
        </div>
        </div>
        `;
    }

    return gallery_html;
}