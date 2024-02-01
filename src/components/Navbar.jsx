import styled from 'styled-components'
import Links from './Links'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ setSidebarOpen }) => {
	return (
		<Wrapper>
			<div className='section-center flex'>
				<h1>перекрёсток</h1>
				<div className='nav-links flex'>
					<Links />
				</div>
				<GiHamburgerMenu
					className='burger'
					onClick={() => setSidebarOpen(true)}
				/>
			</div>
			<hr />
		</Wrapper>
	)
}

export default Navbar

const Wrapper = styled.header`
	/* background-color: var(--clr-sepia); */
	background-color: var(--clr-grey-1);
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	h1 {
		font-size: 0.8rem;
		text-transform: uppercase;
		text-shadow: 3px 3px 6px var(--clr-black);
		color: var(--clr-grey-10);
		padding: 5px 0;
	}
	.nav-links {
		display: none;
	}
	.burger {
		cursor: pointer;
		color: var(--clr-grey-10);
	}
	@media screen and (min-width: 768px) {
		h1 {
			font-size: 1.2rem;
			text-transform: uppercase;
		}
		.burger {
			width: 25px;
			height: 25px;
		}
	}
	@media screen and (min-width: 1024px) {
		h1 {
			font-size: 1.2rem;
			text-transform: uppercase;
		}
		.burger {
			display: none;
		}
		.nav-links {
			display: flex;
		}
	}
`
