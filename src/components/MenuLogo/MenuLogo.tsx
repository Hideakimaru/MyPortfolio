import "./MenuLogo.css";
import { Link } from "react-router-dom";

export default function MenuLogo() {
	return (
		<div className='menu-logo__wrapper'>
			<Link className='menu-logo__link' to='/'>
				<img
					className='menu-logo__image'
					src='https://i.imgur.com/hUmANuz.png'
					alt='Logo'
					width={16}
					height={16}
				/>
				<span className='menu-logo__text'>Yehor</span>
			</Link>
		</div>
	);
}
