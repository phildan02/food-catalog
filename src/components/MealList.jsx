import {MealListItem} from './MealListItem';

function MealList({meals}) {
    return <div className="list">
        {meals.map(meal => (
            <MealListItem key={meal.idMeal} {...meal} />
        ))}
    </div>
}

export {MealList};