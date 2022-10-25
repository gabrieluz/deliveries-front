import React from 'react';
import * as S from './styled';

interface IForm {
	pageTitle: string;
	children: React.ReactNode;
}

function FormContainer({ pageTitle, children }: IForm) {
	return (
		<S.Container>
			<S.Title>{pageTitle}</S.Title>
			{children}
		</S.Container>
	);
}

export { FormContainer };
