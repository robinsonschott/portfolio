/* Menu burger */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      document.body.classList.remove("menu-open"); // Réactive le scroll
    } else {
      menu.style.display = "flex";
      document.body.classList.add("menu-open"); // Désactive le scroll
    }
  });

  // Fermer le menu quand on clique sur un lien
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
      document.body.classList.remove("menu-open");
    });
  });
}
