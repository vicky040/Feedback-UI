import React from 'react';
import PropTypes from 'prop-types';


function Header({text , bgclr ,  textcolor}) {
    const colors = {
        backgroundcolor :'bgclr', 
        color : textcolor 
    }
  return (
    <header style={colors}>
        <div className='container'>
            <h1>{text} </h1>
        </div>
    </header>
  );
}
Header.defaultProps = {
    text : 'FeedBack UI',
     bgclr:'rgba(0,0,0,0.4)',
    textcolor:'rgb(255,106,149)' , 
}
Header.propTypes = {
   typeof :String , 
   bgcolor:PropTypes.string , 
   textcolor:PropTypes.string
}

export default Header;


