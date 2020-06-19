import React from 'react';
import {connect} from "react-redux";

const Title = ({ st }) =>{
    console.log(st);
    return(<div className={'title'}>
        <h1>{ 'a' }</h1>
    </div>)
};


const mapStateToProps = (state) => {
    return {
        st: state.quiz,
    }
};


export default connect(mapStateToProps)(Title)
