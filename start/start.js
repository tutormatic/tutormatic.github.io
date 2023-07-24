const params = new URLSearchParams(window.location.search);
const pL = params.get("pL");

const proLang = document.getElementById("programmingLanguage");
proLang.value = pL;
document.getElementById("programmingLanguage").addEventListener("input", function() {
    const programmingLanguage = this.value.toLowerCase();
    const price = document.getElementById("price");
    const teller = document.getElementById("teller");
    const paymentsButton = document.getElementById("paymentsButton");
    
    if (programmingLanguage === "html" || programmingLanguage === "css" || programmingLanguage === "javascript") {
        teller.innerHTML = "<p>By choosing HTML, CSS or Javascript your tutor will learn you the 3 programming languages used for web developement.</p>"
        price.innerHTML = "<p>20$ USD</p>";
        paymentsButton.addEventListener("click", function() {
            window.location.href = "https://buy.stripe.com/bIY8yE5Fy0LD48w14b";
        });
    } else if (programmingLanguage === "skript" || programmingLanguage === "python" || programmingLanguage === "node.js") {
        teller.innerHTML = "";
        price.innerHTML = "<p>15$ USD</p>";
        paymentsButton.addEventListener("click", function() {
            window.location.href = "https://buy.stripe.com/14k2agaZScul48w4gm";
        });
    } else {
        teller.innerHTML = "";
        price.innerHTML = "";
    }
});