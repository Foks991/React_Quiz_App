import React from "react";

export default ({isLogin}) =>
    <>{!isLogin ?
        <div className={'errorGoogleAuth'}>
            <p>Please authenticate to start quiz</p>
        </div>
        :
        <div className={'successGoogleAuth'}>
            <p>You can choose test now</p>
        </div>}
    </>
