import styled from 'styled-components'

const Loader = () => {
	return (
		<Wrapper>
			<div className='section-center flex height'>
				<div className='loading'></div>
			</div>
		</Wrapper>
	)
}
export default Loader

const Wrapper = styled.main`
	background-color: var(--clr-grey-3);
`
