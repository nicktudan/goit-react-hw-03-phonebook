import PropTypes from 'prop-types'; 
import { FilterInput, FilterContainer, FilterLabel } from './Filter.style';

export const Filter = ({ filter, onChange }) => {
    return <FilterContainer>
        <FilterLabel>
            Find contacts by name
        </FilterLabel>
        <FilterInput type="text" name="filter" value={filter} onChange={onChange} />
    </FilterContainer>
}

Filter.propTypes = {
    filter: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func.isRequired,
};