document.addEventListener('DOMContentLoaded', function () {
  // Attach a click event listener to a button with id 'fetchButton'
  document.getElementById('fetchButton').addEventListener('click', function () {
    // Replace 'YOUR_JSON_URL' with the actual URL where your JSON file is hosted
    const jsonUrl = 'https://alee016.github.io/BUMet/';

    // Create a fetch request to the JSON file
    fetch(jsonUrl)
      .then(response => {
        // Check if the fetch request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Process the returned JSON data
        console.log('Degrees Data:', data);

        // Replace this part with your specific processing logic
        // For example, you can display the degrees information on the webpage
        displayDegrees(data);
      })
      .catch(error => {
        console.error('Fetch Error:', error);
      });
  });

  // Function to display degrees information (replace this with your UI logic)
  function displayDegrees(degrees) {
    // Example: Displaying degrees in the console
    degrees.forEach(degree => {
      console.log(`School: ${degree.school}, Program: ${degree.program}, Type: ${degree.type}, Year Conferred: ${degree.yearConferred}`);
    });
  }
});


