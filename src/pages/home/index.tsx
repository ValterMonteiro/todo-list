import { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import { BaseLayout } from '../../Layout/BaseLayout';

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

  return (
    <>
      <BaseLayout appBarTitle='TODO LIST'>
        <TextField
          id="nova-tarefa"
          label="Adicione uma nova tarefa"
          variant="outlined"
          value={novaTarefa}
          onChange={handleClick}
        />
        <Button variant="outlined" onClick={handleCreate}>Criar</Button>
        <List>
          {tarefas.map((tarefa, index) => (
            <ListItem key={index}>
              <ListItemText primary={tarefa} />
            </ListItem>
          ))}
        </List>
      </BaseLayout>
    </>
  );
}
