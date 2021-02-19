import React from 'react';

import Animator from '../../Animator/Animator';

import { Text } from '@chakra-ui/react';

const Overview = props => {
	return (
		<Animator animation='animate__fadeIn'>
			<Text
				color='brand.light'
				variant='standout'
				bg='#222'
				borderRadius='3px'
				mt='50px'
				p='5'
			>
				As a technical lead, I have designed and implemented several enterprise
				solutions; in highly complex, multi-user environments. My software
				experience ranges from interfacing with machinery on farms, to designing
				an admissions system for a University.
				<br />
				<br />I am currently seeking to join a team that is motivated by
				delivering high-quality solutions that have a meaningful, positive,
				impact on the world.
			</Text>
		</Animator>
	);
};

export default Overview;
