import { Box, Flex, Icon, useColorMode } from '@chakra-ui/react';
import { FaExchangeAlt } from 'react-icons/fa';
import Form from './form';
import TranslateCard from './translateCard';

const Translate = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<Box
			height={'100vh'}
			gap={5}
			display={'flex'}
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Box w={800}>
				<Flex align={'center'} gap={5}>
					<Form />
					<Icon as={FaExchangeAlt} />
					<Form />
				</Flex>
				<Flex justify={'space-between'} gap={50}>
					<TranslateCard />
					<TranslateCard />
				</Flex>
			</Box>
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
		</Box>
	);
};

export default Translate;
