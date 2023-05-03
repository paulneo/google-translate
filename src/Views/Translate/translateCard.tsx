import { Card, CardBody, Flex, Icon, Textarea } from '@chakra-ui/react';
import { FaMicrophone, FaVolumeUp } from 'react-icons/fa';

const TranslateCard = () => {
	return (
		<Card mt={5} width={'100%'}>
			<CardBody>
				<Textarea
					variant='unstyled'
					resize={'none'}
					fontSize={28}
					fontWeight={'medium'}
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
