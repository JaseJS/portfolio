import React from 'react';
import { Link } from '@chakra-ui/react';

import Animator from '../../Animator/Animator';
import PageBlock from '../../Block/PageBlock';
import Headline from '../../Text/Headline/Headline';

import styles from '../../../styles/Home.module.css';

const Hero = props => {
	return (
		<PageBlock mt='50px'>
			<Headline color='brand.light' variant='hero'>
				Hi.
			</Headline>
			<Animator animation='animate__fadeIn'>
				<Headline color='brand.light' variant='hero'>
					I'm{' '}
					<Link
						id='me'
						className={[
							styles.meColor,
							props.fixedClass ? styles.meFixed : ''
						].join(' ')}
						isExternal='true'
						href='https://www.linkedin.com/in/jason-hay-b43480a/'
						variant='fancy'
					>
						Jason Hay
					</Link>
					.<br />
					<br />
				</Headline>
			</Animator>
		</PageBlock>
	);
};

export default Hero;
