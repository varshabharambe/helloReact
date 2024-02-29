import React from "react";
class USerClassChild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // count : 0,
        }
        console.log("child constructor");
    }
    componentDidMount(){
        console.log("child did mount");
    }
render(){
    console.log("child Render");
    return(
        <div>
            <h2>I am Child</h2>
        </div>
    )
}
}

export default USerClassChild;