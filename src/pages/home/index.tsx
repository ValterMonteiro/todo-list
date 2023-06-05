import { useEffect, useState } from 'react';
import { Container, useTheme, Typography, AppBar, Toolbar } from '@mui/material';
import { Rocket } from '@phosphor-icons/react';
import { getAll } from '../../service/api';
import { Task } from '../../types';
import { TaskForm } from '../../Components/TaskForm';
import { TaskList } from '../../Components/TaskList';

export function Home() {
  const theme = useTheme();
  const [tasks, setTasks] = useState<Task[]>([]);// adiciona estado para armazenar as tarefas
  useEffect(() => {
    const listTasks = async () => {
      setTasks(await getAll());
    }
    listTasks();
  }, [])

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
      <Container>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} />
      </Container>
    </>
  );
}
