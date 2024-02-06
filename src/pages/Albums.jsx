import styled from 'styled-components'
import background from '../assets/bgrs/page-bgrs/home-bgr.jpeg'
import cover1 from '../assets/bgrs/album-covers/perekrestok-cover.png'
import cover2 from '../assets/bgrs/album-covers/man-on-moon-cover.png'
import { albums } from '../data'
import { Link } from 'react-router-dom'

const Albums = () => {
	return (
		<Wrapper>
			<div className='height section-center section flex'>
				<div className='flex-column container'>
					{albums.map(album => {
						const { id, title, cover } = album
						return (
							<Link
								key={id}
								to={`/albums/${id}`}
								className='wrapper flex-column'
							>
								<h4>{title}</h4>
								<div
									className='album'
									style={{
										background: `url(${cover}) no-repeat center center / cover`,
									}}
								></div>
							</Link>
						)
					})}
				</div>
			</div>
		</Wrapper>
	)
}
export default Albums

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.section {
		justify-content: center;
	}
	.container {
		width: 100%;
		align-items: center;
	}
	.wrapper {
		width: 230px;
		height: 250px;
		background-color: var(--clr-grey-4);
		padding: 10px 15px 15px;
		margin-bottom: 2rem;
	}
	.album {
		background-size: cover;
		width: 200px;
		height: 200px;
	}
	h4 {
		color: var(--clr-grey-10);
	}
	@media screen and (min-width: 425px) {
		.wrapper {
			width: 300px;
			height: 320px;
			background-color: var(--clr-grey-4);
			padding: 15px 25px 25px;
		}
		.album {
			background-size: cover;
			width: 250px;
			height: 250px;
		}
	}
	@media screen and (min-width: 768px) {
		.container {
			flex-direction: row;
			justify-content: center;
		}
		.wrapper {
			margin-right: 2rem;
			margin-bottom: 0;
		}
		.wrapper:last-child {
			margin-right: 0;
		}
	}
	@media screen and (min-width: 1024px) {
	}
`
