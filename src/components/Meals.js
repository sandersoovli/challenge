import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3001/meals");
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        console.log("Fetched meals:", data); // Kuvab andmed konsoolis
        setMeals(data); // Salvestab andmed state'i
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <p>Price: ${meal.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;