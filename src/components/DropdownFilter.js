import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchCountryAction } from '../redux/countries/countries';

const DropdownFilter = () => {
  const dispatch = useDispatch();

  const europecountries = ['Portugal', 'Brazil', 'India', 'France', 'Germany', 'Mexico', 'Canada', 'Italy', 'Argentina', 'Colombia'];
  const buttonList = europecountries.map((country) => <Dropdown.Item className="text-center" key={country} eventKey={country} data-testid={country}>{country}</Dropdown.Item>);

  const filterHandler = (e) => {
    dispatch(fetchCountryAction(e.toLowerCase()));
  };

  return (

    <DropdownButton className="w-50 m-2" variant="danger" id="dropdown-button-drop-end" drop="end" title="Filter By Country" key="end" as={ButtonGroup} onSelect={filterHandler}>
      {buttonList}
    </DropdownButton>

  );
};

export default DropdownFilter;
