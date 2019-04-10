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
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#212121"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
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
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#181818"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#1b1b1b"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#2c2c2c"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#8a8a8a"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#373737"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#3c3c3c"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#4e4e4e"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#000000"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#3d3d3d"
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