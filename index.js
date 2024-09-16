document.addEventListener('deviceready', function() {
    // Hide splash screen and show home page after 3 seconds
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('home-page').style.display = 'block';
    }, 3000);

    document.getElementById('dropdown-button').addEventListener('click', function() {
        var menu = document.getElementById('dropdown-menu');
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('home-link').addEventListener('click', function() {
        document.getElementById('dropdown-menu').style.display = 'none';
    });

    document.getElementById('about-link').addEventListener('click', function() {
        alert('This app is made by Luv Thapa with JavaScript on 27 July 2024.');
        document.getElementById('dropdown-menu').style.display = 'none';
    });

    document.getElementById('theme-link').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        document.getElementById('dropdown-menu').style.display = 'none';
    });

    var movies = [
        { title: "Merry Christmas", img: "img/movie1.jpg", rating: "6.9", type: "Drama, Mystery, Thriller", director: "Sriram Raghavan", releaseDate: "12 January 2024", info: "Two strangers meet on a fateful Christmas Eve. A night of delirious romance turns into a nightmare. Revealing anything more would be a crime.", watch: "NETFLIX" },
        { title: "The Mummy Murders", img: "img/movie2.jpg", rating: "3.7", type: "Horror", director: "Colin Bressler", releaseDate: "2024-01-02", info: "A lot of people have recently gone missing in Alexis' hometown of San Antonio, Texas. Alexis is a top reporter for the local news station, and there have been rumors that a serial killer is responsible for those missing.", watch: "Amazon Prime" },
        // Add more movie data here
    ];

    var webSeries = [
        { title: "Squid Game", img: "img/webseries1.jpg", rating: "8.0", type: "Action, Drama, Mystery", director: "Hwang Dong-hyuk", releaseDate: "2021-09-17", info: "Hundreds of cash-strapped players accept a strange invitation...", watch: "Netflix" },
        { title: "Mirzapur", img: "img/webseries2.jpg", rating: "8.5", type: "Action, Crime, Drama, Thriller", director: "Puneet Krishna", releaseDate: "2018-11-15", info: "A shocking incident at a wedding procession...", watch: "Amazon Prime" },
        // Add more web series data here
    ];

    var music = [
        { title: "Tauba Tauba", img: "img/song1.jpg", link: "https://open.spotify.com/track/16kiQQ4BoLHDyj5W2fkfNK" },
        { title: "Distant Echoes", img: "img/song2.jpg", link: "https://open.spotify.com/track/2DgL722jfzULRS4tGo5OEq" },
        // Add more music data here
    ];

    var gkHeadlines = [
        "Headline 1: Important news 2024.",
        "Headline 2: Another important news 2024.",
        // Add more headlines here
    ];

    var hollywoodMovies = [
        { title: "Hollywood Movie 1", img: "img/hollywood_movie1.jpg", rating: "7.5", type: "Action, Thriller", director: "Director Name", releaseDate: "2024-05-01", info: "An action-packed Hollywood movie.", watch: "Netflix" },
        { title: "Hollywood Movie 2", img: "img/hollywood_movie2.jpg", rating: "8.0", type: "Drama", director: "Director Name", releaseDate: "2024-06-15", info: "A gripping Hollywood drama.", watch: "HBO Max" },
        // Add more Hollywood movie data here
    ];

    var hollywoodWebSeries = [
        { title: "Hollywood Web Series 1", img: "img/hollywood_webseries1.jpg", rating: "9.0", type: "Sci-Fi, Adventure", director: "Director Name", releaseDate: "2024-04-10", info: "An exciting Hollywood web series.", watch: "Disney+" },
        { title: "Hollywood Web Series 2", img: "img/hollywood_webseries2.jpg", rating: "8.5", type: "Drama, Mystery", director: "Director Name", releaseDate: "2024-07-20", info: "A thrilling Hollywood web series.", watch: "Amazon Prime" },
        // Add more Hollywood web series data here
    ];

    function populateThumbnails() {
        var movieThumbnails = document.getElementById('movie-thumbnails');
        movies.forEach(function(movie) {
            var img = document.createElement('img');
            img.src = movie.img;
            img.alt = movie.title;
            img.addEventListener('click', function() {
                showPopup(movie);
            });
            movieThumbnails.appendChild(img);
        });

        var webSeriesThumbnails = document.getElementById('web-series-thumbnails');
        webSeries.forEach(function(series) {
            var img = document.createElement('img');
            img.src = series.img;
            img.alt = series.title;
            img.addEventListener('click', function() {
                showPopup(series);
            });
            webSeriesThumbnails.appendChild(img);
        });

        var musicThumbnails = document.getElementById('music-thumbnails');
        music.forEach(function(song) {
            var img = document.createElement('img');
            img.src = song.img;
            img.alt = song.title;
            img.addEventListener('click', function() {
                window.open(song.link, '_blank');
            });
            musicThumbnails.appendChild(img);
        });

        var gkHeadlinesDiv = document.getElementById('gk-headlines');
        gkHeadlines.forEach(function(headline) {
            var p = document.createElement('p');
            p.textContent = headline;
            gkHeadlinesDiv.appendChild(p);
        });

        // Populate Hollywood Movies
        var hollywoodMovieThumbnails = document.getElementById('hollywood-movie-thumbnails');
        hollywoodMovies.forEach(function(movie) {
            var img = document.createElement('img');
            img.src = movie.img;
            img.alt = movie.title;
            img.addEventListener('click', function() {
                showPopup(movie);
            });
            hollywoodMovieThumbnails.appendChild(img);
        });

        // Populate Hollywood Web Series
        var hollywoodWebSeriesThumbnails = document.getElementById('hollywood-web-series-thumbnails');
        hollywoodWebSeries.forEach(function(series) {
            var img = document.createElement('img');
            img.src = series.img;
            img.alt = series.title;
            img.addEventListener('click', function() {
                showPopup(series);
            });
            hollywoodWebSeriesThumbnails.appendChild(img);
        });
    }

    function showPopup(item) {
        var popup = document.getElementById('popup');
        document.getElementById('popup-title').textContent = item.title;
        document.getElementById('popup-rating').textContent = "Rating: " + item.rating;
        document.getElementById('popup-type').textContent = "Genre: " + item.type;
        document.getElementById('popup-director').textContent = "Director: " + item.director;
        document.getElementById('popup-releaseDate').textContent = "Release Date: " + item.releaseDate;
        document.getElementById('popup-info').textContent = "Info: " + item.info;
        document.getElementById('popup-watch').textContent = "Watch on: " + item.watch;
        popup.style.display = 'block';
    }

    document.getElementById('popup-close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    populateThumbnails();
});
