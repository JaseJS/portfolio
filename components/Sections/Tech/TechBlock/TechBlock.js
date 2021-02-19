import React from 'react';

import Animator from '../../../Animator/Animator';
import BaseIcon from '../../../Text/BaseIcon/BaseIcon';
import Block from '../../../Block/Block';
import Headline from '../../../Text/Headline/Headline';

import { Flex, Text } from '@chakra-ui/react';

const TechBlock = props => {
	return (
		<Block>
			<Flex>
				<Animator animation='animate__slideInUp'>
					<Block borderRadius='10px'>
						<BaseIcon icon={props.icon} w={props.w} h={props.h} />
					</Block>
				</Animator>
				<Animator animation='animate__fadeIn'>
					<Block>
						<Headline color={props.headingColor} variant='fancy'>
							{props.title}
						</Headline>
						<Text color='brand.light' variant='standout'>
							{props.description}
						</Text>
					</Block>
				</Animator>
			</Flex>
		</Block>
	);
};

export default TechBlock;
