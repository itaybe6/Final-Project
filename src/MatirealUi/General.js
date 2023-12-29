
import {  Stack , Box} from '@mui/material';

import { useState } from 'react';

function General() {
  

  return (
    <div >
      <Stack spacing={1} direction={'row'} >  


      <Box height= '60px' width= '60px' bgcolor= 'primary.light' > </Box>
      <Box height= '60px' width= '60px' bgcolor= 'primary.dark' > </Box>
      <Box height= '60px' width= '60px' bgcolor= 'secondary.light' > </Box>
      


      </Stack>
    </div>
  );
}

export default General;
