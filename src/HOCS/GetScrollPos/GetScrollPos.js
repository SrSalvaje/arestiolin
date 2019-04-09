import React, { Component } from 'react';
import _ from 'lodash';


class GetScrollPos extends Component {
    constructor(props){
        super (props);
        //holds key/value pairs of the refs that are dinamically created based on props.children
        this.myrefs={};
        //holds just the value (the ref), this will be used to loop trough each ref
        this.myrefsArr="";
    
        this.state={
            currentView:0
          
        };
    
        React.Children.forEach(this.props.children, (child)=>{console.log(child)})
        //for each child 
        this.props.children.forEach((element, index)=>{

           
          //create a ref and store it this.myrefs
            this.myrefs[`div${index}`]=React.createRef();
          //initializes a state for each children, this will be used to know if a ref has gone over the height I want
            this.state[`view${index}`]={scroll:element.props.scrollAt, reachedTop:false, verticalPosition:""};
    
          //adds ther refs to the array
            this.myrefsArr=Object.keys(this.myrefs).map(refKey=> this.myrefs[refKey]);
        });
    }
      
     componentDidMount(){
        //adds event listener
        window.addEventListener("scroll", _.debounce(this.getPosition, 100, {leading:true}));
      } 
    
    
    getPosition=()=>{
        //get the current view
        const view = this.myrefsArr[this.state.currentView];
        //check its position
        //let position=view.current.offsetTop;
       
        //if it has reached the top
            //changeState
                //reachedTop:true
                //verticalPosition
            //
            //else
                //changeState
                    //verticalPosition 
        
      } 

  render() {
    const childrenToRender= this.props.children.map((child, index)=>{
        console.log(this.myrefs)
        
        return (
            React.cloneElement(child, {verticalPosition:this.state[`view${index}`].verticalPosition, key:child.type.name, ref:this.myrefs[`div${index}`]})
        
        
        )
    });

    return (
        
        <React.Fragment>
            {childrenToRender}
        </React.Fragment>
      
    );
  }
}


{/* <section  
ref={this.myrefs[`div${index}`]} 
key={`div${index}`}  
className={styles.v1}>
  {child}
  </section> */}


export default GetScrollPos;