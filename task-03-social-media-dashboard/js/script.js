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
  const likes = document.querySelector(".likes-input").value;
  const subscribers = document.querySelector(".subscribers-input").value;
  const followers = document.querySelector(".followers-input").value;
  const messages = document.querySelector(".messages-input").value;

  updateMenu(likes, subscribers, followers, messages);

  document.querySelector(".likes-input").value = 0;
  document.querySelector(".subscribers-input").value = 0;
  document.querySelector(".followers-input").value = 0;
  document.querySelector(".messages-input").value = 0;

  productsModal.close();
});

function updateMenu(likes, subscribers, followers, messages) {
  document.querySelector(".total-likes").textContent =
    parseInt(document.querySelector(".total-likes").innerText) +
    parseInt(likes);
  document.querySelector(".total-subscribers").textContent =
    parseInt(document.querySelector(".total-subscribers").innerText) +
    parseInt(subscribers);
  document.querySelector(".total-followers").textContent =
    parseInt(document.querySelector(".total-followers").innerText) +
    parseInt(followers);
  document.querySelector(".total-messages").textContent =
    parseInt(document.querySelector(".total-messages").innerText) +
    parseInt(messages);
}
