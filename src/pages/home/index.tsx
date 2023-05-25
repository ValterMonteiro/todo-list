import { FormEvent, useEffect, useState } from 'react';
import { Button, TextField, Grid, Container, useTheme, colors, Typography, Badge, AppBar, Toolbar, Card, CardContent, ListItemText } from '@mui/material';
import { ClipboardText, PlusCircle, Rocket } from '@phosphor-icons/react';
import { CheckBoxOutlineBlank, RestoreFromTrash } from '@mui/icons-material';
import { getAll } from '../../service/api';

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

  useEffect(() => {
    const listTasks = async () => {
      setTarefas(await getAll());
    }
    listTasks();
  }, [])

  //fazer um handleSubmit para adicionar novas task
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputTask: string = event.currentTarget.value;
    const description: string = inputTask.value;

  };

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
            <Grid item xl={12} sm={10}>
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
            <Grid item xl={12} sm={2}>
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
              flexDirection: 'column',
            }}>
            <Card
              sx={{
                width: '100%',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <ClipboardText size={32} />
                <Typography>
                  Você ainda não possui tarefas cadastradas
                </Typography>
                <Typography>
                  Crie tarefas e organize seus itens a fazer
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: '100%',
                marginTop: theme.spacing(2),
              }}>
              {tarefas.map((listTasks, index) => (
                <CardContent key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingTop: theme.spacing(6),
                  }}>
                  <CheckBoxOutlineBlank />
                  <ListItemText />
                  {listTasks.description}
                  <RestoreFromTrash />
                </CardContent>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
