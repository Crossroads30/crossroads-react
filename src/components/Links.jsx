import styled from 'styled-components'
import { links } from '../data'
import { NavLink } from 'react-router-dom'

const Links = ({ setSidebarOpen, isSidebarOpen }) => {
	return (
		<Wrapper>
			<ul className='nav-links'>
				{links.map(link => {
					return (
						<li key={link.id} className='nav-link'>
							<NavLink
								to={link.url}
								onClick={() => setSidebarOpen(false)}
							>
								{link.text}
							</NavLink>
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
		color: var(--clr-grey-10);
		text-shadow: 2px 2px 4px var(--clr-black);
		font-size: 1rem;

		padding: 2px 10px;
		border-radius: 10px;
		background-color: transparent;
	}
	.active {
		border-bottom: 3px solid var(--clr-gold);
		color: var(--clr-white);
		padding: 2px 10px;
		border-radius: 10px;
		/* pointer-events: none; */
		background-color: var(--clr-rand);
	}

	.nav-link a:hover {
		padding: 2px 10px;
		border-radius: 10px;
		background-color: var(--clr-rand);
	}
	@media screen and (min-width: 1024px) {
		.nav-link {
			text-align: center;
		}
		.nav-links {
			width: 500px;
			display: flex;
			justify-content: space-between;
		}
	}
`
