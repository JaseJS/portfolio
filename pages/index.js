import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import Core from '../components/Sections/Tech/Core';
import Footer from '../components/Sections/Footer/Footer';
import Hero from '../components/Sections/Hero/Hero';
import Overview from '../components/Sections/Overview/Overview';
import Tagline from '../components/Sections/Tagline/Tagline';
import Tech from '../components/Sections/Tech/Tech';

import { Box, Container, Grid } from '@chakra-ui/react';

import styles from '../styles/Home.module.css';
import 'animate.css/animate.min.css';

export default function Home() {
	const [fixedStyle, setFixedStyle] = useState(false);

	const scrolled = e => {
		if (window.scrollY >= 190) {
			setFixedStyle(true);
		} else {
			setFixedStyle(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', scrolled);

		return () => {
			window.removeEventListener('scroll', scrolled);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Jason Hay</title>
				<link rel='icon' type='image/x-icon' href='/images/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Grid templateColumns='1fr' gap={100}>
				<div
					id='bar'
					className={fixedStyle ? styles.meFixedBox : styles.meFixedBoxClear}
				></div>
				<Box>
					<Container>
						<Hero fixedClass={fixedStyle} />
					</Container>
				</Box>
				<Box>
					<Container>
						<Tagline />
					</Container>
				</Box>
				<Box>
					<Container>
						<Overview />
					</Container>
				</Box>
				<Box>
					<Container>
						<Core />
					</Container>
				</Box>
				<Box>
					<Container>
						<Tech />
					</Container>
				</Box>
				<Footer />
			</Grid>
		</>
	);
}
