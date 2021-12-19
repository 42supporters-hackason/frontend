import { useState, VFC } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components"
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import StarBorder from '@mui/icons-material/StarBorder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const UserDetailCard: VFC = () => {
	const [isOpenFirst, setIsOpenFirst] = useState<boolean | undefined>(false)
	return (
		<>
			<CardPosition>
				<Card>
					<CardContent>
						<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
						taisei yasui
						</Typography>
						<CardCommentBackGround>
							<Typography>
								使える言語:
							</Typography>
							<ListItemButton onClick={() => setIsOpenFirst(!isOpenFirst)}>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary="language" />
								{isOpenFirst ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={isOpenFirst} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
										<StarBorder />
										</ListItemIcon>
										<ListItemText primary="Ruby" />
									</ListItemButton>
								</List>
							</Collapse>
							<Typography>
								使える言語
							</Typography>
							<ListItemButton onClick={() => setIsOpenFirst(!isOpenFirst)}>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary="使える言語" />
								{isOpenFirst ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={isOpenFirst} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
										<StarBorder />
										</ListItemIcon>
										<ListItemText primary="Ruby" />
									</ListItemButton>
								</List>
							</Collapse>
							<Typography>
								使える言語:
							</Typography>
							<ListItemButton onClick={() => setIsOpenFirst(!isOpenFirst)}>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary="使える言語" />
								{isOpenFirst ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={isOpenFirst} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									<ListItemButton sx={{ pl: 4 }}>
										<ListItemIcon>
										<StarBorder />
										</ListItemIcon>
										<ListItemText primary="Ruby" />
									</ListItemButton>
								</List>
							</Collapse>
						</CardCommentBackGround>
					</CardContent>
					<CardActions>
						<Button>Profile</Button>
					</CardActions>
				</Card>
			</CardPosition>
		</>
	)
}

const CardCommentBackGround = styled.div`
  background-color: #F1F1F2;
  min-height: 350px;
  heigth: auto;
  border-radius: 5px;
  padding: 15px;
`

const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
`
