document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const charCounter = document.getElementById("char-counter");

    searchInput.addEventListener("input", function() {
        const currentLength = searchInput.value.length;
        const remainingLength = 30 - currentLength;
        charCounter.textContent = remainingLength + " / 30";
    });
});
