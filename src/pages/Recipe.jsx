import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api'
import { Preloader } from '../components/Preloader';

function MealRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id]);


    return (
        <>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img className='recipe-img' src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Категория: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Регион: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ингредиент</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{ margin: '2rem 0 1rem' }}>Видео рецепта</h5>
                            <iframe
                                className='recipe-yt'
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(32)}`}
                                allowFullScreen
                            />
                        </div>
                    ) : null}
                    <button className='btn goBack-btn' onClick={goBack}>Назад</button>
                </div>
            )}
        </>
    );
}

export { MealRecipe };