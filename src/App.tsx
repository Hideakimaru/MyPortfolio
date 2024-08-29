import "./index.css";
import Page from "./components/Page/Page.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Outlet } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ContactForm from "./components/ContactForm/ContactForm.tsx";

function App() {
	const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
	const [hasAnimated, setHasAnimated] = useState<boolean>(true);
	const [isLanguageMenu, setIsLanguageMenu] = useState<boolean>(false);
	const [yPos, setYPos] = useState<number>(0);
	const [isTouching, setIsTouching] = useState<boolean>(false);
	const [langMode, setLangMode] = useState<string>("EN");
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isContactForm, setIsContactForm] = useState<boolean>(false);

	const menuCloseRef = useRef<HTMLButtonElement | null>(null);
	const menuOpenRef = useRef<HTMLButtonElement | null>(null);
	const prevMobileMenuRef = useRef<boolean>(false);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const tlRef = useRef<GSAPTimeline | null>(null);
	const langOptionContainerRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);

	function handleOpenContactForm(): void {
		setIsContactForm(true);
	}

	function handleCloseContactFrom(): void {
		setIsContactForm(false);
	}

	useGSAP(
		() => {
			if (isLanguageMenu) {
				gsap.fromTo(
					langOptionContainerRef.current,
					{ yPercent: 100 },
					{ yPercent: 0, duration: 0.5, ease: "power1.inOut" }
				);
			}
		},
		{ dependencies: [isLanguageMenu], scope: langOptionContainerRef }
	);

	useEffect(() => {
		if (yPos >= 40 && !isTouching) {
			setIsLanguageMenu(false);
			setYPos(0);
		}
	}, [yPos, isTouching]);

	useEffect(() => {
		if (yPos <= 40 && !isTouching) {
			setYPos(0);
		}
	}, [yPos, isTouching]);

	function handleTouchStart(e: React.TouchEvent<HTMLDivElement>): void {
		e.stopPropagation();
		setIsTouching(true);
	}

	function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>): void {
		e.stopPropagation();
		setIsTouching(false);
	}

	function handleTouchMove(e: React.TouchEvent<HTMLDivElement>): void {
		e.stopPropagation();

		if (isTouching && langOptionContainerRef.current) {
			const touchY = e.touches[0].clientY;
			const coefficientSpeed = 1.5;

			const langOptionMenuRect =
				langOptionContainerRef.current.getBoundingClientRect();
			const langOptionMenuHeight = langOptionMenuRect.height;

			const offsetY = Math.min(
				langOptionMenuHeight,
				Math.max(0, (touchY - langOptionMenuRect.top) * coefficientSpeed)
			);
			const percentage = (offsetY / langOptionMenuHeight) * 100;

			requestAnimationFrame(() => {
				setYPos(prevYPos => {
					const delta = percentage - prevYPos;
					const scrollSpeed = 0.5;

					if (Math.abs(delta) < 1) {
						return percentage;
					}

					return prevYPos + delta * scrollSpeed;
				});
			});
		}
	}

	useEffect(() => {
		if (langOptionContainerRef.current) {
			langOptionContainerRef.current.style.transform = `translateY(${yPos}%)`;
		}
	}, [yPos]);

	function handleMobileLanguage(): void {
		setIsLanguageMenu(true);
	}

	useGSAP(
		() => {
			if (hasAnimated) {
				setHasAnimated(false);
				return;
			}

			if (tlRef.current) {
				tlRef.current.kill();
			}

			const tl: GSAPTimeline = gsap.timeline();
			tlRef.current = tl;

			if (isMobileMenu && !prevMobileMenuRef.current) {
				gsap.fromTo(
					menuCloseRef.current,
					{ rotate: 0 },
					{ rotate: 720, ease: "power1.inOut" }
				);

				gsap.fromTo(
					headerRef.current,
					{ transform: "translateY(-100%)" },
					{ transform: "translateY(0)", ease: "power1.inOut" }
				);
			} else {
				gsap.fromTo(
					menuOpenRef.current,
					{ rotate: 0 },
					{ rotate: -720, ease: "power1.inOut" }
				);
			}

			prevMobileMenuRef.current = isMobileMenu;
		},
		{ dependencies: [isMobileMenu], scope: headerRef }
	);

	function handleBurgerBtn(): void {
		setIsMobileMenu(true);
	}

	function handleCloseMenu(): void {
		setIsMobileMenu(false);
	}

	function handleNavItem(id: string): void {
		if (
			id === "home" ||
			id === "projects" ||
			id === "about" ||
			id === "contacts" ||
			id === "logo"
		) {
			setIsMobileMenu(false);
		}
	}

	function handleLanguageMode(countryId: string | null): void {
		console.log(countryId);
		if (countryId !== null) {
			setLangMode(countryId);
			setIsMenuOpen(false);
			setIsLanguageMenu(false);
		} else {
			throw new Error("countryId is null");
		}
	}

	function handleLanguageChange() {
		setIsMenuOpen(prevState => !prevState);
	}

	return (
		<Page>
			<ContactForm
				handleCloseContactForm={handleCloseContactFrom}
				isContactForm={isContactForm}
			/>
			<Header
				isMenuOpen={isMenuOpen}
				handleLanguageChange={handleLanguageChange}
				handleLanguageMode={handleLanguageMode}
				langMode={langMode}
				isTouching={isTouching}
				onNavItem={handleNavItem}
				headerRef={headerRef}
				isMobileMenu={isMobileMenu}
				menuCloseRef={menuCloseRef}
				menuOpenRef={menuOpenRef}
				onMenuClose={handleCloseMenu}
				onMobileMenu={handleBurgerBtn}
				isLanguageMenu={isLanguageMenu}
				langOptionContainerRef={langOptionContainerRef}
				yPos={yPos}
				handleTouchMove={handleTouchMove}
				handleTouchStart={handleTouchStart}
				handleTouchEnd={handleTouchEnd}
				handleMobileLanguage={handleMobileLanguage}
			/>
			<Outlet context={handleOpenContactForm} />
			<Footer />
		</Page>
	);
}

export default App;
