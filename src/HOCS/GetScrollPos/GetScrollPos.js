import React, { Component } from 'react';
import _, {debounce}from 'lodash';
import variables from '../../Assets/_variables.module.scss'


class GetScrollPos extends Component {
    constructor(props){
        super (props);
        this.state={
            currentView:0,
            refs:[],
            views:[],
            navBarheight:0
        };
        //React.Children.forEach(this.props.children, (child)=>{console.log(child)})
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
        const viewPortHeight= window.innerHeight;
        const viePortWithNav=viewPortHeight-this.state.navBarheight;
        const copyOfViews=this.state.views.slice(0);
      
      //console.log(this.state.view0.addRef.current.getBoundingClientRect().y);
       //console.log(this.state.view1.addRef.current.getBoundingClientRect()) 
       console.log(this.state.view2.addRef.current.getBoundingClientRect().y)
       //console.log(this.state.view2.addRef.current.clientHeight)
        //console.log(this.state.view3.addRef.current.offsetTop)
       //console.log(this.state.view4.addRef.current.offsetTop)
       // get height of element this.state.view0.addRef.current.clientHeight  
        copyOfViews.map((view, index) => {
            view.verticalPosition=view.addRef.current.getBoundingClientRect().y;
        })
        
        this.setState({views:copyOfViews}, ()=>{
          
             this.state.views.map((view, index)=>{
                 if(index!==1){
                    this.setState({[`view${index}`]:view}, ()=> this.setState({view1:this.state.view0})); 
                 }     
            }) 
        });

        
      
        /* if(hero.addRef.current.offsetTop+window.pageYOffset>=160){
            this.setState()
        } */

        
        //display nav bar based on scroll position of hero
        /* if(this.state.view0.addRef.current) */
       
        //get the current view
        //const view = this.state[`view${this.state.currentView}`].addRef.current;
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
       /*  this.state.refs.map(ref=>{
            console.log(ref, ref.current.offsetTop,  window.pageYOffset );

        })  */
        const workingView=this.state.refs[0].current;
        
        //console.log(workingView, workingView.offsetTop+window.pageYOffset ) 
        /* workingView.offsetTop-(window.innerHeight)+window.pageYOffset */
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