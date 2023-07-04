import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
const Bookmarks = () => {
  const { getBookMarksQuery } = useGetBookMarks()
  console.log(getBookMarksQuery?.data,'')
  return (
    <>
      <div>Bookmarks</div>
    </>
  )
}
export default Bookmarks
