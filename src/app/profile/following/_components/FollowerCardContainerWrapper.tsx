import { IFollowerCard } from '@/common/types/data.interface';
import FollowerCardContainer from './FollowerCardContainer';

const FollowerCardContainerWrapper = ({ data }: { data: IFollowerCard[] }) => {
	return (
		<div className='flexCol gap-5'>
			{data.map((el, index) => (
				<div key={index}>
					<FollowerCardContainer name={el.name} description={el.description} tags={el.tags} src={el.src} />
				</div>
			))}
		</div>
	);
};

export default FollowerCardContainerWrapper;
