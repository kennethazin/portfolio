import { Box, Heading, Flex, Button, Link, } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; // react library for icons

function Socials() {
    return (
        <Box mt={10} overflow="none" width="100%">
            <Heading mb={1} fontSize="1.5rem" borderBottom="5px solid #525252" display="inline-block">
                On the web
            </Heading>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <Button colorScheme="teal" variant="ghost">
                    <AiFillGithub />
                    <span style={{ marginLeft: '5px' }}>
                        <a href='https://www.linkedin.com/in/kenneth-john-ras-327423200/' target="_blank">
@kennethazin</a></span>
                </Button>
                <Button colorScheme="teal" variant="ghost">
                    <AiFillLinkedin />
                    <span style={{ marginLeft: '5px' }}>
                        <a href='https://www.linkedin.com/in/kenneth-john-ras-327423200/' target="_blank">
                            @kenneth-john-ras
                        </a>
                    </span>
                </Button>
            </Flex>
        </Box>
    );
}

export default Socials;
