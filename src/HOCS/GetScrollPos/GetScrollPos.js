import React, { Component } from 'react';
import  {debounce, throttle}from 'lodash';
//import variables from '../../Assets/_variables.module.scss'


class GetScrollPos extends Component {
    constructor(props){
        super (props);
        this.state={
            refs:[],
            views:[],
            /* navBarheight:0 */
        };
        //for each child 
        this.props.children.forEach((child, index)=>{
          //initializes create a ref and push it to state
            this.state.refs.push(React.createRef());
            //create a a state object for each child with the new props I want to forward to them
            this.state[`view${index}`]={verticalPosition:"", addRef:this.state.refs[index]}; 
            //push the view to array
            this.state.views.push(this.state[`view${index}`]);
        });
    };
      
     componentDidMount(){
        /* //get the height of the nav bar
        const nav = this.state.view1.addRef.current.getBoundingClientRect().height;
        this.setState({navBarheight:nav}); */
        //add the scroll event listener 
        window.addEventListener("scroll",  throttle(this.getPosition, 500 /* {leading:true} */) );
        //pass the refs to the parent
        this.props.getRefs(this.state.views);
       
    }; 

    componentWillUnmount(){
        window.removeEventListener("scroll", throttle(this.getPosition, 50));
    }
    
    
    getPosition=(e)=>{
        e.preventDefault();
        console.log("in scroll method")
        //copy of the state
        const copyOfViews=this.state.views.slice(0);
        //get the y position for each view in the cloned array
        copyOfViews.forEach((view, index) => {
            view.verticalPosition=view.addRef.current.getBoundingClientRect().y;
        });
        //then update the state
        this.setState({views:copyOfViews}, ()=>{
          //then update the individual view objects, with the exception of the nav bar, which we set to track the hero
             this.state.views.forEach((view, index)=>{
                 if(index!==1){
                    this.setState({[`view${index}`]:view}, ()=> this.setState({view1:this.state.view0})); 
                 }     
            }) 
        });
        //sets the currently displayed view for the nav bar focus
        this.props.setCurrentView();
      } 

  render() {
      //forward the new props and refs to the views
    const childrenToRender= this.props.children.map((child, index)=>{ 
        return (
            React.cloneElement(child, {verticalPosition:this.state[`view${index}`].verticalPosition, ref:this.state.refs[index], key:child.props.id, setCurrentView:this.props.setCurrentView})  
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