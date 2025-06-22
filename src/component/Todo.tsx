import { Button } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type IconProps = { 
    isCompleted: boolean;
    todoId: string;
    updateIsCompleted: (todoId: string) => void;
}

type todoProps = { 
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  todoId: string;
}
const Icon = ({ isCompleted, todoId, updateIsCompleted }: IconProps ) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  ) 
}

export const Todo = ( { 
  name, 
  isCompleted, 
  todoId, 
  updateIsCompleted
}: todoProps ) => {
  return (
    <Button 
      fullWidth={true} 
      style={{justifyContent: 'space-between'}}
      endIcon={<Icon todoId={todoId} isCompleted={isCompleted} updateIsCompleted={updateIsCompleted} />}
    >
        {name}
      </Button>
  )
}
