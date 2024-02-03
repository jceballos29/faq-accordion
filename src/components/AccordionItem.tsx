import minus from '@/assets/images/icon-minus.svg';
import plus from '@/assets/images/icon-plus.svg';

export interface AccordionItemProps {
	id: string;
	item: {
		title: string;
		body: string;
	};
	active: boolean;
	handleActive: (id: string) => void;
}

const AccordionItem = ({
	id,
	active = false,
	item,
	handleActive,
}: AccordionItemProps) => {
	return (
		<div key={id} className='accordion-item'>
			<div
				className='accordion-title'
				onClick={() => handleActive(id)}
			>
				<h2>{item.title}</h2>
				<img src={active ? minus : plus} alt='plus' />
			</div>
			<div className={`accordion-body ${active ? 'active' : ''}`}>
				<p>{item.body}</p>
			</div>
		</div>
	);
};

export default AccordionItem;
