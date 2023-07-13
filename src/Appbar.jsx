import { useNavigate } from 'react-router-dom';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";


function Appbar() {

    const navigate = useNavigate();
    
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10
        }}>
            <div>
                <Typography>courses</Typography>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <Button variant={"contained"}
                        onClick={() => {
                            navigate( "/signup")
                            
                        }}
                    >signup</Button>
                  </div>

                <div>
                    <Button variant={"contained"}
                        onClick={() => {
                            navigate( "/signin")
                        }}
                    >signin</Button>
                </div>


            </div>

        </div>
    );
}

export default Appbar;
  