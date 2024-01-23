import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

function Education() {
    return (
        <Box mt={10} overflow="none" width="100%">
            <Heading mb={1} fontSize='1.5rem' borderBottom="5px solid #525252" display="inline-block">Education</Heading>
            <Text fontSize='1rem'>
                Kenneth is currently pursuing a Bachelors of Science (BSc) in Computer Science in Dublin City University 
            </Text>
        </Box>
    );
}

export default Education;
