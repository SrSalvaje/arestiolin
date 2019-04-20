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
        
    }


    getLocations = ()=>{
      const locations = Object.keys(this.props.cv).map(key=>({coordinates: this.props.cv[key].coordinates, description: this.props.cv[key].description}));
      this.setState({locations:locations});
    }

    mapChecker=  ()=>{
        if(!window.google) {
            setTimeout(this.mapChecker, 100);
          
          } else {
          
            this.renderMap();
          }
    }

    renderMap= ()=> {
        let config;
          
        if (!!this.props.configObject) {
          config=this.props.configObject
          } else {
            config={
            
                center: {
                lat: 34.972461, lng: -40.678406},
                zoom:this.props.viewPortWidth>=768?1:2,
                disableDefaultUI:true,
                styles:[
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
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
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
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
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                  ] 
                }
          }
          // create map instanc
        this.setState({map:new window.google.maps.Map(this.map.current, config)}, () =>{this.passMapToParent(this.state.map)});
          
        //add markers
        //this.props.createMarkers();
      }
    /* 
      adjustZoom = (map) => {
        console.log(map.getBounds())
      } */
    passMapToParent = (map) => {    
      this.props.mapToParent(map);
    }
  
  
    render() {
      return ( 
      <div ref={this.map} id={styles.map} >   
      </div>    
      );
    }
  }

export default Map;