import { FaRegCirclePlay } from 'react-icons/fa6'
import { FaRegCirclePause } from 'react-icons/fa6'
import styled from 'styled-components'
import track from '../assets/music/track-1.mp3'
import { useDispatch, useSelector } from 'react-redux'
import {
	setPause,
	setPlay,
} from '../features/audio/audioSlice'
import { useEffect, useRef, useState } from 'react'

const AudioControls = () => {
	const [trackProgress, setTrackProgress] = useState(0)

	const { isPlaying} = useSelector(store => store.audio)
	const dispatch = useDispatch()

	const audioRef = useRef(new Audio(track))
	const intervalRef = useRef()
	const { duration } = audioRef.current

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current)

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				audioRef.current.pause()
				setTrackProgress(0)
				dispatch(setPause())
			} else {
				setTrackProgress(audioRef.current.currentTime)
			}
		}, [1000])
	}

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play()
			startTimer()
		} else {
			clearInterval(intervalRef.current)
			audioRef.current.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause()
			clearInterval(intervalRef.current)
		}
	}, [])

	const onScrub = value => {
		// Clear any timers already running
		clearInterval(intervalRef.current)
		audioRef.current.currentTime = value
		setTrackProgress(audioRef.current.currentTime)
	}

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			dispatch(setPlay())
		}
		startTimer()
	}

	return (
		<Wrapper>
			{!isPlaying ? (
				<FaRegCirclePlay className='play' onClick={() => dispatch(setPlay())} />
			) : (
				<FaRegCirclePause
					className='pause'
					onClick={() => dispatch(setPause())}
				/>
			)}
			<input
				type='range'
				value={trackProgress}
				step='1'
				min='0'
				max={duration ? duration : `${duration}`}
				className='progress'
				onChange={e => onScrub(e.target.value)}
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
			/>
		</Wrapper>
	)
}
export default AudioControls

const Wrapper = styled.div`
	margin-bottom: 1rem;
	position: fixed;
	top: 6rem;
	.play,
	.pause {
		color: var(--clr-grey-6);
		width: 40px;
		height: 40px;
	}
`
