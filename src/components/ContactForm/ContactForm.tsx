import "./ContactForm.css";

type PropsType = {
	isContactForm: boolean;
	handleCloseContactForm: () => void;
};

export default function ContactForm({
	isContactForm,
	handleCloseContactForm
}: PropsType) {
	return (
		<div
			className={
				isContactForm ? "contact-form__wrapper" : "contact-form__wrapper--hide"
			}
		>
			<div className='contact-form'>
				<form action='' method='post' autoComplete='on'>
					<div className='contact-form__row-sender'>
						<div className='contact-form__close-btn'>
							<input
								onClick={handleCloseContactForm}
								type='button'
								name='email'
								id='email'
								defaultValue='&#x2716;'
								title='Close Message'
							/>
						</div>
					</div>
					<div className='contact-form__row-sender'>
						<div className='contact-form__sender'>
							<input
								type='text'
								name='username'
								id='username'
								placeholder='Name'
							/>
						</div>
						<div className='contact-form__sender'>
							<input
								className='w-100p'
								type='email'
								name='email'
								id='email'
								placeholder='Email'
							/>
						</div>
					</div>
					<div className='contact-form__row contact-form__subject'>
						<input
							type='text'
							name='subject'
							id='subject'
							placeholder='Title'
						/>
					</div>
					<div className='contact-form__row contact-form__message'>
						<textarea
							name='message'
							id='message'
							placeholder='Message'
							defaultValue={""}
						/>
					</div>
					<div className='contact-form__row contact__btn-send'>
						<input
							type='submit'
							name='send'
							id='send-btn'
							defaultValue='Send'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
