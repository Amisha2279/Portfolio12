/**
 * @author @heera9331
 * @description this script only for home
 */


/** awesome client */
const awesomeClients = Array.from(
  document.querySelectorAll("[data-client-tab-title]")
);

awesomeClients.forEach((client) => {
  client.addEventListener("click", () => {
    const title = client.getAttribute("data-client-tab-title");

    // Remove active class from all titles
    document.querySelectorAll("[data-client-tab-title]").forEach((el) => {
      el.classList.remove("active");
    });
    client.classList.add("active");

    // Hide all tab contents
    document.querySelectorAll("[data-client-tab-value]").forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("fade-up"); // reset animation
    });

    // Show and animate the selected tab content
    document
      .querySelectorAll(`[data-client-tab-value='${title}']`)
      .forEach((el) => {
        el.classList.remove("hidden");
        // trigger animation
        setTimeout(() => {
          el.classList.add("fade-up");
        }, 10); // small delay to allow "hidden" to be removed before adding animation
      });
  });
});


/** resume tabs */ 
document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll("[data-resume-tab-title]"));
  const contents = Array.from(document.querySelectorAll(".zoro-tab-value"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedTitle = tab.getAttribute("data-resume-tab-title");

      // Remove "active" class from all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // Hide all tab content
      contents.forEach(content => {
        content.classList.add("hidden");
        content.classList.remove("flex");
      });

      // Add "active" to current tab
      tab.classList.add("active");

      // Show corresponding content
      const matchedContent = document.querySelector(`[data-resume-tab-value='${selectedTitle}']`);
      if (matchedContent) {
        matchedContent.classList.remove("hidden");
        matchedContent.classList.add("flex");
      }
    });
  });
});