import React from 'react';
import Footer from './Footer';
import About from './About';
import PhotoGrid from './PhotoGrid';
import Pagination from './Pagination';

let data = [
    {   id: 1,
        img: 'https://www.w3schools.com/w3images/sandwich.jpg',
        title: 'The Perfect Sandwich, A Real NYC Classic',
        desc: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
        rating: 2
    },
    {   id: 2,
        img: 'https://www.w3schools.com/w3images/steak.jpg',
        title: 'Let Me Tell You About This Steak',
        desc: 'Once again some random text, lorem ipsum text praesent tincidunt ipsum lipsum.',
        rating: 4
    },
    {   id: 3,
        img: 'https://www.w3schools.com/w3images/cherries.jpg',
        title: 'Cherries, interrupted',
        desc: 'More random text, lorem ipsum text.',
        rating: 1
    },
    {   id: 4,
        img: 'https://www.w3schools.com/w3images/wine.jpg',
        title: 'Ripasso di Palazzo della Torre',
        desc: 'Un vino intenso in botti di rovere tipico di Verona.',
        rating: 5
    },
    {   id: 5,
        img: 'https://www.w3schools.com/w3images/popsicle.jpg',
        title: 'A sweet nutty popsicle',
        desc: 'Gnam gnam fresh sticky and sweet.'
    },
    {   id: 6,
        img: 'https://www.w3schools.com/w3images/salmon.jpg',
        title: 'Norwegian Salmon Steamed',
        desc: 'Healthy food to eat with your veggies.',
        rating: 2
    },
    {   id: 7,
        img: 'https://www.w3schools.com/w3images/sandwich.jpg',
        title: 'Tex-Mex Sandwich',
        desc: 'Bacon and fried onion rings will make you fat as hell.',
        rating: 0
    },
    {   id: 8,
        img: 'https://www.w3schools.com/w3images/croissant.jpg',
        title: 'A good morning',
        desc: 'French tradition for your flavored cappuccino.',
        rating: 2
    }
];

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    render() {
        return (
            <div>
                <PhotoGrid data={data} row={0+2*this.state.page} />
                
                {/* Second Photo Grid */}
                <PhotoGrid data={data} row={1+2*this.state.page} />
            
                {/* Pagination  */}
                <Pagination currentpage={this.state.page} />
                
                <hr id="about"/>
            
                {/* About Section  */}
                <About/>
                
                <hr/>
                
                {/* Footer  */}
                <Footer/>
            
            {/* End page content  */}
            </div>

        );
    }
      

}

export default Content;