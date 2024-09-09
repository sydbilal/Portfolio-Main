import React from 'react';
import { Box, Flex, Text, Progress, Stack } from '@chakra-ui/react';

const skills = [
  { name: 'Python', percentage: 100 },
  { name: 'Django', percentage: 100 },
  { name: 'JavaScript', percentage: 98 },
  { name: 'Angular', percentage: 100 },
  { name: 'React', percentage: 99 },
  { name: 'Node.js', percentage: 97 },
  { name: 'SQL', percentage: 99 },
  { name: 'MongoDB', percentage: 100 },
  { name: 'Tailwind CSS', percentage: 96 },
];

const SkillBar = ({ skill }) => {
  return (
    <Box position="relative" w="100%">
      {/* Progress bar */}
      <Progress
        value={skill.percentage}
        size="lg"
        colorScheme="red"
        bg="blue.800"
        borderRadius="md"
        mt={2}
        mb={4}
        height="8"
      />

      {/* Text inside the progress bar */}
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="2"
        justify="center"
        align="center"
        color="white"
        fontWeight="bold"
      >
        <Text>
          {skill.name}
        </Text>
      </Flex>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box p={6} bg="transparent" id="skills" maxW="4xl" mx="auto">
      <Text fontSize="4xl" fontWeight="bold" mb={6} textAlign="center" color="red.500">
        My Skills
      </Text>
      <Stack spacing={4}>
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
