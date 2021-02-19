import React from 'react';

import PageBlock from '../../Block/PageBlock';
import TechBlock from './TechBlock/TechBlock';

import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di';
import { AiOutlineConsoleSql, AiOutlineApi } from 'react-icons/ai';
import { BiCodeCurly } from 'react-icons/bi';
import { Center, Flex, Heading } from '@chakra-ui/react';

const Core = props => {
	return (
		<PageBlock mt='50'>
			<Center mt='50' mb='5'>
				<Heading size='xl' color='brand.green' variant='fancy'>
					Core Skills
				</Heading>
			</Center>
			<Flex
				flexDirection='column'
				border='2px'
				borderRadius='3px'
				borderColor='brand.light'
				boxShadow='28px 28px 50px 0 rgba(5,15,31,0.16), -23px -10px 45px 0 #57A773'
			>
				<TechBlock
					icon={DiJavascript1}
					headingColor='brand.green'
					title='JavaScript'
				/>
				<TechBlock
					icon={DiCss3}
					headingColor='brand.green'
					title='CSS3'
					description='ChakraUI, Bootstrap, SASS.'
				/>
				<TechBlock icon={DiHtml5} headingColor='brand.green' title='HTML5' />
				<TechBlock
					icon={AiOutlineConsoleSql}
					headingColor='brand.green'
					title='SQL'
				/>
				<TechBlock
					icon={AiOutlineApi}
					headingColor='brand.green'
					title='API Development'
					description='REST/SOAP'
				/>
				<TechBlock
					icon={BiCodeCurly}
					headingColor='brand.green'
					title='Others'
					description='Java, Python, C++.'
				/>
			</Flex>
		</PageBlock>
	);
};

export default Core;
