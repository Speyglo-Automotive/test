/* JS: set the year and handle the splash loader zoom. */
(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    var el = document.getElementById('year');
    if(el){ el.textContent = new Date().getFullYear(); }

    var body = document.body;
    var loader = document.getElementById('loader');
    if(!loader || body.hasAttribute('data-disable-loader')){
      if(loader) loader.classList.add('done');
      return;
    }

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce){
      loader.classList.add('done');
      return;
    }

    var cssDuration = (getComputedStyle(document.documentElement).getPropertyValue('--loader-duration') || '2.8s').trim();
    var durationMS = 2800;
    var m = cssDuration.match(/([\d.]+)\s*(ms|s)/);
    if(m){ durationMS = Math.round(parseFloat(m[1]) * (m[2] === 's' ? 1000 : 1)); }

    setTimeout(function(){
      loader.classList.add('done');
      setTimeout(function(){ if(loader && loader.parentNode){ loader.parentNode.removeChild(loader); } }, 450);
    }, durationMS);
  });
})();
