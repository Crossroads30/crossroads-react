import styled from 'styled-components'
import { links } from '../data'
import { NavLink } from 'react-router-dom'

const Links = () => {
	return (
		<Wrapper>
			{links.map(link => {
				return (
					<li key={link.id}>
						<NavLink to={link.url} >
							{link.text}
						</NavLink>
					</li>
				)
			})}
		</Wrapper>
	)
}
export default Links

const Wrapper = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 500px;
	li a {
		text-decoration: none;
		color: #000;
		font-size: 1.2rem;
	}
	.active {
		color: red;
	}
`
