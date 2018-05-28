import React from 'react';
import { connect } from 'react-redux';
import { IDispatch } from '../redux/reducers/utils';
import { IStateReduced } from '../redux/reducers';

interface IReduxProps extends IDispatch {
    location: string;
}

type IProps = IReduxProps;

class DirectionsLocal extends React.Component<IProps>{
    render() {
        return(
            <div>
                {this.props.location === "LOC1" && 
                    <div className="loc1"></div>
                }
                {this.props.location === "LOC2" && 
                    <div className="loc2"></div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: IStateReduced): IProps => {
    return {
        location: state.entryState.location
    }
}

const Directions = connect(mapStateToProps)(DirectionsLocal);
export default Directions;
