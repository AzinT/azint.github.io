$(document).ready(function () {
  $(".contact-form-btn").click(function (event) {
    var email = $(".email").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>email is not valid</div>");
    }
    if (message.length > 2) {
      statusElm.append("<div>message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>message is not valid</div>");
    }
  });
});
