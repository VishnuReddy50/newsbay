import React from 'react'
import './Nav.css';
import Divider from '@material-ui/core/Divider';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

const defaultState = { sideBar: false };

class Nav extends React.Component {

	state = defaultState;

	render() {

		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("nav").style.top = "0";
			} else {
				document.getElementById("nav").style.top = "-100%";
			}
			prevScrollpos = currentScrollPos;
		}

		const search = "🔍Search";
		if (this.props.windowWidth > 1250) {
			return (
				<div className="nav" id="nav">
					<a href="#Headlines">
						<h1>NewsBay</h1>
					</a>

					<div className="nav-links">
						<a href="#Politics" className="middle">Politics</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Science" className="middle">Science</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Technology" className="middle">Technology</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Entertainment" className="middle">Entertainment</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Sports" className="middle">Sports</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Business" className="middle">Business</a>
					</div>

					<Link to="/search">
						<div className="search0">
							<h3>{search}</h3>
						</div>
					</Link>
				</div>
			);
		} else if (this.props.windowWidth > 750) {
			return (
				<div className="nav1" id="nav">
					<div className="nav-level-1">
						<a href="#Headlines">
							<h1>NewsBay</h1>
						</a>

						<Link to="/search">
							<div className="search1">
								<h3>{search}</h3>
							</div>
						</Link>
					</div>

					<div className="nav-links1">
						<a href="#Politics" className="middle">Politics</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Science" className="middle">Science</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Technology" className="middle">Technology</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Entertainment" className="middle">Entertainment</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Sports" className="middle">Sports</a>
						<Divider orientation="vertical" flexItem />
						<a href="#Business" className="middle">Business</a>
					</div>
				</div>
			);
		} else {
			console.log("#" + this.state.sideBar);

			const showSidebar = () => {
				this.setState({ sideBar: !this.state.sideBar }, () => { console.log("$" + this.state.sideBar) });
			};
			return (
				<div id="nav">
					<div className='navbar'>
						<MenuRoundedIcon className='menu-bars' style={{ fontSize: 33 }} onClick={showSidebar} />

						<a href="#Headlines" className="title">
							<h1>NewsBay</h1>
						</a>
					</div>

					<nav className={this.state.sideBar ? 'nav-menu-active' : 'nav-menu'}>
						<div className='nav-menu-items' >
							<CloseIcon
								className='navbar-toggle menu-bars'
								style={{ fontSize: 33 }}
								onClick={showSidebar}
							/>
							<div className="nav-links2">
								<Link to="/search">
									<div className="search2">
										<h3>{search}</h3>
									</div>
								</Link>
								<a href="#Politics">Politics</a>
								<a href="#Science">Science</a>
								<a href="#Technology">Technology</a>
								<a href="#Entertainment">Entertainment</a>
								<a href="#Sports">Sports</a>
								<a href="#Business">Business</a>
							</div>
						</div>
					</nav>
				</div>
			);
		}
	}
}

export default Nav;
