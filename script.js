e//     Picture change buttons

const login2 = document.getElementById("login2");
const sign_up2 = document.getElementById("sign_up2");
let count = 0;

//       Picture change button functions
//                 Start

function back() {
  let body = document.getElementById("back");
  let front = document.getElementById("front");
  front.style.display = "flex";
  body.style.display = "none";
  document.querySelector("title").innerHTML = "LOGIN";
}
function front() {
  let body = document.getElementById("front");
  let back = document.getElementById("back");
  body.style.display = "none";
  back.style.display = "flex";
  document.querySelector("title").innerHTML = "SIGN UP";
}

sign_up2.addEventListener("click", front);
login2.addEventListener("click", back);

//            End !

//       New inputs

let create_name = document.getElementById("n_name");
let create_email = document.getElementById("n_email");
let create_password = document.getElementById("n_password");
const create_acc = document.getElementById("sign_up");

//       New inputs Functions

create_password.addEventListener("keypress", function (event) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
});
function signup() {
  let name = create_name.value;
  let email = create_email.value;
  let password = create_password.value;
  if (name == "" || email == "" || password == "") {
    Swal.fire({
      text: "Please fill all the fields",
      icon: "warning",
    });
  } else {
    if (localStorage.getItem(email) == email) {
      Swal.fire({
        text: "Email already exists",
        icon: "warning",
      });
    } else {
      if (localStorage.getItem(name)) {
        Swal.fire({
          text: "Name already exists. Please choose a different Name.",
          icon: "warning",
        });
      } else {
        const user = {
          name: name,
          email: email,
          password: password,
          check: true,
        };
        localStorage.setItem(name, JSON.stringify(user));
        Swal.fire({
          title: "Account created successfully",
          icon: "success",
        });
        setInterval(function () {
          window.location.href = "Quiz 💡/Quiz.html";
        }, 2000);
      }
    }
  }
}

create_acc.addEventListener("click", signup);

//       Old inputs

let check_name = document.getElementById("c_name");
let check_email = document.getElementById("c_mail");
let check_password = document.getElementById("c_password");
const login_btn = document.getElementById("login_btn");

login_btn.addEventListener("click", () => {
  let Names = check_name.value;
  let email = check_email.value;
  let password = check_password.value;
  let local = JSON.parse(localStorage.getItem(Names));
  if (Names == "" || email == "" || password == "") {
    Swal.fire({
      text: "Please fill all the fields",
      icon: "warning",
    });
  } else{
    if (local == null) {
      Swal.fire({
        text: "User not found",
        icon: "warning",
      });
    } else {
      if (local.email == email) {
        if ( local.password ==  password) {
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
          });
          setInterval(function () {
            window.location.href = "Quiz 💡/Quiz.html";
          }, 2000);
        } else {
          Swal.fire({
            text: "Incorrect password",
            icon: "warning",
          });
        }
      } else {
        Swal.fire({
          text: "Incorrect email",
          icon: "warning",
        });
      }
    }
  }
});


