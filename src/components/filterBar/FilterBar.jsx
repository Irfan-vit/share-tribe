import './filterBar.css'
const FilterBar = ({ filter }) => {
  const [filterBy, setFilterBy] = filter
  return (
    <>
      <div className="filter-bar">
        <h1>{filterBy ?? 'Posts'}</h1>
        <div className="filter-options-container">
          <button className="toogle-filter-options">
            <span>Filter</span>
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <div className="filter-options">
            <button
              className="filters"
              onClick={() => {
                setFilterBy('Latest')
              }}
            >
              latest
            </button>
            <button
              className="filters"
              onClick={() => {
                setFilterBy('Oldest')
              }}
            >
              oldest
            </button>
            <button
              className="filters"
              onClick={() => {
                setFilterBy('Trending')
              }}
            >
              trending
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default FilterBar
