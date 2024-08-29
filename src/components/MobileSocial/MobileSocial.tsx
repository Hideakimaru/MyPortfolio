import "./MobileSocial.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type PropsType = {
	isMobileMenu: boolean;
};

export default function MobileSocial({ isMobileMenu }: PropsType) {
	return (
		<div
			className={
				isMobileMenu ? "mobile-menu__social" : "mobile-menu__social--hide"
			}
		>
			<a
				className='mobile-menu__social-link'
				href='https://github.com/Hideakimaru'
			>
				<GitHubIcon
					className='mobile-menu__social-icon'
					sx={{ fontSize: "42px" }}
				/>
			</a>
			<a
				className='mobile-menu__social-link'
				href='https://t.me/yehor_marchenko'
			>
				<TelegramIcon
					className='mobile-menu__social-icon'
					sx={{ fontSize: "42px" }}
				/>
			</a>
			<a
				className='mobile-menu__social-link'
				href='https://www.linkedin.com/in/yehorm97'
			>
				<LinkedInIcon
					className='mobile-menu__social-icon'
					sx={{ fontSize: "42px" }}
				/>
			</a>
		</div>
	);
}
