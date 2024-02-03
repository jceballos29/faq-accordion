import './App.css';
import star from '@/assets/images/icon-star.svg';
import { items } from './utils';
import { AccordionItem } from './components';
import { useState } from 'react';

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
						{items.map((item) => (
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
