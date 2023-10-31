"use client"
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Header from "@/components/header/Header";
import { productsData } from "../../../data/dataCardItem";
import ProductHead from "@/components/productHead/ProductHead";

const ProductList = () => {
    const [products, setProducts] = useState(productsData);
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [showOnlyWithoutPhoto, setShowOnlyWithoutPhoto] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState(['all', 'category1', 'category2']);

    const addNewCategory = () => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
        setNewCategory('');
    };

    const toggleLike = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].liked = !updatedProducts[index].liked;
        setProducts(updatedProducts);
    };

    const deleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const itemCount = products.length;

    const showMore = () => {
        setVisibleProducts(visibleProducts + 3);
    };

    const filterProducts = () => {
        return showOnlyWithoutPhoto
            ? products.filter((product) => !product.photo)
            : selectedCategory === 'all'
                ? products
                : products.filter((product) => product.category === selectedCategory);
    };



    return (
        <div className="container font-roboto">
            <Header currentPage="Page" itemCount={itemCount} />
            <div className="container mx-auto py-8">

                <div className="mb-4 flex flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`mr-2 p-2 rounded ${
                                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-300'
                            }`}
                        >
                            {category === 'all' ? 'Всі' : ` ${category}`}
                        </button>
                    ))}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Створити нову категорію"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            onClick={addNewCategory}
                            className="ml-2 bg-blue-600 text-white rounded p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Додати категорію
                        </button>
                    </div>
                </div>



                <div className="mb-4">
                    <div className="mb-4 grid grid-cols-2 items-center">
                        <ProductHead />

                        <label className="relative inline-flex items-center cursor-pointer ml-auto">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={showOnlyWithoutPhoto}
                                onChange={() => setShowOnlyWithoutPhoto(!showOnlyWithoutPhoto)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                {filterProducts().slice(0, visibleProducts).map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        onToggleLike={() => toggleLike(index)}
                        onDeleteProduct={() => deleteProduct(index)}
                    />
                ))}
                {visibleProducts < filterProducts().length && (
                    <button onClick={showMore} className="text-blue-600 hover:underline focus:outline-none">
                        Показати ще
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductList;
