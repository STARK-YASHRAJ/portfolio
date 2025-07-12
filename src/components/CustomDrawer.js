import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import CustomButton from './CustomButton';
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function CustomDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '100vw' }} role="presentation" onClick={toggleDrawer(false)}>
      <div onClose={toggleDrawer(false)} className='float-end flex items-center gap-3 pt-6 pr-5 '>
        <span className='text-lg'>Close Menu</span><IoClose className='' size={40} />
      </div>
      <List>
        {['Home', 'Experience', 'Skills', 'Process', 'Portfolio', "Contact"].map((text, index) => (
          <ListItem key={text} className={`${index === 5 ? "" : "!border-b !border-gray-200"}`} disablePadding>
            <ListItemButton >
              <ListItemText className='!text-gray-500' primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className='pl-3 pt-4 flex items-center gap-5'>
        <CustomButton title='Contact Me' />
        <div className='flex items-center gap-2'>
          <AiFillGithub size={25} className='hover:text-slate-400 transition delay-150 duration-300 ease-in-out cursor-pointer' />
          <FaInstagram size={25} className='hover:text-slate-400 transition delay-150 duration-300 ease-in-out cursor-pointer' />
          <FaLinkedin size={25} className='hover:text-slate-400 transition delay-150 duration-300 ease-in-out cursor-pointer' />
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <IoIosMenu size={40} className='text-slate-800' onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
