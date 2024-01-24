import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

function Bio() {
    return (
        <Box mt={10} overflow="none" width="100%">
            <Heading mb={1} fontSize='1.17rem' borderBottom="5px solid #525252" display="inline-block">Bio</Heading>
            <Text fontSize='0.9rem'>
                <div className="date" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="date-column">
                        <strong>2002</strong>
                    </div>
                    <div className="text-column">
                        Born in Dublin, Ireland.
                    </div>
                </div>
            </Text>
            <Text fontSize='0.9rem'>
                <div className="date" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="date-column">
                        <strong>2021</strong>
                    </div>
                    <div className="text-column">
                        Studied Marketing, Innovation & Technology in Dublin City University (Complete Year 1 with 1.1)
                    </div>
                </div>
            </Text>
            <Text fontSize='0.9rem'>
                <div className="date" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="date-column">
                        <strong>2022 to present</strong>
                    </div>
                    <div className="text-column">
                        Studying Computer Science in Dublin City University
                    </div>
                </div>
            </Text>
        </Box>
    );
}

export default Bio;
