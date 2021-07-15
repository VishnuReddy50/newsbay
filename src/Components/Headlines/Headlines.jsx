import './Headlines.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Headlines({ headData }) {
	return (
		<div className="headlines" id="Headlines">
			<Carousel>
				{headData.map((details) => (
					<Carousel.Item interval={2000} className="carousel">
						<a href={details.url} target="_blank" rel="noreferrer">
							<img
								src={details.urlToImage}
								alt="First slide"
							/>
							<Carousel.Caption className="caption">
								<h3>{details.title}</h3>
								<p>{details.description}</p>
							</Carousel.Caption>
						</a>

					</Carousel.Item>
				))}
			</Carousel>
		</div>


	);
};

export default Headlines;
