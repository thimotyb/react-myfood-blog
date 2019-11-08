import React from 'react';

class Recipe extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="w3-quarter">
                    <img src={this.props.recipe.img} alt="Sandwich" style={{width:'100%'}}/>
                    <h3>{this.props.recipe.title}</h3>
                    <p>{this.props.recipe.desc}</p>
            </div>
        )
    }

}

export default Recipe;