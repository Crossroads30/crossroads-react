import styled from 'styled-components'
import { SlClose } from 'react-icons/sl'
import { useEffect } from 'react'

const Modal = ({ isModal, setIsModal, url, clearUrl }) => {

		useEffect(() => {
			if (isModal) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'unset'
			}
		}, [isModal])

	return (
		<Wrapper>
			<div className={isModal ? 'container show-modal' : 'container'}>
				<div className='modal-wrapper '>
					<SlClose
						className='close-modal'
						onClick={() => {
							setIsModal(false)
							clearUrl('')
						}}
					/>
					<div className='modal-content'>
						<iframe
							className='iframe'
							src={url}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
							allowFullScreen='1'
						></iframe>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
export default Modal

const Wrapper = styled.div`
	.container {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		z-index: -1;
		opacity: 0;
		transition: var(--transition);
		width: 100%;
	}
	.modal-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1100px;
		margin: 2rem auto;
		padding: 2rem;
	}
	.show-modal {
		z-index: 99;
		opacity: 1;
	}
	.modal-content {
		position: relative;
		width: 100%;
		padding-top: 56.25%;
	}
	.iframe {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.close-modal {
		color: var(--clr-grey-9);
		width: 40px;
		height: 40px;
		cursor: pointer;
		align-self: flex-end;
		margin-bottom: 0.5rem;
	}
	@media screen and (min-width: 425px) {
		.modal-wrapper {
			margin-top: 5rem;
		}
	}
	@media screen and (min-width: 768px) {
		.modal-wrapper {
			margin-top: 7rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.modal-wrapper {
			margin-top: 4rem;
		}
	}
`
