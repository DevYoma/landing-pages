import React from 'react';
import './AntiqueSearchBar.css';
import SearchIcon from '../../assets/searchIcon.png';

const AntiqueSearchBar = () => {
    return ( 
        <div className="antiqueSearchBar container row">
            {/* This is the antique Search Bar 🚀 */}
            <div>
                <h4>Location</h4>
                <select name="Location" id="location">
                    <option value="Norway">Norway</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                </select>
            </div>

            <div>
                <h4>Religion</h4>
                <select name="Religion" id="religion">
                    <option value="Christianity">Christianity</option>
                    <option value="Islam">Islam</option>
                    <option value="Buddha">Buddha</option>
                </select>
            </div>

            <div>
                <h4>Year</h4>
                <select name="Year" id="year">
                    <option value="1384">1384</option>
                    <option value="447AD">447AD</option>
                    <option value="335BC">335BC</option>
                    <option value="1845">1845</option>
                    <option value="1906">1906</option>
                </select>
            </div>

            <div>
                <h4>Type</h4>
                <select name="Type" id="type">
                    <option value="Norway">Norway</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                </select>
            </div>

            <button className="antiqueSearchBar__location">
                <img src={SearchIcon} alt="searchIcon" />
                Search
            </button>
        </div>
     );
}
 
export default AntiqueSearchBar;