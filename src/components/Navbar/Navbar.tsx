import React, { useEffect } from "react";
import './Navbar.css';
import Card from "../Card/Card";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from "react-router-dom";
import { History } from "history";

type NavbarProps = {
    history: History
}

const Navbar: React.FC<NavbarProps> = ({history}) => {
    const [cardValue, setCardValue] = React.useState('/');

    function handleChange(_event: React.ChangeEvent<{}>, newValue: string) {
        history.push(newValue);
    }

    useEffect(() => {
        if(history.location.pathname.startsWith('/blog')) {
            setCardValue('/blog')
        } else {
            setCardValue(history.location.pathname)
        }
    },[history.location.pathname])

    return (
        <Card className="navbar">
            <Tabs value={cardValue} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                <Tab value='/' label="Resume" />
                <Tab value='/blog' label="Blog" />
            </Tabs>
        </Card>
    )
}

export default withRouter(Navbar);