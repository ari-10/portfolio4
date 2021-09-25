'use strict';

window.addEventListener('load', () => {

  // Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView:1,
    breakpoints: {
      480: {
        slidesPerView: 2,
      }
    },
    autoplay: true,
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    }
  });
  
  
  // Loading
  const loading = document.querySelector('.loading');
  function loaded(element) {
    element.classList.add('loading--fade');
  }
  loaded(loading);

  
  // Menu trigger
  const subNavBtn = document.querySelector('.sub-nav__btn');
  const subNavLists = document.querySelector('.sub-nav__lists');

  function toggleSubNav(target) {
    this.classList.toggle('sub-nav__btn--active');
    subNavLists.classList.toggle('sub-nav__lists--active');
  }
  subNavBtn.addEventListener('click', toggleSubNav);


  // Maskout Animation
  const maskOutElments = document.querySelectorAll('.js-mask-out');
  const maskOutOpt = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  }
  const maskOutOvserver = new IntersectionObserver(maskOut, maskOutOpt);
  function maskOut(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('js-mask-out--done');
    });
  }
  maskOutElments.forEach(maskOutElment => {
    maskOutOvserver.observe(maskOutElment);
  });
});


window.addEventListener('DOMContentLoaded', () => {
  
  // Sticky Navigation
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const stickyNavOpt = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  }
  const stickyNavObs = new IntersectionObserver(stickyNav, stickyNavOpt);
  function stickyNav(entry) {
    if (!entry[0].isIntersecting) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  }
  stickyNavObs.observe(hero);
});