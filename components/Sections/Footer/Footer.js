import React from 'react';

import { Text } from '@chakra-ui/react';

import Animator from '../../Animator/Animator';
import Block from '../../Block/Block';
import BaseIcon from '../../Text/BaseIcon/BaseIcon';

import { MdEmail } from 'react-icons/md';
import { IoLogoLinkedin } from 'react-icons/io';

import styles from '../../../styles/Home.module.css';

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<a href='mailto:jason.hay@hotmail.com'>
				<BaseIcon icon={MdEmail} w='10' h='10'></BaseIcon>
			</a>
			<a href='https://www.linkedin.com/in/jason-hay-b43480a/'>
				<BaseIcon icon={IoLogoLinkedin} w='10' h='10'></BaseIcon>
			</a>
			<Animator animation='animate__slideInRight'>
				<Block>
					<Text
						style={{ display: 'block' }}
						color='brand.light'
						variant='standout'
					>
						Let's connect.
					</Text>
				</Block>
			</Animator>
		</footer>
	);
};

export default Footer;
