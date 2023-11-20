import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const navigate = useNavigate();

    const location = useLocation();
    const filterText = location.search.split('=')[1];

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => (
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            ))
        );
        navigate(`?search=${str}`);
    };


    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(
                filterText ?
                    data.categories.filter((item) => (
                        item.strCategory.toLowerCase().includes(filterText.toLowerCase())
                    )) : data.categories
            );
        });
    }, [filterText]);

    return (
        <>
            <Search cb={handleSearch} />
            {
                !catalog.length ? <Preloader /> :
                    !filteredCatalog.length ? <h3>Ничего не найдено. Попробуйте изменить поиск</h3> :
                        <CategoryList catalog={filteredCatalog} />
            }
        </>
    );
}

export { Home };