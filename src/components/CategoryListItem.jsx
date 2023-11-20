import { Link } from 'react-router-dom';

function CategoryListItem(props) {
    const {
        // idCategory: id,
        strCategory: name,
        strCategoryThumb: image,
        strCategoryDescription: descr
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{descr.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${name}`} className="btn">Просмотр</Link>
            </div>
        </div>
    );
}

export { CategoryListItem };