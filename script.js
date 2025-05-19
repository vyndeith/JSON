document.getElementById('jsonFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            const container = document.getElementById('output');
            container.innerHTML = '';

            data.forEach(item => {
                const el = document.createElement(item.tag);
                el.className = `var${item.variant}`;
                el.textContent = item.text;
                container.appendChild(el);
            });
        } catch (error) {
            alert("Błąd w pliku JSON: " + error.message);
        }
    };

    reader.readAsText(file);
});