import { useRef } from "react";
import "./HomeProfile.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useOutletContext } from "react-router";

export default function HomeProfile() {
	const statusBoxRef = useRef<HTMLDivElement | null>(null);
	const homeProfileRef = useRef<HTMLDivElement | null>(null);
	const handleOpenContactFrom = useOutletContext<() => void>();

	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			const tl = gsap.timeline();

			tl.fromTo(
				statusBoxRef.current,
				{ opacity: 1 },
				{ opacity: 0, duration: 1, ease: "power1.inOut" }
			);
			tl.yoyo(true);
			tl.repeat(Infinity);
		},
		{ scope: homeProfileRef }
	);

	return (
		<section className='container'>
			<div ref={homeProfileRef} className='home-profile'>
				<div className='home-profile__container'>
					<div className='home-profile__wrapper'>
						<div className='home-profile__text-wrapper'>
							<h1>
								Yehor is a <span className='home-profile__text'>markup</span>{" "}
								and{" "}
								<span className='home-profile__text'>front-end developer</span>.
							</h1>
						</div>
						<div className='home-profile__desctiption'>
							<p>I&#x2019;m crafting responsive websites and email templates</p>
						</div>
						<div className='home-profile__button-wrapper'>
							<button
								onClick={handleOpenContactFrom}
								className='home-profile__button'
							>
								Contact me
							</button>
						</div>
					</div>
					<div className='home-profile__image-wrapper'>
						<div className='home-profile__image'>
							<img
								src='https://i.imgur.com/eREP6da.png'
								alt='Portfolio Photo'
								width={239}
								height={239}
							/>
						</div>
						<div className='home-profile__status-wrapper'>
							<div className='home-profile__status-text'>
								<div
									ref={statusBoxRef}
									className='home-profile__status-box'
								></div>
								<h1>
									Currently working on{" "}
									<span className='home-profile__status-item'>Portfolio</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
