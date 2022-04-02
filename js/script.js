'use strict';

const images = [
  { id: '1', url: './img/breach.jpg' },
  { id: '2', url: './img/omen.jpg' },
  { id: '3', url: './img/phoenix.jpg' },
  { id: '4', url: './img/brimstone.jpg' },
  { id: '5', url: './img/raze.jpg' },
  { id: '6', url: './img/sage.jpg' },
];

const containerImages = document.querySelector('#container-images');

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class="item">
    <img src="${image.url}"
    </div>
    `;
  });
};

loadImages(images, containerImages);

let items = document.querySelectorAll('.item');

const previous = () => {
  const lastItem = items[items.length - 1];
  containerImages.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
};

const next = () => {
  containerImages.appendChild(items[0]);
  items = document.querySelectorAll('.item');
};

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
