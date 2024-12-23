import React from "react";
import { useParams } from "react-router-dom";
import { gigs as allGigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

const CategoryPage = () => {
  const { id } = useParams();
  const categoryGigs = allGigs.filter((gig) => gig.categoryId === id);

  return (
    <div className="categoryPage">
      <h1>Category: {id}</h1>
      <div className="cards">
        {categoryGigs.length > 0 ? (
          categoryGigs.map((gig) => <GigCard key={gig.id} item={gig} />)
        ) : (
          <p>No gigs found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
