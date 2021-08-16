import React from 'react';
import PropTypes from 'prop-types';

const styleObject1={color:"purple"}
const styleObject2={color:"orange"}

const Profile = props => {
    return (
<React.Fragment>
    <div> {props.children}  </div>
    <h1 style={styleObject1}> {props.fullName} </h1>
    <h2 style={styleObject2}> {props.bio} </h2>
    <h3> {props.profession} </h3>
    <button onClick={ () => props.handleName(props.fullName)} style={{backgroundColor: "purple" , border: "none",   color: "white",  fontSize: 20 , height: 30}}> Who am I? </button>
</React.Fragment>
    );
};
Profile.defaultProps = {
    fullName: "Azayez" ,
    bio: " Football player" ,
    profession: "student"
};
//Profile.propTypes = {
  // fullName: propTypes.string ,
 //  bio : propTypes.string ,
  // profession : propTypes.string
//};
export default Profile;