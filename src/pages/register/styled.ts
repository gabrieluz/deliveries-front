import styled from 'styled-components';
import { Formik } from 'formik';

import { Input as InputComponent } from '../../components/input';
import { Button as ButtonComponent } from '../../components/button';

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

export const FormContent = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	gap: 1rem;
`;

export const Input = styled(InputComponent)``;

export const Button = styled(ButtonComponent)``;

export const CheckboxContent = styled.div`
	width: 100%;
	display: flex;

	gap: 0.5rem;
`;

export const Checkbox = styled.input``;

export const CheckboxLabel = styled.p``;
