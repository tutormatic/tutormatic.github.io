document.getElementById("sendEmailButton").addEventListener("click", sendEmail);
function sendEmail() {
    const language = document.getElementById('langName').value;
    const name = document.getElementById('firstName').value;
    if (language !== "") {
        if (name !== "") {
            if (language.toUpperCase() !== "HTML" && language.toUpperCase() !== "CSS" && language.toUpperCase() !== "JAVASCRIPT" && language.toUpperCase() !== "PYTHON" && language.toUpperCase() !== "NODE.JS" && language.toUpperCase() !== "SKRIPT") {
                alert("The language: " + language + " isn't available or isn't written correctly.");
                return false;
            }
            var subject = encodeURIComponent("Tutoring");
            var body = encodeURIComponent("Hello, my name is " + name + " and I'm interested in the tutoring for the programming language called " + language + ".");
            window.location.href = "mailto:tutormatic1@gmail.com?subject=" + subject + "&body=" + body;
        } else {
            alert("Please write your name.");
            return false;
        }
    } else {
        alert("Please write a programming language.");
        return false;
    }
}