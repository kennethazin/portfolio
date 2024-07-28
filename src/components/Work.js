import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

function Work() {
  return (
    <Box mt={10} overflow="auto">
      <Heading
        mb={1}
        fontSize="1.17rem"
        borderBottom="5px solid #525252"
        display="inline-block"
      >
        Work
      </Heading>
      <Text>
        Kenneth is an aspiring developer based in Dublin with a passion for
        problem-solving and putting his ideas to life.
      </Text>
    </Box>
  );
}

export default Work;
