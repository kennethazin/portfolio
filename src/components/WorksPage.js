import React, { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import spotify1 from './images/spotify1.png';
import spotify2 from './images/spotify2.png';
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from '@chakra-ui/react';

const WorksPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box overflow="none" width="800px" marginTop={5}>
        <Heading
          mb={10}
          fontSize="1.17rem"
          borderBottom="5px solid #525252"
          display="inline-block"
          marginTop="20px"
        >
          Projects
        </Heading>
        <Box>
          <img
            src={isHovered ? spotify2 : spotify1}
            alt="Project 1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ borderRadius: '15px' }}
          />

          <Box mt={10} overflow="none" width="100%">
            <Card>
              <CardHeader>
                <Heading size="md">Python-Spotify API App</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      What is it?
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Minimalist web app that utilises Python and Spotify API to
                      retreive data of most listened songs from a specific
                      artist.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      How does it work?
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      TBF
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Technologies Used:
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Python, Bootstrap, Spotify API
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default WorksPage;
