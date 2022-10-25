import React from 'react';

import * as S from './styled';

interface IInput {
	id: string;
	type: React.HTMLInputTypeAttribute;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	error?: any;
}

function Input({ id, type, onChange, placeholder, error }: IInput) {
	return (
		<>
			<S.Input
				id={id}
				type={type}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && error}
		</>
	);
}

export { Input };
