import * as S from './styled';
import ReactGA from 'react-ga4';

const HeaderLinks = [
	{
		to: '/',
		label: 'Home',
		GADescription: 'Acesso a pagina Home',
	},
	{
		to: '/login',
		label: 'Login',
		GADescription: 'Acesso a pagina de Login',
	},
	{
		to: '/register',
		label: 'Register',
		GADescription: 'Acesso a pagina de Register',
	},
];

function Header() {
	const handleGAEvent = (event: string) => {
		ReactGA.event({
			category: 'Navegação do menu',
			action: `${event}`,
			label: 'Teste GA4',
		});
	};
	return (
		<S.Container>
			<S.Content>
				{HeaderLinks.map(({ to, label, GADescription }, index) => (
					<S.Link
						key={index}
						to={to}
						onClick={() => handleGAEvent(GADescription)}
					>
						{label}
					</S.Link>
				))}
			</S.Content>
		</S.Container>
	);
}

export { Header };
