import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const cardBg = useColorModeValue('blue.800', 'blue.900');
  const cardText = useColorModeValue('gray.100', 'gray.300');
  const headingColor = useColorModeValue('red.400', 'red.300');

  const projects = [
    {
      title: "Hotel Management System",
      description: "This project is a comprehensive hotel management system developed using React for the frontend and Node.js for the backend. The application allows hotel administrators to manage bookings, rooms, and customer details efficiently...",
      video: "hotelmanagement.mp4" // Add your video file here
    },
    {
      title: "Coffee Order Website",
      description: "This project is a dynamic foodchain and drinks website developed for a Saudi client using React and Redux...",
      video: "coffee.mp4" // Add your video file here
    },
    {
      title: "Local Restaurant Aggregator Website",
      description: "This project is a local restaurant aggregator website developed for a client using React, Node.js, Express, and MongoDB. The platform connects various local restaurants, enabling users to browse menus and place orders from any of the partnered establishments...",
      video: "agregator.mp4" // Add your video file here
    },
    {
      title: "Digital Agency Website",
      description: "This project is a sophisticated digital agency website built with Django for the backend and Angular for the frontend. The application serves as a powerful platform for showcasing the agency's services, portfolio, and client testimonials. It features a dynamic and responsive interface that provides a seamless user experience...",
      video: "flikr.mp4" // Add your video file here
    },
    {
      title: "ERP Solutions Website",
      description: "This project is an ERP (Enterprise Resource Planning) solutions website developed for a local client using React for the frontend and Node.js for the backend. The website features a modern and visually appealing UI/UX design that provides an intuitive user experience...",
      video: "ecube.mp4" // Add your video file here
    },
    {
      title: "Food delivery App (Backend Developer)",
      description: "Successfully integrated applications with various third-party services, including Dynamics 365 ERP for streamlined enterprise resource planning, Twilio for robust communication solutions, and Checkout for seamless payment processing. Worked on developing a real-time dashboard for the warehouse team using Firebase, enabling efficient monitoring and management of inventory and operations...",
      video: "fooddelivery.mp4" // Add your video file here
    },
    // Add other projects similarly
    
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box maxW="7xl" mx="auto" py={10} px={6}>
      <Heading as="h2" size="xl" textAlign="center" mb={10} color={headingColor}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project, index) => (
          <Box
            key={index}
            p={5}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="lg"
            _hover={{ boxShadow: '2xl' }}
            onClick={() => handleOpenModal(project)}
            cursor="pointer"
          >
            <Heading as="h3" size="md" mb={3} color="red.300">
              {project.title}
            </Heading>
            <Text mb={3} color={cardText}>
              {project.description}
            </Text>
            <Link href="#" color="red.200" onClick={(e) => e.preventDefault()} isExternal>
              More Details
            </Link>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal for project details */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={handleCloseModal} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={3}>{selectedProject.description}</Text>
              <video controls width="100%">
                <source src={`/videos/${selectedProject.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Projects;
