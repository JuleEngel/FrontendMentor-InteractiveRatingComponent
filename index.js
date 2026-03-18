
document.getElementById("rating-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const checked = document.querySelector('input[name="rating"]:checked');
    if (!checked) {
        console.log("Nicht gesendet");
    }
    else {
        document.getElementById("rating-note").textContent = checked.value;
        document.getElementById("rating-box").style.display = 'none';
        document.getElementById("thank-you-box").classList.remove('hidden');
    }
});