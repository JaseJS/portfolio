import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const Animator = ({ children, animation, duration = 0.5 }) => {
	return (
		<ScrollAnimation
			animateIn={animation}
			animatePreScroll={true}
			duration={duration}
			animateOnce={true}
		>
			{children}
		</ScrollAnimation>
	);
};

export default Animator;
