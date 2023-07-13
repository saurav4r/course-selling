import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card ,Typography }from '@mui/material';
function signin() {
    return (
        <div>
            
                <div style={{
                    paddingTop: 200,
                    marginBottom:20,
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <Typography varient={"h6"}>
                        welcome back. sign in below
                    </Typography>
                
                </div>
            
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>

                <Card variant="outlined" style={{width:400,padding:20}}>
                <TextField id="outlined-basic" label="username" variant="outlined" />
                    <br></br>
                    <br></br>
                    <TextField id="outlined-basic" label="password" variant="outlined" />
                    <br></br>
                    <br></br>
                    <Button variant="contained">Contained</Button>
                </Card>
                    
                
            </div>

        </div>
    )
}

export default signin;