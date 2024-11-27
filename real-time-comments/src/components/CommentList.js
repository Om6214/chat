import { List, ListItem, ListItemText } from '@mui/material';

const CommentList = ({ comments }) => (
  <List>
    {comments.map((comment) => (
      <ListItem key={comment.id}>
        <ListItemText
          primary={comment.comment}
          secondary={`By: ${comment.username} at ${new Date(comment.timestamp).toLocaleString()}`}
        />
      </ListItem>
    ))}
  </List>
);

export default CommentList;
