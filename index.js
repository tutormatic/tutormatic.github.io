document.getElementById("sendEmailButton").addEventListener("click", sendEmail);
function sendEmail() {
    const language = document.getElementById('langName').value;
    const name = document.getElementById('firstName').value;
    const plan = document.getElementById('plan').value;
    if (language !== "") {
        if (name !== "") {
            if (plan !== "") {
                if (language.toUpperCase() !== "HTML" && language.toUpperCase() !== "CSS" && language.toUpperCase() !== "JAVASCRIPT" && language.toUpperCase() !== "PYTHON" && language.toUpperCase() !== "NODE.JS" && language.toUpperCase() !== "SKRIPT") {
                    alert("The language: " + language + " isn't available or isn't written correctly.");
                    return false;
                }
                if (plan.toUpperCase() !== "NORMAL" && plan.toUpperCase() !== "FULL WEB") {
                    alert("You plan does not exist or is not written correctly.");
                    return false;
                }
                var subject = encodeURIComponent("Tutoring for " + name);
                var body = encodeURIComponent("Hello, I'm " + name + " and I would like to have a tutoring in the programming language " + language + " and I also choosed the " + plan.toLowerCase() + " plan.\n" +  name);
                window.location.href = "mailto:tutormatic1@gmail.com?subject=" + subject + "&body=" + body;
            } else {
                alert("Please select a plan.");
                return false;
            }
        } else {
            alert("Please write your name.");
            return false;
        }
    } else {
        alert("Please write a programming language.");
        return false;
    }
}
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function selectPlan(plan) {
    if (plan === 'Normal') {
      console.log('Normal plan selected');
    } else if (plan === 'Web Full') {
      console.log('Web Full plan selected');
    }

    closePopup();
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}