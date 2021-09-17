import React, { useState, useEffect } from 'react';
import './Landing.css'
// import biscuit from '../Images/biscuit.jpg'
import axios from 'axios';
import Filter from '../Filter/Filter';

export default function Landing() {
    const [Fooddata, setFooddata] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredFood, setFilteredFood] = useState([]);
    const [sort, setsort] = useState(0);

    // this will fetch the data from the server
    useEffect(() => {
        axios.get("http://localhost:3005/food").then((res) => {
            setFooddata(res.data);
        })
    }, []);

    // this will filter the data for given Input
    useEffect(() => {
        let tempFilteredResults = Fooddata.filter((x) =>
            x.title.toLowerCase().startsWith(searchInput.toLowerCase())
        );
        setFilteredFood(tempFilteredResults);
    }, [searchInput]);

    let onSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    let handlesort = (e) => {
        if (sort === 0) {
            setsort(1);
        }
        else {
            setsort(0);
        }
    }
    return (
        // In this the search form will be used here and conditional rendering of dishes
        <div className="app-container container-fluid" >
            <div className="search-container form-inline" data-aos="fade-right">
                <form className="form-inline">
                    <div className="form-group form-design">
                        <input type="text" style={{ width: '60%' }} onChange={onSearchChange} value={searchInput} className="form-control" id="search" placeholder="Search your favourite dishes" name="search" />
                        <br />
                        <button className="btn btn-primary" type="submit" onClick={onSearchChange}>Search</button>
                    </div>
                </form>
            </div>
            <div className="sort-container" data-aos="fade-right">
                <button className="btn btn-secondary" type="submit" value={sort} onClick={handlesort}>Sort</button>
            </div>
            <div data-aos="fade-right" className="landing-container">
                <Filter Food={filteredFood.length ? filteredFood : Fooddata} sort={sort} />
            </div>
        </div>
    )
}
