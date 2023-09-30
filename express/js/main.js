document.addEventListener("DOMContentLoaded", () => {
  let count = 0;

  $("#button").on("click", () => {
    count = count + 1;

    if (count === 3) {
      $("div").animate({
        left: "250px",
      });
    } else {
      alert("Hello World! Number: " + count);
    }
  });

  $("#button-hide").on("click", () => {
    $(".w3-content").hide();
  });

  $("#button-show").on("click", () => {
    $(".w3-content").show();
  });
});
