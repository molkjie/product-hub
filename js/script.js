// Delete account-button in menu-burger
const accountButton = document.querySelector('.account-button button');

function toggleAccountButton() {
  if (window.innerWidth <= 1199) {
    accountButton.style.display = 'none';
  } else {
    accountButton.style.display = 'block';
  }
}


toggleAccountButton();
window.addEventListener('resize', toggleAccountButton);
//scroll to top
$(document).ready(function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    'stroke-dashoffset 10ms linear';

  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);

  var offset = 50;
  var duration = 500;

  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });

  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
}); 
// Delete slider 
const slider = document.querySelector('.home-second-section');

function toggleSlider() {
  if (window.innerWidth <= 1199) {
    slider.style.display = 'none';
  } else {
    slider.style.display = 'block';
  }
}

toggleSlider();
window.addEventListener('resize', toggleSlider);

//menu-burger
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
  const navbarMenu = document.querySelector('.navbar');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
}

// slider in home section
document.addEventListener('DOMContentLoaded', function () {
  setInterval(rotate, 2000);
});

function rotate() {
  const slider = document.querySelector('.slider');
  const firstChild = slider.firstElementChild.cloneNode(true);
  slider.firstElementChild.remove();
  slider.insertAdjacentElement('beforeend', firstChild);
}
