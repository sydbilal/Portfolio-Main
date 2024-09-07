import React from 'react';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
  const cardBg = useColorModeValue('blue.800', 'blue.900');
  const cardText = useColorModeValue('gray.100', 'gray.300');
  const headingColor = useColorModeValue('red.400', 'red.300');

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, modern web applications using React, Node.js, and more.'
    },
    {
      title: 'SEO Optimization',
      description: 'Enhancing your website’s visibility through advanced SEO strategies and techniques.'
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user experiences through beautiful interface design.'
    },
    {
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native and Flutter.'
    },
    {
      title: 'Brand Strategy',
      description: 'Helping you build and grow your brand through targeted strategies and consulting.'
    }
  ];

  return (
    <Box maxW="7xl" mx="auto" py={10} px={6}>
      <Heading as="h2" size="xl" textAlign="center" mb={10} color={headingColor}>
        My Services
      </Heading>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {services.map((service, index) => (
          <Box
            key={index}
            p={5}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="lg"
            textAlign="center"
            mx={3}
            _hover={{ boxShadow: '2xl' }}
          >
            <Heading as="h3" size="md" mb={3} color="red.300">
              {service.title}
            </Heading>
            <Text mb={3} color={cardText}>
              {service.description}
            </Text>
            <Button colorScheme="blue">Learn More</Button>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Services;
