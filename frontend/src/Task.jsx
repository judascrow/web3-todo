import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Task.css";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Task = ({ taskText, onClick }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={taskText} />
      </ListItem>
      <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={onClick} />
    </List>
  );
};

export default Task;
