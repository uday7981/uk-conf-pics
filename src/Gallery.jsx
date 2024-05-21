// Gallery.jsx
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Card, CardMedia, Typography, Box, Dialog, DialogContent, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';

const items = [
    {
        name: 'Algorand Decipher 2022',
        image: 'https://pbs.twimg.com/media/FkPtkhaVEAE4HDt?format=jpg&name=large',
    },
    {
        name: 'DSU Hack-O-Verse 24',
        image: 'https://scontent.fmaa14-1.fna.fbcdn.net/v/t39.30808-6/432114926_979774043513839_6068808101459872048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XllrXKfE9RAQ7kNvgGqErUc&_nc_ht=scontent.fmaa14-1.fna&oh=00_AYD0gSxl0y0dz_mLSDGQoVEJ-5IXLtw-LTgzlOdoVIpVIA&oe=665238E2',
    },
    // Add more items here
];

const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'flex',
        marginLeft: '-30px', // Adjust the spacing between the cards
        width: 'auto',
    },
    card: {
        position: 'relative',
        margin: '0 30px 30px 0',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
        cursor: 'pointer',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
    },
    dialogImage: {
        width: '100%',
        height: 'auto',
    },
    dialogContent: {
        position: 'relative',
        backgroundColor: '#1a1a1a',
        padding: 0,
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
    },
}));

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const Gallery = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={classes.grid}
                columnClassName="my-masonry-grid_column"
            >
                {items.map((item, index) => (
                    <Card className={classes.card} key={index} onClick={() => handleClickOpen(item.image)}>
                        <CardMedia
                            className={classes.media}
                            image={item.image}
                            title={item.name}
                        />
                        <div className={classes.overlay}>
                            <Typography variant="h6">{item.name}</Typography>
                        </div>
                    </Card>
                ))}
            </Masonry>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent className={classes.dialogContent}>
                    <IconButton className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img src={selectedImage} alt="Full view" className={classes.dialogImage} />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Gallery;
