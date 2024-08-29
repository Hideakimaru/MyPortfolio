import "./Header.css";
import Logo from "../Logo/Logo.tsx";
import HeaderSocial from "../HeaderSocial/HeaderSocial.tsx";
import DarkenBg from "../../utils/DarkenBg/DarkenBg.tsx";
import Nav from "../Nav/Nav.tsx";
import { LegacyRef, useRef, useState, useEffect } from "react";
import LanguageMode from "../../utils/LanguageMode/LanguageMode.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MobileNav from "../MobileNav/MobileNav.tsx";
import MobileSocial from "../MobileSocial/MobileSocial.tsx";
import CloseIcon from "../../utils/CloseIcon/CloseIcon.tsx";
import MobileLangOption from "../../utils/MobileLangOption/MobileLangOption.tsx";

type PropsType = {
	onMobileMenu: () => void;
	isMobileMenu: boolean;
	onMenuClose: () => void;
	menuCloseRef: LegacyRef<HTMLButtonElement>;
	headerRef: LegacyRef<HTMLDivElement>;
	menuOpenRef: LegacyRef<HTMLButtonElement>;
	isLanguageMenu: boolean;
	langOptionContainerRef: LegacyRef<HTMLDivElement>;
	yPos: number;
	handleTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
	handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
	handleTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
	handleMobileLanguage: () => void;
	onNavItem: (id: string) => void;
	isTouching: boolean;
	langMode: string;
	handleLanguageMode: (countryId: string | null) => void;
	isMenuOpen: boolean;
	handleLanguageChange: () => void;
};

export default function Header({
	onMobileMenu,
	isMobileMenu,
	onMenuClose,
	menuCloseRef,
	menuOpenRef,
	headerRef,
	isLanguageMenu,
	langOptionContainerRef,
	yPos,
	handleTouchMove,
	handleTouchStart,
	handleTouchEnd,
	handleMobileLanguage,
	handleLanguageMode,
	onNavItem,
	isTouching,
	langMode,
	isMenuOpen,
	handleLanguageChange
}: PropsType) {
	const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			if (isFirstRender) {
				setIsFirstRender(false);
				return;
			}

			const tl = gsap.timeline();

			if (isMenuOpen === true) {
				tl.fromTo(
					containerRef.current,
					{ rotation: 0 },
					{ rotation: -180, duration: 1, ease: "power1.inOut" }
				);
			} else {
				tl.fromTo(
					containerRef.current,
					{ rotation: -180 },
					{ rotation: 0, duration: 1, ease: "power1.inOut" }
				);
			}
		},
		{ scope: buttonRef, dependencies: [isMenuOpen] }
	);

	useEffect(() => {
		if (isMobileMenu) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [isMobileMenu]);

	return (
		<section className='container'>
			<MobileLangOption
				selectedLang={langMode}
				isTouching={isTouching}
				isLanguageMenu={isLanguageMenu}
				isMobileMenu={isMobileMenu}
				langOptionContainerRef={langOptionContainerRef}
				yPos={yPos}
				onTouchMove={handleTouchMove}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
				handleLanguageMode={handleLanguageMode}
			/>
			<DarkenBg isMobileMenu={isMobileMenu} />
			<CloseIcon
				onMenuClose={onMenuClose}
				menuCloseRef={menuCloseRef}
				isMobileMenu={isMobileMenu}
			/>
			<HeaderSocial />
			<header
				ref={headerRef}
				className={isMobileMenu ? "header--mobile" : "header"}
			>
				<div
					className={isMobileMenu ? "header__items--mobile" : "header__items"}
				>
					<LanguageMode
						selectedLang={langMode}
						onClick={handleLanguageMode}
						isOpen={isMenuOpen}
						menuRef={menuRef}
					/>
					<Logo onNavItem={onNavItem} />
					<Nav
						menuOpenRef={menuOpenRef}
						isMobileMenu={isMobileMenu}
						buttonRef={buttonRef}
						containerRef={containerRef}
						langMode={langMode}
						onClick={handleLanguageChange}
						onMobileMenu={onMobileMenu}
					/>
				</div>
				<MobileNav
					langMode={langMode}
					onNavItem={onNavItem}
					onClick={handleMobileLanguage}
					isMobileMenu={isMobileMenu}
					isLanguageMenu={isLanguageMenu}
				/>
				<MobileSocial isMobileMenu={isMobileMenu} />
			</header>
		</section>
	);
}
