const currDate = document.getElementById("currDate");
const dateOfBirth = document.getElementById("DOB");
const calcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const ageText = document.getElementById("age");

// Display today's date
currDate.innerText = `Hello ! Today's Date is: ${new Date().toLocaleDateString('en-US')}`;

// Calculate and display age
calcAge.addEventListener("click", () => {
    const birthDate = new Date(dateOfBirth.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
    }

    displayAge.style.visibility = "visible";
    ageText.innerText = `You are ${age} years old.`;
});