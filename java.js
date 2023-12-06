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

    const headers = ["School", "Program/Major", "Type", "Year"];
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
            const key = header === "Type" ? "type(AA,BA,BS,MS,etc.)" : (header === "Year" ? "year conferred" : header.replace(/\s+/g, '_').toLowerCase());
            const cellValue = degree.degree[key];
            cell.appendChild(document.createTextNode(cellValue));
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    dataDiv.innerHTML = "";
    dataDiv.appendChild(table);
}
