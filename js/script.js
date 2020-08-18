function bMenu() {
  const menu = document.getElementById("b-menu");
  menu.addEventListener("click", function () {
    const hide = document.getElementById("menu");
    console.log(hide);
    hide.classList.toggle("hide");
  });
}

function moreDetails() {
  const button = document.getElementById("more-details");
  button.addEventListener("click", function () {
    const text = document.getElementById("hide-text");
    text.classList.toggle("hide-text");
  });
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

function getInputval(id) {
  return document.getElementById(id).value;
}

function submitForm(e) {
  e.preventDefault();

  let name = getInputval("p-name");
  let email = getInputval("p-email");
  let message = getInputval("text-area");

  var template_params = {
    reply_to: email,
    from_name: name,
    to_name: "Dan George",
    message_html: message,
  };

  var service_id = "default_service";
  var template_id = "webdevprofile";
  emailjs.send(service_id, template_id, template_params);

  document.getElementById("contactForm").reset();
}

bMenu();
moreDetails();
