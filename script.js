if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

const galleryImages = document.querySelectorAll('.gallery img');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const closeButton = document.getElementById('closeButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function showImage(index) {
  overlayImage.src = galleryImages[index].src;
  overlay.style.display = 'flex';
  currentIndex = index;
}

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    showImage(index);
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.target === closeButton) {
    overlay.style.display = 'none';
  }
});

prevButton.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

function closeOverlay() {
  overlay.style.display = 'none';
}

function toggleCumpleContent() {
  var content = document.getElementById("cumple-content");
  var button = document.querySelector(".toggle-button");
  var icon = button.querySelector("i");

  content.classList.toggle("show");
  
  if (content.classList.contains("show")) {
    button.innerHTML = 'Ver menos detalles';
  } else {
    button.innerHTML = 'Ver más detalles';
  }
}

function openNewWindow() {
  window.open('https://www.smartfit.cl/gimnasios/grajales', '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
  var offcanvasNavbar = document.getElementById('offcanvasNavbar');
  var offcanvas = new bootstrap.Offcanvas(offcanvasNavbar);
 
  var links = document.querySelectorAll('#offcanvasNavbar .nav-link, #offcanvasNavbar .serv-boton');

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      offcanvas.hide();
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var infoButton = document.getElementById('info-button4');
  var customOverlay = document.getElementById('custom-overlay');

  infoButton.addEventListener('click', function() {
      customOverlay.style.display = 'block';
  });

  window.addEventListener('click', function(event) {
      if (event.target == customOverlay) {
          customOverlay.style.display = 'none';
      }
  });
});