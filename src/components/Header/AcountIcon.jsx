import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleHeader from '@material-ui/icons/AccountCircle';
import hs from "./Header.module.css"
import {NavLink} from "react-router-dom";
import LogOutButton from "./LogOutButton";


const AccountIconComponent = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);


    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <div className={hs.accountIconUserName}>
                    {props.OwnName && props.OwnName}
            </div>

            <div className={`${hs.item} ${hs.active}`}>
            <NavLink to="/Profile/">
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </NavLink>
            </div>
            <MenuItem onClick={handleMenuClose}>
                     My account
            </MenuItem>

            <MenuItem >
                <LogOutButton
                    handleMenuClose={handleMenuClose}
                    LogOutThunk={props.LogOutThunk}
                />
            </MenuItem>
        </Menu>
    );


    return <div>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <AccountCircleHeader />
            </IconButton>
                {renderMenu}


    </div>

}


export default AccountIconComponent;
