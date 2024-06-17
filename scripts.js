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

// Function to render content
function renderContent(sectionId, contentArray) {
    const section = document.querySelector(`#${sectionId} .content-list`);
    contentArray.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('content-item');
        div.innerHTML = `<img src="${item.image}" alt="${item.title}"><h3>${item.title}</h3>`;
        div.addEventListener('click', () => {
            window.location.href = `details.html?movieId=${item.id}`;
        });
        section.appendChild(div);
    });
}

// Render trending and recommended content
renderContent('trending', movies);
renderContent('recommended', movies);

document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let query = event.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        document.querySelector('#trending .content-list').innerHTML = '';
        document.querySelector('#recommended .content-list').innerHTML = '';
        renderContent('trending', filteredMovies);
        renderContent('recommended', filteredMovies);
    }
});
