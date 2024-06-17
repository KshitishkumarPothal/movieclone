const movies = [
    { id: 1, title: "Movie 1", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/1.jfif" },
    { id: 2, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/2.jfif" },
    { id: 3, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/3.jfif" },
    { id: 4, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/4.jfif" },
    { id: 5, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/5.jfif" },
    { id: 6, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/6.jfif" },
    { id: 7, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/7.jfif" },
    { id: 8, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/8.jfif" },
    { id: 9, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/9.jpeg" },
    { id: 10, title: "Movie 2", description: "The story of how social networks and instant messengers influence the life of a modern person. It has been several years since a 16-year-old teenager posted a photo of his girlfriend in the general chat, hoping to boast to friends. Now he has a happy adult life: work, friends, fiance Katya, who is about to marry him.", image: "pic/10.jfif" },

];


// Get movieId from URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movieId');

// Find the movie details
const movie = movies.find(m => m.id == movieId);

// Update the content details page
if (movie) {
    document.getElementById('content-title').textContent = movie.title;
    document.getElementById('content-image').src = movie.image;
    document.getElementById('content-description').textContent = movie.description;
}
