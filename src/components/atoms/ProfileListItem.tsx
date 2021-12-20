import { VFC } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';

type Item = {
	item: string,
}

export const ProfileListItem: VFC<Item> = (props) => {
	const { item } = props;
	return (
		<>
        <List component="div" disablePadding>
			<ListItemButton sx={{ pl: 4 }}>
				<ListItemIcon>
					<StarBorder />
				</ListItemIcon>
				<ListItemText primary={item} />
			</ListItemButton>
        </List>
		</>
	)
}

