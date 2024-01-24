import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Heading fontSize="1.2rem" fontWeight="bold" color="#fffff" >
                Kenneth John Ras
            </Heading>
        </Box>
    );
}
