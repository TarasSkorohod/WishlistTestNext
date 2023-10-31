import React from "react";

const ProductHead = () => {
    return (
        <div className="flex items-center flex-col sm:flex-row ml-auto">
            <ul className="flex flex-col sm:flex-row">
                <li className="p-2 sm:p-8">Product code</li>
                <li className="p-2 sm:p-8">Name</li>
                <li className="p-2 sm:p-8">Stock</li>
                <li className="p-2 sm:p-8">Qty</li>
                <li className="p-2 sm:p-8">Price</li>
            </ul>
        </div>
    );
}

export default ProductHead;
