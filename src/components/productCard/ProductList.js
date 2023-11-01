"use client"
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Header from "@/components/header/Header";
import { productsData } from "../../../data/dataCardItem";
import ProductHead from "@/components/productHead/ProductHead";
import { IconButton } from "@mui/material";
import Footer from "@/components/footer/Footer";

const ProductList = () => {
    const [products, setProducts] = useState(productsData);
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [showOnlyWithoutPhoto, setShowOnlyWithoutPhoto] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState(['all', 'category1', 'category2']);
    const [deleteCategoryConfirmation, setDeleteCategoryConfirmation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addNewCategory = () => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
        setNewCategory('');
        setIsModalOpen(false); // Закрити модальне вікно після додавання категорії
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

    const handleDeleteCategory = (category) => {
        setCategories(categories.filter((c) => c !== category));
        setDeleteCategoryConfirmation(null);
    };

    return (
        <div className="container font-roboto">
            <Header currentPage="Page" itemCount={itemCount} />
            <div className="container mx-auto py-8">
                <div className="mb-4 flex flex-wrap">
                    {categories.map((category) => (
                        <div key={category} className="mr-2 mb-2">
                            <span
                                onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer p-2 h-[45px] rounded ${
                                    selectedCategory === category ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'
                                }`}
                                style={{ fontWeight: 700 }}
                            >
                                {category === 'all' ? 'Всі' : ` ${category}`}
                                {category !== 'all' && (
                                    <IconButton onClick={() => setDeleteCategoryConfirmation(category)} className="p-0 m-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="w-auto h-auto"
                                        >
                                            <path
                                                d="M17.1428 6.28571H14.5714L13.8367 5.57143H10.1632L9.42855 6.28571H6.85712V7.71428H17.1428M7.59181 17C7.59181 17.3789 7.74662 17.7422 8.02218 18.0101C8.29775 18.2781 8.67149 18.4286 9.0612 18.4286H14.9387C15.3285 18.4286 15.7022 18.2781 15.9778 18.0101C16.2533 17.7422 16.4081 17.3789 16.4081 17V8.42857H7.59181V17Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </IconButton>
                                )}


                            </span>
                        </div>
                    ))}

                    <div className="mb-4 ml-auto">
                        <button onClick={() => setIsModalOpen(true)} className="  h-[45px] bg-blue-600 text-white rounded p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                            Додати категорію
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
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
                        <span className="pl-2">Image</span>
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
            {deleteCategoryConfirmation && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p>Ви впевнені, що хочете видалити категорію "{deleteCategoryConfirmation}"?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="px-4 py-2 bg-red-600  text-white rounded-md mr-2"
                                onClick={() => handleDeleteCategory(deleteCategoryConfirmation)}
                            >
                                Видалити
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                                onClick={() => setDeleteCategoryConfirmation(null)}
                            >
                                Відмінити
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p>Створити нову категорію</p>
                        <input
                            type="text"
                            placeholder="Назва категорії"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="p-2 rounded bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2"
                                onClick={addNewCategory}
                            >
                                Додати категорію
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded-md"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setNewCategory('');
                                }}
                            >
                                Скасувати
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />

        </div>
    );
};

export default ProductList;
