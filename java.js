document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('main.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            processJSONData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function processJSONData(data) {
    console.log('Processing data:', data);
    document.write(data)

}
