document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchDataButton");
  
    fetchDataButton.addEventListener("click", fetchData);
  
    function fetchData() {
      const jsonFileUrl = "https://alee016.github.io/BUMet/";
  
      fetch(jsonFileUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          return response.json();
        })
        .then((data) => {
          console.log("Fetched Data:", data);
  
          data.degrees.forEach((degree) => {
            console.log(`Degree from ${degree.school}: ${degree.type} in ${degree.program}`);
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });



