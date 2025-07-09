document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.form');
    const btn = document.querySelector('.btn');

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const description = document.getElementById("description").value;

        try {
            const response = fetch("", 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({description})            )
            
        } catch (error) {
            console.error("Erro ao obter o valor do campo de texto:", error);
            
        } finally {

        }
    });

    function setLoading(isLoading) {

        btn.innerHTML = isLoading ? "Gerando Background..." : "Gerar Background";

    }



});