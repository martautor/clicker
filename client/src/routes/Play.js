import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";

export default function Play() {
    const [value, setValue] = useState(0)
    return (<Container sx={{ textAlign: 'center'}}>
            <h4>{value}</h4>
            <Button color='error'>Click here</Button>
        </Container>)
}