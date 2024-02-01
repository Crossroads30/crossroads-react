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
	li a {
		text-decoration: none;
		color: var(--clr-white);
		text-shadow: 3px 4px 6px var(--clr-black);
		font-size: 1.2rem;

		padding: 2px 10px;
		border-radius: 10px;
		background-color: transparent;
		border-bottom: 5px solid transparent;
		border-right: 3px solid transparent;
	}
	.active {
		border-bottom: 5px solid red;
		/* border-right: 3px solid red; */
		padding: 2px 10px;
		border-radius: 10px;
		pointer-events: none;
		background-color: var(--clr-rand);
	}

	.nav-link a:hover {
		padding: 2px 10px;
		border-radius: 10px;
		background-color: var(--clr-rand-1);
	}
	@media screen and (min-width: 1024px) {
		.nav-link {
			text-align: center;
		}
		.nav-links {
			width: 580px;
			display: flex;
			justify-content: space-between;
		}
	}
`
