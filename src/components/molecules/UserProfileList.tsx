import { VFC, useState } from 'react'
import Typography from '@mui/material/Typography';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const UserProfileList: VFC = () => {
	const [isOpen, setIsOpen] = useState<boolean | undefined>(false)
	return (
		<>
			<Typography>
				使える言語:
			</Typography>
			<ListItemButton onClick={() => setIsOpen(!isOpen)}>
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary="language" />
				{isOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={isOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
						<StarBorder />
						</ListItemIcon>
						<ListItemText primary="Ruby" />
					</ListItemButton>
				</List>
			</Collapse>
		</>
	)
}
