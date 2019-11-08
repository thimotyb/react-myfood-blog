import React from 'react';
import Recipe from './Recipe';

class PhotoGrid extends React.Component { 

    constructor(props) {
        super(props);
    }

    render() {

        let step = this.props.row*4;

        return (
            <div className="w3-row-padding w3-padding-16 w3-center" id="food">
                
                <Recipe recipe={this.props.data[0+step]} />
                <Recipe recipe={this.props.data[1+step]} />
                <Recipe recipe={this.props.data[2+step]} />
                <Recipe recipe={this.props.data[3+step]} />                

            </div>
        );
    }
}

export default PhotoGrid;