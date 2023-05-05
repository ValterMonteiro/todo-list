import { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Grid, Container, useTheme, colors, Typography, Badge } from '@mui/material';
import { BaseLayout } from '../../Layout/BaseLayout';
import { PlusCircle } from '@phosphor-icons/react';

export function Home() {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);// adiciona estado para armazenar as tarefas

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(event.target.value);
  };

  const handleCreate = () => {
    setTarefas([...tarefas, novaTarefa]);// adiciona a nova tarefa no estado de tarefas
    setNovaTarefa('');// limpa o campo de texto após criar a tarefa
  };

  const theme = useTheme();

  return (
    <>
      <BaseLayout appBarTitle='todo'>
        <main>
          <Container>
            <Grid container spacing={theme.spacing(0.5)}>
              <Grid item xl={10} sm={12}>
                <TextField
                  name='Task'
                  id="nova-tarefa"
                  label="Adicione uma nova tarefa"
                  variant="outlined"
                  value={novaTarefa}
                  onChange={handleClick}
                  fullWidth
                  sx={{
                    backgroundColor: colors.grey[800],
                  }}
                />
              </Grid>
              <Grid item xl={2} sm={12}>
                <Button
                  variant='contained'
                  onClick={handleCreate}
                  fullWidth
                  sx={{
                    height: 55,
                  }}
                >Criar<PlusCircle size={32} />
                </Button>
              </Grid>
            </Grid>
          </Container>
          <Grid container spacing={theme.spacing(1)}
            sx={{
              marginTop: theme.spacing(2),
            }}
          >
            <Grid item>
              <Typography
                variant='caption'
                component='h2'
              >
                Tarefas criadas <Badge color='primary' badgeContent={0} showZero />
              </Typography>
            </Grid>
          </Grid>
          <List>
            {tarefas.map((tarefa, index) => (
              <ListItem key={index}>
                <ListItemText primary={tarefa} />
              </ListItem>
            ))}
          </List>
        </main>
      </BaseLayout >
    </>
  );
}
