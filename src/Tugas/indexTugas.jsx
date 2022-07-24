import React from "react";
import ClassContainer from "./Lifecycle API/ClassContainer";
import ClassNavbar from "./Lifecycle API/ClassNavbar";

export default class Tugas extends React.Component {
    render() {
        return (
            <div>
                <ClassNavbar />
                <ClassContainer />
            </div>

        )
    }
}