import styled from 'styled-components';
import { Formik } from 'formik';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Content = styled(Formik)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	gap: 2rem;
	background-color: #c8c4b7;

	padding: 3rem;
`;

export const FormContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	gap: 1rem;
`;

export const Input = styled.input`
	width: 100%;

	background-color: #f5f4f2;
	color: #241c1c;

	border-radius: 50px;

	padding: 1rem;

	font-weight: normal;
	border: 0;
`;

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
		cursor: pointer;
	}
`;
