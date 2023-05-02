import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { BaseLayout } from '../../Layout/BaseLayout';

export function Home() {
  return (
    <>
      <BaseLayout appBarTitle='TODO LIST'>
        <TextField id="outlined-basic" label="Adicione uma nova tarefa" variant="outlined" />
        <Button variant="outlined">Criar</Button>
      </BaseLayout >
    </>
  );
}