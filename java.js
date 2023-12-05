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
  	//save in a variable array of degrees
  	let degrees = data.my_college_degrees;
  
  	//div where we will output result table
    let dataDiv = document.getElementById("data");

    // Create a table element
    const table = document.createElement("table");

    // Create table headers
  	//headers = ["school","program/major","type(AA,BA,BS,MS,etc.)","year conferred"]
    const headers = Object.keys(data.my_college_degrees[0].degree);
    const headerRow = document.createElement("tr");

  	//loop through each element in headers variable to create the th tag for it
    headers.forEach(headerText => {
      	//create th and append to created headerRow variable
        const header = document.createElement("th");
        header.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
  

    // Populate table with data
    degrees.forEach(degree => {
        const row = document.createElement("tr");

        headers.forEach(header => {
            const cell = document.createElement("td");
            cell.appendChild(document.createTextNode(degree.degree[header]));
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    // Clear previous content and append the new table
  console.log(dataDiv)
    dataDiv.innerHTML = "";
    dataDiv.appendChild(table);
}
