// =====================================================
// URL DO CHECKOUT DA CAKTO
// =====================================================
const CHECKOUT_URL = "https://pay.cakto.com.br/fw7zueg_1122516";

function goToCheckout() {
  if (!CHECKOUT_URL || CHECKOUT_URL === "COLE_AQUI_SUA_URL_DA_CAKTO") {
    console.warn("Checkout URL ainda não configurada. Edite a constante CHECKOUT_URL em script.js.");
    return;
  }

  window.location.href = CHECKOUT_URL;
}

function initFaq() {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));
      answer.hidden = isExpanded;

      const icon = button.querySelector(".faq-icon");
      if (icon) {
        icon.textContent = isExpanded ? "+" : "−";
      }
    });
  });
}

function initCheckoutLinks() {
  const links = document.querySelectorAll("[data-checkout-link]");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      goToCheckout();
    });
  });
}

// Google Analytics: adicione aqui o código real de rastreamento.
// Meta Pixel: adicione aqui o snippet real do pixel de conversão.
// Google Tag Manager: adicione aqui o script real do container.

document.addEventListener("DOMContentLoaded", () => {
  initFaq();
  initCheckoutLinks();
});
