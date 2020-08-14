import React from 'react';
import NNLogo from '../../../assets/images/NN_LOGO.jpg'

function Footer() {
    return <div className="footer">
        <img width='50px' height='50px' alt={'NN logo'} src={NNLogo}/> <h3>The Nature Nutritionist </h3>
        <p>
            Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
            href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
    </div>
}

export default Footer