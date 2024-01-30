import styled from 'styled-components'
import { links } from '../data'
import { NavLink } from 'react-router-dom'

const Links = () => {
	return (
		<Wrapper>
			{links.map(link => {
				return (
					<li key={link.id}>
						<NavLink to={link.url}>{link.text}</NavLink>
					</li>
				)
			})}
		</Wrapper>
	)
}
export default Links

const Wrapper = styled.ul`
	width: 500px;
	display: none;
	li a {
		text-decoration: none;
		color: #000;
		font-size: 1.2rem;
	}
	.active {
		color: var(--clr-gold);
		text-shadow: 1px 1px 1px #af0909;
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
	}
`
