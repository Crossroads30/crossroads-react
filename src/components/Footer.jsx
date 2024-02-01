import styled from 'styled-components'
import { SlSocialYoutube } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<Wrapper>
			<div className='section-center flex footer'>
				<p className='text'>COPYRIGHT © PERECRESTOKMUSIC {year}</p>
				<Link
					to='https://www.youtube.com/@user-sr2nv1yl6h'
					className='youTube-link'
				>
					<p>ME ON YOU TUBE</p>
					<SlSocialYoutube className='logo' />
				</Link>
			</div>
		</Wrapper>
	)
}
export default Footer

const Wrapper = styled.footer`
	background-color: var(--clr-grey-2);
	line-height: 1em;
	.footer {
		height: 3rem;
	}
	p {
		margin-bottom: 0;
		font-size: 7px;
	}
	.youTube-link {
		display: flex;
		color: var(--clr-grey-8);
		align-items: center;
	}
	.youTube-link:hover {
		text-decoration: underline;
	}
	.logo {
		margin-left: 3px;
		color: var(--clr-grey-8);
		margin-bottom: 0.5px;
	}
	@media screen and (min-width: 425px) {
		p {
			font-size: 0.6rem;
		}
		.logo {
			height: 20px;
			width: 20px;
			margin-left: 3px;
			margin-bottom: 3px;
		}
	}
	@media screen and (min-width: 768px) {
		.footer {
			height: 3rem;
		}
		p {
			font-size: 0.7rem;
		}
		.logo {
			height: 25px;
			width: 25px;
			margin-left: 8px;
			margin-bottom: 3px;
		}
	}
	@media screen and (min-width: 1024px) {
		.footer {
			height: 4rem;
		}
		p {
			font-size: 1rem;
		}
		.logo {
			height: 30px;
			width: 30px;
		}
		.youTube-link p {
			margin-top: 1px;
		}
	}
`
