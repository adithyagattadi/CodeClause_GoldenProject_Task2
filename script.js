function validateForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    const age = document.getElementById("age");
    const pnumber = document.getElementById("pnumber");
    const state = document.getElementById("state");
    const address = document.getElementById("address");
    const fnameErr = document.getElementById("fname-error");
    const lnameErr = document.getElementById("lname-error");
    const emailErr = document.getElementById("email-error");
    const passwordErr = document.getElementById("password-error");
    const repasswordErr = document.getElementById("repassword-error");
    const ageErr = document.getElementById("age-error");
    const pnumberErr = document.getElementById("pnumber-error");
    const stateErr = document.getElementById("state-error");
    const addressErr = document.getElementById("address-error");

    if (fname.value.trim() === "") {
        fname.classList.add("error");
        fnameErr.textContent = "POOR";
        isValid = false;
    } else {
        fname.classList.remove("error");
        fnameErr.textContent = "";
    }

    if (lname.value.trim() === "") {
        lname.classList.add("error");
        lnameErr.textContent = "POOR";
        isValid = false;
    } else {
        lname.classList.remove("error");
        lnameErr.textContent = "";
    }

    if (email.value.trim() === "") {
        email.classList.add("error");
        emailErr.textContent = "POOR";
        isValid = false;
    } else {
        email.classList.remove("error");
        emailErr.textContent = "";
    }

    if (password.value.trim() === "") {
        password.classList.add("error");
        passwordErr.textContent = "POOR";
        isValid = false;
    } else {
        password.classList.remove("error");
        passwordErr.textContent = "";
    }

    if (repassword.value.trim() === "") {
        password.classList.add("error");
        repasswordErr.textContent = "POOR OR MISMATCH";
        isValid = false;
    } else {
        repassword.classList.remove("error");
        repasswordErr.textContent = "";
    }

    if (age.value.trim() === "") {
        age.classList.add("error");
        ageErr.textContent = "POOR";
        isValid = false;
    } else {
        age.classList.remove("error");
        ageErr.textContent = "";
    }

    if (address.value.trim() === "") {
        address.classList.add("error");
        addressErr.textContent = "POOR";
        isValid = false;
    } else {
        address.classList.remove("error");
        addressErr.textContent = "";
    }

    if (pnumber.value.trim() === "") {
        pnumber.classList.add("error");
        pnumberErr.textContent = "POOR";
        isValid = false;
    } else {
        pnumber.classList.remove("error");
        pnumberErr.textContent = "";
    }

    if (state.value.trim() === "") {
        state.classList.add("error");
        stateErr.textContent = "POOR";
        isValid = false;
    } else {
        state.classList.remove("error");
        stateErr.textContent = "";
    }
}