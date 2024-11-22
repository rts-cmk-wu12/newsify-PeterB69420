require("../style/main.scss");
require("../style/home.scss");

const API_URL = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=A96OnmG6coXjgi6Hcr90iWAFDFNcOUoO";
const API_KEY = "A96OnmG6coXjgi6Hcr90iWAFDFNcOUoO";
export async function fetchNews() {
    const response = await fetch(API_URL)
 
    if (!response.ok){
        console.log(response.statusText)
    }
    const data = await response.json()
    return data
}

// Credit: Benjamin Jasek Smith


console.log(await fetchNews())



 

const allArticles = document.querySelector(".article__container")
const data = await fetchNews()
const categories = []
const articles = data.results
console.log(articles)

articles.forEach(element => {
   
    
    //stopper hvis kategorien allerede oprettet
    if(categories.includes(element.section)){
        
        addNewArticle(element.section, element)
        
        return
    }

    categories.push(element.section)
    const articleDiv = document.createElement("article");
    const articleHeadingBox = document.createElement("div");
    const articleHeading = document.createElement("h2");
    const articleHeadingArrow = document.createElement("i");
    const articleHeadingImg = document.createElement("img")
    articleHeadingImg.setAttribute("src", "./images/newsifylogosmall.png")
    articleHeadingArrow.classList.add("fa-solid", "fa-chevron-left");
    articleHeading.textContent = element.section;
   
    articleDiv.classList.add("newsArticleBox");
    articleDiv.classList.add(element.section);
    articleHeadingBox.classList.add("newsArticleBox__headingbox");
    articleHeading.classList.add("newsArticleBox__heading");
    articleHeadingArrow.classList.add("newsArticleBox__arrow");
    articleHeadingImg.classList.add("newsArticleBox__image")
    
 
    articleHeadingBox.appendChild(articleHeadingImg);
    articleHeadingBox.appendChild(articleHeading);
    
    articleHeadingBox.appendChild(articleHeadingArrow);
    articleDiv.appendChild(articleHeadingBox);
 
    allArticles.appendChild(articleDiv);
    articleHeadingArrow.addEventListener("click", dropNewsDown)
    addNewArticle(element.section, element)
    
});
 
function addNewArticle(elementname, element){
    console.log(element)
    const group = document.querySelector("."+elementname)
   
    const newsArticle = document.createElement("section")
    const newsImage = document.createElement("img")
    const newsHeading = document.createElement("h3")
    const newsText = document.createElement("p")
    const imageLink =element.multimedia[0].url
    newsImage.setAttribute("src", imageLink)
    newsHeading.textContent = element.title
    newsText.textContent = element.abstract

    newsImage.classList.add("news-image")
    
 
 
 
    
    newsArticle.appendChild(newsImage)
    newsArticle.appendChild(newsHeading)
    newsArticle.appendChild(newsText)
    group.appendChild(newsArticle)
   
    newsArticle.addEventListener("click", ()=>{
        window.open( element.url);
    })
}
 
console.log(categories)
 

function dropNewsDown(){
    const articlesInside = this.parentElement.parentElement.querySelectorAll("section")
    const arrow = this.parentElement.querySelector("i")
    if(arrow.classList.contains("fa-chevron-left")){
        arrow.classList.remove("fa-chevron-left")
        console.log(arrow.classList)
        arrow.classList.add("fa-chevron-down" )
    }else{
        arrow.classList.remove("fa-chevron-down")
        arrow.classList.add("fa-solid","fa-chevron-left", "newsArticleBox__arrow" )
 
    }
    articlesInside.forEach(element =>{
        element.classList.toggle("newsArticle--displayNone")
    })
}


// Credit: Benjamin Jasek Smith