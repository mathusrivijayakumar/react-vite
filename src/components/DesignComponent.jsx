import React,{Component} from 'react'
import './DesignComponent.css'
export class DesignComponent extends Component{
    constructor(props) {
        super(props); // Calling the constructor of the parent class
        this.state = {
          btnStyle: {
            width: '100px',
            height: '25px',
            border: '2px solid green',
            borderRadius: '5px',
            fontSize: '12px'
          }
        };
      }
    render(){
        return(
            <>
            <button style={this.state.btnStyle}>with css</button>
            <button className="button">style with Class</button>
            <button type="button" className="btn btn-primary"></button>
            </>
        )
    }

        
}
