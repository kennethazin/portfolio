import React, { useEffect } from 'react';
import { Box, Center, Image, Stack, Text, Link } from '@chakra-ui/react';
import CharapImage from './images/charap.png';
import WhitespaceImage from './images/whitespacestudios.png';
import anime from 'animejs';

const WorksPage = () => {
  useEffect(() => {
    anime({
      targets: '.charap-image',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
    });

    anime({
      targets: '.charap-text',
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500,
    });

    anime({
      targets: '.witespace-image',
      opacity: [0, 1],
      translateY: [-50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 1000,
    });

    anime({
      targets: '.witespace-text',
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 1500, // Delay the Witespace text animation
    });
  }, []);

  return (
    <div className="min-h-screen flex-col md:flex-row flex justify-center gap-3  ">
      <Box className="mt-24">
        <Link
          href="https://charapexample-oya2c7lij-kennethjohnras-gmailcoms-projects.vercel.app/"
          target="_blank"
        >
          <Center>
            <Image
              className="charap-image"
              _hover={{ opacity: '90%' }}
              src={CharapImage}
              alt="Screenshot of Charap website"
              borderRadius="5px"
              width="400px"
              height="230px"
            />
          </Center>
        </Link>

        <Center>
          <Box maxWidth="400px" align="center">
            <Stack spacing={3} align="center">
              <Text className="mt-5 text-xl no-underline hover:no-underline charap-text">
                Charap
              </Text>
              <Text className="text-md charap-text">
                A modern bubble tea shop website. Built using React.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
      <Box className="mt-24">
        <Link href="https://witespacestudios.vercel.app/" target="_blank">
          <Center>
            <Image
              className="witespace-image"
              _hover={{ opacity: '90%' }}
              src={WhitespaceImage}
              alt="Screenshot of Witespace Studios website"
              borderRadius="5px"
              width="400px"
              height="230px"
            />
          </Center>
        </Link>

        <Center>
          <Box maxWidth="400px" align="center">
            <Stack spacing={3} align="center">
              <Text className="mt-5 text-xl no-underline hover:no-underline witespace-text">
                Witespace Studios
              </Text>
              <Text className="text-md witespace-text">
                A creative studio website. Built using Next.js.
              </Text>
            </Stack>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default WorksPage;
