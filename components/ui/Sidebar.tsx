import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Started', 'Send Email', 'Drafts'];

export const Sidebar = () => {
    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

    return (
        <Drawer
            anchor='left'
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant='h4'>Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>
                                    { index % 2 ? <InboxRoundedIcon /> : <MailOutlineRoundedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>
                                    { index % 2 ? <InboxRoundedIcon /> : <MailOutlineRoundedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}
