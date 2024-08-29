import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MediaCard({ imageSrc, imageAlt,name,date,details }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {details}
        </Typography>
      </CardContent>
      <CardMedia component="img" height="194" image={imageSrc} alt={imageAlt} />

      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpOutlinedIcon /> Like
        </IconButton>
        <IconButton aria-label="comment">
          <ModeCommentOutlinedIcon /> Comment
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /> Share
        </IconButton>
      </CardActions>
    </Card>
  );
}
