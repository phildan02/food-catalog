import { useState } from 'react';

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (value) cb(value);
    };


    return <div
        className="row search-box"
    >
        <input
            type="search"
            id="search-field"
            placeholder='Поиск'
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />
        <button
            className='btn'
            onClick={() => handleSubmit()}
        >Поиск</button>
    </div>
}

export { Search };