import * as S from './styles';

interface IButton {
	type: 'button' | 'submit' | 'reset';
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	isLoading: boolean;
	disabled: boolean;
	label: string;
}

function Button({ type, onClick, isLoading, disabled, label }: IButton) {
	return (
		<S.Button type={type} onClick={onClick} disabled={disabled || isLoading}>
			{isLoading ? 'Carregando...' : label}
		</S.Button>
	);
}

export { Button };
