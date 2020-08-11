import React from 'react';
import {ReactComponent as HeaderElipse} from './header-elipse.svg';
import {
    Link,
} from "react-router-dom";

function Header(props) {
    return <React.Fragment>
        {props.headerTitle ?
            <React.Fragment>
                <div className={"header header__wave"}>

                    {/*<div className="header__wave" >*/}
                    {/*</div>*/}
                    <div className="header__title">
                        <Link to='/'>
                            <h1> {props.headerTitle} </h1>
                            <p> Veggies as the center of your meal </p>
                        </Link>
                    </div>
                    <div className="header__nav">
                        <Link to='/about'>
                            <h2 className=""> About </h2>
                        </Link>
                    </div>
                </div>
            </React.Fragment> :
            <div className={"header"}>
                <HeaderElipse/>
            </div>

        }
    </React.Fragment>
}

export default Header