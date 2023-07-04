const FilterBar = () => {
    const [filterBy, setFilterBy] = useState(null)
  return (
    <>
      <div className="filter-bar">
        <h1>{filterBy ?? 'Posts'}</h1>
        <div className="filter-options-container">
          <button className="toogle-filter-options">open</button>
          <div className="filter-options">
            <ul>
              <li>
                <button
                  onClick={() => {
                    setFilterBy('Trending')
                  }}
                >
                  trending
                </button>
                <button
                  onClick={() => {
                    setFilterBy('Latest')
                  }}
                >
                  latest
                </button>
                <button
                  onClick={() => {
                    setFilterBy('Oldest')
                  }}
                >
                  oldest
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default FilterBar
