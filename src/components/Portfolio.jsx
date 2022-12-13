import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

const Portfolio = () => {
    const [filterActive, setFilterActive] = useState('All')
    const data = require('../data/data')
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const handleFilter = (projects) => {
        if(filterActive === "All") {
            return projects
        }
        return projects.filter(item => item.category === filterActive);
    }
    return(
        <div className='container'>
            <Toolbar
                filters={filters}
                selected={filterActive}
                onSelectFilter={(event) => {setFilterActive(event.target.value)}}
            />
            <div className="gallery">
                <ProjectList projects={handleFilter(data.data)}/>
            </div>
        </div>
    )
}

export default Portfolio;