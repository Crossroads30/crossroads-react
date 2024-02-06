import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { albums } from '../data'


const Album = () => {
	const { id } = useParams()
	const album = albums.find(album => album.id === id)
	const { title, cover, songs } = album

	return (
		<Wrapper>
			<div className='height section-center'>
				<div className='container'>
					<div className='author'>
						<div className='context'>
							<img
								src={cover}
								alt=''
								className='cover'
							/>
							<ul className='songs'></ul>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
export default Album

const Wrapper = styled.main`
	.container {
		margin-top: 5rem;
	}
	.cover {
		width: 300px;
		height: 300px;
    border: 1px solid var(--clr-grey-4);
	}
`
