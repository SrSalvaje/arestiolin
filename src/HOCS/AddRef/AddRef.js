import React, { Component } from 'react';
//import _ from 'lodash';

//const ref = React.createRef();
class AddRef extends Component {
    render() {
        const viewRef = React.createRef();
        console.log(this.props.component)
        return cloneElement(this.props.component, viewRef)
    }
}

const cloneElement = (ViewComponent, forwardedRef, ...rest) => {
    return React.cloneElement(ViewComponent, {ref:forwardedRef, ...rest});
    /* const forwardRef = (props, ref) => <ViewComponent forwardedRef={ref} {...props}/>;
    return React.forwardRef(forwardRef); */
}

//const ForwardRef = (props)=> cloneElement(props.component, forwardedRef) => React.forwardRef();



const viewWithRef = (WrappedComponent)=>(
    React.forwardRef((props, ref) => <WrappedComponent ref={ref} {...props}  />
)); 

export default viewWithRef(AddRef)
    

