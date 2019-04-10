import React, { Component } from 'react';
import _ from 'lodash';


class GetScrollPos extends Component {
    constructor(props){
        super (props);
        this.state={
            currentView:0,
            refs:[]
        };
        this.keys=[];
        //React.Children.forEach(this.props.children, (child)=>{console.log(child)})
        //for each child 
        this.props.children.forEach((child, index)=>{
          //initializes a state for each children, this will be used to know if a ref has gone over the height I want
            this.keys.push(`View${index+1}`);
            this.state.refs.push(React.createRef())
            this.state[`view${index}`]={scroll:child.props.scrollAt, reachedTop:false, verticalPosition:"", addRef:this.state.refs[index]};
           
        });
    }
      
     componentDidMount(){
        //adds event listener
        window.addEventListener("scroll", _.debounce(this.getPosition, 100, {leading:true}));
      } 
    
    
    getPosition=()=>{
        //get the current view
        const view = this.state[`view${this.state.currentView}`].addRef.current;
        console.log(view);
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
        return (
            React.cloneElement(child, {verticalPosition:this.state[`view${index}`].verticalPosition, ref:this.state.refs[index], key:child.props.id})  
        )
    });

    return (
        
        <React.Fragment>
            {childrenToRender}
        </React.Fragment>
      
    );
  }
}

export default GetScrollPos;