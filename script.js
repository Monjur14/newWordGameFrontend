const loginButton = document.getElementById("login_btn");

function submitPhone() {
  const phone = document.getElementById("numberInput").value.trim();
  const bdPhoneRegex = /^01[0-9]{9}$/;
  const referredBy = sessionStorage.getItem("referredBy");

  if (!bdPhoneRegex.test(phone)) {
    alert("Invalid phone number!");
    return;
  }

 if(phone === referredBy){
  alert("You cannot refer yourself!");
  return;
 } 
 window.location.href = "/pages/levels/level1/level1.html"; //should be removed later

  // fetch("http://localhost:5000/playerlogin", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     msisdn: phone,
  //     referred_by: referredBy,
  //   }),
  // })
  //   .then((res) => {
  //     res.json();
  //     window.location.href = "/pages/levels/level1/level1.html";
  //   })
  //   .then((data) => console.log("Referral saved:", data))
  //   .catch((err) => {
  //     console.error("Referral error:", err);
  //   });

  // Save to localStorage
  localStorage.setItem("msisdn", phone);
  const msisdn = localStorage.getItem("msisdn");

  if (referredBy) {
    fetch("http://localhost:5000/save-referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        referrer_msisdn: referredBy,
        referred_msisdn: msisdn,
      }),
    })
      .then((res) => {
        res.json();
        // window.location.href = "/pages/levels/level1/level1.html";
      })
      .then((data) => console.log("Referral saved:", data))
      .catch((err) => {
        console.error("Referral error:", err);
      });
  }
  // else {
  //   window.location.href = "/pages/levels/level1/level1.html";
  // }
}
