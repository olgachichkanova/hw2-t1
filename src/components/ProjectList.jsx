const ProjectList = ({projects}) => {
    return(
        <ul className='project__img'>
            {projects.map((project, id) => <li key={id}><img alt="Project" src={project.img}></img></li>)}
        </ul>
    )
}

export default ProjectList;