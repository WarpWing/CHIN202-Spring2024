document.addEventListener('DOMContentLoaded', function() {
    fetch('data/l6_vocab.csv')
    .then(response => response.text())
    .then(data => {
        // Split the CSV data into rows
        const rows = data.split('\n');

        // Iterate over each row (excluding the header row)
        for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(',');

            // Remove the quotation marks from each column
            const pinyin = columns[0].replace(/"/g, '');
            const shengci = columns[1].replace(/"/g, '');
            const translation = columns[2].replace(/"/g, '');

            // Populate the lists with data from the CSV
            document.getElementById('pinyin-list').innerHTML += `<li class="w3-padding-16">${pinyin}</li>`;
            document.getElementById('shengci-list').innerHTML += `<li class="w3-padding-16">${shengci}</li>`;
            document.getElementById('translation-list').innerHTML += `<li class="w3-padding-16">${translation}</li>`;
        }
    })
    .catch(error => console.log('Error fetching CSV file:', error));
});
