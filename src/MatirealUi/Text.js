
import { Typography } from '@mui/material';

function Text() {
  return (
    <div >
      <Stack spacing={3} >

        <Stack spacing={6} direction={'row'}>
          <Typography variant='h1' >h1 </Typography>
          <Typography variant='h1' >h2 </Typography>
          <Typography variant='h1' >h3 </Typography>
        </Stack>

      </Stack>
    </div>
  );
}

export default Text;
