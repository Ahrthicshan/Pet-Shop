import React from 'react';

const products = [
    {
        id: 1,
        name: 'Premium Dog Food',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Food'
    },
    {
        id: 2,
        name: 'Cat Scratching Post',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Toys'
    },
    {
        id: 3,
        name: 'Plush Pet Bed',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Accessories'
    }
];

const ProductList = () => {
    return (
        <section className="py-20 px-4 flex justify-center">
            <div className="max-w-[1200px] w-full">
                <h2 className="text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-6 flex items-center gap-2">
                    <span className="w-2 h-8 rounded-full bg-primary"></span>
                    All Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                ></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight truncate">{product.name}</h3>
                                <p className="text-text-secondary text-sm">{product.category}</p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-white font-black text-xl">${product.price}</span>
                                <button className="size-10 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
