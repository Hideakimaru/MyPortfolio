import "./NotFound.css";

export default function NotFound() {
	return (
		<main className='not-found__wrapper'>
			<div className='not-found'>
				<p className='not-found__status-text'>404</p>
				<h1 className='not-found__title'>Page not found</h1>
				<p className='not-found__text'>
					Sorry, we couldn&#x2019;t find the page you&#x2019;re looking for.
				</p>
				<div className='not-found__btn-wrapper'>
					<a href='/' className='not-found__btn-back'>
						Go back home
					</a>
					<a
						href='mailto:yehor.marchenko1997@gmail.com'
						className='not-found__btn-contact'
					>
						Contact support <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</div>
		</main>
	);
}
