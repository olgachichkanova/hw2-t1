const Toolbar = ({filters, selected, onSelectFilter}) => {
    return(
        <div className='toolbar'>
            {filters.map(filter => {
                return (
                <button
                    key={filter}
                    className={selected === filter ? 'active' : ''}
                    value={filter}
                    onClick={onSelectFilter}
                >
                    {filter}
                </button>
            )})}
        </div>
    )
}

export default Toolbar;