import React, {Component} from "react";
import "./MachineWindow.css";

class MachineWindow extends Component {
    SLOTS_PER_REEL = 12;
    REEL_RADIUS = 150;

    constructor(props) {
        super(props);
        this.state = {spinning: false, seed: this.getSeed()}
    }

    createSlots = () => {
        console.log("createSlots");
        let slots = [];
        for (let i = 0; i < this.SLOTS_PER_REEL; i++) {
            let slot = this.getSlot(i);
            slots.push(slot);
        }
        return slots
    };

    getSlot = (i) => {
        let seed = this.getSeed();
        let slotAngle = 360 / this.SLOTS_PER_REEL;
        let transFormStyle = {transform: 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + this.REEL_RADIUS + 'px)'};
        let spinningAnimation = {animation: 'back-spin 1s, spin-' + seed + ' ' + (2 + 3 * 0.5) + 's'};
        let styles = this.state.spinning ? {...transFormStyle, ...spinningAnimation} : transFormStyle;
        let content = ((seed + i) % 12);
        return <div style={styles} className={"slot"}>{content}</div>;
    };

    getSeed = () => {
        return Math.floor(Math.random() * (this.SLOTS_PER_REEL));
    };

    spin = (ring) => {
        this.setState({
            spinning: true,
            seed: this.getSeed()
        });
        // let timer = 2;
        for (var i = 1; i < 6; i++) {
        //     let seed = this.getSeed();
        //     let styles = this.getAnimation(seed, timer);
        //     ring.class = 'ring spin-' + seed;
        //     ring.style = styles;
        //     // $('#ring' + i)
        //     //     .css('animation', 'back-spin 1s, spin-' + seed + ' ' + (timer + i * 0.5) + 's')
        //     //     .attr('class', 'ring spin-' + seed);
        }
    };

    getAnimation = (seed, timer) => {
        return {
            // animation: 'back-spin 1s, spin-' + seed + ' ' + (timer + i * 0.5) + 's'
        }
    };


// spin(timer) {
// 	//var txt = 'seeds: ';
// 	for(var i = 1; i < 6; i ++) {
// 		var oldSeed = -1;
// 		/*
// 		checking that the old seed from the previous iteration is not the same as the current iteration;
// 		if this happens then the reel will not spin at all
// 		*/
// 		var oldClass = $('#ring'+i).attr('class');
// 		if(oldClass.length > 4) {
// 			oldSeed = parseInt(oldClass.slice(10));
// 			console.log(oldSeed);
// 		}
// 		var seed = getSeed();
// 		while(oldSeed == seed) {
// 			seed = getSeed();
// 		}
//
// 		$('#ring'+i)
// 			.css('animation','back-spin 1s, spin-' + seed + ' ' + (timer + i*0.5) + 's')
// 			.attr('class','ring spin-' + seed);
// 	}
//
// 	console.log('=====');
// }
//
// componentDidMount() {
//  	// hook start button
//  	$('.go').on('click',function(){
//  		var timer = 2;
//  		spin(timer);
//  	})
//
//  	// hook xray checkbox
//  	$('#xray').on('click',function(){
//  		//var isChecked = $('#xray:checked');
//  		var tilt = 'tiltout';
//
//     if($(this).is(':checked')) {
//  			tilt = 'tiltin';
//  			$('.slot').addClass('backface-on');
//  			$('#rotate').css('animation',tilt + ' 2s 1');
//
// 			setTimeout(function(){
// 			  $('#rotate').toggleClass('tilted');
// 			},2000);
//  		} else {
//       tilt = 'tiltout';
//  			$('#rotate').css({'animation':tilt + ' 2s 1'});
//
// 			setTimeout(function(){
// 	 			$('#rotate').toggleClass('tilted');
// 	 			$('.slot').removeClass('backface-on');
// 	 		},1900);
//  		}
//  	})
//
//  	// hook perspective
//  	$('#perspective').on('click',function(){
//  		$('#stage').toggleClass('perspective-on perspective-off');
//  	})
//  });

    render() {
        const slots = this.createSlots();
        const ring = <div id="ring1" className="ring">{slots}</div>;
        console.log("props Machine window", this.props);
        return (
            <React.Fragment>
                <div>{ring}</div>
                <button onClick={() => this.spin(ring)}>click</button>
            </React.Fragment>
        )
    };
}

export default MachineWindow;
