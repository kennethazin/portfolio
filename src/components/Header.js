import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import anime from 'animejs/lib/anime.es.js';

import Logo from "./Logo";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);

        // Add Anime.js animation
        if (!isOpen) { // Only animate when opening the menu
            anime({
                targets: '.menuItem',
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: anime.stagger(100) // Staggering effect
            });
        }
    };
    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white" // this is the x when the hamburger icon is clicked
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => ( // draws hamburger shape
    <svg
        width="20px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> 
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => { // toggles when the menu icon appears
    return (
        <Box display={{ base: "flex", md: "none"}} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to} className="menuItem"> {/* Add a class name to the Link */}
            <Text display="flex" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/works">Works</MenuItem>
                <MenuItem to="/posts">Posts </MenuItem>
                <MenuItem to="/source">Source </MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            mb={30}

            pt={4}
            pb={4}
            bg={["primary.200", "primary.200", "transparent", "transparent"]}
            color={["white", "white", "primary.100", "primary.100"]}

            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;