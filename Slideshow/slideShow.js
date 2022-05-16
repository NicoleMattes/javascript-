'use strict';

const imagens = [
    { 'id': '1', 'url': './img/valorant.jpg' },
    { 'id': '2', 'url': './img/sky.jpg' },
    { 'id': '3', 'url': './img/jett.jpg' },
    { 'id': '4', 'url': './img/killjoy.png' },
    { 'id': '5', 'url': './img/fade.jpg' },
    { 'id': '6', 'url': './img/viper.jpg' },
    { 'id': '7', 'url': './img/reyna.jpg' },
    { 'id': '8', 'url': './img/neon.jpg' },
]

const container = document.querySelector ('#container-items')


const loadImages = ( images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })

}



loadImages( images, container );

let items = document.querySelectorAll('.item');