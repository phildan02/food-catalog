import { Link } from 'react-router-dom';

function MealListItem(props) {
    const {
        strMeal: name,
        strMealThumb: image,
        idMeal: id
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${id}`} className="btn">Рецепт</Link>
            </div>
        </div>
    );
}

export { MealListItem }