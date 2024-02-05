import styled from 'styled-components'
import { SlClose } from 'react-icons/sl'

const Modal = ({ isModal, setIsModal }) => {
	return (
		<Wrapper>
			<div className={isModal ? 'container show-modal' : 'container'}>
				<div className='modal-wrapper '>
					<SlClose className='close-modal' onClick={()=>setIsModal(false)} />
					<div className='modal-content'>
						<iframe
							className='iframe'
							src='https://www.youtube.com/embed/fyMYqtFbAeY?autoplay=1'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen='0'
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
		margin: 0 auto;
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
`