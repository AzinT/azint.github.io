// smooth scrolling effect
$(function () {
  var currentHash = "#initial_hash";
  $(document).scroll(function () {
    $(".anchor_tags").each(function () {
      var top = window.pageYOffset;
      var distance = top - $(this).offset().top;
      var hash = $(this).attr("href");
      // 30 is an arbitrary padding choice,
      // if you want a precise check then use distance===0
      if (distance < 30 && distance > -30 && currentHash != hash) {
        window.location.hash = hash;
        currentHash = hash;
      }
    });
  });
});
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      $("nav ul li a").removeClass("active");
      // $("nav ul li a[href=#' + id + ']')").addClass("active");

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
        //   function () {
        //     // Add hash (#) to URL when done scrolling (default click behavior)
        //     window.location.hash = hash;
        //   }
      );
    } // End if
  });
});
