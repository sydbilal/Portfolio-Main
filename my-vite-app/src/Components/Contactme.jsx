import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Link, Heading, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
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
        <VStack spacing={4}      
>
          <FormControl id="name">
            <FormLabel color="red.500"      
>Name</FormLabel>
            <Input type="text" bg="white" borderRadius="md" placeholder="Your Name"       boxShadow="lg"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel color="red.500">Email</FormLabel>
            <Input type="email" bg="white" borderRadius="md" placeholder="Your Email"       boxShadow="lg"
 />
          </FormControl>
          <FormControl id="message">
            <FormLabel color="red.500">Message</FormLabel>
            <Textarea bg="white" borderRadius="md" placeholder="Your Message" rows={5}       boxShadow="lg"
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
