import { Box, Flex, Icon, useColorMode } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
import Form from './form';

const Translate = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<Flex align="center" justify="center" height={'100vh'} gap={5}>
			{/* <Text
					bgGradient="linear(to-l, green.600, yellow.800)"
					bgClip="text"
					fontSize="4xl"
					fontWeight="extrabold"
				>
					Google translate
				</Text>
				<Button colorScheme='blue' variant='solid' onClick={toggleColorMode}>
					change color
				</Button> */}
			<Box>
				<Form />
			</Box>
			<Box>
				<Icon as={FaExchangeAlt} />
			</Box>
			<Box>
				<Form />
			</Box>
		</Flex>
	);
};

export default Translate;
