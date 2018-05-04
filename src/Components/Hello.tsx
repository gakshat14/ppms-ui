import React from 'react';
import socketIOClient from 'socket.io-client';

export default class Hello extends React.Component {
    componentWillMount() {
        const socket = socketIOClient('http://192.168.1.10:8080');
        socket.on("lol", (data) => {
            console.log(data);
        });
    }
    render(){
        return(
            <h1>Hello Hello</h1>
        );
    }
}