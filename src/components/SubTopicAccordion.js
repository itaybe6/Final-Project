import React, { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SubTopicAccordion = ({ title, description, imageUrl }) => {
  const [hover, setHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

const styles = {
  accordion: {
    borderRadius: '20px',
    backgroundColor: 'white',
    transition: 'transform 0.3s ease', // Smooth transition for the transform
    direction: 'rtl', // Sets text direction to right-to-left
    border: '1px solid black',
    animation: isVisible ? 'slideIn 2s ease-out' : 'none',
  },
  accordionHover: {
    transform: 'scale(1.05)', // Slightly enlarges the accordion on hover
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    margin: '10px',
    borderRadius: '20px',
  },
  content: {
    fontWeight: 'bold',
    color: 'black',
  },
};




  return (
    <Accordion
      ref={ref}
      style={{
        ...styles.accordion,
        ...(hover ? styles.accordionHover : null),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <img src={imageUrl} alt={title} style={styles.media} />
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={styles.content}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default SubTopicAccordion;
