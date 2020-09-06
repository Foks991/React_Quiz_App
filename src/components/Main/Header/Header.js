import React from "react";
import { connect } from 'react-redux'

const Header = () => {

  return(
    <div className={'header'}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header)