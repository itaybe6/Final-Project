import React from 'react';
import { Grid } from '@mui/material';
import SubTopicAccordion from './SubTopicAccordion';

import '../Style/Psychology.css';


const styles = {
    gridContainer: {
        padding: '20px',
        maxWidth: '100%',
        borderRadius: '20px', // Adds rounded corners to the image
    },
   
};

const RowTopics = ({subTopics}) => {
  
    return (
        <Grid container style={styles.gridContainer} spacing={8}>
            {subTopics.map((subTopic, index) => (
                <Grid item xs={3} key={index}>
                    <SubTopicAccordion {...subTopic} />
                </Grid>
            ))}
        </Grid>
       
    );
};

export default RowTopics;
