import React from 'react';
import { Box, Center, Image, Stack, Text, Link } from '@chakra-ui/react';
import CharapImage from './images/charap.png';

const WorksPage = () => {
  return (
    <div className="min-h-screen">
      <Box className="mt-24">
        <Link
          href="https://charapexample-oya2c7lij-kennethjohnras-gmailcoms-projects.vercel.app/"
          target="_blank"
        >
          <Center>
            <Image
              _hover={{ opacity: '90%' }}
              src={CharapImage}
              alt="Screenshot of Charap website"
              borderRadius="5px"
              width="400px"
            />
          </Center>
        </Link>

        <Center>
          <Box maxWidth="400px" align="center">
            <Stack spacing={3} align="center">
              <Text className="mt-5 text-xl no-underline hover:no-underline">
                Charap
              </Text>
              <Text className=" text-md ">
                A modern bubble tea shop website. Built using Next.js, React,
                and Shadcn.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default WorksPage;
