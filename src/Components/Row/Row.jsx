import './Row.css';

function Row({ title, news }) {
	console.log(news);
	return (
		<div className="row" id={title}>
			<h3>#{title}</h3>
			<div className="cards" >
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
		</div>
	)
}

export default Row;