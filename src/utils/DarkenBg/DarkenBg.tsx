import "./DarkenBg.css";

type PropsType = {
	isMobileMenu?: boolean | null;
};

export default function DarkenBg({ isMobileMenu }: PropsType) {
	return (
		<div className={isMobileMenu ? "darken-bg" : "darken-bg--close"}></div>
	);
}
