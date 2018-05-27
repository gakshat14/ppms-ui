import React from 'react';
//import socketIOClient from 'socket.io-client';

export default class App extends React.Component {
    //socket = socketIOClient('http://192.168.1.7:3000');
    componentWillMount() {
        // this.socket.on("lol", (data) => {
        //     console.log(data);
        // });
    }

    componentWillUnmount() {
        //console.log("Disconnected")
        //this.socket.close();
    }

    render(){
        return(
            <h1>Hello Hello</h1>
        );
    }
}