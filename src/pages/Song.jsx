import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { songs } from '../data'
import AudioPlayer from '../components/AudioPlayer'

const Song = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	
	const singleSong = songs.find(song => song.id === Number(id))
	const { src, url, text, title } = singleSong

	return (
		<Wrapper
			style={{ background: `url(${url}) no-repeat center center / cover` }}
		>
			<div className='section-center height'>
				<AudioPlayer />
				<div className='content flex-column'>
					<p className='text'>{text}</p>
					<button
						className='btn'
						type='button'
						onClick={() => navigate('/songs')}
					>
						назад
					</button>
				</div>
			</div>
		</Wrapper>
	)
}
export default Song

const Wrapper = styled.main`
	.content {
		margin-top: calc(35px + 3vh);
		align-items: center;
		padding: 0;
	}
	.text {
		color: var(--clr-text);
		background-color: var(--clr-grey-4);
		white-space: pre-line;
		text-align: center;
		font-size: 0.4rem;
		padding: 2rem;
		margin-bottom: 3vh;
	}
	@media screen and (min-width: 425px) {
		.text {
			font-size: 0.6rem;
		}
	}
	@media screen and (min-width: 768px) {
		.content {
			margin-top: calc(50px + 4vh);
		}
		.text {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.content {
			margin-top: calc(65px + 3vh);
		}
		.text {
			font-size: 1rem;
		}
		h3 {
			font-size: 1.5rem;
		}
	}
`
