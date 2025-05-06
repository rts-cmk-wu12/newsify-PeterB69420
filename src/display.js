import { fetchNews } from "./home.js";
require("../style/home.scss");

document.addEventListener("DOMContentLoaded", async () => {
    const allArticles = document.querySelector(".article__container");
    console.log("article__container element:", allArticles); // Debugging log

    if (!allArticles) {
        console.error("Element with class 'article__container' not found. Ensure it exists in the HTML and is loaded before this script.");
        return;
    }

    let data;
    try {
        data = await fetchNews();
        if (!data || !data.results || !Array.isArray(data.results)) {
            console.error("Invalid data structure returned from fetchNews:", data);
            return;
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        return;
    }

    const articles = data.results;
    console.log(articles);

    articles.forEach((element) => {
        const newsArticle = document.createElement("section");
        const newsImage = document.createElement("img");
        const newsHeading = document.createElement("h3");
        const newsText = document.createElement("p");

        const imageLink = element.multimedia && element.multimedia[0] ? element.multimedia[0].url : "./images/placeholder.png";
        newsImage.setAttribute("src", imageLink);
        newsHeading.textContent = element.title;
        newsText.textContent = element.abstract;

        newsArticle.classList.add("newsArticle");
        newsArticle.appendChild(newsImage);
        newsArticle.appendChild(newsHeading);
        newsArticle.appendChild(newsText);

        allArticles.appendChild(newsArticle);
    });
});