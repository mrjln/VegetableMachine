import './HeroContentBlock.scss';
import React, {Component, ReactElement} from "react";

interface HeroContentBlockProps {
    text: string,
    img: ReactElement,
}

class HeroContentBlock extends Component<HeroContentBlockProps> {

    render(){
        return <div className='hero-block'>
            <div className='hero-block__image'>{this.props.img}</div>
            <p className='hero-block__text'>{this.props.text}</p>
        </div>
    }
}

export default HeroContentBlock