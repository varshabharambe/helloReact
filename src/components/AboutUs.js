import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";
// const AboutUs = () => {
//     console.log("about us Body Rendered");
    // return (<div>
    //     <h1>About Us</h1>
    //     <UserClass name="Varsha" location="Nashik"/>
    // </div>);
// }

class AboutUsClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        // console.log("about constructor");
    }
    componentDidMount(){
        // console.log("about did mount");
    }
    componentDidUpdate(){
        // console.log("about componentDidUpdate");
    }
    render(){
        // console.log("about render");
        return (<div>
            <h1>About Us</h1>
            <UserContext.Consumer>
                {(data)=><h3 className="font-bold">{data.loggedInUser}</h3>}
            </UserContext.Consumer>
            <h3>count : {this.state.count}</h3>
            <button onClick={() => {
              this.setState({count:this.state.count + 1})
            }}>Increase parent Count</button>
            <UserClass name="Varsha" location="Nashik"/>
        </div>);
    }
}

export default AboutUsClass;