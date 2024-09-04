import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Experience = () => {
  return (
    <Box maxW="full" mx="auto" mt={10} py={10} px={6} bg="blue.900" color="white" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="xl" textAlign="center" mb={8} color="red.400">
        My Experience
      </Heading>
      <VStack spacing={8}>
        {/* Experience 1 */}
        <Box p={6} bg="blue.800" borderRadius="lg" w="100%" boxShadow="md">
          <Heading as="h3" size="md" mb={2} color="red.300">
            Xref · Senior Full-Stack Engineer
          </Heading>
          <Text fontSize="sm" mb={4} color="gray.300">
            Aug 2023 - Present · 1 yr 1 mo
          </Text>
          <Text color="gray.100">
            Developed multiple features using Angular for the frontend and Django for the backend. Created APIs with Django to support various functionalities and optimized numerous queries to enhance performance. Utilized AWS to write Lambda functions, further improving the application's efficiency.
          </Text>
        </Box>

        {/* Experience 2 */}
        <Box p={6} bg="blue.800" borderRadius="lg" w="100%" boxShadow="md">
          <Heading as="h3" size="md" mb={2} color="red.300">
            Cheetay · Python Developer
          </Heading>
          <Text fontSize="sm" mb={4} color="gray.300">
            Aug 2021 - Aug 2023 · 2 yrs 1 mo
          </Text>
          <Text color="gray.100">
            Successfully integrated applications with various third-party services, including Dynamics 365 ERP for streamlined enterprise resource planning, Twilio for robust communication solutions, and Checkout for seamless payment processing.
          </Text>
        </Box>

        {/* Experience 3 */}
        <Box p={6} bg="blue.800" borderRadius="lg" w="100%" boxShadow="md">
          <Heading as="h3" size="md" mb={2} color="red.300">
            FiveRivers Tech · Python Developer
          </Heading>
          <Text fontSize="sm" mb={4} color="gray.300">
            Feb 2019 - Jul 2021 · 2 yr 6 mos
          </Text>
          <Text color="gray.100">
            Worked on developing a real-time dashboard for the warehouse team using Firebase, enabling efficient monitoring and management of inventory and operations. Leveraged Elasticsearch to enhance search functionalities and indexed data to significantly optimize the response time for listing queries.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Experience;
