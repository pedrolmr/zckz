import React, { Component } from 'react';
import axios from 'axios';

const url = "https://api.instagram.com/v1/users/self/?access_token";
const token = `${process.env.REACT_APP_TOKEN}`;
class Main extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            counts:{}
        }
    }

    componentDidMount(){
        this.getInfo();
    }
    
    getInfo = () => {
        axios
            .get(`${url}=${token}`)
            .then(res => {
                const {data} = res.data;
                const { counts } = res.data.data;
                this.setState({ data: data, counts: counts });
            })
            .catch(err => console.log(err));

    }
    render(){
        if(!this.state.data) return <p>Loading...</p>
        return(
            <div>
                <img src={this.state.data.profile_picture} alt="profile pic"/>
                <p>username: {this.state.data.username}</p>
                <div className="nav">
                    <p>{this.state.counts.followed_by} followers</p>
                    <p>{this.state.counts.follows} following</p>
                </div>
            </div>
        );
    }
};
export default Main;
