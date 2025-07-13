
function sortList() {
    const container = document.getElementById("ranking-container");
    const cards = Array.from(container.getElementsByClassName("card"));
    cards.sort((a, b) => {
        return a.dataset.rank - b.dataset.rank;
    });
    cards.reverse().forEach(card => container.appendChild(card));
}
