import PropTypes from 'prop-types';
import { FilterEl } from "./Filter.styled";
import {MdPersonSearch} from "react-icons/md";

export const Filter = ({filterStr, onFilterChange}) => {
    return (
        <FilterEl>
            <label>Search contact by name
            <MdPersonSearch size={25}/>
                <input type="text" onChange={onFilterChange} value={filterStr}/>
            </label>
        </FilterEl>
    )
}

Filter.propTypes = {
    filterStr: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}