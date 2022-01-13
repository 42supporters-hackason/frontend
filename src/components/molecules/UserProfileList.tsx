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
import styled from "styled-components";

type ProfileListType = {
  title: string | undefined;
  listItemTitle: string | undefined;
  listItem: string[];
};

export const UserProfileList: VFC<ProfileListType> = (props) => {
  const { title, listItemTitle, listItem } = props;
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);

  return (
    <>
      <ProfileListWrapper>
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
      </ProfileListWrapper>
    </>
  );
};

const ProfileListWrapper = styled.div`
  margin-bottom: 20px;
`;
