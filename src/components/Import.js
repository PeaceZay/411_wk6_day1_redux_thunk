import React from 'react'
import { Container, Button, IconButton, Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { MoreVert, } from '@mui/icons-material'

const Import = (props) => {
    const { makes, fetchMakes, deleteMake } = props;

    const options = [
        'None',
        'Delete'
    ]

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.target);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={fetchMakes}>Import</Button>
            <h2>Num: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {makes.map((make, index) => (
                        <TableRow key={index}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVert />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                    }}
                                >

                                    {/* <MenuItem key={'None'} selected={'None'} onClick={handleClose}>
                                    None
                                </MenuItem> */}
                                    <MenuItem onClick={(index) => {
                                        deleteMake(index);
                                        handleClose();
                                    }
                                    }>
                                        Delete
                                    </MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
export default Import