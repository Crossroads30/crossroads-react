import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { FaRegCirclePlay } from 'react-icons/fa6'
import { FaRegCirclePause } from 'react-icons/fa6'

function AudioPlayer({ isAudio, source }) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	const audio = new Audio(source)
	const audioRef = useRef(audio)

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying])

	const handleTimeUpdate = () => {
		setCurrentTime(audioRef.current.currentTime)
		setDuration(audioRef.current.duration)
	}

	const handleSeek = e => {
		audioRef.current.currentTime = e.target.value
		setCurrentTime(audioRef.current.currentTime)
	}

	const formatDuration = durationSeconds => {
		const minutes = Math.floor(durationSeconds / 60)
		const seconds = Math.floor(durationSeconds % 60)
		const formattedSeconds = seconds.toString().padStart(2, '0')
		return `${minutes}:${formattedSeconds}`
	}

	useEffect(() => {
		setCurrentTime(0)
		setIsPlaying(false)
	}, [audioRef.current.ended])

	useEffect(() => {
		audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
		return () => {
			removeEventListener('timeupdate', handleTimeUpdate)
		}
	}, [])

	return (
		<Wrapper>
			<div className='control flex'>
				{!isPlaying ? (
					<FaRegCirclePlay
						className='play'
						onClick={() => setIsPlaying(true)}
					/>
				) : (
					<FaRegCirclePause
						className='pause'
						onClick={() => setIsPlaying(false)}
					/>
				)}
				<div className='time flex'>
					<span>{formatDuration(currentTime)}</span>/
					<span>{formatDuration(duration)}</span>
				</div>
			</div>
			<input
				type='range'
				min='0'
				max={duration}
				value={currentTime}
				onChange={handleSeek}
			/>
			<audio id='audio' preload='metadata' ref={audioRef} src={source} />
		</Wrapper>
	)
}

export default AudioPlayer

const Wrapper = styled.div`
	width: 120px;
	margin-right: 5px;
	.play,
	.pause {
		color: var(--clr-grey-7);
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	.control {
		color: var(--clr-grey-7);
		height: 20px;
	}
	.time {
		width: 80px;
	}
	input[type='range'] {
		/* removing default appearance */
		-webkit-appearance: none;
		appearance: none;
		/* creating a custom design */
		width: 100%;
		cursor: pointer;
		outline: none;
		/*  slider progress trick  */
		overflow: hidden;
		border-radius: 16px;
	}

	/* Track: webkit browsers */
	input[type='range']::-webkit-slider-runnable-track {
		height: 4px;
		background: var(--clr-grey-6);
		border-radius: 16px;
	}

	/* Track: Mozilla Firefox */
	input[type='range']::-moz-range-track {
		height: 8px;
		background: var(--clr-grey-6);
		border-radius: 16px;
	}

	/* Thumb: webkit */
	input[type='range']::-webkit-slider-thumb {
		/* removing default appearance */
		-webkit-appearance: none;
		appearance: none;
		/* creating a custom design */
		height: 8px;
		width: 8px;
		background-color: #fff;
		border-radius: 50%;
		/* border: 1px solid #fff; */
		/*  slider progress trick  */
		box-shadow: -407px 0 0 400px #f50;
	}

	/* Thumb: Firefox */
	input[type='range']::-moz-range-thumb {
		height: 8px;
		width: 8px;
		background-color: #fff;
		border-radius: 50%;
		/*  slider progress trick  */
		box-shadow: -407px 0 0 400px #f50;
	}
	@media screen and (min-width: 425px) {
		.play,
		.pause {
			color: var(--clr-grey-7);
			width: 30px;
			height: 30px;
			cursor: pointer;
		}
		.control {
			height: 30px;
		}
	}
	@media screen and (min-width: 768px) {
		.content {
			margin-top: calc(50px + 4vh);
		}
		.time {
			width: 80px;
		}
	}
	@media screen and (min-width: 1024px) {
		margin-bottom: 1rem;
		position: fixed;
		top: 5.8rem;
		width: 145px;
		left: 7vw;
		.control {
			color: var(--clr-grey-7);
			margin-bottom: 10px;
			background-color: var(--clr-grey-3);
			padding: 5px 8px 5px 5px;
			border-radius: 25px;
			height: 50px;
		}
		.play,
		.pause {
			color: var(--clr-grey-7);
			width: 40px;
			height: 40px;
			cursor: pointer;
		}
		input[type='range']::-webkit-slider-runnable-track {
			height: 8px;
		}
	}
		@media screen and (min-width: 1950px) {
			left: 27vw;
		}
`
