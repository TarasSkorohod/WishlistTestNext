"use client"
import React, { useState } from 'react';
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ product, onDeleteProduct }) => {
    const {photo, productCode, name, stock, qty, price } = product;
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };


    return (
        <div className="bg-white p-4 shadow-md mb-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <img src={photo} alt={name} className="w-20 h-20 sm:w-32 sm:h-32" />
                <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center">
                    <ul className="flex flex-col sm:flex-row">
                        <li className="p-2 sm:p-8">Product code: {productCode}</li>
                        <li className="p-2 sm:p-8">Name: {name}</li>
                        <li className="p-2 sm:p-8">Stock: {stock}</li>
                        <li className="p-2 sm:p-8">{qty} Qty</li>
                        <li className="p-2 sm:p-8">Price: {price}</li>
                    </ul>
                </div>
                <div className="mt-4 sm:mt-0">
                    <IconButton
                        onClick={() => toggleLike()}
                        style={{
                            color: liked ? "red" : "inherit",
                        }}
                    >
                        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton  onClick={onDeleteProduct}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                            <path d="M6 5L16 15M16 5L6 15" stroke="#303031" strokeLinecap="round" />
                        </svg>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

