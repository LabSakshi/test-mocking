import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import React from 'react'



const useStyles = makeStyles({
    container: {
        width: '90%',
        margin: 'auto'

    }, tnc: {
        color: 'blue'
    }, popover: {
        height: '90px',

    }
})
function SummaryForm() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [checked, setchecked] = React.useState(false)
    const handleHover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseHover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const classes = useStyles()
    const label = (
        <Box>
            Agree to <Box component="span" onMouseEnter={handleHover} className={classes.tnc}>
                Terms and conditions
            </Box>
            <Popover className={classes.popover}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseHover}
                anchorOrigin={{
                    vertical: -18,
                    horizontal: 160,
                }}
            >
                <Typography sx={{ p: 2 }}>No icecream will actually be delivered</Typography>
            </Popover>

        </Box>
    )

    return (<Box className={classes.container}>
        <Typography variant='h2'>
            Order Summary
        </Typography>
        <Typography variant='h5'>
            Scoops:$6.00

            <ul>
                <li>
                    3 Vanilla
                </li>
            </ul>
            Toppings:$4.50

            <ul>
                <li>
                    M&M
                </li>
                <li>
                    Hot Fudge
                </li>
                <li>
                    Gummy Bear
                </li>
            </ul>
            Total $10.50
        </Typography>
        <FormControlLabel control={<Checkbox defaultChecked={checked} onChange={() => setchecked(!checked)} />} label={label} />
        <Button variant="contained" disabled={!checked}>Confirm Order</Button>


    </Box>)
}

export default SummaryForm