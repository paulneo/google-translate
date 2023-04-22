import { Box, Button, Text, useColorMode } from '@chakra-ui/react';

const Translate = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box>
			<Text
				bgGradient="linear(to-l, #7928CA, #FF0080)"
				bgClip="text"
				fontSize="4xl"
				fontWeight="extrabold"
			>
				Google translate
			</Text>
			<Button colorScheme='blue' variant='solid' onClick={toggleColorMode}>
				change color
			</Button>
		</Box>
	);
};

export default Translate;
