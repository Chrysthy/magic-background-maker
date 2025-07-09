document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.form');
    const btn = document.querySelector('.btn');
    const htmlCode = document.querySelector('.html-code');
    const cssCode = document.querySelector('.css-code');
    const preview = document.querySelector('.preview-area')

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const description = document.getElementById("description").value;

        try {
            const response = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ description })
            });

            const data = await response.json();

            htmlCode.textContent = data.code;
            cssCode.textContent = data.style;

            preview.style.display = "block";
            preview.innerHTML = data.code;



        } catch (error) {
            console.error("Erro ao obter o valor do campo de texto:", error);

        } finally {

        }
    });

    function setLoading(isLoading) {

        btn.innerHTML = isLoading ? "Gerando Background..." : "Gerar Background";

    }



});