export function getApodPicture(div) {
    fetch(
            `https://api.nasa.gov/planetary/apod?api_key=dlFoet3QMGqg067fIrcptT5dHqbfzbVhWgoaiaM8`
        )
        .then((response) => response.json())
        .then((picture) => {
            div.innerHTML = composeApod(picture);
        });
}

function composeApod(picture) {
    let picture_html = "";

    picture_html += `
                <div class="card mb-3 mt-5" style="max-width: 3096px; ">
                    <div class="apod-text">
                        <p class="h1 display-5 text-center mt-3 mb-5 "> Astronomy Picture of the Day</p>
                    </div>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a id="url" href="${picture.hdurl}"><img src="${
    picture.url
  }" class="img-fluid rounded-start mb-3" alt="${picture.title}"></a> 
                        <p class="lead text-center">Click image to view in high resolution</p>
                        </div>

                        <div class="col-md-8">
                        <div class="card-body p-lg-5 p-md-2 p-sm-0 ">
                            <h3 class="mb-4 card-title">${picture.title}</h3>
                            <p class="card-text justify-text">${
                              picture.explanation
                            }</p>
                            <p class="card-text"><small class="text-muted">${
                              picture.date
                            }</small></p>
                            <p class="card-text"><small class="text-muted">&copy${author(
                              picture
                            )}</small></p>
                          
                        </div>
                    </div>
                    </div>
                
                `;

    return picture_html;
}

function author(aName) {
    if (aName.copyright === undefined) {
        return "NASA";
    } else {
        return aName.copyright;
    }
}