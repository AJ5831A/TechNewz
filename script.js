const url = 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section?topic=TECHNOLOGY&section=CAQiW0NCQVNQZ29JTDIwdk1EZGpNWFlTQW1WdUdnSlZVeUlQQ0FRYUN3b0pMMjB2TURKdFpqRnVLaGtLRndvVFIwRkVSMFZVWDFORlExUkpUMDVmVGtGTlJTQUJLQUEqKggAKiYICiIgQ0JBU0Vnb0lMMjB2TURkak1YWVNBbVZ1R2dKVlV5Z0FQAVAB&limit=500&country=US&lang=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '522c2a2d5fmsh128c9b4839b0535p1deb9ajsnc50745ab5bd9',
        'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
    }
};

let currentCategory = 'news'; // Default category
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []; // Load bookmarks from localStorage

// This will fetch the news from the API and display them
async function fetchNews() {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        loader.style.display = "none";
        displayArticles(result.data); // Display the news articles
    } catch (error) {
        loader.style.display = "none";
        console.error("Error fetching news:", error);
    }
}

// Function to display articles in the container
function displayArticles(articles) {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = ''; // Clear previous content
    articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");

        // Check if the article is already bookmarked
        const isBookmarked = bookmarks.some(bookmark => bookmark.title === article.title);

        articleElement.innerHTML = `
            <img src="${article.photo_url}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.snippet}</p>
            <button onclick="window.open('${article.link}', '_blank')">Read More</button>
            <button onclick="bookmarkArticle('${article.title}', '${article.link}', '${article.photo_url}')" ${isBookmarked ? 'disabled' : ''}>Bookmark</button>
        `;
        contentContainer.appendChild(articleElement);
    });
}

// Function to switch between tabs (News / Bookmarks)
function changeTab(category) {
    currentCategory = category;
    if (category === 'news') {
        location.reload(); // Reload the page when switching to the "news" tab
    } else if (category === 'bookmarks') {
        displayBookmarks(); // Display bookmarks
    }
}

// Function to add article to bookmarks
function bookmarkArticle(title, link, photoUrl) {
    // Prevent bookmarking the same article more than once
    if (bookmarks.some(bookmark => bookmark.title === title)) {
        return;
    }

    const bookmark = { title, link, photoUrl };
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // Store updated bookmarks in localStorage
    alert("Article Bookmarked!");
    if (currentCategory === 'bookmarks') {
        displayBookmarks(); // Refresh bookmarks if in the bookmarks tab
    }
}

// Function to display all bookmarks
function displayBookmarks() {
    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = ''; // Clear previous content
    if (bookmarks.length === 0) {
        contentContainer.innerHTML = '<p>No bookmarks yet!</p>';
    } else {
        bookmarks.forEach((bookmark, index) => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("article");
            articleElement.innerHTML = `
                <img src="${bookmark.photoUrl}" alt="${bookmark.title}">
                <h3>${bookmark.title}</h3>
                <button onclick="window.open('${bookmark.link}', '_blank')">Read More</button>
                <button class="remove" onclick="removeBookmark(${index})">Remove</button>
            `;
            contentContainer.appendChild(articleElement);
        });
    }
}

// Function to remove a bookmark
function removeBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // Update bookmarks in localStorage
    displayBookmarks(); // Refresh the bookmarks display
}

// Load the news when the page is loaded
window.onload = function () {
    if (currentCategory === 'news') {
        fetchNews();
    } else {
        displayBookmarks();
    }
};
