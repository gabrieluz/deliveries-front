import { FormikValues } from 'formik';
import { CreateClient } from '../../services/api';
import * as S from './styles';

function Register() {
	const submit = (e: FormikValues) => {
		console.log('e', e);

		const { username, password } = e;
		CreateClient({ username, password }).then(res => console.log('ooad', res));
	};

	return (
		<S.Container>
			<S.Content
				initialValues={{ username: '', password: '' }}
				onSubmit={submit}
			>
				{({ handleChange, handleSubmit }) => (
					<S.FormContainer>
						<h1>Register</h1>

						<S.FormContent>
							<S.Input
								id='username'
								type='text'
								onChange={handleChange}
								placeholder='Username'
							/>
							<S.Input
								id='password'
								type='text'
								onChange={handleChange}
								placeholder='Senha'
							/>
						</S.FormContent>

						<S.Button type='submit' onClick={() => handleSubmit()}>
							Cadastrar
						</S.Button>
					</S.FormContainer>
				)}
			</S.Content>
		</S.Container>
	);
}

export { Register };
