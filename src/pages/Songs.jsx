import styled from 'styled-components'
import { songs } from '../data'
import { Link } from 'react-router-dom'
import background from '../assets/bgrs/songs-bgr.jpg'
import background2 from '../assets/bgrs/songs-bgr2.jpg'

const Songs = () => {
	return (
		<Wrapper>
			<div className='section section-center flex height'>
				<div className='songs flex-column'>
					{songs.map(song => {
						return (
							<div key={song.id} className='song'>
								<Link to={`/songs/:${song.id}`}>
									<p>{song.title}</p>
								</Link>
							</div>
						)
					})}
				</div>
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
		align-items: center;
	}
	.songs {
		align-items: center;
		/* background-color: var(--clr-grey-4); */
	}
	.song {
		border-bottom: 1px solid var(--clr-white);
		width: 100%;
		text-align: center;
		margin-bottom: 1rem;
		p {
			font-size: 0.9rem;
			color: var(--clr-white);
			margin-bottom: 0;
		}
	}
	@media screen and (min-width: 768px) {
		.song p {
			font-size: .8rem;
		}
	}
	@media screen and (min-width: 1024px) {
		background: url(${background2}) no-repeat center center;
		background-size: cover;
	}
`
