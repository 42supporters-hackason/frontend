import { VFC, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ProfileListItem } from "../atoms/ProfileListItem";

type ProfileListType = {
  title: string;
  listItemTitle: string;
  listItem: string[];
};

export const UserProfileList: VFC<ProfileListType> = (props) => {
  const { title, listItemTitle, listItem } = props;
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  return (
    <>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
      taisei yasui
      </Typography>
      <Typography>{title}:</Typography>
      <ListItemButton onClick={() => setIsOpen(!isOpen)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={listItemTitle} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {listItem.map((item: string) => (
          <ProfileListItem item={item} />
        ))}
      </Collapse>
    </>
  );
};
