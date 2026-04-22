document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let message = document.getElementById("message");

    let nameError = name.nextElementSibling;
    let messageError = message.nextElementSibling;

    let isValid = true;

    nameError.innerText = "";
    messageError.innerText = "";

    if (name.value.trim() === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    } else if (name.value.trim().length < 2) {
        nameError.innerText = "Name must be at least 2 characters";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerText = "Message is required";
        isValid = false;
    } else if (message.value.trim().length < 10) {
        messageError.innerText = "Message must be at least 10 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});