import React from 'react'
import './Filter.css'

export default function Filter(props) {
    const Dishes = props.Food;
    const sort = props.sort;
    if (sort === 0) {
        Dishes.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    else {
        Dishes.sort((a, b) => a.price > b.price ? -1 : 1);
    }
    return (
        <>
            {/* This will load the data and filtered data also */}
            {Dishes.map((value) => {
                return (
                    <div className="details-card" data-aos="fade-left" key={value._id}>
                        <p>{value.title}</p>
                        <div className="imag-contain">
                            <img src={value.img} alt="food" className="imag-container" />
                        </div>
                        <p>Price:RS {value.price}</p>
                    </div>
                )
            })}
        </>
    )
}
