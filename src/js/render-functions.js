import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderGallery(images) {
    let galleryHTML = "";
    images.forEach((element) => {
        galleryHTML += `
            <li class="gallery_item">
                <a class="gallery_link" href="${element.largeImageURL}" title="${element.tags}">
                    <img
                        class="gallery-image"
                        src="${element.webformatURL}"
                        alt="${element.tags}"
                    />
                </a>
                <ul class="gallery_info">
                    <li><span class="bold_text">Likes</span><p class="text">${element.likes}</p></li>
                    <li><span class="bold_text">Views</span><p class="text">${element.views}</p></li>
                    <li><span class="bold_text">Comments</span><p class="text">${element.comments}</p></li>
                    <li><span class="bold_text">Downloads</span><p class="text">${element.downloads}</p></li>
                </ul>
            </li>
        `;
    });

    gallery.insertAdjacentHTML('beforeend', galleryHTML);
    
    const lightbox = new SimpleLightbox('.gallery a', {
        nav: true,
        overlay: true,
        captions: true,
        captionSelector: 'self',
        captionType: 'attr',
        captionData: 'title',
        captionPosition: 'bottom',
        captionDelay: 250
    });
    
    lightbox.refresh();
}

