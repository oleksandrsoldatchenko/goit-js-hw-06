const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// -----------------------version 1
// const galleryEl = document.querySelector("ul");
// const element = images
//   .map(function ({url, alt}) {
//     return `<li><img src="${url}" alt="${alt}" width="490"></li>`;
//   })
//   .join('');
// galleryEl.insertAdjacentHTML('afterbegin', element);
// galleryEl.style.cssText = `
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   list-style: none;
//   padding: 0;
// `;

// -----------------------version 2
const galleryEl = document.querySelector('.gallery');
const element = images
  .map(function ({url, alt}) {
    return `<li><img src="${url}" alt="${alt}" width="490"></li>`;
  })
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', element);