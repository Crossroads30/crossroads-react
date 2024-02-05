import styled from 'styled-components'
import { videos } from '../data'
import background from '../assets/bgrs/video-bgr.jpg'

const Videos = () => {
	return (
		<Wrapper>
			<div className='height section-center section'>
				<div className='content'>
					{videos.map(video => {
						const { id, name, url, src } = video
						return (
							<div
								key={id}
								className='video'
								style={{
									background: `url(${src}) no-repeat center center / cover`,
								}}
							>
								<h3>{name}</h3>
							</div>
						)
					})}
				</div>
			</div>
		</Wrapper>
	)
}
export default Videos

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.section {
		display: flex;
		align-items: center;
    justify-content: center;
	}
	.content {
		margin: 5rem 0 5rem;
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		justify-items: center;
		row-gap: 1rem;
		column-gap: 2rem;
    width: 100%
	}
	.video {
		display: flex;
		width: 14rem;
		height: 9rem;
		padding: 5px;
	}
	h3 {
		color: var(--clr-grey-10);
		text-shadow: 1px 2px 4px #000000;
		font-size: 0.8rem;
		align-self: flex-end;
	}
	@media screen and (min-width: 425px) {
		.video {
			width: 20rem;
			height: 13rem;
			padding: 5px;
		}
	}
	@media screen and (min-width: 768px) {
		.content {
			margin-top: 5rem;
			margin-bottom: 2rem;
			grid-template-columns: repeat(2, 1fr);
		}
		.video {
			width: 17rem;
			height: 9rem;
			padding: 5px;
		}
	}
	@media screen and (min-width: 1024px) {
		.content {
			grid-template-columns: repeat(3, 1fr);
			row-gap: 2rem;
			column-gap: 3rem;
			margin-top: 5rem;
		}
		.video {
			width: 16rem;
			height: 9rem;
			padding: 5px;
		}
		h3 {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 1240px) {
		.content {
			grid-template-columns: repeat(4, 1fr);
			column-gap: 1rem;
			margin-top: 4rem;
			margin-bottom: 2rem;
		}
		.video {
			width: 16rem;
			height: 10rem;
			padding: 5px;
		}
		h3 {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 1560px) {
		.content {
			margin-top: 6rem;
		}
		.video {
			width: 20rem;
			height: 12rem;
			padding: 10px;
		}
		h3 {
			font-size: 0.8rem;
		}
	}
`
