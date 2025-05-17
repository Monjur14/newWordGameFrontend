const loginButton = document.getElementById("login_btn");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.querySelector(".closeicon");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  menu.classList.remove("hidden");
});
closeIcon.addEventListener("click", () => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  menu.classList.add("hidden");
});

document.getElementById("openfaq").addEventListener("click", () => {
  menu.classList.add("hidden");
  closeIcon.classList.add("hidden");
  menu.classList.add("hidden");
  hamburger.classList.remove("hidden");
  document.getElementById("faq").classList.remove("hidden");
});

document.getElementById("closefaq").addEventListener("click", () => {
  document.getElementById("faq").classList.add("hidden");
});

document.getElementById("openmodal2").addEventListener("click", () => {
  menu.classList.add("hidden");
  closeIcon.classList.add("hidden");
  menu.classList.add("hidden");
  hamburger.classList.remove("hidden");
  document.getElementById("modal2").classList.remove("hidden");
});

document.getElementById("closemodal2").addEventListener("click", () => {
  document.getElementById("modal2").classList.add("hidden");
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get("ref");

  if (ref) {
    try {
      const decodedMsisdn = atob(ref);

      if (/^01[3-9]\d{8}$/.test(decodedMsisdn)) {
        if (!sessionStorage.getItem("referredBy")) {
          sessionStorage.setItem("referredBy", decodedMsisdn);
          // console.log("Referral saved:", decodedMsisdn);
        }
      } else {
        console.warn("Invalid MSISDN format");
      }
    } catch (e) {
      console.error("Invalid referral code:", e);
    }
  }
});

// User Login with MSISDN - Payment Feature should be implemented later
function submitPhone() {
  const phone = document.getElementById("numberInput").value.trim();
  const bdPhoneRegex = /^01[0-9]{9}$/;
  const referredBy = sessionStorage.getItem("referredBy");

  if (!bdPhoneRegex.test(phone)) {
    alert("Invalid phone number!");
    return;
  }

  if (phone === referredBy) {
    alert("You cannot refer yourself!");
    return;
  }

  fetch("http://localhost:5000/playerlogin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msisdn: phone,
      referred_by: referredBy,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      // Save to localStorage
      localStorage.setItem("msisdn", phone);

      if (referredBy) {
        fetch("http://localhost:5000/save-referral", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referrer_msisdn: referredBy,
            referred_msisdn: phone,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log("Referral saved:", data))
          .catch((err) => {
            console.error("Referral error:", err);
          });
      }

      window.location.href = "/pages/levels/level1/level1.html";
    })
    .catch((err) => {
      console.error("Login error:", err);
    });
}
