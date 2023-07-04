import './nav.css'
const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>home</li>
          <hr />
          <li>explore</li>
          <hr />
          <li>search</li>
          <hr />
          <li>bookmarks</li>
        </ul>
        <div>
          <button>+</button>
        </div>
        <div >
          <h1>Content</h1>
          <span>close</span>
        </div>
      </nav>
    </>
  )
}
export default Nav
