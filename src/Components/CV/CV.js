import React, { Component } from 'react';
import styles from './CV.module.scss';
import List from './List/List';
import content from '../../content';
import Map from '../Map/MapLoader';

class CV extends Component{

    state={
        markers:"",
        map:""
    }

    createMarkers = () => {
        const {map}=this.state;
        const infowindow = new window.google.maps.InfoWindow();
        const markers=[];

        content.CV.forEach(job=>{
            let infoWindowContent= `<div><p>${job.location} from: ${job.date} to: ${job.date}</p><p>${job.description}</p> </div>`;
            let marker = new window.google.maps.Marker({
                map:map,
                position:{lat: Number(job.coordinates.lat), lng: Number(job.coordinates.lng)},
                "id":job.id

            });
            markers.push(marker);
            marker.addListener("click", function () {
                infowindow.setContent(infoWindowContent);
                infowindow.open(map, marker);
            });
        
        });
        this.setState({markers:markers});
        
    }

    
    mapToParent = (map) => {
        this.setState({map:map}, ()=>{this.createMarkers()})
    }

    openInfo = (target) => {
      const  clickedMarker = this.state.markers.filter(marker=>marker.id===target.id)[0];
      console.log(clickedMarker);

    }

    render(){

        

        return(
        <div className={styles.main}>
            <div className={styles.list}>
            <List
                items={content.CV}
                listTitle={'Employment History'}
                openInfo={this.openInfo}
            />

            </div>
        
            <div className={styles.map}>
                <Map cv={content.CV}
                    mapToParent={this.mapToParent}
                    createMarkers={this.createMarkers}
                    map={this.state.map}/>
            </div>
            
        </div>

        )
    }

} 
export default CV