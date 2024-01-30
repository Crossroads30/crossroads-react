import styled from 'styled-components'
import { links } from '../data'
import { NavLink } from 'react-router-dom'

const Links = () => {
	return (
		<Wrapper>
			<ul className='nav-links'>
				{links.map(link => {
					return (
						<li key={link.id} className='nav-link'>
							<NavLink to={link.url}>{link.text}</NavLink>
						</li>
					)
				})}
			</ul>
		</Wrapper>
	)
}
export default Links

const Wrapper = styled.div`
	.nav-links {
		width: 500px;
	}
	li a {
		text-decoration: none;
		color: #000;
		font-size: 1.2rem;
	}
	.active {
		color: var(--clr-gold);
		text-shadow: 1px 1px 1px #af0909;
		pointer-events: none;
	}
	@media screen and (min-width: 1024px) {
		.nav-links {
			width: 500px;
			display: flex;
			justify-content: space-between;
		}
	}
`
