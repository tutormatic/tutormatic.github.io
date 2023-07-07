function check() {
    const name = document.getElementById("name").value;
    const discordNickname = document.getElementById("discordNickname").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const jobHereFor = document.getElementById("jobHereFor").value;
    const whyAppartTeam = document.getElementById("whyAppartTeam").value;
    const anythingElse = document.getElementById("anythingElse").value;

    if (name !== "") {
        if (discordNickname !== "") {
            if (email !== "") {
                if (email.includes("@")) {
                    if (age !== "") {
                        if (Number(age)) {
                            if (jobHereFor !== "") {
                                if (whyAppartTeam !== "") {
                                    const body = `Hey! I'm called ${name} and I would like to share with you my application. Name: ${name}, Discord nickname: ${discordNickname}, Email: ${email}, Age: ${age}, What job I'm here for: ${jobHereFor}, Why I want to be appart of your team: ${whyAppartTeam}, Anything else: ${anythingElse}`;
                                    window.location.href = "mailto:tutormatic1@gmail.com?subject=Apply: " + name + "&body=" + body;
                                } else {
                                    alert("Enter why you want to be appart of our team.");
                                    return false;
                                }
                            } else {
                                alert("Enter what job are you are here for.");
                                return false;
                            }
                        } else {
                            alert("Enter a number.");
                            return false;
                        }
                    } else {
                        alert("Enter an age.");
                        return false;
                    }
                } else {
                    alert("Enter a valid email.");
                    return false;
                }
            } else {
                alert("Enter a email.");
                return false;
            }
        } else {
            alert("Enter a Discord nickname.");
            return false;
        }
    } else {
        alert("Enter a name.");
        return false;
    }
}