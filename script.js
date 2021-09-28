'use strict';

/*Query Elements*/
const links = document.querySelector('.navbar-nav');
const gallary = document.querySelector('.photos');

/*Gallary */
const GallarySystem = function () {
  const imagesUrl = new Map([
    [
      'img_1',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
    [
      'img2',
      'https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80',
    ],
    [
      'img3',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
    [
      'img4',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
    [
      'img5',
      'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
    [
      'img6',
      'https://images.unsplash.com/photo-1589472500123-b60f8455740b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80',
    ],
    [
      'img7',
      'https://images.unsplash.com/photo-1511795267602-0424436b99c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
    ],
    [
      'img8',
      'https://images.unsplash.com/photo-1553527922-767df645c5f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    ],
  ]);

  imagesUrl.forEach(function (value, i) {
    const html = ` <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="${value}"  data-lightbox="photos"><img class="img-fluid" src="${value}"></a></div>`;
    gallary.insertAdjacentHTML('afterbegin', html);
  });
};

links.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    window.location.replace(id);
    id === 'gallary.html' ? GallarySystem() : '';
    console.log(id);
  }
});

$(document).ready(function () {
  $('body').css('display', 'none');

  $('body').fadeIn(1000);

  $('.link').click(function (event) {
    event.preventDefault();
    newLocation = this.href;

    $('body').fadeOut(1000, newpage);
  });

  function newpage() {
    window.location = newLocation;
  }
});
