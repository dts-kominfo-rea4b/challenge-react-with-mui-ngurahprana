
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Box, Button, Card, CardActions, CardContent, TextField } from "@mui/material";

const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <div>
            <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.0)' }}>
            <Card sx={{ minWidth: 350 }}>
                <CardContent>
                    <span>
                        <TextField label ="Name*" variant="filled" />
                        <br/>
                        <TextField label ="Phone*" variant="filled" />
                        <br/>
                        <TextField label ="Email*" variant="filled" />
                        <br/>
                        <TextField label ="Photo URL*" variant="filled" />
                    </span>
                </CardContent>
                <CardActions>
                    <Button size="small">ADD NEW</Button>
                </CardActions>
            </Card>
            </Box>
        </div>
    );
}

export default ContactForm;