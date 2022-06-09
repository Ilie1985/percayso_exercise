import { useState, useEffect } from "react";
import "../News/news.css";

// import Product from "../Product/Product";

// const News = () => {
//   const apiURL =
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=b331c3a819564569a5ba6bd1b300efe1";
//   const [news, setNews] = useState([]);

//   const getData = async () => {
//     const res = await fetch(`${apiURL}`);
//     const data = await res.json();

//     console.log(data.articles[1].description) ;
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <h1 className="title">niNews you want</h1>

//     </div>
//   );
// };

// export default News;

//=====================
// const apiURL =
//   "https://newsapi.org/v2/top-headlines?country=us&apiKey=b331c3a819564569a5ba6bd1b300efe1";

// const fetchedData = async () => {
//   const res = await fetch(`${apiURL}`);
//   const data = await res.json();
//   console.log(data);
//   return data;
// };
// fetchedData();

// const showNews = async () => {
//   const news = await fetchedData();
//   news.forEach((article) => {
//     const postNews = document.createElement("div");
//     postNews.classList.add("article");
//     postNews.innerHTML = `<div class="number">${article.id}</div>
//    <div class="article-info">  <h2 class="article-title">${article.content}</h2> <p class="article-description">${article.description}</p> </div>`;
//     window.appendChild(postNews);
//   });
// };
// showNews();
// export default showNews;

// document.getElementById("root").innerHTML = data.articles[0].author;
// const newEl = document.createElement("div");
// newEl.innerHTML = `<h4>${title}<h4>`;
// console.log(newEl)

function News() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=b331c3a819564569a5ba6bd1b300efe1"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <pre>{JSON.stringify(data.articles[0], null, 2)}</pre>
      <pre>{JSON.stringify(data.articles[1], null, 2)}</pre>
      <pre>{JSON.stringify(data.articles[2], null, 2)}</pre>
      <div>
        {/* <ul>
          {data.map((item) => {
           return <li key={item.id}>{data.articles[0]}</li>;
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default News;
