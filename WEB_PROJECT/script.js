let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
if (currentUser && !currentUser.id) {
    console.warn('currentUser loaded but missing id, logging out');
    currentUser = null;
    localStorage.removeItem('currentUser');
}

let selectedMovie = JSON.parse(localStorage.getItem('selectedMovie')) || null;
let selectedTheater = JSON.parse(localStorage.getItem('selectedTheater')) || null;
let selectedTiming = JSON.parse(localStorage.getItem('selectedTiming')) || null;
let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
let selectedDate = JSON.parse(localStorage.getItem('selectedDate')) || new Date().toISOString().split('T')[0];
let maxTickets = parseInt(localStorage.getItem('maxTickets')) || 6;

/* -------------------- STATIC THEATERS -------------------- */
const theatersData = [
    { name: 'Mythri Cinemas', timings: ['07:00 PM','10:00 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Hindi-2D','Telugu-2D'] },
    { name: 'Naaz Cinemas', timings: ['03:00 PM','06:00 PM','09:00 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Hindi-2D','English-2D'] },
    { name: 'Hollywood Bollywood Theaters', timings: ['02:30 PM','05:30 PM','08:30 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Hindi-2D','English-2D'] },
    { name: 'Plateno Cinemas', timings: ['04:00 PM','07:00 PM','10:30 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Telugu-2D','English-2D'] },
    { name: 'Capital Cinemas', timings: ['01:00 PM','04:30 PM','07:30 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Hindi-2D','Telugu-2D'] },
    { name: 'Cinepolis Power One Mall', timings: ['03:15 PM','06:15 PM','09:15 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['English-2D','Hindi-2D'] },
    { name: 'PVR Ripples Mall', timings: ['02:00 PM','05:00 PM','08:00 PM'], features: ['m-Ticket','Food & Beverage','Cancellation available'], languages: ['Telugu-2D','Hindi-2D'] }
];

/* -------------------- AUTH -------------------- */
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    fetch('/backend/api.php?action=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            window.location.href = data.isAdmin ? 'admin.html' : 'index.html';
        } else {
            message.textContent = data.error;
        }
    })
    .catch(err => console.error(err));
}

function logout() {
    localStorage.clear();
    window.location.href = 'login.html';
}

/* -------------------- MOVIES -------------------- */
function loadMovies() {
    fetch('/backend/api.php?action=movies')
    .then(r => r.json())
    .then(movies => {
        const div = document.getElementById('movies');
        div.innerHTML = '';
        movies.forEach(m => {
            div.innerHTML += `
                <div class="movie-card">
                    <img src="${m.poster_url || 'https://via.placeholder.com/200x300'}">
                    <p>${m.title}</p>
                    <p>Rating: ${m.rating || 'N/A'}</p>
                    <button onclick="selectMovie(${m.id})">Book</button>
                </div>
            `;
        });
    });
}

function selectMovie(id) {
    fetch(`/backend/api.php?action=movie_details&movie_id=${id}`)
    .then(r => r.json())
    .then(data => {
        selectedMovie = data.movie;
        localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
        window.location.href = 'movie_details.html';
    });
}

/* -------------------- MOVIE DETAILS -------------------- */
function loadMovieDetails() {
    const movie = JSON.parse(localStorage.getItem('selectedMovie'));
    if (!movie) return;

    fetch(`/backend/api.php?action=movie_details&movie_id=${movie.id}`)
    .then(r => r.json())
    .then(data => {
        const m = data.movie;
        document.getElementById('movieTitle').textContent = m.title;
        document.getElementById('movieDescription').textContent = m.description;
        document.getElementById('moviePoster').src = m.poster_url;
        document.getElementById('bookTicketBtn').onclick = () => {
            window.location.href = 'theater_selection.html';
        };
    });
}

/* -------------------- BOOKING -------------------- */
function confirmBooking() {
    const booking = {
        user_id: currentUser.id,
        movie_id: selectedMovie.id,
        theater_id: selectedTheater.id,
        timing: selectedTiming,
        date: selectedDate,
        seats: selectedSeats.join(', ')
    };

    fetch('/backend/api.php?action=book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
    })
    .then(r => r.json())
    .then(data => {
        if (data.success) {
            alert('Booking successful!');
            window.location.href = 'index.html';
        } else {
            alert(data.error);
        }
    });
}

/* -------------------- PAGE ROUTER -------------------- */
window.onload = function () {
    if (!currentUser) {
        if (!window.location.pathname.includes('login.html')) {
            window.location.href = 'login.html';
        }
        return;
    }

    if (window.location.pathname.includes('index.html')) loadMovies();
    if (window.location.pathname.includes('movie_details.html')) loadMovieDetails();
};
