import React from 'react';
//import { ReactComponent as HeaderWave } from './header-wave.svg';
import { ReactComponent as HeaderElipse } from './header-elipse.svg';

function Header(props) {
    console.log(props.headerTitle)

    return <React.Fragment>

        <div className="header">
            {props.headerTitle ?
                <React.Fragment>
                    <div className="header__wave" >
                       {/*<HeaderWave/>*/}
                    </div>
                    <div className="header__title">
                        <h1> {props.headerTitle} </h1>
                        <p> Get to know new veggies as the centre of your meal</p>
                    </div>
                </React.Fragment>
                :
                <div className="header__elipse">
                    <HeaderElipse/>
                </div>
            }
        </div>


    </React.Fragment>

}

export default Header