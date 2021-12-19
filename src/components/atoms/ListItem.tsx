import { VFC } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';

export const ListItem: VFC = () => {
	return (
		<>
        <List component="div" disablePadding>
			<ListItemButton sx={{ pl: 4 }}>
				<ListItemIcon>
					<StarBorder />
				</ListItemIcon>
				<ListItemText primary="Ruby" />
			</ListItemButton>
        </List>
		</>
	)
}

