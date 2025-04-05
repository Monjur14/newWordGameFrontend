const loginButton = document.getElementById('login_btn');



function submitPhone() {
    const phone = document.getElementById('numberInput').value.trim();

    // Regular expression for BD phone number starting with 01 and 11 digits total
    const bdPhoneRegex = /^01[0-9]{9}$/;

    if (!bdPhoneRegex.test(phone)) {
        alert("Invalid phone number!");
        return;
    }

    // Save to localStorage
    localStorage.setItem("msisdn", phone);
    window.location.href = '/pages/levels/level1/level1.html';
}