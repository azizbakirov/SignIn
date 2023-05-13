// Sign In
const signs = document.querySelector(".signs");
const pass2 = document.querySelector("#inp3");
const signIns = document.querySelector(".sign");
const login = document.querySelector(".login");
const account = document.querySelector(".account");
const logins = document.querySelector(".logins");
const inputs = document.querySelector(".inputs");
const pass_inp = document.querySelector("#pass_login");
const lastName = document.querySelector(".inp_name");

// objs
const names = document.querySelector(".name");
const emails = document.querySelector(".email_name");
const date = document.querySelector(".date");
const passwords = document.querySelector(".password");
const upload = document.querySelector(".upload");
const img = document.querySelector(".upload_img");
const logos = document.querySelector(".logos");

const sign = {
  name: "",
  email: "",
  pass1: "",
  pass2: "",
  image: "",
};


signs.addEventListener("click", (e) => {
  e.preventDefault();

  signs.style.backgroundColor = "#355b3e";
  signs.style.color = "#fff";

  let myName = lastName.value;
  let email = inp1.value;
  let pass1 = inp2.value;
  let pass2 = inp3.value;
  let uploadImg = upload.value;



  sign.name = myName;
  sign.email = email;
  sign.pass1 = pass1;
  sign.pass2 = pass2;
  sign.image = uploadImg;

  if (
    sign.email.length === 0 ||
    sign.pass1.length === 0 ||
    sign.pass2.length === 0
  ) {
    console.log("xato");
  } else if (
    sign.email.includes("@") &&
    sign.pass1.length > 6 &&
    sign.pass2.length > 6
  ) {
    console.log(sign);
    if (sign.pass1 === sign.pass2) {
      console.log("teng");
      login.classList.toggle("active");
      signIns.classList.toggle("active");
    } else {
      console.log("teng emas");
    }
  } else {
    console.log("eror");
  }
});

logins.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('clikc');
  let email = inputs.value;
  let password = pass_inp.value;
  login.classList.remove("active");

  if (sign.email == email && sign.pass2 === password) {
    console.log("email togri");
    account.classList.toggle("active");
    login.classList.toggle("active");
    names.innerHTML = sign.name;
    emails.innerHTML = sign.email;
    passwords.innerHTML = sign.pass2;
    img.src = sign.image;
  } else {
    console.log("notogri");
  }
});


