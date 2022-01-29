import '../css/styles.css';
import '../css/feed.css';
import '../css/responsive.css';
import '../img/s2i.png';

const axios = require('axios').default;

const articlesList = document.getElementById('articles');
let index = 0;
const loadMoreBtn = document.getElementById('loadMore');

async function getArticles() {
  try {
      const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
      const articles = await response.data;
      const articlesIDs = await articles.slice(index, index + 10);
      articlesIDs.forEach(fetchData);
  } catch (error) {
      console.error(error);
  }
}

async function fetchData(id) {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
  const data = await response.data;
  displayArticle(data);
}

async function displayArticle(data){

    const date = new Date(data.time*1000)
    const localTime = date.toLocaleString()

    const article = articlesList.appendChild(document.createElement('li'));
    article.innerHTML = ` 
      <div class="container">
        <h5 class="my-1">${ data.title }</h5>
        <p>Link: <a href="${ data.url }">${ data.url }</a></p>
        <p class="text-muted">Date: ${localTime}</p>
    </div>`; 
    article.after(document.createElement('hr'));
}

getArticles();

loadMoreBtn.addEventListener('click', () => {
  index += 10;
  getArticles();
})
