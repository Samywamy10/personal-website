import React from "react";
import './Navbar.css';
import Card from "../Card/Card";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

type NavbarProps = {
    currentNavigationItem: number,
    onChangeNavigation: (event: React.ChangeEvent<{}>, value: any) => void
}

const Navbar: React.FC<NavbarProps> = ({currentNavigationItem, onChangeNavigation}) => {

    return (
        <Card className="navbar">
            <Tabs value={currentNavigationItem} onChange={onChangeNavigation} variant="fullWidth" aria-label="simple tabs example">
                <Tab label="Resume" />
                <Tab label="Blog" />
            </Tabs>
        </Card>
    )
}

export default Navbar;