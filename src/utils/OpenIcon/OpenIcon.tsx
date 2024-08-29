import { LegacyRef } from "react";
import "./OpenIcon.css";

type PropsType = {
	onMobileMenu: () => void;
	isMobileMenu: boolean;
	menuOpenRef: LegacyRef<HTMLButtonElement>;
};

export default function OpenIcon({
	menuOpenRef,
	onMobileMenu,
	isMobileMenu
}: PropsType) {
	return (
		<button
			ref={menuOpenRef}
			onClick={onMobileMenu}
			className={isMobileMenu ? "mobile-menu__btn--hide" : "mobile-menu__btn"}
		>
			<span className='mobile-menu__btn-line'></span>
		</button>
	);
}
