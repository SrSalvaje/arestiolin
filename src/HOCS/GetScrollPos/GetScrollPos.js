import React, { Component } from 'react';
import  {debounce}from 'lodash';
//import variables from '../../Assets/_variables.module.scss'


class GetScrollPos extends Component {
    constructor(props){
        super (props);
        this.state={
            currentView:0,
            refs:[],
            views:[],
            navBarheight:0
        };
        //for each child 
        this.props.children.forEach((child, index)=>{
          //initializes a state for each children, this will be used to know if a ref has gone over the height I want
            this.state.refs.push(React.createRef())
            this.state[`view${index}`]={scroll:child.props.scrollAt, reachedTop:false, verticalPosition:"", addRef:this.state.refs[index]}; 
            //push the view to array
            this.state.views.push(this.state[`view${index}`]);
        });
    }
      
     componentDidMount(){
        const nav = this.state.view1.addRef.current.getBoundingClientRect().height;
        this.setState({navBarheight:nav});
        window.addEventListener("scroll",  debounce(this.getPosition, 50, /* {leading:true} */) );
       
    } 
    
    
    getPosition=()=>{
        const copyOfViews=this.state.views.slice(0);
      
  
        copyOfViews.forEach((view, index) => {
            view.verticalPosition=view.addRef.current.getBoundingClientRect().y;
        })
        
        this.setState({views:copyOfViews}, ()=>{
          
             this.state.views.forEach((view, index)=>{
                 if(index!==1){
                    this.setState({[`view${index}`]:view}, ()=> this.setState({view1:this.state.view0})); 
                 }     
            }) 
        });
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