import React, { useState } from 'react';

import { toast } from 'react-toastify';

import * as Yup from 'yup';

import { FormikValues } from 'formik';
import { CreateUser } from '../../services/api';
import { FormContainer } from '../../components/form';

import * as S from './styled';

const validationSchema = Yup.object().shape({
	username: Yup.string().required(),
	password: Yup.string().required(),
});

function Register() {
	const [isLoading, setIsLoading] = useState(false);

	const initialValues = { isDeliveryman: false, username: '', password: '' };

	const submit = (e: FormikValues) => {
		setIsLoading(true);

		const { username, password, isDeliveryman } = e;

		CreateUser({ username, password }, isDeliveryman)
			.then(res => {
				toast.success(res.data.message);
				toast.info('Redirecionando para login');
				setTimeout(() => {
					window.location.href = '/login';
				}, 3000);
			})
			.catch(err => {
				toast.error(err.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<S.Container>
			<S.Content
				initialValues={initialValues}
				onSubmit={submit}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, isValid }) => (
					<FormContainer pageTitle='Cadastro'>
						<S.FormContent>
							<S.Input
								id='username'
								type='text'
								onChange={handleChange}
								placeholder='Username'
							/>
							<S.Input
								id='password'
								type='password'
								onChange={handleChange}
								placeholder='Senha'
							/>
							<S.CheckboxContent>
								<S.Checkbox
									id='isDeliveryman'
									type='checkbox'
									onChange={handleChange}
									defaultChecked={initialValues.isDeliveryman}
								/>
								<S.CheckboxLabel>Sou entregador</S.CheckboxLabel>
							</S.CheckboxContent>
						</S.FormContent>

						<S.Button
							type='submit'
							onClick={() => handleSubmit()}
							disabled={!isValid || isLoading}
							isLoading={isLoading}
							label='Cadastrar'
						/>
					</FormContainer>
				)}
			</S.Content>
		</S.Container>
	);
}

export { Register };
