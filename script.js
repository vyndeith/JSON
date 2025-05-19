document.getElementById('jsonFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const data = JSON.parse(reader.result);
        const content = document.getElementById('content');
        content.innerHTML = '';

        data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.text;
            div.className = item.style;
            content.appendChild(div);
        });
    };

    if (file) {
        reader.readAsText(file);
    }
});