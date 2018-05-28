import React from 'react';
import { IDispatch } from '../redux/reducers/utils';
import { IStateReduced } from '../redux/reducers';
import { connect } from 'react-redux';
import { enterVehicleNumber, getLocation, getNoLocation } from '../redux/actions/entryActions';

interface IReduxProps extends IDispatch {
    vehicleNumber: string;
    noLocation: boolean;
    carLocation: string;
}

type IProps = IReduxProps;

class EntryLocal extends React.Component<IProps> {

    vehicleInputChanged = (e) => {
        this.props.dispatch(enterVehicleNumber(e.target.value));
    }

    onDoneClicked = () => {
        this.props.dispatch(getLocation(''));
    }

    onGoButtonClicked = (e) => {
        e.preventDefault();
        fetch(`http://192.168.1.7:3000/ppms/${this.props.vehicleNumber}`, {method: "POST", mode: 'cors'}).then((resp) => {
            resp.json().then(resp => {
                console.log(resp);
                if(resp.no_location){
                    this.props.dispatch(getNoLocation());
                } else {
                    this.props.dispatch(getLocation(resp.location));
                }
            })
        }).catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <div>
                {this.props.carLocation === '' && 
                <div className="entry-div">
                <h1>PPMS</h1>
                <h4>Changing the way you park.</h4>
                { !this.props.noLocation && 
                    <form onSubmit={this.onGoButtonClicked} className="form-inline">
                        <div className="form-group">
                            <input placeholder="MP-XX-CG-XXXX" className="form-control" type="text" value={this.props.vehicleNumber} onChange={this.vehicleInputChanged}/>
                        </div>
                        <button disabled={!this.props.vehicleNumber} type="submit" className="btn btn-default" onClick={this.onGoButtonClicked}>Go!</button>
                    </form>
                    
                }
                </div>
                }
                {this.props.carLocation === "LOC1" && 
                    <div>
                        <div className="loc1"></div>
                        <button onClick={this.onDoneClicked} className="btn btn-default">Done!</button>
                    </div>
                }
                {this.props.carLocation === "LOC2" && 
                    <div>
                        <div className="loc2"></div>
                        <button onClick={this.onDoneClicked} className="btn btn-default">Done!</button>
                    </div>
                }
                {this.props.carLocation === "LOC3" && 
                    <div>
                        <div className="loc2"></div>
                        <button onClick={this.onDoneClicked} className="btn btn-default">Done!</button>
                    </div>
                }
                {this.props.noLocation && 
                    <h3>Sorry we ran out of space</h3>
                }
            </div>
        );
    }

}

const mapStateToProps = (state: IStateReduced): IProps => {
    return {
        vehicleNumber: state.entryState.vehicleNumber,
        noLocation: state.entryState.noLocation,
        carLocation: state.entryState.location
    };
  };
  
const Entry = connect(mapStateToProps)(EntryLocal);
  
  

export default Entry;