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

//check if already has a referral link
const referralLink = localStorage.getItem("myReferralLink");
if (referralLink) {
  document.getElementById("referralInputContainer").classList.add("hidden");
  document.getElementById("referralResultDiv").classList.remove("hidden");
  document.getElementById("referralResult").value = referralLink;
  document.getElementById("refBtn").classList.add("hidden");
  document.getElementById("referralResult").readOnly = true;
  document.getElementById("shareDiv").classList.remove("hidden");
}



function generateReferralLink() {
  const msisdn = document.getElementById("userRefNum").value.trim();

  const isValid = /^01[0-9]{9}$/.test(msisdn);
  if (!isValid) {
    alert("Please enter a valid number.");
    return;
  }

  // Encode with Base64
  const encoded = btoa(msisdn);

  const referralLink = `${window.location.origin}/?ref=${encoded}`;

  localStorage.setItem("myReferralLink", referralLink);

  document.getElementById("referralInputContainer").classList.add("hidden");
  document.getElementById("referralResultDiv").classList.remove("hidden");
  document.getElementById("refBtn").classList.add("hidden");
  document.getElementById("referralResult").value = referralLink;
  document.getElementById("shareDiv").classList.remove("hidden");
}



function copyLink() {
  const referralLink = document.getElementById("referralResult").value;

  // copy the link to the clipboard
  navigator.clipboard.writeText(referralLink)
    .then(() => {
      Toastify({
        text: "Copied to clipboard!",
        duration: 3000,
        gravity: "top", 
        position: "right", 
        backgroundColor: "#007bff",
      }).showToast();
    
    })
    .catch(err => {
      console.error("Failed to copy link: ", err);
    });
}


function shareOnFacebook() {
  const link = document.getElementById("referralResult").value;
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
  window.open(url, "_blank");
}

function shareOnWhatsApp() {
  const link = document.getElementById("referralResult").value;
  const message = `জিতে নিন ১০ টাকা ক্যাশ ইন! আপনার ক্যাশ ইন পেতে নিচের লিঙ্কে ক্লিক করুন: ${link}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function shareOnTelegram() {
  const link = document.getElementById("referralResult").value;
  const message = `জিতে নিন ১০ টাকা ক্যাশ ইন! আপনার ক্যাশ ইন পেতে নিচের লিঙ্কে ক্লিক করুন: ${link}`;
  const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// // WhatsApp Direct Message to a specific number
// function shareToWhatsAppFriend() {
//   const link = document.getElementById("referralResult").value;
//   const phone = prompt("Enter your friend's WhatsApp number (with country code):");
//   if (!phone) return;

//   const message = `Join this awesome game using my referral link: ${link}`;
//   const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
// }

// function shareToMessenger() {
//   const link = document.getElementById("referralResult").value;
//   const url = `fb-messenger://share/?link=${encodeURIComponent(link)}`;
//   window.open(url);
// }

// function shareToTelegramUser() {
//   const link = document.getElementById("referralResult").value;
//   const username = prompt("Enter your friend's Telegram username:");
//   if (!username) return;

//   const message = `Join this awesome game using my referral link: ${link}`;
//   const url = `https://t.me/${username}?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
// }
