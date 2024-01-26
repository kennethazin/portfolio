import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Logo(props) {
    return (
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <Box {...props}>
                <Heading fontSize="1.2rem" fontWeight="bold" color="#fffff" >
                    Kenneth John Ras
                </Heading>
            </Box>
        </Link>
    );
}
