import React, { Component } from 'react';
import styles from './CV.module.scss';
import List from './List/List';
import content from '../../content';
import Map from '../Map/MapLoader';



class CV extends Component{
      
    state={
        clickedMarker:"",
        openedWindow:null,
        markers:"",
        map:"",
        infoWindows:"",
    };

    createInfoWindow=(job)=>(
        `<div class=${styles.infoWindow}>
        <span>Location: ${job.location}</span><br>
        <span>from: ${job.start} to: ${job.end}</span>
        <div>
        <p>${job.description}</p> 
        </div>
        </div>`        
    );

    createMarkers = () => {
        const {map}=this.state;
        const infoWindow= new window.google.maps.InfoWindow();
        const markers=[];
        //const infoWindowArray=[];


        content.CV.forEach(job=>{

            let icon ={
                url: job.icon,
                scaledSize: new window.google.maps.Size(35, 35), // scaled size
                origin: new window.google.maps.Point(0,0), // origin
                anchor: new window.google.maps.Point(0, 0) // anchor

            }
            
            let infoWindowContent=  this.createInfoWindow(job)
            //let infowindow = new window.google.maps.InfoWindow({content:infoWindowContent, id:job.id, maxWidth: '100px', maxHeight: '100%'});
            let marker = new window.google.maps.Marker({
                map:map,
                animation:window.google.maps.Animation.DROP,
                position:{lat: Number(job.coordinates.lat), lng: Number(job.coordinates.lng)},
                icon:icon,
                "id":job.id
            });

            markers.push(marker);
            //infoWindowArray.push(infowindow);
    
            marker.addListener("click", function () {
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);     
            });         
        });
        this.setState({markers:markers/* , infoWindows:infoWindowArray */});    
    };

    closeInfo=()=>{
        if(this.state.openedWindow){
            this.state.openedWindow.close();
            this.state.clickedMarker.setAnimation(null);
        }
    };
    
    mapToParent = (map) => {
        this.setState({map:map}, ()=>{this.createMarkers()} )
    };

    openInfo = (target) => {
        this.closeInfo();
        const  clickedMarker = this.state.markers.filter(marker=>marker.id===target.id)[0];
        const job = content.CV.filter(job=>job.id===target.id)[0];
        const infoWindowContent=this.createInfoWindow(job)
        const infoWindow= new window.google.maps.InfoWindow();
        infoWindow.setContent(infoWindowContent);
        infoWindow.open(this.state.map, clickedMarker);
       this.state.map.panTo(job.coordinates);
        this.state.map.setZoom(10);
        this.animateMarker(clickedMarker, 2100);

        //const infoWindow= this.state.infoWindows.filter(ifw=>ifw.id===target.id)[0];
        //infoWindow.open(this.state.map, clickedMarker);
        this.setState({clickedMarker:clickedMarker, openedWindow:infoWindow });
    };

    
    animateMarker=(marker, time)=>{

        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
            } else {
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            }
             window.setTimeout(function(){
                marker.setAnimation(null);
                }, time); 
    }
    
    render(){
        return(
            <div id={"cv"} className={styles.main} ref={this.props.forwardedRef}>
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