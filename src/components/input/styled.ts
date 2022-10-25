import styled from 'styled-components';

export const Input = styled.input`
	width: 100%;

	background-color: #f5f4f2;
	color: #241c1c;

	border-radius: 50px;

	padding: 1rem;

	font-weight: bold;
	border: 0;

	text-transform: lowercase;
	::placeholder {
		text-transform: capitalize;
	}
`;

export const Label = styled.span`
	text-transform: capitalize;
`;
