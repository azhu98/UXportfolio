import React, { Component } from 'react';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='project'>
        <a href={this.props.url} target='_self'>
            <img src={this.props.imageSrc} alt={this.props.title}  height='280' width='480'></img>
        </a>
        </div> 
        )
    }
}
 
export default Project;