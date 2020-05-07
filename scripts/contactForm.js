$(document).ready(function () {
  $(".contact-form-btn").click(function (event) {
    var email = $(".email").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      // statusElm.append("<div>email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>email is not valid, please try again.</div>");
    }
    if (message.length > 1) {
      // statusElm.append("<div>message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>message must be more than 1 character.</div>");
    }
  });
});
