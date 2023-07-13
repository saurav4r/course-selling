import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';

function Signup() {
    const [username1, setUsername1] = useState("");
    const [password1, setPassword1] = useState("");


    return (
        <div>
            <div style={{
                paddingTop: 200,
                marginBottom: 20,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                    welcome to courere. sign up below
                </Typography>
            </div>

            <center>
                <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                    <TextField label="username" variant="outlined"
                        onChange={(e) => {
                            setUsername1(e.target.value);

                        }} />
                    <br></br>
                    <br></br>
                    <TextField label="password" variant="outlined"
                        onChange={(e) => {
                            setPassword1(e.target.value);
                        }} />
                    <br></br>
                    <br></br>
                    <Button variant="contained"
                        onClick={() => {
                            function callback2(data){
                                localStorage.setItem("token",data.token);
                                
                            }
                            function callback1(res){
                                res.json().then(callback2)
                            }
                            fetch("http://localhost:3000/admin/signup", {
                                method: "post",
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    username:username1,
                                    password:password1
                                }),


                            }).then (callback1)
                        }}
                    >Contained</Button>
                </Card>
            </center>
        </div>
    );
}

export default Signup 
