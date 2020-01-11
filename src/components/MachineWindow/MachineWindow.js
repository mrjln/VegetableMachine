import React, { Component } from "react";
import "./MachineWindow.css";

class MachineWindow extends Component {

SLOTS_PER_REEL = 12;
// radius = Math.round( ( panelWidth / 2) / Math.tan( Math.PI / SLOTS_PER_REEL ) ); 
// current settings give a value of 149, rounded to 150
REEL_RADIUS = 150;

// createSlots (ring) {
// 	var slotAngle = 360 / SLOTS_PER_REEL;
//
// 	var seed = getSeed();
//
// 	for (var i = 0; i < SLOTS_PER_REEL; i ++) {
// 		var slot = document.createElement('div');
//
// 		slot.className = 'slot';
//
// 		// compute and assign the transform for this slot
// 		var transform = 'rotateX(' + (slotAngle * i) + 'deg) translateZ(' + REEL_RADIUS + 'px)';
//
// 		slot.style.transform = transform;
//
// 		// setup the number to show inside the slots
// 		// the position is randomized to
//
// 		var content = $(slot).append('<p>' + ((seed + i)%12)+ '</p>');
//
// 		// add the poster to the row
// 		ring.append(slot);
// 	}
// }
//
// getSeed() {
// 	// generate random number smaller than 13 then floor it to settle between 0 and 12 inclusive
// 	return Math.floor(Math.random()*(SLOTS_PER_REEL));
// }
//
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
// 	// initiate slots
//  	createSlots($('#ring1'));
//  	createSlots($('#ring2'));
//  	createSlots($('#ring3'));
//  	createSlots($('#ring4'));
//  	createSlots($('#ring5'));
//
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
    console.log("props Machine window", this.props);
    return (
      <div className="window">
        <h1> {this.props.vegetable.name} </h1>
        <div id="stage" class="perspective-on">
          <div id="rotate">
            {/*<div id="ring1" class="ring"></div>*/}
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default MachineWindow;
