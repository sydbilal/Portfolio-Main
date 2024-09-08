import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Link, Heading, HStack, useColorMode } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
  const { colorMode } = useColorMode(); // Chakra UI's hook to detect the color mode

  return (
    <Box
      bg="transparent"
      p={10}
      borderRadius="lg"
      maxW="full"
      mx="auto"
      mt={10}
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6} color="red.500">
        Contact Me
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel color="red.500">Name</FormLabel>
            <Input
              type="text"
              bg={colorMode === 'dark' ? 'blue.800' : 'white'} // Blue background in dark mode
              color={colorMode === 'dark' ? 'white' : 'black'} // White text in dark mode
              placeholder="Your Name"
              _placeholder={{ color: colorMode === 'dark' ? 'white' : 'gray.500' }} // White placeholders in dark mode
              borderColor={colorMode === 'dark' ? 'white' : 'gray.300'} // White border in dark mode
              borderRadius="md"
              boxShadow="lg"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel color="red.500">Email</FormLabel>
            <Input
              type="email"
              bg={colorMode === 'dark' ? 'blue.800' : 'white'}
              color={colorMode === 'dark' ? 'white' : 'black'}
              placeholder="Your Email"
              _placeholder={{ color: colorMode === 'dark' ? 'white' : 'gray.500' }}
              borderColor={colorMode === 'dark' ? 'white' : 'gray.300'}
              borderRadius="md"
              boxShadow="lg"
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel color="red.500">Message</FormLabel>
            <Textarea
              bg={colorMode === 'dark' ? 'blue.800' : 'white'}
              color={colorMode === 'dark' ? 'white' : 'black'}
              placeholder="Your Message"
              _placeholder={{ color: colorMode === 'dark' ? 'white' : 'gray.500' }}
              borderColor={colorMode === 'dark' ? 'white' : 'gray.300'}
              borderRadius="md"
              boxShadow="lg"
              rows={5}
            />
          </FormControl>
          <Button
            w="full"
            colorScheme="blue"
            bg="red.500"
            _hover={{ bg: 'red.600' }}
            size="lg"
            type="submit"
          >
            Send Message
          </Button>
        </VStack>
      </form>

      <Box textAlign="center" mt={10}>
        <HStack spacing={4} justify="center">
          <Link href="https://www.linkedin.com/in/syed-mustafa-nadeem-6ab63a187/" isExternal>
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />} variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/syedmustafanxref" isExternal>
            <Button colorScheme="gray" leftIcon={<FaGithub />} variant="solid">
              GitHub
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactMe;
