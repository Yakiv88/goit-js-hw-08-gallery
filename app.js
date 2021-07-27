const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];




const galleryEl = document.querySelector('.js-gallery');
const lightboxEl=document.querySelector('.js-lightbox');
const overlayEl = document.querySelector('.lightbox__overlay');
const lightboxContentEl = document.querySelector('.lightbox__content');
const lightboxImageEl = document.querySelector('.lightbox__image');
const buttonClose = document.querySelector('.js-lightbox button[data-action="close-lightbox"]');


// 1
const addgallery = galleryItems.map(({ preview, original, description }) => {
  const marcup = `<li class="gallery__item">
        <a class="gallery__link" href="${preview}">
        <img class="gallery__image"
        src="${original}"
         alt="${description}"/>
         </a>
         </li>
         `;
    return marcup;
    
});
galleryEl.insertAdjacentHTML("beforeend", addgallery.join(''));
 



// --------------- OpenModal-------
galleryEl.addEventListener('click', onOpenModal)
buttonClose.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return
  }
    lightboxEl.classList.toggle('is-open');
  lightboxImageEl.src = e.target.src;
    lightboxImageEl.alt = e.target.alt;
    
}

// //--------------- CloseModalESC--------
window.addEventListener('keyup', onCloseModal);
// window.addEventListener('keyup', onCloseModalESC);

// function closeModalESC(e) {
//   if (e.key !== "Escape") {
//     return;
//   }
//   onCloseModalESC( );
// }
// onCloseModalESC(){
//   lightboxEl.classList.toggle('is-open');
// }

// //--------------- CloseModal--------
function onCloseModal(e) {
    if (e.key === "Escape"|| e.target.nodeName === 'BUTTON') {
      lightboxEl.classList.toggle('is-open');
      window.removeEventListener('keyup', onCloseModal);
    }
}   


