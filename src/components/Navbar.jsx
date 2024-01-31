import styled from 'styled-components'
import Links from './Links'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({ setSidebarOpen }) => {
	return (
		<Wrapper>
			<div className='section-center flex header'>
				<h1>перекрёсток</h1>
				<div className='nav-links flex'>
					<Links />
				</div>
				<GiHamburgerMenu className='burger' onClick={() => setSidebarOpen(true)} />
			</div>
		</Wrapper>
	)
}

export default Navbar

const Wrapper = styled.header`
	background-color: var(--clr-sepia);
	.header {
		height: 2rem;
		/* width: 90%; */
		h1 {
			font-size: 0.8rem;
			text-transform: uppercase;
			text-shadow: 1px 2px 3px #ff8801;
		}
		.nav-links {
			display: none;
		}
	}
	.burger {
		cursor: pointer;
	}
	@media screen and (min-width: 768px) {
		.header {
			height: 4rem;
			h1 {
				font-size: 1.2rem;
				text-transform: uppercase;
			}
			.burger {
				width: 25px;
				height: 25px;
			}
		}
	}
	@media screen and (min-width: 1024px) {
		.header {
			height: 5rem;
			h1 {
				font-size: 1.5rem;
				text-transform: uppercase;
			}
			.burger {
				display: none;
			}
			.nav-links {
				display: flex;
			}
		}
	}
`
