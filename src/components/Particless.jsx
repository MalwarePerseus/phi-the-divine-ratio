import React from 'react';
import Particles from 'react-particles-js';

const Particless = () => {
    return(            <div className="pushup2"><Particles params={{
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                }, 
                "particles": { 
                	"number": { 
                		"value": 12,
                		 "density": { 
                		 	"enable": true,
                		 	"value_area": 85,
                		 	}
                		},
                	
                    "size": {
                        "value": 2.0,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    
                    "move": {
                        "enable": true,
                        "speed": 4,
                        
                    }

               	},
               	"retina_detect": true


                }}  /> 
			</div>
        )}

export default Particless;