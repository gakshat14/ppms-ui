import React from 'react';
//import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import {Main} from './Main';
import { IStateReduced } from './redux/reducers';
interface IReduxProps {
    vehicleNumber: string;
}

class AppLocal extends React.Component<IReduxProps> {
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
            <div className="container">
                <Main />
            </div>
        );
    }
}

const mapStateToProps = (state: IStateReduced):IReduxProps => {
    return{
        vehicleNumber: state.entryState.vehicleNumber
    }
};

const App = connect(mapStateToProps)(AppLocal);

export default App;

