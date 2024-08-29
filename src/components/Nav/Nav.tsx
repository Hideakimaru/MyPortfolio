import "./Nav.css";
import { NavLink } from "react-router-dom";
import DownArrowIcon from "@mui/icons-material/KeyboardArrowDown";
import { LegacyRef } from "react";

import OpenIcon from "../../utils/OpenIcon";

type PropsType = {
	langMode: string;
	containerRef: LegacyRef<HTMLDivElement>;
	onClick: () => void;
	buttonRef: LegacyRef<HTMLDivElement>;
	onMobileMenu: () => void;
	isMobileMenu: boolean;
	menuOpenRef: LegacyRef<HTMLButtonElement>;
};

export default function Nav({
	langMode,
	containerRef,
	onClick,
	buttonRef,
	onMobileMenu,
	isMobileMenu,
	menuOpenRef
}: PropsType) {
	return (
		<div className='container__right'>
			<div className='mobile-menu__btn-wrapper'>
				<OpenIcon
					menuOpenRef={menuOpenRef}
					onMobileMenu={onMobileMenu}
					isMobileMenu={isMobileMenu}
				/>
			</div>
			<nav className={isMobileMenu ? "navigation--mobile" : "navigation"}>
				<ul className='navigation__list'>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav__link--active" : "nav__link"
						}
						to='/'
						end
					>
						<li className='nav__items'>
							<span className='nav__item'>#</span>home
						</li>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav__link--active" : "nav__link"
						}
						to='/projects'
						end
					>
						<li className='nav__items'>
							<span className='nav__item'>#</span>works
						</li>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav__link--active" : "nav__link"
						}
						to='/about'
						end
					>
						<li className='nav__items'>
							<span className='nav__item'>#</span>about-me
						</li>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? "nav__link--active" : "nav__link"
						}
						to='/contacts'
						end
					>
						<li className='nav__items'>
							<span className='nav__item'>#</span>contacts
						</li>
					</NavLink>
				</ul>
				<div
					ref={buttonRef}
					onClick={onClick}
					className='header-language__wrapper'
				>
					<span className='header-language'>{langMode}</span>
					<div ref={containerRef} className='header-language__image-wrapper'>
						<DownArrowIcon
							className='header-language__image'
							sx={{ fontSize: "20px" }}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}
