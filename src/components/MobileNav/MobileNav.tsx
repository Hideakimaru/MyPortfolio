import "./MobileNav.css";
import { NavLink } from "react-router-dom";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type PropsType = {
	isMobileMenu: boolean;
	isLanguageMenu: boolean;
	onClick: () => void;
	onNavItem: (id: string) => void;
	langMode: string;
};

export default function MobileNav({
	isMobileMenu,
	isLanguageMenu,
	langMode,
	onNavItem,
	onClick
}: PropsType) {
	return (
		<div
			className={isMobileMenu ? "mobile-menu__nav" : "mobile-menu__nav--hide"}
		>
			<ul className='mobile-menu__list'>
				<NavLink
					onClick={() => onNavItem("home")}
					className={({ isActive }) =>
						isActive ? "mobile-menu__link--active" : "mobile-menu__link"
					}
					to='/'
					end
				>
					<li className='mobile-menu__items'>
						<span className='mobile-menu__item'>#</span>home
					</li>
				</NavLink>
				<NavLink
					onClick={() => onNavItem("projects")}
					className={({ isActive }) =>
						isActive ? "mobile-menu__link--active" : "mobile-menu__link"
					}
					to='/projects'
					end
				>
					<li className='mobile-menu__items'>
						<span className='mobile-menu__item'>#</span>works
					</li>
				</NavLink>
				<NavLink
					onClick={() => onNavItem("about")}
					className={({ isActive }) =>
						isActive ? "mobile-menu__link--active" : "mobile-menu__link"
					}
					to='/about'
					end
				>
					<li className='mobile-menu__items'>
						<span className='mobile-menu__item'>#</span>about-me
					</li>
				</NavLink>
				<NavLink
					onClick={() => onNavItem("contacts")}
					className={({ isActive }) =>
						isActive ? "mobile-menu__link--active" : "mobile-menu__link"
					}
					to='/contacts'
					end
				>
					<li className='mobile-menu__items'>
						<span className='mobile-menu__item'>#</span>contacts
					</li>
				</NavLink>
			</ul>
			<button
				onClick={onClick}
				className={
					isLanguageMenu
						? "mobile-menu__language-btn--active"
						: "mobile-menu__language-btn"
				}
			>
				<span>{langMode}</span>
				<ArrowDownIcon sx={{ fontSize: "25px" }} />
			</button>
		</div>
	);
}
