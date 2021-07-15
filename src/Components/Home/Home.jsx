import { useState, useEffect } from 'react';
import Headlines from '../Headlines/Headlines';
import Nav from '../Nav/Nav';
import './Home.css';
import Row from '../Row/Row';
import Footer from '../Footer/Footer';

function Home() {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, []);

  // const key2 = "938ad3b2de2c4873bef765f929c52038";
  // const key2 = "dc1ee7d13c2d43ed95a5b9b568cf44e5";
  const key2 = "af92419ccfb94b449e967f25075bd8ee";

  const [ headData, setHeadData ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=11&sortBy=popularity&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setHeadData(data);
      })
  }, []);

  const [ politics, setPolitics ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=politics&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setPolitics(data);
      })
  }, []);

  const [ science, setScience ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=science&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setScience(data);
      })
  }, []);

  const [ technology, setTechnology ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setTechnology(data);
      })
  }, []);

  const [ entertainment, setEntertainment ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setEntertainment(data);
      })
  }, []);

  const [ sports, setSports ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=sports&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setSports(data);
      })
  }, []);

  const [ business, setBusiness ] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=business&sortBy=popularity&language=en&pageSize=21&apiKey=${key2}`)
      .then(response => response.json())
      .then((api) => {
        const data = api.articles.filter((article) => {
          return article.urlToImage && article.title && article.description;
        })
        setBusiness(data);
      })
  }, []);

  return (
    <div className="home">
      <Nav
        windowWidth={windowWidth}
      />
      {headData && (
        <Headlines
          headData={headData}
        />
      )}
      {politics && (
        <Row
          title="Politics"
          news={politics}
        />
      )}
      {science && (
        <Row
          title="Science"
          news={science}
        />
      )}
      {technology && (
        <Row
          title="Technology"
          news={technology}
        />
      )}
      {entertainment && (
        <Row
          title="Entertainment"
          news={entertainment}
        />
      )}
      {sports && (
        <Row
          title="Sports"
          news={sports}
        />
      )}
      {business && (
        <Row
          title="Business"
          news={business}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
// const key = "938ad3b2de2c4873bef765f929c52038";
// const key = "dc1ee7d13c2d43ed95a5b9b568cf44e5";
// var type = "tech"
// fetch(`https://newsapi.org/v2/everything?q=(${type})&from=2021-07-08&sortBy=popularity&apiKey=${key}`)
//   .then(response => response.json())
//   .then(data => console.log((new Date(data.articles[ 0 ].publishedAt)).toString().substr(0, 15)));
//     .then(data => console.log((new Date(data.articles[ 0 ].publishedAt)).toString().substr(0, 15)));
