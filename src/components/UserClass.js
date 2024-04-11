import React from "react";
import USerClassChild from "./UserClassChild";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                // name:"",
                // location:"",
                // login:"",
            },
        }
        // console.log("user constructor");
    }
    async componentDidMount(){
        // console.log("user did mount");
        const data = await fetch("https://api.github.com/users/proNeel02");
        const json =await data.json();
        this.setState({
            userInfo:json,
        })
    }
    componentDidUpdate(){
        // console.log("user componentDidUpdate");
    }
render(){
    // console.log("user Render");
    const {name,location,login,avatar_url} = this.state.userInfo;
    return(
        <div>
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h2>location : {location}</h2>
            <h2>contact : {login}</h2>
            {/* <h3>count : {this.state.count}</h3>
            <button onClick={() => {
              this.setState({count:this.state.count + 1})
            }}>Increase Count</button> */}

            {/* <USerClassChild/> */}
        </div>
    )
}
};

export default UserClass;