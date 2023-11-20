import { CategoryListItem } from './CategoryListItem';

function CategoryList({ catalog = [] }) {
    return (
        <div className="list">
            {catalog.map(el => <CategoryListItem key={el.idCategory} {...el} />)}
        </div>
    );
}

export { CategoryList };