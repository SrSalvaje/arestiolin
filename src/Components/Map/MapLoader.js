import React, { Component } from 'react';
import styles from  './MapLoader.module.scss';

class Map extends Component {

    constructor(props){
      super (props);
        this.map=React.createRef();
      
      };
     
  
    componentDidMount(){
        this.mapChecker();
        console.log("on lifecycle")

    }

    mapChecker=  ()=>{
        if(!window.google) {
            setTimeout(this.mapChecker, 100);
            console.log("map is loading");
          } else {
            console.log("we're good to go!!");
            this.renderMap();
          }
    }

    renderMap= ()=> {
        let config;
        if (this.props.configObject) {
          config=this.props.configObject
          } else {
            config={
                center: {
                lat: 55.609126, lng: 13.000811},
                zoom:14,
                styles:[
                    {
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#1d2c4d"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#8ec3b9"
                        }
                      ]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#1a3646"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.country",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#4b6878"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.land_parcel",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#64779e"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.neighborhood",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "administrative.province",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#4b6878"
                        }
                      ]
                    },
                    {
                      "featureType": "landscape.man_made",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#334e87"
                        }
                      ]
                    },
                    {
                      "featureType": "landscape.natural",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#023e58"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#283d6a"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#6f9ba5"
                        }
                      ]
                    },
                    {
                      "featureType": "poi",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#1d2c4d"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#023e58"
                        }
                      ]
                    },
                    {
                      "featureType": "poi.park",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#3C7680"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#304a7d"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#98a5be"
                        }
                      ]
                    },
                    {
                      "featureType": "road",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#1d2c4d"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#2c6675"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "geometry.stroke",
                      "stylers": [
                        {
                          "color": "#255763"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#b0d5ce"
                        }
                      ]
                    },
                    {
                      "featureType": "road.highway",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#023e58"
                        }
                      ]
                    },
                    {
                      "featureType": "transit",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#98a5be"
                        }
                      ]
                    },
                    {
                      "featureType": "transit",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                        {
                          "color": "#1d2c4d"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.line",
                      "elementType": "geometry.fill",
                      "stylers": [
                        {
                          "color": "#283d6a"
                        }
                      ]
                    },
                    {
                      "featureType": "transit.station",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#3a4762"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                        {
                          "color": "#0e1626"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text",
                      "stylers": [
                        {
                          "visibility": "off"
                        }
                      ]
                    },
                    {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                        {
                          "color": "#4e6d70"
                        }
                      ]
                    }
                  ] 
                }
          }
          
          // create map instance
        const map= new window.google.maps.Map(this.map.current, this.props.configObject);
    }
  
  
  
    render() {
      return ( 
      <div ref={this.map} className={styles.map} >
        
      </div>    
      );
    }
  }

export default Map;