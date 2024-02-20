import styled from 'styled-components'
import background from '../assets/bgrs/page-bgrs/news-bgr.png'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

const News = () => {
	const [isLoad, setIsLoad] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.src = background
		img.onload = () => setIsLoad(true)
	}, [])

	if (!isLoad) {
		return <Loader />
	}
	return (
		<Wrapper>
			<div className='height section-center flex-column center'>
				<p className='text'>Выбери свой собственный путь...</p>
				<p className='contacts'>crossroads30@mail.ru</p>
			</div>
		</Wrapper>
	)
}
export default News

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.center {
		justify-content: space-between;
	}
	p {
		color: var(--clr-grey-9);
		text-shadow: 1px 2px 4px #000000;
		text-align: center;
	}
	.text {
		font-size: 2rem;
		margin-top: 10rem;
	}
	.contacts {
		margin-bottom: 0;
		font-size: 1.3rem;
	}
`
