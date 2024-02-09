import styled from "styled-components"
import background from '../assets/bgrs/page-bgrs/news-bgr.png'

const News = () => {
  return (
		<Wrapper>
			<div className='height section-center flex center'>
				<p>Выбери свой собственный путь...</p>
			</div>
		</Wrapper>
	)
}
export default News

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.center {
		justify-content: center;
    align-items: flex-start;
	}
	p {
		color: var(--clr-grey-9);
		text-shadow: 1px 2px 4px #000000;
    font-size: 2rem;
    margin-top: 15rem;
	}
`