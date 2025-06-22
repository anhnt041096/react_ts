import { Button, TextField } from "@mui/material"
import type { ChangeEvent } from "react";

type CreateNewTodoProps = {
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  newTodo: string;
  handleAddTodo: () => void;
}

export const CreateNewTodo = ({
  onNewTodoChange,
  newTodo,
  handleAddTodo,
}: CreateNewTodoProps) => {
  return (
    <div>
        <TextField 
          size="small" 
          onChange={onNewTodoChange} 
          value={newTodo}
        />
        <Button 
          variant="contained" 
          onClick={handleAddTodo}>
            Add
        </Button>
      </div>
  )
}
