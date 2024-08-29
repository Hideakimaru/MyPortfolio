import { LegacyRef } from "react";
import "./LanguageMode.css";

const languagesArr: string[] = ["UA", "EN"];

type Props = {
	onClick: (countryId: string) => void;
	selectedLang: string;
	isOpen: boolean;
	menuRef: LegacyRef<HTMLDivElement>;
	isMobileMenu?: boolean;
};

export default function LanguageMode({
	onClick,
	selectedLang,
	isOpen,
	menuRef
}: Props) {
	const filtredLanguages = languagesArr.filter(lang => lang !== selectedLang);

	return (
		<div
			ref={menuRef}
			className='langues-option__wrapper'
			style={{ display: isOpen ? "flex" : "" }}
		>
			<div className='langues-option'>
				<ul className='langues-option__list'>
					{filtredLanguages.map((lang, index) => {
						return (
							<li
								onClick={() => onClick(lang)}
								key={index}
								className='langues-option__text'
							>
								{lang}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
