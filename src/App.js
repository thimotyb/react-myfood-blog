import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  render() {

    return(
    <div>

      {/* Sidebar (hidden by default) */} 
      <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{display: 'none', zIndex: '2', width: '40%', minWidth: '300px'}} id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()"
        className="w3-bar-item w3-button">Close Menu</a>
        <a href="#food" onclick="w3_close()" className="w3-bar-item w3-button">Food</a>
        <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">About</a>
      </nav>
      
      {/* Top menu */}
      <div className="w3-top">
        <div className="w3-white w3-xlarge" style={{maxWidth:'1200px', margin:'auto'}}>
          <div className="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
          <div className="w3-right w3-padding-16">Mail</div>
          <div className="w3-center w3-padding-16">My Food</div>
        </div>
      </div>
        
      {/* PAGE CONTENT! */}
      <div className="w3-main w3-content w3-padding" style={{maxWidth:'1200px', marginTop:'100px'}}>
      
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="Sandwich" style={{width:'100%'}}/>
            <h3>The Perfect Sandwich, A Real NYC Classic</h3>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>

          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/steak.jpg" alt="Steak" style={{width: '100%'}}/>
            <h3>Let Me Tell You About This Steak</h3>
            <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>

          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/cherries.jpg" alt="Cherries" style={{width:'100%'}}/>
            <h3>Cherries, interrupted</h3>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            <p>What else?</p>
          </div>
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/wine.jpg" alt="Pasta and Wine" style={{width:'100%'}}/>
            <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>

        </div>
        
        {/* Second Photo Grid */}
        <div className="w3-row-padding w3-padding-16 w3-center">
          <div className="w3-quarter">
            <img src="/w3images/popsicle.jpg" alt="Popsicle" style={{width:'100%'}}/>
            <h3>All I Need Is a Popsicle</h3>
            <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/salmon.jpg" alt="Salmon" style={{width:'100%'}}/>
            <h3>Salmon For Your Skin</h3>
            <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/sandwich.jpg" alt="Sandwich" style={{width:'100%'}}/>
            <h3>The Perfect Sandwich, A Real Classic</h3>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/croissant.jpg" alt="Croissant" style={{width:'100%'}}/>
            <h3>Le French</h3>
            <p>Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
      
        {/* Pagination  */}
        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
            <a href="#" className="w3-bar-item w3-black w3-button">1</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
          </div>
        </div>
        
        <hr id="about"/>
      
        {/* About Section  */}
        <div className="w3-container w3-padding-32 w3-center">  
          <h3>About Me, The Food Man</h3><br/>
          <img src="https://www.w3schools.com/w3images/chef.jpg" alt="Me" className="w3-image" style={{display:'block', margin:'auto'}} width="800" height="533"/>
          <div className="w3-padding-32">
            <h4><b>I am Who I Am!</b></h4>
            <h6><i>With Passion For Real, Good Food</i></h6>
            <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
        
        <hr/>
        
        {/* Footer  */}
        <footer className="w3-row-padding w3-padding-32">
          <div className="w3-third">
            <h3>FOOTER</h3>
            <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
          </div>
        
          <div className="w3-third">
            <h3>BLOG POSTS</h3>
            <ul className="w3-ul w3-hoverable">
              <li className="w3-padding-16">
                <img src="/w3images/workshop.jpg" className="w3-left w3-margin-right" style={{width:'50px'}}/>
                <span className="w3-large">Lorem</span><br/>
                <span>Sed mattis nunc</span>
              </li>
              <li className="w3-padding-16">
                <img src="/w3images/gondol.jpg" className="w3-left w3-margin-right" style={{width:'50px'}}/>
                <span className="w3-large">Ipsum</span><br/>
                <span>Praes tinci sed</span>
              </li> 
            </ul>
          </div>
      
          <div className="w3-third w3-serif">
            <h3>POPULAR TAGS</h3>
            <p>
              <span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dinner</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Salmon</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">France</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Drinks</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Flavors</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Cuisine</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Chicken</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dressing</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fried</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fish</span> <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Duck</span>
            </p>
          </div>
        </footer>
      
      {/* End page content  */}
      </div>
    </div>

    );

  };

};

export default App;
