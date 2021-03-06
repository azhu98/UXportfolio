import React, {  Component } from 'react'


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { image: this.props.imageSrc };
    }
    render() { 
        let css = { 
            backgroundImage: "url(" + this.state.image + ")",
            height: "17.25rem", width: "30.75rem",
            backgroundSize: "contain", transition: "0.5s", transitionTimingFunction: "ease-in-out"
        }
        return ( 
            
        <div className='project' 
            style={css} 
            onMouseOver={ () => { this.setState({image: this.props.hoverSrc}) }}
            onMouseLeave= { () => { this.setState({image: this.props.imageSrc}) }}>
        </div> 
        )
    }
}
 
export default Project;


{/*  <a href={this.props.url} target='_self'>
            <img src={this.props.imageSrc} alt={this.props.title}  height='280' width='480'></img>
            <img src={this.props.hoverSrc} alt={this.props.title}  height='280' width='480'></img>
</a>} */}