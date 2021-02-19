import { extendTheme } from '@chakra-ui/react';

const fancy = {
	fontFamily: '"Orbitron", sans-serif',
	fontWeight: '700'
};

export default extendTheme({
	colors: {
		brand: {
			light: '#EFE9F4',
			dark: '#484D6D',
			cyan: '#08B2E3',
			green: '#57A773',
			red: '#EE6352'
		}
	},
	components: {
		Heading: {
			variants: {
				fancy: fancy,
				hero: {
					fontSize: '40px',
					fontFamily: fancy.fontFamily,
					fontWeight: fancy.fontWeight,
					lineHeight: '60px'
				},
				heroSml: {
					fontSize: '30px',
					fontFamily: fancy.fontFamily,
					fontWeight: fancy.fontWeight,
					lineHeight: '60px'
				}
			}
		},
		Headline: {
			variants: {
				fancy: fancy
			}
		},
		Link: {
			variants: {
				fancy: fancy
			}
		},
		Text: {
			variants: {
				standout: {
					fontFamily: '"Signika", sans-serif',
					fontWeight: '400',
					fontSize: 'x-large'
				}
			}
		}
	}
});
