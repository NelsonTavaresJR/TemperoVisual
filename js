document.addEventListener('DOMContentLoaded', function () {

  const buyButton = document.getElementById("buyButton");
  const pagesWithBuy = ["fotografia", "edicao", "ifood", "publicidade"];

  function showPage(id) {

   
    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
      page.style.display = "none";
    });

   
    const targetPage = document.getElementById(id);
    if (targetPage) {
      targetPage.style.display = "block";
      targetPage.classList.add("active");
    }

   
    if (pagesWithBuy.includes(id)) {
      buyButton.style.display = "block";
    } else {
      buyButton.style.display = "none";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pageId = link.getAttribute("href").substring(1);
      showPage(pageId);
    });
  });

 
  document.querySelectorAll(".card-link").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const pageId = card.getAttribute("data-page");
      showPage(pageId);
    });
  });


  document.querySelector(".logo-container").addEventListener("click", () => {
    showPage("sobre");
  });

 
  showPage("sobre");

});
