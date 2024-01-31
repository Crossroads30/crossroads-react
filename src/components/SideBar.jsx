import styled from 'styled-components'
import Links from './Links'
import { CgClose } from 'react-icons/cg'
import React from 'react'

const SideBar = ({ setSidebarOpen }) => {
	return (
		<Wrapper>
			<div className='sidebar-container'>
				<div className='content'>
					<CgClose
						className='close-btn'
						onClick={() => setSidebarOpen(false)}
					/>
					<Links />
				</div>
			</div>
		</Wrapper>
	)
}
export default SideBar

const Wrapper = styled.aside`
	/* @media (min-width: 992px) {
		display: none;
	} */
	.sidebar-container {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		opacity: 0;
		transition: var(--transition);
	}
	.show-sidebar {
		z-index: 99;
		opacity: 1;
	}
	.content {
		background: var(--clr-white);
		width: var(--fluid-width);
		height: 95vh;
		border-radius: var(--borderRadius);
		padding: 4rem 2rem;
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border-color: transparent;
		font-size: 2rem;
		color: var(--clr-red-dark);
		cursor: pointer;
	}
	.nav-links {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
	}
	.nav-link {
		align-self: center;
		color: #000;
		padding: 1rem 0;
		text-transform: capitalize;
		transition: var(--transition);
	}
	.nav-link a:hover {
		color: var(--clr-grey-5);
	}
`