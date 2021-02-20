import React from 'react';

import PageBlock from '../../Block/PageBlock';
import TechBlock from './TechBlock/TechBlock';

import { DiDatabase, DiNodejs, DiReact } from 'react-icons/di';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { Center, Flex, Heading } from '@chakra-ui/react';

const Tech = props => {
	return (
		<PageBlock mt='50'>
			<Center mt='50' mb='5'>
				<Heading size='xl' color='brand.red' variant='fancy'>
					Frameworks &amp; Tech
				</Heading>
			</Center>
			<Flex
				flexDirection='column'
				border='2px'
				borderRadius='3px'
				borderColor='brand.light'
				boxShadow='-28px -28px 50px 0 rgba(5,15,31,0.16), 23px 10px 45px 0 #EE6352'
			>
				<TechBlock
					icon={DiReact}
					headingColor='brand.red'
					title='React'
					description='Hooks, Redux, Redux-Thunk'
				/>
				<TechBlock
					icon={DiNodejs}
					headingColor='brand.red'
					title='Node.js'
					description='Express.js, API Development.'
				/>
				<TechBlock
					icon={DiDatabase}
					headingColor='brand.red'
					title='RDBMS / NoSQL'
					description='Oracle, SQL Server, PostgreSQL. MongoDB, Firebase, Redis.'
				/>
				<TechBlock
					icon={AiOutlineCloudServer}
					headingColor='brand.red'
					title='Web Services'
					description='IPaaS platforms and pub/sub architecture; Software AG webMethods &amp; Dell Boomi.'
				/>
			</Flex>
		</PageBlock>
	);
};

export default Tech;
