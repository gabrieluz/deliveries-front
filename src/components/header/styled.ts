import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	height: 75px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	display: flex;
	gap: 1rem;
`;

export const Link = styled(RouterLink)`
	font-size: 400;
	text-transform: uppercase;
	font-weight: bold;
	color: #241c1c;

	text-decoration: none;

	:hover {
		text-decoration: underline;
	}
`;
