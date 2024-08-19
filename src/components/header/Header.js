import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						<em></em>
					</strong>
					<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</h1>
				<div className="header__text">
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<a href="/projects" className="btn">
					Go to Gallery
				</a>

				
		
				
			</div>
		</header>
	);
}

export default Header;