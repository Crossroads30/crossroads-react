import styled from 'styled-components'
import { songs } from '../appData/songs-data'
import { Link } from 'react-router-dom'
import background from '../assets/bgrs/page-bgrs/songs-bgr.jpg'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const Songs = () => {
	const [isLoad, setIsLoad] = useState(false)

	const img = new Image()
	img.src = background
	img.onload = () => setIsLoad(true)

	// useEffect(() => {
	// 	const img = new Image()
	// 	img.src = background
	// 	img.onload = () => setIsLoad(true)
	// }, [])

	if (!img.onload) {
		return <Loader />
	}
	return (
		<Wrapper>
			<div className='section section-center flex height'>
				<ul className='songs flex-column'>
					{songs.map(song => {
						return (
							<li key={song.id} className='song'>
								<Link to={`/songs/${song.id}`}>
									<p>{song.title}</p>
									<hr className='hr-1' />
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</Wrapper>
	)
}
export default Songs

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.section {
		justify-content: center;
		align-items: flex-start;
	}
	.songs {
		margin-top: calc(35px + 5vh);
		align-items: center;
		background-color: var(--clr-grey-1);
		padding: 1.7rem;
		max-width: calc(36vw + 20vh + 1vmin);
		margin-bottom: calc(2%);
	}
	.song {
		position: relative;
		margin-bottom: 0.7rem;
		border-bottom: 1px solid transparent;
		transition: transform 250ms ease-in-out;
	}
	.song p {
		font-size: calc(0.2vw + 0.6vh + 1vmin);
		color: var(--clr-grey-10);
		text-align: center;
		margin-bottom: 0;
		text-transform: capitalize;
		/* padding: 0 20px; */
	}
	.songs a:hover .hr-1 {
		width: 100%;
		visibility: visible;
		transform: scaleX(1);
		/* transition: all ease-in-out; */
	}
	.song:last-child {
		margin-bottom: 0;
	}
	.hr-1 {
		height: 1px;
		width: 0;
		background-color: var(--clr-grey-8);
		position: absolute;
		left: 0;
		bottom: -5px;
		transform: scaleX(0);
		transition: transform 250ms;
		/* transition: var(--transition); */
		visibility: hidden;
	}
	@media screen and (min-width: 768px) {
		.songs {
			margin-top: calc(50px + 5vh);
			width: calc(25vw + 20vh + 1vmin);
		}
		.song p {
			font-size: calc(0.3vw + 0.3vh + 1vmin);
		}
	}
	@media screen and (min-width: 1024px) {
		.songs {
			margin-top: calc(65px + 4vh);
			width: calc(16vw + 20vh + 1vmin);
		}
		.song p {
			font-size: calc(0.1vw + 0.3vh + 1vmin);
		}
	}
`
