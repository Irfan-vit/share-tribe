import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
const Bookmarks = () => {
  const { getBookMarksQuery } = getBookMarksQuery()
  return (
    <>
      <div>Bookmarks</div>
    </>
  )
}
export default Bookmarks
