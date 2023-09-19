import React from "react";
import './Toggle.css';

export default class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {enabled: this.props.enabledDefault? this.props.enabledDefault : false};
    }

    render() {
        return (
        <div className="container">
            <div className="text">{this.props.text}</div>
            <div className={"toggle " + this.getClass()} onClick={this.switch.bind(this)}>
                <div className={"toggle-ball " + this.getClass()}></div>
            </div>
        </div>);
    }

    switch() {
        this.setState({enabled: !this.state.enabled});
        this.props.handleChange();
    }

    getClass() {
        return this.state.enabled? 'dark' : 'light';
    }
}