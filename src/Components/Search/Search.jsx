import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer/Footer';

function Search() {

	const search = "Search";
	// const key2 = "938ad3b2de2c4873bef765f929c52038";
	// const key2 = "dc1ee7d13c2d43ed95a5b9b568cf44e5";
	const key2 = "af92419ccfb94b449e967f25075bd8ee";

	const [ keyWord, setKeyWord ] = useState("");
	const handleChange = (inputText) => {
		setKeyWord(inputText ? inputText : "");
		console.log(keyWord);
	}

	const [ news, setNews ] = useState([]);
	const handleClick = () => {
		fetch(`https://newsapi.org/v2/everything?q=(${keyWord})&pageSize=50&sortBy=popularity&apiKey=${key2}`)
			.then(response => response.json())
			.then((api) => {
				const data = api.articles.filter((article) => {
					return article.urlToImage && article.title && article.description;
				})
				setNews(data);
			});
	}

	return (
		<div className="searching">
			<div className="nav-bar" id="nav">
				<div>
					<Link to="/newsbay">
						<h1>NewsBay</h1>
					</Link>
				</div>

				<div className="search-container">
					<input
						onChange={(event) => handleChange(event.target.value)}
						placeholder={search}
						className="search-input"
					/>
					<SearchIcon className="icon" onClick={() => handleClick()} />
				</div>
			</div>
			<div className="cards">
				{news.map((details) => (
					<div className="card">
						<a href={details.url} target="_blank" rel="noreferrer">
							<img src={details.urlToImage} alt="newsImage" />
							<h4>
								{details.title.split("-")[ 0 ]}
							</h4>
							<div className="source">
								<h6>
									--{details.source.name}
								</h6>
							</div>
							<p>
								{details.description}
							</p>
						</a>
					</div>
				))}
			</div>
			{/* <Footer /> */}
		</div>
	)
}

export default Search;