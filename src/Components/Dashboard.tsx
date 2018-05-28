import React from 'react';
import socketIOClient from 'socket.io-client';
import { IDispatch } from '../redux/reducers/utils';
import { ILocation, setLocation1, setLocation2, setLocation3 } from '../redux/actions/dashboardAction';
import { IStateReduced } from '../redux/reducers';
import { connect } from 'react-redux';
import moment from 'moment';

interface IReduxProps extends IDispatch {
    loc1: ILocation;
    loc2: ILocation;
    loc3: ILocation;
}

type IProps = IReduxProps;

class DashboardLocal extends React.Component<IProps>{
    socket = socketIOClient('http://192.168.1.7:3000');
    componentWillMount() {
        this.socket.on("loc1", (data) => {
            console.log(data);
            this.props.dispatch(setLocation1(data));
            if(data.date !== null){
                this.socket.emit("done", {done: "done"});
            }
        });
        this.socket.on("loc2", (data) => {
            console.log(data);
            this.props.dispatch(setLocation2(data));
            if(data.date !== null){
                this.socket.emit("done", {done: "done"});
            }
        });
        this.socket.on("loc3", (data) => {
            console.log(data);
            this.props.dispatch(setLocation3(data));
            if(data.date !== null){
                this.socket.emit("done", {done: "done"});
            }
        });
    }
    render() {
        return(
            <div className="row dashboard">
                <div className="col-md-4">
                    <h2 className="text-center">LOC1</h2>
                    <h4>Car Name: {this.props.loc1.requestedCarNumber}</h4>
                    <h4>Parked Since: {this.props.loc1.date}</h4>
                    <h4>Total Time: {moment().diff(this.props.loc1.date, 'hours')}hrs</h4>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">LOC2</h2>
                    <h4>Car Name: {this.props.loc2.requestedCarNumber}</h4>
                    <h4>Parked Since: {this.props.loc2.date}</h4>
                    <h4>Total Time: : {moment().diff(this.props.loc2.date, 'hours')}hrs</h4>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center">LOC3</h2>
                    <h4>Car Name: {this.props.loc3.requestedCarNumber}</h4>
                    <h4>Parked Since: {this.props.loc3.date}</h4>
                    <h4>Total Time: {moment().diff(this.props.loc3.date, 'hours')}hrs</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStateReduced): IProps => {
    return {
        loc1: state.dahsboardState.loc1,
        loc2: state.dahsboardState.loc2,
        loc3: state.dahsboardState.loc3
    }
};

const Dashboard = connect(mapStateToProps)(DashboardLocal);

export default Dashboard;