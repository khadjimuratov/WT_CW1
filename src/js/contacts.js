const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const formInputs = document.getElementsByClassName("form-control");
const data = { name: "", email: "", phone: "", msg: "" };
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let el of formInputs) {
    const error = el.children[1];
    const input = el.children[2];
    const value = input.value.trim();
    switch (input.name) {
      case "name":
        if (!value) {
          error.classList.remove("d-none");
          error.innerHTML = "Name can't be EMPTY";
          break;
        }
        error.classList.add("d-none");
        error.innerHTML = "";
        data.name = value;
        break;
      case "email":
        if (!value) {
          error.classList.remove("d-none");
          error.innerHTML = "Email can't be EMPTY";
          return;
        }
        if (!value.match("@")) {
          error.classList.remove("d-none");
          error.innerHTML = "Invalid Email Address";
          return;
        }
        if (value.match(" ")) {
          error.classList.remove("d-none");
          error.innerHTML = "Invalid Email Address";
          return;
        }
        error.classList.add("d-none");
        error.innerHTML = "";
        data.email = value;
        break;
      case "phone":
        if (!value) {
          error.classList.remove("d-none");
          error.innerHTML = "Phone Number can't be EMPTY";
          return;
        }
        if (!Number(value)) {
          error.classList.remove("d-none");
          error.innerHTML = "Phone Number must be type of NUMBER";
          return;
        }
        error.classList.add("d-none");
        error.innerHTML = "";
        data.phone = value;
        break;
      case "msg":
        if (!value) {
          error.classList.remove("d-none");
          error.innerHTML = "Please Enter Your Message Text";
          return;
        }

        error.classList.add("d-none");
        error.innerHTML = "";
        data.msg = value;
        break;
    }
  }
  console.log(data);
});
