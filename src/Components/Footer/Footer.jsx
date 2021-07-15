import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
	return (
		<div className="footer-box">
			<div className="footer">
				<h4>:Connect:</h4>
				<div className="icons">
					<a href="https://twitter.com/cvishnureddy50" target="_blank" rel="noreferrer">
						<TwitterIcon className="icon" style={{ fontSize: 40 }} />
					</a>
					<a href="https://github.com/VishnuReddy50" target="_blank" rel="noreferrer">
						<GitHubIcon className="icon" style={{ fontSize: 40 }} />
					</a>
					<a href="https://www.instagram.com/vishnu_reddy_50/" target="_blank" rel="noreferrer">
						<InstagramIcon className="icon" style={{ fontSize: 40 }} />
					</a>
					<a href="https://www.linkedin.com/in/vishnu-vardhan-reddy-chitte-7bb83a177/" target="_blank" rel="noreferrer">
						<LinkedInIcon className="icon" style={{ fontSize: 40 }} />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer;