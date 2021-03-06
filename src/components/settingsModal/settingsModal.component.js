import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

export default function SettingsModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const[open, setOpen] = React.useState(false);
    let time = React.createRef();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const setTime = () => {
        console.log(time.current.value);
        window.timerComp.setTime(time.current.value);
    }

    window.openSettings = handleOpen;

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Time Settings</h2>
            <p id="simple-modal-description">
                Time (s):
            </p>
            <Input placeholder="00" inputRef={time}></Input>
            <Button onClick={setTime}>Set</Button>
            <SettingsModal />
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}












