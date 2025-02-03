const apiKey = '8dnt7xd2eyrOkeI0GPYNn7xZftw6xlDjeMuC2xwF'; // Your API Key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const nasaImageElement = document.getElementById('nasa-image');
const descriptionElement = document.getElementById('image-description');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.url;
        const imageDescription = data.explanation;

        nasaImageElement.src = imageUrl;
        descriptionElement.textContent = imageDescription;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        descriptionElement.textContent = 'Failed to load image. Please try again later.';
    });
