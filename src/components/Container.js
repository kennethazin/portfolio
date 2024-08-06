import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Name from './Name';
import Education from './Education';
import Work from './Work';
import Bio from './Bio';
import Hobbies from './Hobbies';
import Socials from './Socials';
import Footer from './Footer';
import ProfilePicture from './ProfilePicture';
import Hello from './Hello';
import { AiOutlineRight } from 'react-icons/ai';
import anime from 'animejs/lib/anime.es.js';

function Container() {
  const [containerWidth, setContainerWidth] = useState('600px');

  useEffect(() => {
    const handleResize = () => {
      // Update containerWidth based on window size
      setContainerWidth(window.innerWidth <= 500 ? '100%' : '600px');
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set containerWidth based on initial window size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = window.innerWidth <= 500;

  useEffect(() => {
    // Animation timeline
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 800,
    });

    // Add staggered animations for each component
    timeline
      .add({
        targets: '.hello',
        translateY: [-50, 0],
        opacity: [0, 1],
      })
      .add(
        {
          targets: '.name',
          translateX: [-50, 0],
          opacity: [0, 1],
        },
        '-=400' // Staggered delay
      )
      .add(
        {
          targets: '.profile-picture',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=600' // Staggered delay
      )
      .add(
        {
          targets: '.work',
          translateX: [-50, 0],
          opacity: [0, 1],
        },
        '-=300' // Staggered delay
      )
      .add(
        {
          targets: '.button-container',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=500' // Staggered delay
      )
      .add(
        {
          targets: '.education',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=150' // Staggered delay
      )
      .add(
        {
          targets: '.bio',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=150' // Staggered delay
      )
      .add(
        {
          targets: '.hobbies',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=200' // Staggered delay
      )
      .add(
        {
          targets: '.socials',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=200' // Staggered delay
      )
      .add(
        {
          targets: '.footer',
          translateY: [50, 0],
          opacity: [0, 1],
        },
        '-=200' // Staggered delay
      );

    // Cleanup the timeline on component unmount
    return () => {
      timeline.pause();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box style={{ width: containerWidth }}>
        {/* Contents within the container */}
        <Box
          className="hello"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Hello />
        </Box>
        <Box
          className="name"
          style={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box
            className="profile-picture"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Name />
          </Box>
          {!isSmallScreen && (
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                marginBottom: '-150px',
                marginTop: '50px',
              }}
            >
              <ProfilePicture />
            </Box>
          )}
        </Box>

        {isSmallScreen && (
          <Box
            className="profile-picture"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '-80px',
              marginTop: '60px',
            }}
          >
            <ProfilePicture />
          </Box>
        )}

        <Box
          className="work"
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginBottom: '20px',
            marginTop: '20px',
          }}
        >
          <Work />
        </Box>

        <a
          href="works"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
          }}
        >
          <div className="button-container">
            <Button bg="#4FD1C5" _hover={{ bg: '#2CAEA0' }} fontSize="0.9rem">
              <span>My projects</span>
              <AiOutlineRight style={{ marginLeft: '10px' }} />
            </Button>
          </div>
        </a>
        {/* Education picture container */}
        <Box
          className="education"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
          }}
        >
          <Education />
        </Box>
        <Box
          className="bio"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
          }}
        >
          <Bio />
        </Box>
        <Box
          className="hobbies"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
          }}
        >
          <Hobbies />
        </Box>
        <Box
          className="socials"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
          }}
        >
          <Socials />
        </Box>
        <Box
          className="footer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            marginTop: '100px',
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Container;
