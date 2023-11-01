import React from "react";

const ProductHead = () => {
    return (
        <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center">
            <ul className="flex flex-col sm:flex-row">
                <li className="p-1 sm:p-8">Photo</li>
                <li className="p-2 sm:p-8 ml-24">Product code</li>
                <li className="p-2 sm:p-8  ml-16">Name</li>
                <li className="p-2 sm:p-8  ml-20">Stock</li>
                <li className="p-2 sm:p-8 ml-6">Qty</li>
                <li className="p-2 sm:p-8 ml-2">Price</li>
            </ul>
        </div>


    );
}

export default ProductHead;
