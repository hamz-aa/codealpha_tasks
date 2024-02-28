// sidebar toggle
let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// card modal menu
const cards = document.querySelectorAll(".card");
const cardsModal = document.querySelector(".cards-modal");
const closeButton = document.querySelector(".close-btn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cardsModal.style.backgroundColor =
      window.getComputedStyle(card).backgroundColor;
    cardsModal.showModal();
    cardsModal.firstElementChild.textContent =
      card.firstElementChild.firstElementChild.textContent;
  });
});

closeButton.addEventListener("click", () => {
  cardsModal.close();
});

// products modal menu
const products = document.querySelectorAll(".social-media .product div");
const productsModal = document.querySelector(".products-modal");
const doneButton = document.querySelector(".done-btn");

products.forEach((product) => {
  product.addEventListener("click", () => {
    productsModal.firstElementChild.textContent = product.dataset.name;
    productsModal.showModal();
  });
});

doneButton.addEventListener("click", () => {
  productsModal.close();
});
