import { CheckBoxOutlineBlank, RestoreFromTrash } from '@mui/icons-material';
import { Card, CardContent, ListItemText, Typography } from '@mui/material';
import { ClipboardText } from '@phosphor-icons/react';

export function TaskCard() {
  return (
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
  )
}