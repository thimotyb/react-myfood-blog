import React from 'react';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let pagenumbers = [1, 2, 3, 4];
        let pageboxes = pagenumbers.map(
            (page, index) => {
                let buttonstyle = "w3-bar-item w3-button w3-hover-black";                
                if (page-1 == this.props.currentpage) {
                    buttonstyle = "w3-bar-item w3-black w3-hover-black";
                }
                return (
                    <a href="#" className={buttonstyle}>{page}</a>
                );
            }
        )

        return (
        <div className="w3-center w3-padding-32">
            <div className="w3-bar">
                <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
                {pageboxes}
                <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
            </div>
        </div>
         );
    }
}

export default Pagination;