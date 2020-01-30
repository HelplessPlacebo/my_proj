import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListMenuIcon from '@material-ui/icons/MoreVert';
import DeleteToDoListButton from "./DeleteToDoList";
import EditButton from "./EditButton";
import TDLS from "./ToDoLists.module.css"

const ToDoListMenuIcon = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);


    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'todo_list_menu_id';
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
            <div className={TDLS.EditButtonPostition}>
            <MenuItem onClick={handleMenuClose}>
                <EditButton HandleOnEdit={props.EditTitleModeON}
                            ButtonSize={"small"}/>
            </MenuItem>
            </div>
            <MenuItem >
                <DeleteToDoListButton ListID={props.ListID}
                                      Del={props.Del}
                                      ShowTasksMode={props.ShowTasksMode}/>
            </MenuItem>
        </Menu>
    );


    return <div>
        <IconButton
            edge="end"
            size="medium"
            aria-label="ToDo list menu"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="primary"
        >
            <ListMenuIcon />
        </IconButton>
        {renderMenu}
    </div>

}


export default ToDoListMenuIcon;
