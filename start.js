const urlParams = new URLSearchParams(window.location.search);
const selectedPlan = urlParams.get('plan');
const planInput = document.getElementById('plan');
if (selectedPlan) {
    planInput.value = selectedPlan;
}
console.log(urlParams)
function email() {
    window.location.href = "mailto:tutormatic1@gmail.com";
}
function copy(text) {
navigator.clipboard.writeText(text)
    .then(() => {
    console.log("Text copied to clipboard: ", text);
    })
    .catch((error) => {
    console.error("Error copying text to clipboard: ", error);
    });
}