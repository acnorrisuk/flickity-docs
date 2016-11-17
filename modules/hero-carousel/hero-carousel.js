FlickityDocs['hero-carousel'] = function( elem ) {
  'use strict';

  var firstCell = elem.querySelector('.hero-carousel__cell--1');
  var illoImg = firstCell.querySelector('.hero-illustration');

  if ( illoImg ) {
    // switch out PNG for GIF
    var proxyGif = document.createElement('img');
    proxyGif.onload = function() {
      illoImg.src = proxyGif.src;
    };
    proxyGif.src = 'img/flickity-illustration.gif';
  }

};
