import React from "react";

function CategoryFilter({categories, changeFilter, filter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        if(category === filter){
          return(
            <button className="selected" onClick={e=> {changeFilter(e)}} category={category}>{category}</button>
          )
        }
        return(
        <button onClick={e=> {changeFilter(e)}} category={category}>{category}</button>
        )})}
    </div>
  );
}

export default CategoryFilter;
