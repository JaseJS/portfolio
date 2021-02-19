import React from 'react';

import { Box } from '@chakra-ui/react';

const Block = props => {
	return (
		<Box bg={props.bg} borderRadius={props.borderRadius} m='4'>
			{props.children}
		</Box>
	);
};

export default Block;
