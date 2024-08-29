import "./Logo.css";
import { Link } from "react-router-dom";

type PropsType = {
	onNavItem: (id: string) => void;
};

export default function Logo({ onNavItem }: PropsType) {
	return (
		<div className='header-logo__wrapper'>
			<Link
				onClick={() => onNavItem("logo")}
				className='header-logo__link'
				to='/'
			>
				<img
					className='header-logo__image'
					src='https://i.imgur.com/hUmANuz.png'
					alt='Logo'
					width={16}
					height={16}
				/>
				<span className='header-logo__text'>Yehor</span>
			</Link>
		</div>
	);
}
