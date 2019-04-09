import React, { Component } from 'react';
import styles from  './MapLoader.module.scss';

class Map extends Component {

    constructor(props){
      super (props);
        this.map=React.createRef();
      
      };

    state={
      map:""
    }
     
  
    
    componentDidMount(){
        this.mapChecker();
        console.log("on lifecycle")

    }

    /* renderMarker=() =>{
      const {map}=this.state,
      infoWindow = new window.google.maps.infoWindow(),
      markers=[];

      //create info window for each job in cv
      this.props.cv.forEach()
    } */

    

    getLocations = ()=>{
      const locations = Object.keys(this.props.cv).map(key=>({coordinates: this.props.cv[key].coordinates, description: this.props.cv[key].description}));
      this.setState({locations:locations});
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
        console.log(this.props.configObject);
       
        if (!!this.props.configObject) {
          config=this.props.configObject
          } else {
            config={
            
                center: {
                lat: 34.972461, lng: -40.678406},
                zoom:2,
                disableDefaultUI:true,
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
        this.setState({map:new window.google.maps.Map(this.map.current, config)}, () =>{this.passMapToParent(this.state.map)});
        //add markers
        //this.props.createMarkers();
      }
  
    passMapToParent = (map) => {
      this.props.mapToParent(map);
    }
  
  
    render() {
      return ( 
      <div ref={this.map} className={styles.map} >
        
      </div>    
      );
    }
  }

export default Map;