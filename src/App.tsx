import './App.css';
import star from '@/assets/images/icon-star.svg';
import { items } from './utils';
import { AccordionItem } from './components';
import { useEffect, useState } from 'react';

export interface AppState {
	active: string;
}

function App() {
	const [active, setActive] = useState<AppState['active']>('');

	const handleActive = (id: string) => {
		if (active === id) {
			setActive('');
		} else {
			setActive(id);
		}
	};

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setActive('');
			}
		};

		setActive(items.find((item) => item.position === 0)?.id || '');
		document.addEventListener('keydown', handleEsc);

		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return (
		<main>
			<div className='background' />
			<div className='container'>
				<div className='card'>
					<div className='title'>
						<img src={star} alt='star' />
						<h1>FAQs</h1>
					</div>
					<div className='accordion'>
						{items
							.sort((a, b) => a.position - b.position)
							.map((item) => (
								<AccordionItem
									key={item.id}
									id={item.id}
									active={active === item.id ? true : false}
									item={item}
									handleActive={handleActive}
								/>
							))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
