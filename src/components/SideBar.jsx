import styled from 'styled-components'
import Links from './Links'
import { CgClose } from 'react-icons/cg'
import React from 'react'

const SideBar = ({ setSidebarOpen, isSidebarOpen }) => {
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<CgClose
						className='close-btn'
						onClick={() => setSidebarOpen(false)}
					/>
					<Links
						setSidebarOpen={setSidebarOpen}
						isSidebarOpen={isSidebarOpen}
					/>
				</div>
			</div>
		</Wrapper>
	)
}
export default SideBar

const Wrapper = styled.aside`
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
		background: var(--clr-grey-5);
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
		color: var(--clr-gold);
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
		background-color: transparent;
	}
	.active {
		background-color: transparent;
		border-bottom: 0;
		color: var(--clr-gold);
		text-shadow: 1px 1px 2px var(--clr-black);
	}
	@media screen and (min-width: 1024px) {
		.sidebar-container {
			display: none;
		}
	}
`
