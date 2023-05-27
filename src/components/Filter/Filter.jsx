import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';
import './Filter.css';

const Filter = () => {
  
  const inputValue = useSelector(state => state.filter.value);
  console.log('inputValue', inputValue);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeFilter(e.target.value.toLowerCase().trim()));

  return (
    <div className="Filter">
      <p>Find contacts by name</p>
        <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};


export default Filter;