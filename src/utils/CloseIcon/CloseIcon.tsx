import { LegacyRef } from "react";
import "./CloseIcon.css";

type PropsType = {
	onMenuClose: () => void;
	menuCloseRef: LegacyRef<HTMLButtonElement>;
	isMobileMenu: boolean;
};

export default function CloseIcon({
	onMenuClose,
	menuCloseRef,
	isMobileMenu
}: PropsType) {
	return (
		<button
			ref={menuCloseRef}
			onClick={onMenuClose}
			className={isMobileMenu ? "close-icon" : "close-icon--hide"}
		>
			<span className='close-icon__cross'></span>
		</button>
	);
}
