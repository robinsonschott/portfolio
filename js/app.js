/* Suivi du modèle 3D avec la souris */
const modelViewer = document.getElementById("character");

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

let offsetX = 0;
let offsetY = 0;
let targetOffsetX = 0;
let targetOffsetY = 0;

let cameraOrbitX = 0;
let cameraOrbitY = 0;
let targetCameraOrbitX = 0;
let targetCameraOrbitY = 0;

// Facteur de lissage et d'intensité du décalage
const smoothing = 0.005;
const intensity = 0.8; // Contrôle l'amplitude du décalage (5%)
const orbitIntensity = 100; // Contrôle l'amplitude de l'orbite de la caméra (en degrés)

// Écouter les mouvements de souris (ne fait rien si l'élément n'existe pas)
document.addEventListener("mousemove", (e) => {
  if (!modelViewer) return;

  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;

  // Calcul du déplacement de la div
  targetOffsetX = deltaX * intensity;
  targetOffsetY = deltaY * intensity;

  // Calcul de l'orbite de la caméra pour le suivi du regard
  // Normalisation entre -1 et 1
  const normalizedX = deltaX / centerX;
  const normalizedY = deltaY / centerY;

  targetCameraOrbitX = normalizedX * orbitIntensity; // Orbite horizontale
  targetCameraOrbitY = normalizedY * orbitIntensity; // Orbite verticale
});

// Animation fluide (lancée seulement si l'élément existe)
function animate() {
  if (!modelViewer) return;

  // Lissage du déplacement de la div
  offsetX += (targetOffsetX - offsetX) * smoothing;
  offsetY += (targetOffsetY - offsetY) * smoothing;

  // Lissage de l'orbite de la caméra
  cameraOrbitX += (targetCameraOrbitX - cameraOrbitX) * smoothing;
  cameraOrbitY += (targetCameraOrbitY - cameraOrbitY) * smoothing;

  // Application du déplacement de la div
  modelViewer.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;

  // Application de l'orbite de la caméra sur le modèle 3D
  // Format: "azimuth(horizontal) elevation(vertical) radius"
  modelViewer.cameraOrbit = `${cameraOrbitX}deg ${75 + cameraOrbitY}deg auto`;

  requestAnimationFrame(animate);
}

if (modelViewer) {
  // Désactiver l'auto-rotate pour avoir le contrôle total
  modelViewer.removeAttribute("auto-rotate");
  animate();
}

/* Page projets */

document.querySelectorAll('[id^="btn-projet-"]').forEach((btn) => {
  btn.addEventListener("click", () => {
    const projetId = btn.id.replace("btn-", "");
    toggleProject(projetId);
  });
});

function toggleProject(projetId) {
  document.querySelectorAll('[id^="projet-"]').forEach((projet) => {
    projet.classList.remove("projets__projet-active");
    projet.classList.add("projets__projet-hidden");
  });

  const projetContainer = document.getElementById(projetId);
  projetContainer.classList.add("projets__projet-active");
  projetContainer.classList.remove("projets__projet-hidden");
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY <= 0) {
    document.querySelectorAll('[id^="projet-"]').forEach((projet) => {
      projet.classList.remove("projets__projet-active");
      projet.classList.add("projets__projet-hidden");
    });
  }
});

window.addEventListener("scroll", () => {
  const projetContainer = document.getElementById("projet-container");
  if (
    window.scrollY <= 1 &&
    projetContainer &&
    projetContainer.classList.contains("projets__projet-active")
  ) {
    projetContainer.classList.remove("projets__projet-active");
    projetContainer.classList.add("projets__projet-hidden");
  }
});

/* Carousel des projets */

document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const slides = carousel.querySelectorAll(".carousel__slide");
  const prevBtn = carousel.querySelector(".carousel__btn--prev");
  const nextBtn = carousel.querySelector(".carousel__btn--next");

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
});

/* Form */

(function () {
  emailjs.init("6YNPWd0KWqOF0wLVS");
})();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_b6h96ss",
      "template_bpexknj",
      this
    ).then(() => {
      document.getElementById("status").innerText = "Merci pour votre message :)";
      this.reset();
    }, (error) => {
      document.getElementById("status").innerText = "Il y a eu une erreur lors de l'envoi du message.";
      console.log(error);
    });
  });
}
