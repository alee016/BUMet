document.addEventListener('click', handleClick);

function handleClick() {
  fetchData().then(processData).catch(handleError);
}

function fetchData() {
  return fetch('main.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error!' + error);
      }
      return response.json();
    });
}

function processData(data) {
  console.log('Degrees Information:', data);
}

function handleError(error) {
  console.error('Error fetching data:', error.message);
}




