import { Button, Flex } from '@chakra-ui/react';

export default function AddButton(props) {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#0055ff'}
        color={'black'}
        boxShadow={
          '0px 1px 25px -5px #9ac7ff69, 0 10px 10px -5px #3672ff6e'
        }
        _hover={{
          bg: '#23c1ff',
        }}
        _focus={{
          bg: '#93dbed.500',
        }}
        position="fixed"
        bottom="15px"
        right="15px"
        zIndex={1}
        size="lg"
        >
        +
      </Button>
    </Flex>
  );
}