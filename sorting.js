// Initialize variables
let songs = [];

// Fetch the song data from Firebase
fetch('https://trial-5cb8c-default-rtdb.firebaseio.com/.json')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        // Extract songs from Firebase
        songs = Object.entries(data.songs || {}).map(([id, song]) => ({
            id,
            ...song
        }));

        // Initially render all songs
        renderSongs(songs);
    })
    .catch(error => console.error('Error fetching data: ', error));

// Function to render songs
function renderSongs(songsToRender) {
    const songListContainer = document.getElementById('songList');
    songListContainer.innerHTML = '';

    songsToRender.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song-item');
        songElement.innerHTML = `
            <h3>${song.title}</h3>
            <p>Artist: ${song.artist}</p>
            <p>Language: ${song.language}</p>
            <p>Duration: ${song.duration}</p>
            <audio controls>
                <source src="${song.location}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        `;
        songListContainer.appendChild(songElement);
    });
}

// Function to sort songs by language
function sortByLanguage() {
    const sortedSongs = [...songs].sort((a, b) => a.language.localeCompare(b.language));
    renderSongs(sortedSongs);
}

// Example usage: Call this function when a button is clicked
document.getElementById('sortLanguageButton').addEventListener('click', sortByLanguage);
