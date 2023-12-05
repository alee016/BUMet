document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('main.json')
        .then(response => {
            alert("Response");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            alert("Data");
            console.log('Data:', data);
            processJSONData(data);
        })
        .catch(error => {
            alert("Error " + error);
            console.error('Error:', error);
        });

}

function processJSONData(data) {
    const dataDiv = document.getElementById("data");
    dataDiv.innerhtml = "<h2>College Degrees:</h2><pre>" + JSON.stringify(data, null, 2) + "</pre>";



}


