import { Icon } from '@chakra-ui/react';

const BaseIcon = ({ icon, color = 'brand.cyan', w = '20', h = '20' }) => {
	return <Icon as={icon} color={color} w={w} h={w} p='1' />;
};

export default BaseIcon;
