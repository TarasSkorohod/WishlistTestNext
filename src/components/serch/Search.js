import React, { useState } from 'react';

const Search = ({ products, onSearch }) => {
    const [searchItem, setSearchItem] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchItem(value);
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredProducts);
        onSearch(filteredProducts); // Передаємо результати пошуку до батьківського компонента
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchItem}
                onChange={handleSearch}
            />
            <ul>
                {searchResults.map((product) => (
                    <li key={product.productCode}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
