import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
