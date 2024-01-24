import React from "react";

import { Box, Heading, Text, Link } from "@chakra-ui/react";

function Bio() {
    return (
        <Box mt={10} overflow="none" width="100%">
            <Heading mb={1} fontSize='1.17rem' borderBottom="5px solid #525252" display="inline-block">I &#9829;</Heading>
            <Text>
                Basketball, <Link color='#EA60BB' href='https://open.spotify.com/artist/6C4cmqwXFuOg1TisUnLzhs?si=3Xp8LZ5YSBeBzai53bT3hw' target="_blank">
                Singing</Link>, Music Production, Cooking, Design

            </Text>
            
        </Box>
    );
}

export default Bio;
