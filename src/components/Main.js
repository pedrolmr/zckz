import React, { Component } from 'react';
import axios from 'axios';

const url = "https://api.instagram.com/v1/users/self/?access_token";
const token = `${process.env.REACT_APP_TOKEN}`;
class Main extends Component{
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }

    componentDidMount(){
        this.getInfo();
        console.log(this.state.data.data);
    }

    getInfo = () => {
        axios
            .get(`${url}=${token}`)
            .then(res => {
                this.setState({ data: res.data.data});
                console.log(res.data.data)
            })
            .catch(err => console.log(err));

    }
    render(){
        return(
            <div>
                <p>ID:{this.state.data.id}</p>
                <p>username: {this.state.data.username}</p>
            </div>
        );
    }
};
export default Main;
