import styled from 'styled-components';

export const Button = styled.button`
	width: 100%;

	background-color: #241c1c;
	color: #f5f4f2;

	border-radius: 50px;

	border: 0;
	padding: 1rem;

	font-weight: bold;

	text-transform: uppercase;

	:hover {
		cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};
	}
`;
