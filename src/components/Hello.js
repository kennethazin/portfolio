import React from 'react';
import { Button } from '@chakra-ui/react';

const Hello = () => {
    return (
        <Button
            colorScheme=""
            size="0.9rem"
            bg="#363638"
            fontWeight="normal"
            rounded="lg"
            width="100%"
            height="auto"
            style={{ cursor: 'default', paddingTop: '15px', paddingBottom: '15px' }} // Add paddingTop here
            sx={{
                '@media screen and (max-width: 500px)': {
                    width: '100%',
                    whiteSpace: 'normal',
                },
            }}
        >
            Hello, I am an aspiring developer based in Ireland!
        </Button>
    );
};

export default Hello;
