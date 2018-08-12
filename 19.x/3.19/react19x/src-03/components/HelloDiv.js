import React from "react";
import ListItem from "./ListItem";

const HelloDiv = () => {
    return (
        
        <div>
            <h1> red wine, success! </h1>
            <ul>
                <ListItem label="one thing" />
                <ListItem label="two thing" />
                <ListItem label="three thing" />

                {/* <li>one thing</li>
                <li>two thing</li>
                <li>three thing</li> */}
            </ul>
        </div>
    );
};

export default HelloDiv;
