// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "That's How You Feel", artist: "Drake", genre: "Rap" },
    { title: "We Paid", artist: "Lil Baby", genre: "Rap" },
    { title: "Too Comfortable", artist: "Future", genre: "Trap" },
    { title: "I Wish You Roses", artist: "Kali Uchis", genre: "Soul" },
    { title: "Beauty and a Beast", artist: "Justin Bieber", genre: "Pop" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Pop",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return Object.entries(guardians).map(([guardian, preferredGenre]) => {
    let playlist = songs.filter(track => track.genre === preferredGenre);

    return { guardian, playlist};
    })

}



// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


