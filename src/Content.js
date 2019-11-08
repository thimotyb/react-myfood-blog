import React from 'react';
import Footer from './Footer';
import About from './About';
import PhotoGrid from './PhotoGrid';
import Pagination from './Pagination';

let data = [
    {   id: 1,
        img: '"https://www.w3schools.com/w3images/sandwich.jpg',
        title: 'The Perfect Sandwich, A Real NYC Classic',
        desc: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'
    },
    {   id: 2,
        img: '"https://www.w3schools.com/w3images/steak.jpg',
        title: 'Let Me Tell You About This Steak',
        desc: 'Once again some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'
    },
    {   id: 3,
        img: '"https://www.w3schools.com/w3images/cherries.jpg',
        title: 'Cherries, interrupted',
        desc: 'More random text, lorem ipsum text.'
    },
    {   id: 4,
        img: '"https://www.w3schools.com/w3images/wine.jpg',
        title: 'Ripasso di Palazzo della Torre',
        desc: 'Un vino intenso in botti di rovere tipico di Verona.'
    },
    {   id: 5,
        img: '"https://www.w3schools.com/w3images/popsicle.jpg',
        title: 'A sweet nutty popsicle',
        desc: 'Gnam gnam fresh sticky and sweet.'
    },
    {   id: 6,
        img: '"https://www.w3schools.com/w3images/salmon.jpg',
        title: 'Norwegian Salmon Steamed',
        desc: 'Healthy food to eat with your veggies.'
    },
    {   id: 7,
        img: '"https://www.w3schools.com/w3images/sandwich.jpg',
        title: 'Tex-Mex Sandwich',
        desc: 'Bacon and fried onion rings will make you fat as hell.'
    },
    {   id: 8,
        img: '"https://www.w3schools.com/w3images/croissant.jpg',
        title: 'A good morning',
        desc: 'French tradition for your flavored cappuccino.'
    }
];

class Content extends React.Component {

    render() {
        return (
            <div>
                <PhotoGrid />
                
                {/* Second Photo Grid */}
                <PhotoGrid />
            
                {/* Pagination  */}
                <Pagination />
                
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