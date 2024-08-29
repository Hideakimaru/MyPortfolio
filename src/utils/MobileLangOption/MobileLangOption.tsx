import { LegacyRef } from "react";
import "./MobileLangOption.css";

type PropsType = {
	isMobileMenu: boolean;
	isLanguageMenu: boolean;
	langOptionContainerRef: LegacyRef<HTMLDivElement>;
	yPos: number;
	onTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
	onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
	onTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
	isTouching: boolean;
	selectedLang: string;
	handleLanguageMode: (countryId: string | null) => void;
};

type LangType = {
	English: string;
	Українська: string;
};

export default function MobileLangOption({
	isMobileMenu,
	isLanguageMenu,
	langOptionContainerRef,
	onTouchMove,
	onTouchStart,
	onTouchEnd,
	isTouching,
	selectedLang,
	handleLanguageMode
}: PropsType) {
	const langMap: LangType = {
		English: "EN",
		Українська: "UA"
	};

	const reverseLangMap = Object.fromEntries(
		Object.entries(langMap).map(([key, value]) => [value, key])
	);

	const currentLangName = reverseLangMap[selectedLang];

	const filteredLanguages = (
		Object.keys(langMap) as Array<keyof LangType>
	).filter(lang => lang !== currentLangName);

	return (
		<div
			ref={langOptionContainerRef}
			className={
				isMobileMenu && isLanguageMenu
					? "lang-mode__mobile"
					: "lang-mode__mobile--hide"
			}
		>
			<div
				onTouchMove={onTouchMove}
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
				className='lang-mode__slider'
			>
				<div
					className={
						isTouching
							? "lang-mode__slider-handle--active"
							: "lang-mode__slider-handle"
					}
				></div>
			</div>
			<div className='lang-mode__languages-wrapper'>
				<ul className='lang-mode__languages'>
					{filteredLanguages.map((lang, index) => (
						<li
							onClick={() => handleLanguageMode(langMap[lang])}
							className='lang-mode__languages-item'
							key={index}
						>
							{lang}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
