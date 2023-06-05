import { Box, Card, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import { Task } from "../../types";
import { AlertDialog } from "../AlertDialog";
import { Trash } from '@phosphor-icons/react';

type TaskCardProps = {
  task: Task;
};
export function TaskCard({ task }: TaskCardProps) {
  return (
    <>
      {/* <Card>
              <CardContent>
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
                  {task.description}
                  <RestoreFromTrash />
                </CardContent>
              ))}
    </Card> */}

      < Card >
        <CardContent>
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              <Checkbox />
              <Typography>{task.description}</Typography>
            </Box>
            <IconButton color='error'>
              <Trash />
            </IconButton>
          </Box>
        </CardContent>
      </Card >
    </>

  );
}