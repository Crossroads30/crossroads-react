import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { songs } from '../appData/songs-data'
import AudioPlayer from '../components/AudioPlayer'
import { GiSoundOn } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { setAlbumName, setAlbumOff } from '../features/appSlice'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const Song = () => {
	const [isLoad, setIsLoad] = useState(false)
	const { isAlbum, albumName } = useSelector(store => store.app)
	const dispatch = useDispatch()
	const [isAudio, setIsAudio] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	const singleSong = songs.find(song => song.id === Number(id))
	const { src, url, text, title } = singleSong

	useEffect(() => {
		const img = new Image()
		img.src = url
		img.onload = () => setIsLoad(true)
	}, [])

	if (!isLoad) {
		return <Loader />
	}

	return (
		<Wrapper
			style={{ background: `url(${url}) no-repeat center center / cover` }}
		>
			<div className='section-center height'>
				<div className='content flex-column'>
					<div className='text-container flex-column'>
						<div className='player flex'>
							<GiSoundOn
								className='sound'
								onClick={() => setIsAudio(!isAudio)}
							/>
							{isAudio && <AudioPlayer isAudio={isAudio} source={src} />}
						</div>
						<p className='text'>{text}</p>
						<button
							className='btn back-btn'
							type='button'
							onClick={() => {
								if (isAlbum) {
									navigate(`/albums/${albumName}`)
									dispatch(setAlbumOff())
									dispatch(setAlbumName(''))
								} else {
									navigate('/songs')
									setIsAudio(false)
								}
							}}
						>
							назад
						</button>
					</div>
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
	.text-container {
		background-color: var(--clr-grey-4);
		margin-bottom: 3vh;
	}
	.text {
		color: var(--clr-text);
		/* background-color: var(--clr-grey-4); */
		white-space: pre-line;
		text-align: center;
		font-size: 0.4rem;
		padding: 2rem;
		margin-bottom: 3vh;
	}
	.sound {
		height: 30px;
		width: 30px;
		align-self: start;
		color: var(--clr-grey-7);
		margin-bottom: 1rem;
		cursor: pointer;
		padding: 5px;
		border: 1px solid;
	}
	.sound:hover {
		color: var(--clr-grey-9);
	}
	.back-btn {
		align-self: center;
	}
	@media screen and (min-width: 425px) {
		.text {
			font-size: 0.6rem;
		}
		.sound {
			height: 40px;
			width: 40px;
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
