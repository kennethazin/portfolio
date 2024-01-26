import { extendTheme} from "@chakra-ui/react";

const customTheme = extendTheme({
    fonts: {
        heading: "'M PLUS Rounded 1c', sans-serif",
    },
    styles: {
        global: {
            body: {
                backgroundColor: "#202023",
                color: "#FFFFFF",
                fontFamily: "-apple-system, 'system-ui', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "0.9rem",
            },
        },
    },
});

export default customTheme;

