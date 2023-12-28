const Search = ({searchStr, searchhandler}) => {
  return (
    <>
        <input
            id="search"
            type="text"
            placeholder="Chercher.."
            value={searchStr}
            onChange={searchhandler}
        />
        <hr />
    </>
  )
}

export default Search