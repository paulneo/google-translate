import {
	Card,
	CardBody,
	Flex,
	Icon,
	Textarea,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaMicrophone, FaVolumeUp } from 'react-icons/fa';
const TranslateCard = () => {
	const { colorMode } = useColorMode();

	console.log(colorMode);

	const bgCard = useColorModeValue('grey.100', 'grey.100');

	return (
		<Card mt={5} width={'100%'} bg={bgCard}>
			<CardBody>
				<Textarea
					variant='unstyled'
					resize={'none'}
					fontSize={28}
					fontWeight={'medium'}
					// color={'whiteAlpha.8a00'}
				/>
				<Flex align={'center'} gap={5} mt='8'>
					<Icon as={FaMicrophone} boxSize={5} color={'gray.500'} />
					<Icon as={FaVolumeUp} boxSize={5} color={'gray.500'} />
				</Flex>
			</CardBody>
		</Card>
	);
};

export default TranslateCard;
