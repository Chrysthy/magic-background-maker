document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.form');
    const btn = document.querySelector('.btn');

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const description = document.getElementById("description").value;
    });

    function setLoading(isLoading) {

        btn.innerHTML = isLoading ? "Gerando Background..." : "Gerar Background";

    }



});