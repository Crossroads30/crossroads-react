import styled from 'styled-components'
import { SlSocialYoutube } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<Wrapper>
			<div className='section-center flex footer'>
				<div className='text'>
					<p>COPYRIGHT © PERECRESTOKMUSIC {year}</p>
				</div>
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
	background-color: var(--clr-sepia);
	.footer {
		height: 2rem;
		p {
			margin-bottom: 0;
			font-size: 0.45rem;
		}
	}
	.text {
		display: flex;
		align-items: flex-end;
		height: 14px;
	}
	.youTube-link {
		display: flex;
		color: var(--clr-grey-1);
		align-items: center;
		p {
			align-self: flex-end;
		}
	}
	.youTube-link:hover {
		text-decoration: underline;
	}
	.logo {
		margin-left: 4px;
	}

	@media screen and (min-width: 768px) {
		.footer {
			height: 4rem;
			p {
				font-size: 1rem;
			}
		}
		.logo {
			height: 25px;
			width: 25px;
			margin-left: 8px;
		}
		.text {
			height: 25px;
		}
	}
	@media screen and (min-width: 1024px) {
		.footer {
			height: 5rem;
			p {
				font-size: 1.2rem;
			}
		}
		.logo {
			height: 30px;
			width: 30px;
		}
		.youTube-link p {
			margin-top: 1px;
		}
		.text {
			height: 30px;
		}
	}
`
