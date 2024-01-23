import React from 'react';
import profilePicture from './profilepicture.JPEG';

const ProfilePicture = () => {
    return (
        <div
            style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '2px solid white',
                overflow: 'hidden',
                marginBottom: '40px',
                marginLeft: '7px',

            }}
        >
            <img
                src={profilePicture}
                alt="Profile Picture"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.4)' // Adjust the scale value to control the zoom level
                }}
            />
        </div>
    );
};

export default ProfilePicture;
