import React, { Component } from 'react';
import $ from 'jquery';

class TV extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        // console.log('== $ ===>>>>> ', $);
        // WL.Logger.debug(WL);
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default TV;
