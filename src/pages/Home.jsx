import styled from 'styled-components'
import background from '../assets/bgrs/home-bgr.jpg'

const Home = () => {
	return (
		<Wrapper>
			<div className='section-center flex height'>
				<div className='text'>
					<p>
						Перекрёсток, иными словами перепутье - это своего рода граница между
						двумя мирами, места пересечения сил четырёх сторон света. Это тонкая
						граница, поэтому перекрёстки используют в различных магических
						ритуалаx.
					</p>
					<p>
						Существует поверье, что если пройтись по перекрёстку трижды и
						загадать при этом желание, то оно сбудется.
					</p>
					<p>
						Также перекресток - это своего рода выбор в каком направлении
						двигаться дальше - прямо, свернуть, а может стоит вернуться назад?<br/>
						Нам всем приходиться делать этот выбор, идя по своему жизненному
						пути, практически ежедневно.
					</p>
					<p>
						Написание музыки - это тоже своего рода 'перекресток' на котором ты
						делаешь выбор в каком направлении двигаться, выбирая сюжет, стиль и
						жанр. И вот когда ты понимаешь, что идешь в нужном направлении, в
						конце пути тебя ожидает непревзойденная эйфория от своего маленького
						музыкального мира что ты создал. В этом и есть настоящая магия!
					</p>
					<p>
						Всех приветствую! Данный проект является результатам моего
						творчества за последние 20 лет, я являюсь автором музыки, текстов, а
						так же монтажа всех видеороликов на этом сайте.
					</p>
					<p>
						На данном этапе все музыкальные композиции представленные здесь
						являются прототипами того, что может быть реализовано в будущем.
					</p>
					<p className='sign-small'>Автор проека - Яков Заболотный</p>
				</div>
				<p className='sign'>Автор проека - Яков Заболотный</p>
			</div>
		</Wrapper>
	)
}
export default Home

const Wrapper = styled.main`
	background: url(${background}) no-repeat center center;
	background-size: cover;
	.text {
		margin-top: calc(35px + 3vh);
		align-self: flex-start;
		padding: 1rem;
		background-color: var(--clr-grey-4);
		margin-bottom: 2vh;
	}
	.sign {
		display: none;
	}
	.sign-small {
		text-align: right;
		font-size: calc(0.1vw + 0.39vh + 1vmin);
	}
	p {
		font-size: calc(0.2vw + 0.6vh + 1vmin);
		color: var(--clr-text);
		text-shadow: 1px 2px 4px #000000;
	}
	p:last-child::first-letter {
		color: var(--clr-text);
	}
	p::first-letter {
		font-size: 110%;
		margin-right: 1px;
		color: rgb(233, 198, 101);
	}
	.sign-small {
		margin-bottom: 0;
		text-align: center;
	}
	p:nth-child(6) {
		margin-bottom: 1.8rem;
	}
	@media screen and (min-width: 768px) {
		.text {
			margin-top: calc(50px + 3vh);
		}
		p {
			font-size: calc(0.22vw + 0.6vh + 1vmin);
		}
	}
	@media screen and (min-width: 1024px) {
		.text {
			max-width: calc(42vw + 20vh + 1vmin);
			margin-top: calc(50px + 7vh);
		}
		p {
			font-size: calc(0.2vw + 0.4vh + 1vmin);
		}
		p:nth-child(6) {
			margin-bottom: 0;
		}
		.sign {
			display: block;
			align-self: end;
			margin-bottom: 3%;
			font-size: calc(0.1vw + 0.39vh + 1vmin);
		}
		.sign-small {
			display: none;
		}
	}
`
