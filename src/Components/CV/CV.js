import React, { Component } from 'react';
import styles from './CV.module.scss';
import List from './List/List';
import content from '../../content';
import Map from '../Map/MapLoader';


class CV extends Component{
      
    state={
        markers:"",
        map:"",
        infoWindows:"",
    };
    
    createMarkers = () => {
        const {map}=this.state;
        const markers=[];
        const infoWindowArray=[];

        content.CV.forEach(job=>{
            

            let infoWindowContent= `<div><p>${job.location} from: ${job.date} to: ${job.date}</p><p>${job.description}</p> </div>`;
            let infowindow = new window.google.maps.InfoWindow({content:infoWindowContent, id:job.id});
            let marker = new window.google.maps.Marker({
                map:map,
                position:{lat: Number(job.coordinates.lat), lng: Number(job.coordinates.lng)},
                "id":job.id

            });
            markers.push(marker);
            infoWindowArray.push(infowindow)
         

            marker.addListener("click", function () {
                //infowindow.setContent(infoWindowContent);
                infowindow.open(map, marker);
            });
        
        });
        this.setState({markers:markers, infoWindows:infoWindowArray});
        
    }

    
    mapToParent = (map) => {
        this.setState({map:map}, ()=>{this.createMarkers()})
    }

    openInfo = (target) => {
      const  clickedMarker = this.state.markers.filter(marker=>marker.id===target.id)[0];
      const infoWindow= this.state.infoWindows.filter(ifw=>ifw.id===target.id)[0];
      infoWindow.open(this.state.map, clickedMarker);
      console.log(clickedMarker);

    }

    render(){
        return(
            <div className={styles.main} ref={this.props.forwardedRef}>
                <h2>Employment History</h2>
               
                    <List
                        position={this.props.verticalPosition}
                        items={content.CV}
                        openInfo={this.openInfo}
                    />
              
                <div className={this.props.verticalPosition<=200?styles.displayMap: styles.map}>
                    <Map cv={content.CV}
                        mapToParent={this.mapToParent}
                        createMarkers={this.createMarkers}
                        map={this.state.map}
                    />
                </div>
            </div>
        )
    }
} 
export default React.forwardRef((props, ref)=> <CV {...props} forwardedRef={ref}/>); 