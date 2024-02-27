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
  });
});

closeButton.addEventListener("click", () => {
  cardsModal.close();
});
