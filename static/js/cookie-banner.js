document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("cookie-accept-btn");
  const consentCookieName = "cookie_consent";

  // Check if the consent cookie exists
  if (!localStorage.getItem(consentCookieName)) {
    banner.style.display = "block";
  }

  // On button click, set cookie and hide banner
  button.addEventListener("click", function () {
    localStorage.setItem(consentCookieName, "true");
    banner.style.display = "none";
  });
});
