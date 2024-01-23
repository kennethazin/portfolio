import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Name from "./Name";
import Education from "./Education";
import Work from "./Work";
import Bio from "./Bio";
import Hobbies from "./Hobbies";
import Socials from "./Socials";
import Footer from "./Footer";
import ProfilePicture from "./ProfilePicture";
import Hello from "./Hello";

function Container() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box style={{ width: '600px'}}>
                {/* Contents within the container */}


                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Hello/>
                </Box>    
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Name />
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: "-100px"}}>
                        <ProfilePicture/>
                    </Box>
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginBottom: '20px', marginTop: '20px'}}>
                    <Work />
                </Box>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', height: '10px' }}>
                        <div>
                            <a href="https://github.com/kennethazin" target="_blank">
                                <Button style={{ backgroundColor: '#81E6D9', color: 'black' }}>Click for Github</Button>
                            </a>
                        </div>

                </div>
                    {/* Education picture container */}

                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'left',}}>
                    <Education />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'left',}}>
                    <Bio />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'left',}}>
                    <Hobbies />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'left',}}>
                    <Socials />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', marginTop: '100px'}}>
                    <Footer />
                </Box>
            </Box>

        </div>
    );
}


export default Container;
