import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text fontSize="20px" fontWeight="bold" fontFamily="Monospace" color="#fffff">
                Kenneth Ras
            </Text>
        </Box>
    );
} 