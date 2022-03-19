import React, { useEffect, useState } from "react";

import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:

            const index = state.favoriteMeals.findIndex((item) => item == action.mealId)
            console.log(index)
            if (index >= 0) {

                state.favoriteMeals.splice(index, 1);
                console.log(state.favoriteMeals)

            }
            else {
                state.favoriteMeals.push(action.mealId)
                console.log(state.favoriteMeals)

            }
            return {
                meals: [...state.meals],
                filteredMeals: [...state.filteredMeals],
                favoriteMeals: [...state.favoriteMeals]
            }
        default:
            return state;
    }
}



export default mealsReducer