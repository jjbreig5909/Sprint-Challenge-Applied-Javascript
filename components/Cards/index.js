// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        
    })
    .catch(error => {
        console.log('the data was not returned', error);
    });

//Create card component
const newArticle = (headline, authorURL, authorName)=>{
    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthorCard = document.createElement('div');
    const newAuthorImgContainer = document.createElement('div');
    const newAuthorImg = document.createElement('img');
    const newAuthorName = document.createElement('span');

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthorCard.classList.add('author');
    newAuthorImgContainer.classList.add('img-container');

    newHeadline.textContent=headline;
    newAuthorImg.src=authorURL;
    newAuthorName.textContent=`By ${authorName}`;

    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthorCard);
    newAuthorCard.appendChild(newAuthorImgContainer);
    newAuthorImgContainer.appendChild(newAuthorImg);
    newAuthorCard.appendChild(newAuthorName);

    return newCard;

}

const firstCard=document.querySelector(".cards-container");

//Generate new cards

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles);
        const topicList=Object.keys(response.data.articles);
        console.log(topicList);
        topicList.forEach(topic => {
            response.data.articles[topic].forEach(article=>{
                firstCard.appendChild(newArticle(article.headline, article.authorPhoto, article.authorName))
            });
        });

    })

    
    .catch(error => {
        console.log('the data was not returned', error);
    });
