import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Link,
  Heading,
  HStack,
  Flex,
  Text,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

      {/* Flex container to align form and contact info side by side */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="flex-start"
      >
        {/* Contact Form on the left */}
        <Box w={{ base: 'full', md: '55%' }} mr={{ md: 8 }}>
          <form>
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel color="red.500">Name</FormLabel>
                <Input
                  type="text"
                  bg={colorMode === 'dark' ? 'blue.800' : 'white'}
                  color={colorMode === 'dark' ? 'white' : 'black'}
                  placeholder="Your Name"
                  _placeholder={{ color: colorMode === 'dark' ? 'white' : 'gray.500' }}
                  borderColor={colorMode === 'dark' ? 'white' : 'gray.300'}
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
        </Box>

        {/* Contact Information on the right */}
        <Flex
          direction="column"
          justify="center"
          align={{ base: 'flex-start', md: 'center', justify:'center' }} // Centered vertically on large screens
          w={{ base: 'full', md: '40%' }}
          mt={{ base: 20, md: 20 }}
        >
          <VStack spacing={4} alignItems="center">
            <HStack>
              <Icon as={FaPhoneAlt} color="red.500" />
              <Text color={colorMode === 'dark' ? 'gray.300' : 'black'}>+92 3074727619</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} color="red.500" />
              <Text color={colorMode === 'dark' ? 'gray.300' : 'black'}>mustafanadeem627@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="red.500" />
              <Text color={colorMode === 'dark' ? 'gray.300' : 'black'}>Lahore, Pakistan</Text>
            </HStack>
          </VStack>

          {/* Social Links */}
          <HStack spacing={4} mt={6} justify="center">
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactMe;
