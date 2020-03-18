import React, { Component } from 'react'
import '../App.css'
import data from '../projectdata';
import Project from './project';
import Animation from './textanimation.js'

{/*}
function Projects() {
    return (
        
        <header className="intro">
            <div className="subheading1">
                Hello~
            </div>
            <div className="body-text">
                My name is Amanda. <br />
                I use research and design to create delightful and functional products.
            </div>
            <div className="subheading2">
                UX <div className="specialSize"> &#123; </div>
                <div className="projects">
                    <img src={ naturefinder } alt="naturefinder" class = "image" />
                </div>
            </div>
                
         </header>
    )
        
        
}
*/}

class Projects extends Component {
    state = {  }
    render() { 
        return (<div>
        <header className="intro">
            <div className="subheading1">
                Hello~
            </div>
            <div className="body-text">
                My name is Amanda. <br />
                <Animation />
            </div>
            <div className="subheading2">
                UX <div className="specialSize"> &#123; </div>
            </div>
         </header>
        <div className='projects-grid'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                        imageSrc = {project.imageSrc}
                        hoverSrc = {project.hoverSrc}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Projects