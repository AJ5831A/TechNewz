# **News Aggregator**

A modern, news aggregator that fetches the latest articles from the NewsAPI and allows users to bookmark their favorite articles for later reference.

---

## **Features**
- Fetches top news articles by category using the [NewsAPI](rapidapi.com).
- Displays articles with titles, images, descriptions, and action buttons (Bookmark and Read More).
- Allows users to bookmark articles and saves them in the browser's `localStorage`.
- "Bookmarks" section shows saved articles, with an option to remove them.
- Responsive and user-friendly interface with clean and modern styling.
- Custom error handling for failed API requests.

---

## **Technologies Used**
1. **Frontend**:
   - HTML5: Structuring the application.
   - CSS3: Styling and animations.
   - JavaScript (ES6+): Dynamic behavior and logic.

2. **API**:
   - [NewsAPI](rapidapi.com): Fetching real-time news articles.

3. **Browser Storage**:
   - `localStorage`: Storing and retrieving bookmarked articles.

---


## **File Structure**
```
ai-news-aggregator/
├── index.html       # Main HTML file
├── styles.css       # Styling file for the project
├── script.js        # JavaScript logic for the application
├── README.md        # Project documentation
```

---

## **Usage**

### **Homepage**
1. **Read More**: Opens the article in a new tab.

### **Bookmarks**
1. **Save Articles**: Click the "Bookmark" button on an article to save it.
2. **View Bookmarks**: Click the "Bookmarks" button in the navigation menu.
3. **Remove Bookmark**: Remove an article from bookmarks using the "Remove" button.

---

## **Future Improvements**
- Add user authentication for personalized bookmarks.
- Include article search functionality.
- Enhance styling for better responsiveness on mobile devices.
- Implement a backend to save bookmarks permanently.

---

## **Credits**
- Powered by [NewsAPI](rapidapi.com).
