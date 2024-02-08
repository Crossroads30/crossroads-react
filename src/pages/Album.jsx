import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { albums } from '../appData/albums-data'
import { useDispatch } from 'react-redux'
import { setAlbumName, setAlbumOn } from '../features/appSlice'
import background from '../assets/bgrs/page-bgrs/albums-bgr.jpeg'

const Album = () => {
	const dispatch = useDispatch()
	const { id } = useParams() // name of the album from query string
	const album = albums.find(album => album.id === id)
	const { title, cover, songs } = album
	const navigate = useNavigate()

	return (
		<Wrapper>
			<div className='height section-center'>
				<div className='container flex-column'>
					<div className='context'>
						<ul className='songs'>
							{songs.map((song, index) => {
								return (
									<li key={index} className='song flex'>
										<span>{index + 1}.</span>
										<p
											className='song-name'
											onClick={() => {
												navigate(`/songs/${song.id}`)
												dispatch(setAlbumOn())
												dispatch(setAlbumName(id)) // name of the album from query string
											}}
										>
											{song.name}
										</p>
									</li>
								)
							})}
						</ul>
						<div className='cover'>
							<h2>{title}</h2>
							<img src={cover} alt='album cover' />
						</div>
					</div>
					<button
						type='button'
						className='btn'
						onClick={() => {
							navigate(`/albums`)
						}}
					>
						назад
					</button>
				</div>
			</div>
		</Wrapper>
	)
}
export default Album

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.container {
		margin-top: 7vh;
		align-items: center;
	}
	.cover {
		order: 1;
		margin-bottom: 1rem;
		img {
			width: 230px;
			height: 230px;
		}
	}
	.context {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border-top: 1px solid var(--clr-grey-4);
		margin-bottom: 2rem;
		background-color: var(--clr-grey-0);
	}
	.songs {
		order: 2;
	}
	.song {
		justify-content: flex-start;
		color: var(--clr-grey-2);
		font-size: 0.7rem;
		margin-bottom: 0.3rem;
		border-bottom: 1px solid transparent;
		transition: var(--transition);
		span {
			width: 0.5rem;
			color: var(--clr-grey-10);
			text-shadow: 3px 3px 6px var(--clr-black);
		}
	}
	h2 {
		font-size: 0.8rem;
		margin-bottom: 0.5rem;
		color: var(--clr-grey-8);
		text-shadow: 3px 3px 6px var(--clr-black);
	}
	.song-name {
		margin-bottom: 0;
		color: var(--clr-grey-10);
		text-shadow: 3px 3px 6px var(--clr-black);
		text-transform: uppercase;
		margin-left: 0.5rem;
		cursor: pointer;
		line-height: 18px;
	}
	.song:hover {
		border-bottom: 1px solid var(--clr-grey-10);
	}
	@media screen and (min-width: 425px) {
		.container {
			margin-top: 10vh;
		}
		.cover {
			img {
				width: 300px;
				height: 300px;
			}
		}
		.song {
			font-size: 1rem;
			margin-bottom: 0.5rem;
			span {
				width: 1.5rem;
				color: var(--clr-grey-10);
				text-shadow: 3px 3px 6px var(--clr-black);
			}
		}
		h2 {
			font-size: 1.1rem;
			margin-bottom: 0.5rem;
			text-shadow: 3px 3px 6px var(--clr-black);
		}
		.song-name {
			margin-left: 0.1rem;
		}
	}
	@media screen and (min-width: 768px) {
		.container {
			margin-top: 12vh;
			align-items: center;
		}
		.cover {
			margin-left: 2rem;
			order: 2;
			margin-bottom: 0;
			img {
				width: 300px;
				height: 300px;
			}
		}
		.context {
			flex-direction: row;
		}
		.song {
			font-size: 0.8rem;
			span {
				width: 1rem;
			}
		}
		h2 {
			margin-bottom: 0.2rem;
		}
		.song-name {
			margin-left: 0.5rem;
			line-height: 10px;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			margin-top: 12vh;
		}
		.cover {
			margin-left: 4rem;
			order: 2;
			margin-bottom: 0;
			img {
				width: 350px;
				height: 350px;
			}
		}
		.context {
			padding: 1.5rem;
		}
		.song {
			font-size: 1rem;
			margin-bottom: 0.6rem;
		}
	}
`
