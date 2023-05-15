import { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, Grid, Container, useTheme, colors, Typography, Badge, AppBar, Toolbar } from '@mui/material';
import { ClipboardText, PlusCircle, Rocket } from '@phosphor-icons/react';

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
      <AppBar position='static'>
        <Toolbar
          sx={{
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media all': {
              minHeight: 200
            },
          }}
        >
          <Typography
            variant='h5'
            component='h6'
            sx={{
              display: 'flex',
              gap: theme.spacing(2),
              alignItems: 'center',
              color: theme.palette.primary.light,
            }}>
            <Rocket size={32} />
            todo
          </Typography>
        </Toolbar>
      </AppBar >
      <main>
        <Container
          sx={{
            position: 'relative',
          }}>
          <Grid
            container
            spacing={theme.spacing(2)}
            sx={{
              position: 'absolute',
              top: '-26px',
            }}
          >
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
                  height: '100%',
                }}
              >Criar<PlusCircle size={32} />
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Container
        sx={{
          paddingTop: theme.spacing(10),
        }}>
        <Grid container spacing={theme.spacing(1)}
          sx={{
            marginTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between',
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
          <Grid item>
            <Typography
              variant='caption'
              component='h2'
            >
              Concluídas <Badge color='primary' badgeContent={0} showZero />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={theme.spacing(1)}>
          <Grid item
            xl={12} xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ClipboardText size={32} />
            Você ainda não possui tarefas cadastradas
            <List>
              {tarefas.map((tarefa, index) => (
                <ListItem key={index}>
                  <ListItemText primary={tarefa} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
