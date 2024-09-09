import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  Stack,
  useColorModeValue,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Cors',
    role: 'Project Manager at TeamTech (US)',
    content:
      'Helped us meet crucial deadlines and deliver a top-notch product using his skills in Webdevelopement.',
    avatar: '/avatars/john_doe.jpg',
    flag: 'https://flagcdn.com/us.svg',
  },
  {
    name: 'Emma Clark',
    role: 'CTO at Clarks Ltd (UK)',
    content:
      'React Native and web automation has streamlined our processes immensely.',
    avatar: '/avatars/emily_clark.jpg',
    flag: 'https://flagcdn.com/gb.svg',
  },
  {
    name: 'Michael Brown',
    role: 'CEO at MapleTech (Canada)',
    content:
      'Mustafa built a stunning web app using React that exceeded our expectations and improved our workflow.',
    avatar: '/avatars/michael_brown.jpg',
    flag: 'https://flagcdn.com/ca.svg',
  },
  {
    name: 'Sophia Green',
    role: 'Lead Developer at WebWorks (Australia)',
    content:
      'His automation skills in Python and efficient use of Django helped us cut costs by 40%.',
    avatar: '/avatars/sophia_green.jpg',
    flag: 'https://flagcdn.com/au.svg',
  },
  {
    name: 'David Wilson',
    role: 'Product Manager at InnovateX (Australia)',
    content:
      'Syed’s full-stack web development using React and Node.js enabled us to launch our product ahead of time.',
    avatar: '/avatars/david_wilson.jpg',
    flag: 'https://flagcdn.com/au.svg',
  },
  {
    name: 'Ali Khan',
    role: 'Founder at StartUp Hub (Pakistan)',
    content:
      'Dudes automation solutions in Python saved us significant time and allowed us to scale quickly.',
    avatar: '/avatars/ali_khan.jpg',
    flag: 'https://flagcdn.com/pk.svg',
  },
  {
    name: 'Sarah Ahmed',
    role: 'COO at Enterprise Solutions (Pakistan)',
    content:
      'Mustafas work on our web development project using React was simply outstanding. Highly recommend!',
    avatar: '/avatars/sarah_ahmed.jpg',
    flag: 'https://flagcdn.com/pk.svg',
  },
  {
    name: 'James Lee',
    role: 'Project Manager at GlobalTech (Canada)',
    content:
      'Syed’s expertise in React Native and Python helped us tackle complex data challenges.',
    avatar: '/avatars/james_lee.jpg',
    flag: 'https://flagcdn.com/ca.svg',
  },
];

const Testimonials = () => {
  const cardBg = useColorModeValue('blue.800', 'blue.900');
  const cardColor = useColorModeValue('gray.100', 'gray.100');
  const headingColor = useColorModeValue('red.400', 'red.300');

  return (
    <Box bg="transparent" py={10} px={6} id="testimonials">
      <Heading as="h2" size="xl" textAlign="center" mb={10} color={headingColor}>
        Testimonials
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            bg={cardBg}
            color={cardColor}
            p={6}
            rounded="lg"
            shadow="lg"
          >
            <Stack direction="row" spacing={4} align="center" mb={4}>
              <Avatar src={testimonial.avatar} name={testimonial.name} />
              <Box>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.300">
                  {testimonial.role}
                </Text>
                <Image
                  src={testimonial.flag}
                  alt={`Flag of ${testimonial.role}`}
                  boxSize="20px"
                  ml={2}
                />
              </Box>
            </Stack>
            <Text mb={4}>{testimonial.content}</Text>
            <Stack direction="row" spacing={1}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} as={FaStar} color="yellow.400" />
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonials;
