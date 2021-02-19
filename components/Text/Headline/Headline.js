import React from 'react';

import { background, Heading } from '@chakra-ui/react';

const Headline = props => {
	return (
		<Heading p={props.p} color={props.color} variant={props.variant}>
			{props.children}
		</Heading>
	);
};

export default Headline;
