//Framework for developing a React App based on the excelent article "thinking in react" => https://reactjs.org/docs/thinking-in-react.html
/* 
1 Break the app into components.
2 Build a static version of the app.
3 Determine what should be stateful.
4 Determine in which component each piece of state should live.
5 Hard-code initial states.
6 Add inverse data flow.
7 Add server communication

State Criteria:
1 Is it passed in from a parent via props? If so, it probably isn’t state.
2 Does it change over time? If not, it probably isn’t state.
3 Can you compute it based on any other state or props in your component? If so, it’s not state.
*/




/***************************************************************************************** CHEAT SHEET************************************************************************ */

/************************************************* Modifying State **************************************/

this.setState({ key: value }); 

//You can provide a function to be called right after the state has been modified 
    this.setState({key:value}, callBackFunction))

//State is asynchronous so you should modify it based on its current value, to do so you can use setState with a function
//in this example, the value of key depends of the previous state (like it would happen in a counter) 
    this.setState((prevState, prevProps) => (
        {key: prevState.key + 1 }
        ) 
    )

//the this.State object should be threated as immutable so CAN'T do this:
    this.setState({anArray: this.state.anArray.push(value)})

    //instead use concat(), which creates a new array that contains the elements of the array it was called on followed by the elements passed in as arguments.
    const clonedArray = this.state.anArray.concat(value);
    this.setState({anArray:clonedArray});

    //the same inmutability principle applies to objects, in this case we can use Object's assign() method
    const clonedObject = Object.assign({}, anObject, {/* the properties you want to modify or add */});
    /* The first argument is a new JavaScript object, the one that Object.assign() will ultimately return. 
    The second is the object whose properties we’d like to build off of. The last is the changes we’d like to apply: */




    


    /***************************************************************** Usefull patterns****************************************** */

    !! // returns the boolean true/false association of a value for example:
        !!'abc' // Evaluates to true.
        !!null // Evaluates to false
  //  https://medium.com/@pddivine/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054