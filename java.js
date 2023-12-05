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
            alert("Error " + error);
            console.error('Error:', error);
        });

}



function processJSONData(data) {
  	let degrees = data.my_college_degrees;
  
    let dataDiv = document.getElementById("data");

    const table = document.createElement("table");

    const headers = Object.keys(data.my_college_degrees[0].degree);
    const headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
  

    degrees.forEach(degree => {
        const row = document.createElement("tr");

        headers.forEach(header => {
            const cell = document.createElement("td");
            cell.appendChild(document.createTextNode(degree.degree[header]));
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

  console.log(dataDiv)
    dataDiv.innerHTML = "";
    dataDiv.appendChild(table);
}
