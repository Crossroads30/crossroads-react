import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { songs } from '../data'

const Song = () => {
	const { id } = useParams()

	const singleSong = songs.find(song => song.id === Number(id))
	const { src, url, text, title } = singleSong
	return (
		<Wrapper
			style={{ background: `url(${url}) no-repeat center center / cover` }}
		>
			<div className='section-center height'>
				<div className='content flex-column'>
					<h3>{title}</h3>
					<p className='text'>{text}</p>
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
	h3 {
		color: var(--clr-text);
		text-shadow: 2px 2px 4px var(--clr-black);
		margin-bottom: 1rem;
		padding: 0.5rem 1.5rem;
	}
	.text {
		color: var(--clr-text);
		background-color: var(--clr-grey-4);
		white-space: pre-line;
		text-align: center;
		font-size: 0.4rem;
		padding: 2rem;
		margin-bottom: 5vh;
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
