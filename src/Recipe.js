import React from 'react';
import {Rating} from 'primereact/rating';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


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
                    <Rating cancel={false} value={this.props.recipe.rating} />
            </div>
        )
    }

}

export default Recipe;