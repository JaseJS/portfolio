import React from 'react';

import { Box } from '@chakra-ui/react';

const Block = props => {
	return (
		<Box
			bg={props.bg}
			borderRadius={props.borderRadius}
			mt={props.mt}
			mb={props.mb}
		>
			{props.children}
		</Box>
	);
};

export default Block;
