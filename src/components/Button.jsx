
import PropTypes from 'prop-types';

function Button({children , type,version , isDisabled  }) {
  return (
    <button  type ={type} isDisabled = {isDisabled}  version = {version} className={`btn btn-${version}`}>
        {children}
    </button>
  );
}
Button.defaultProps = {
    type:'submit' , 
    version:'secondary' , 
    isDisabled:'false' 
}
Button.prototype={
    type:PropTypes.string , 
    version:PropTypes.string , 
    children:PropTypes.node.isRequired , 
    isDisabled:PropTypes.bool
}

export default Button;
