import "./FooterLogo.css";
import { Link } from "react-router-dom";

export default function FooterLogo() {
	return (
		<div className='footer-logo__wrapper'>
			<Link className='footer-logo__link' to='/'>
				<img
					className='footer-logo__image'
					src='https://i.imgur.com/hUmANuz.png'
					alt='Logo'
					width={16}
					height={16}
				/>
				<span className='footer-logo__text'>Yehor</span>
			</Link>
		</div>
	);
}
