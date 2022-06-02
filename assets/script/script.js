'use strict';

const images = [
    { 'id': '1', 'url':'./assets/images/ace.jpg' },
    { 'id': '2', 'url':'./assets/images/gold.jpg' },
    { 'id': '3', 'url':'./assets/images/kaidou.jpg' },
    { 'id': '4', 'url':'./assets/images/super.jpg' },
    { 'id': '5', 'url':'./assets/images/zoro.jpg' },
    { 'id': '6', 'url':'./assets/images/luffy.png' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);