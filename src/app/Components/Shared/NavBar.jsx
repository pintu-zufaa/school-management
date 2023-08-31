/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import logo from '../../../../assets/Logo/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FaAngleDown, FaBars } from 'react-icons/fa';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const menuItems = <>
        <Link href='/'>Home</Link>
        <Menu align='end' menuClassName='bg-natural w-auto' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>About</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>
                <Link href=''>menu</Link>
            </MenuItem>
            <MenuItem>
                <Link href=''>Menu</Link>
            </MenuItem>
            <MenuItem>
                <Link href=''>Menu</Link>
            </MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Governance</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Academic</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Notice</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Admission</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Result</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
        <Menu align='end' menuClassName='bg-natural w-52 lg:w-full' menuButton={
            <MenuButton className='flex gap-3 items-center w-full justify-between'>
                <span>Service</span>
                <FaAngleDown />
            </MenuButton>
        } transition>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
    </>


    return (
        <div className='w-11/12 lg:w-4/5 mx-auto py-1 lg:py-3 flex justify-between items-center'>
            <div className='w-1/4 lg:w-1/2'>
                <Image src={logo} className='w-10 lg:w-20 object-cover' alt='' />
            </div>
            <div className='hidden lg:block'>
                <div className='flex items-center gap-8 font-medium text-lg'>
                    {menuItems}
                </div>
            </div>
            <div className='lg:hidden block'>
                <button onClick={toggleDrawer}><FaBars className='text-xl ' /></button>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    enableOverlay={true}
                    style={{ minHeight: '100%' }}
                    className='min-h-screen min-w-[350px] overflow-y-scroll'
                >
                    <div className='p-5 bg-primary min-h-screen flex flex-col gap-10 py-10 text-xl text-white font-semibold'>
                        {menuItems}
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default NavBar;