import React, { useEffect } from "react";
import './Navbar.css';
import Card from "../Card/Card";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [cardValue, setCardValue] = React.useState(0);

    function handleChange(_event: React.ChangeEvent<{}>, newValue: number) {
      setCardValue(newValue);
    }
    
    useEffect(() => {
        if(window.location.pathname === "/") {
            setCardValue(0);
        } else {
            setCardValue(1);
        }
    },[])


    return (
        <Card className="navbar">
            <Tabs value={cardValue} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                <Tab component={Link} to={'/'} label="Resume" />
                <Tab component={Link} to={'/blog'} label="Blog" />
            </Tabs>
        </Card>
    )
}

export default Navbar;