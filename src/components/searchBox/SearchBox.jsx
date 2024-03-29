import css from "./SearchBox.module.css";

const SearchBox = ({ searchContact, setSearchContact }) => {
  const handleChange = (e) => {
    setSearchContact(e.target.value);
  };

  return (
    <div className={css.searchWrapper}>
      <p className={css.heading}>Find contact by name:</p>
      <input
        className={css.searchBox}
        type="text"
        placeholder="Type contact's name..."
        title="Type contact's name"
        value={searchContact}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
