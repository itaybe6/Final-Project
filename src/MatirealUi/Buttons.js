
import { Button, IconButton, Stack, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

function Buttons() {
  const [mode, setMode] = useState([]);

  const handleModeChange = (event, newMode) => {
    setMode(newMode);
  };


  return (
    <div >
      <Stack spacing={3} >

        <Stack spacing={3} direction={'row'}>
          <Button variant='contained' >contained</Button>
          <Button variant='text'> text</Button>
          <Button variant='outlined'> outline</Button>
        </Stack>


        <Stack spacing={3} direction={'row'}>
          <Button variant='contained' color='secondary'>secondary</Button>
          <Button variant='text' color='secondary'> secondary</Button>
          <Button variant='outlined' color='secondary'> secondary</Button>
        </Stack>

        <Stack spacing={3} direction={'row'}>
          <Button variant='contained' color='success'>success</Button>
          <Button variant='text' color='success'> success</Button>
          <Button variant='outlined' color='success'> success</Button>
        </Stack>

        <Stack spacing={3} direction={'row'}>
          <Button variant='contained' color='warning'>warning</Button>
          <Button variant='text' color='warning'> warning</Button>
          <Button variant='outlined' color='warning'> warning</Button>
        </Stack>


        <Stack spacing={8} direction={'row'}>
          <Button variant='contained' color='error' size='small'>error</Button>
          <Button variant='contained' color='error' size='medium'> error</Button>
          <Button variant='contained' color='error' size='large'> error</Button>
        </Stack>


        <Stack spacing={3} direction={'row'}>
          <Button variant='contained' Icon={<AdbIcon />}>left icon</Button>
          <Button variant='contained' endIcon={<AdbIcon />}>right icon</Button>
        </Stack>


        <Stack spacing={3} direction={'row'}>
          <IconButton size='large' color='error'> <AddReactionIcon /></IconButton>
          <IconButton size='small' color='info'> <AddReactionIcon /></IconButton>
        </Stack>


        <Stack spacing={3} direction={'row'}>

          <ButtonGroup variant='outlined' color='secondary' >
            <Button>left</Button>
            <Button > center</Button>
            <Button> right</Button>
          </ButtonGroup >
        </Stack>

        <Stack spacing={3} direction={'row'}>
          <ButtonGroup variant='contained' color='info' orientation='vertical'>
            <Button>left</Button>
            <Button > center</Button>
            <Button> right</Button>
          </ButtonGroup >
        </Stack>



        {/* array that update according what we click , when i indicate a button , the value of the button add to array */}
        <Stack spacing={3} direction="row">
          <ToggleButtonGroup size="large" color="info" value={mode} variant ='contained' onChange={handleModeChange}>
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underLine" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>



      </Stack>
    </div>
  );
}

export default Buttons;
