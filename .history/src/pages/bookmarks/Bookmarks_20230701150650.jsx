import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
const Bookmarks = () => {
  const { getBookMarksQuery } = useGetBookMarks()
  return (
    <>
      <div>Bookmarks</div>
    </>
  )
}
export default Bookmarks
