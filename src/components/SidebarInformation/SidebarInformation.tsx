import React from "react";
import './SidebarInformation.css';

type SidebarInformationProps = {
    icon: JSX.Element;
    bigText: boolean;
}

const SidebarInformation: React.FC<SidebarInformationProps> = ({icon,bigText,children}) => {
    return (
        <div className="information">
          {icon}
          <div className={"bio-text " + (bigText ? "big-text" : "")}>
            {children}
          </div>
        </div>
    )
}

export default SidebarInformation;