import React from 'react';
import { Link } from 'react-router-dom';

const PetFood = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="w-full border-b border-solid border-b-[#2c3829] bg-background-dark/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="layout-container flex justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 lg:px-10 py-3">
                        <header className="flex items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <Link className="flex items-center gap-4 text-white" to="/">
                                    <div className="size-8 text-primary">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                            <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-black leading-tight tracking-tight uppercase">Ryker</h2>
                                </Link>
                            </div>
                            <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-[#2c3829] border border-transparent focus-within:border-primary transition-colors">
                                    <div className="text-[#a4b89d] flex items-center justify-center pl-4 pr-1">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 bg-transparent border-none placeholder:text-[#a4b89d] px-2 text-sm font-normal leading-normal" placeholder="Search foods..." defaultValue="" />
                                </div>
                            </label>
                        </header>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full px-4 lg:px-10 py-8">
                <div className="flex flex-col max-w-[1200px] w-full gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm text-[#a4b89d] font-medium">
                            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-white">Pet Foods</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div>
                                <h1 className="text-white text-4xl lg:text-5xl font-black tracking-tight mb-2">Pet Nutrition Center</h1>
                                <p className="text-text-secondary text-lg max-w-2xl">Premium, organic, and specialized diets to keep your furry friends healthy and happy.</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-white bg-[#2c3829] px-4 py-2 rounded-full">
                                <span>Sort by:</span>
                                <select className="bg-transparent border-none text-primary font-bold focus:ring-0 cursor-pointer p-0 pr-6">
                                    <option>Popular</option>
                                    <option>Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829]">
                                <h3 className="text-white font-bold text-lg mb-4 flex items-center justify-between">
                                    Animal Type
                                    <span className="material-symbols-outlined text-primary">pets</span>
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input defaultChecked className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Dogs</span>
                                        <span className="ml-auto text-xs text-[#5c6b57]">124</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Cats</span>
                                        <span className="ml-auto text-xs text-[#5c6b57]">86</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Small Animals</span>
                                        <span className="ml-auto text-xs text-[#5c6b57]">42</span>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829]">
                                <h3 className="text-white font-bold text-lg mb-4 flex items-center justify-between">
                                    Dietary Needs
                                    <span className="material-symbols-outlined text-primary">nutrition</span>
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Grain-Free</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">High Protein</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Sensitive Stomach</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input defaultChecked className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Organic</span>
                                    </label>
                                </div>
                            </div>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829]">
                                <h3 className="text-white font-bold text-lg mb-4 flex items-center justify-between">
                                    Brands
                                    <span className="material-symbols-outlined text-primary">sell</span>
                                </h3>
                                <div className="flex flex-col gap-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Ryker Select</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Purrfect Bite</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input className="peer h-5 w-5 rounded-md border-2 border-[#2c3829] bg-[#131811] checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all appearance-none" type="checkbox" />
                                            <span className="absolute text-[#131811] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none material-symbols-outlined text-[16px] font-bold">check</span>
                                        </div>
                                        <span className="text-[#a4b89d] group-hover:text-white transition-colors">Wild Nature</span>
                                    </label>
                                </div>
                            </div>
                        </aside>
                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-contain m-auto" data-alt="Bag of premium organic dog kibble" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSusEK4jd8R-kqQgFgxh2sGP2k42WN0OqRtxKP8XlOiMR1KlXOCL3IUuWvsITMGzoc6M1Ziz4MJhgxbZW4X8BO47cvH02AaQF4rGT_55wBaoGyzZ9fzaHYWEKsegk8E3uJTFI5h3zekV88y12YSI9ibd2D10uUVmReI10Y-wBMFydr_XrFv7F2hHHByyH2-ZCmmsvSxtT5KIboe-T6G4fmtBFTi6nhlh9n03JLD1mi11ffmUl9xFMCVKE9GOUo4LxtoOQfJh9KnjUF")' }}></div>
                                        <div className="absolute top-3 right-3 bg-primary text-[#131811] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">New Arrival</div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Dog
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Organic Kibble Mix - Beef & Rice</h3>
                                                <p className="text-text-secondary text-sm mt-1">Ryker Select</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Grain-Free</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">High Protein</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <span className="text-white font-black text-2xl">$45.00</span>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Can of wet cat food with salmon" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI5UHcoJwEPRM41vzGXDzcrJWuChuJlchDp3AvKMXGzS8IyBPSiRkIMLqTN_lBvoB34IvMNULZKrcVYJuj6CnIojcNaJe4wiZMV5JxiRJWC9Yojwj2sWQ_XI62dfUPkpOJzX3rHDAxFFnjF_vFHbfvDZidU-PbLKwXZKOzLKOkP8TUNts-H9fCYdnbqUyomhYRXkAlmwGttHwnez0_VyTOCcjQWIcI5NlSgmv3vaA2N4txR2YqiSICb9VCG2zAwOtx-Fjl4-vwaGPv")' }}></div>
                                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Best Seller</div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Cat
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Salmon Paté Feast</h3>
                                                <p className="text-text-secondary text-sm mt-1">Purrfect Bite</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Wet Food</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Omega-3</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <span className="text-white font-black text-2xl">$2.50</span>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-contain" data-alt="Bag of senior dog food" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKv5yUtKhRZidmDBN8Jq2eoE15eV4UhhniH9hWFpqF8vseckUF-0x4yNk1c6v15utr0iadx7uXVm25V60Wca65hjgbcaxoBw2wbFBWMxuA88DF0YrkjlmzXbbG-Lz76roI_yqkBwxngI6t0qyUk2VFTx5HhEod2RCQ-p1rBo-A_H6Uze1FKHTuQoB9seb5yvEWRg3DywhUxO6ksFEiMjq0SZf3TzNi4k_z9YlP2U2czJxSExZaXGmwwdfvC_Xo04KL8Nr4xeEPgE_O")' }}></div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Dog
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Golden Years Senior Formula</h3>
                                                <p className="text-text-secondary text-sm mt-1">Wild Nature</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Senior</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Joint Support</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <span className="text-white font-black text-2xl">$52.00</span>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Hamster food mix with seeds" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc_B1Qz9waJO7C_YfK0cak2kUb1RSyGNTapfW96eesqM2PXa4DdbYaUqHaXmw94XwKZu7nR7WAoswDd_zkTYCsEnB7hWteuL8YT2w6eHoxFYC72W3FUEQ5CvgWxd2jFtLaEDIR7in8ka2fTjfb7ucQrLKaVYhjvSbLYBiZhL2P2kX-fNXP0JLvlH4swbBvQEPrcLnlCsWdfspLqPc2IBhWDOSvXDK0l1unQm56Bx3lfG2Taa_bbTaM6P73zj6eogLgwifw5toC145Z")' }}></div>
                                        <div className="absolute top-3 right-3 bg-primary text-[#131811] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">-15%</div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Small Pet
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Crunchy Nut & Seed Mix</h3>
                                                <p className="text-text-secondary text-sm mt-1">Ryker Select</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Natural</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Vitamins</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <div className="flex flex-col leading-none">
                                            <span className="text-white font-black text-2xl">$12.50</span>
                                            <span className="text-[#a4b89d] text-sm line-through decoration-primary">$15.00</span>
                                        </div>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Bag of puppy food" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWvW8l-u61oAhrFuEberJ7PTmpd1Emlr8CDUwiZCkGtW7XCbxQIea3DmyMA6BtvXA96a9aYTGIpgzwzCJ1AjIb_fuwcCiymRK12bbpKiPgxnPYmhE2fHUEMkN0EF9fkNDed0Gtuocy87gqDiQY2AVSZcytdgqBfHgBPg4Fgu9kUgKcczu5gu0guvn_VQoSclHMau7stn75xUu8waGNyDB5TlNiHdgQw8ML7iPkTCl7WY5bVjdaLxwScKQE5xW18lc5SoafAKq8feED")' }}></div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Dog
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Puppy Growth Formula</h3>
                                                <p className="text-text-secondary text-sm mt-1">Wild Nature</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Growth</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">DHA</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <span className="text-white font-black text-2xl">$38.99</span>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors border border-transparent hover:border-primary/20 h-full">
                                    <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                        <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Tuna cat treats" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeSV_d_OE3O76SvEUk_H22GpumAJn1TVicB9Umhz6IgKDfNTpZD0x4k2t1D3UNBD6sZTHRJoulvkNh5tFMYt09T66WdP7yAy6AxyY5yUiiXllz8TlWHiD549idtoW5h86BOoOonKyxpTMGCj7MJ5L_x6bqsGqh-SQXR3iK4k2yeY46IpDo-JwQHK2vPAY_s2w40wbJtQdav7EZewpEgm2OHaHn_dWS-TKgF9w_AE7sNnM4ZUJHcDZH8Zx8N6JfXCL08HxTopGel8GE")' }}></div>
                                        <div className="absolute top-3 left-3 bg-[#131811]/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">pets</span> Cat
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">Tuna & Shrimp Treats</h3>
                                                <p className="text-text-secondary text-sm mt-1">Purrfect Bite</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Treats</span>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#a4b89d] bg-[#1a2118] px-2 py-1 rounded-md">Low Calorie</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2c3829]">
                                        <span className="text-white font-black text-2xl">$6.99</span>
                                        <button className="size-11 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(73,230,25,0.4)]">
                                            <span className="material-symbols-outlined">add_shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-12 gap-2">
                                <button className="size-10 flex items-center justify-center rounded-full bg-[#2c3829] text-white hover:bg-primary hover:text-[#131811] transition-colors disabled:opacity-50 disabled:hover:bg-[#2c3829] disabled:hover:text-white" disabled>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="size-10 flex items-center justify-center rounded-full bg-primary text-[#131811] font-bold">1</button>
                                <button className="size-10 flex items-center justify-center rounded-full bg-[#2c3829] text-white hover:bg-primary hover:text-[#131811] transition-colors font-bold">2</button>
                                <button className="size-10 flex items-center justify-center rounded-full bg-[#2c3829] text-white hover:bg-primary hover:text-[#131811] transition-colors font-bold">3</button>
                                <span className="flex items-end justify-center px-2 text-[#a4b89d]">...</span>
                                <button className="size-10 flex items-center justify-center rounded-full bg-[#2c3829] text-white hover:bg-primary hover:text-[#131811] transition-colors font-bold">8</button>
                                <button className="size-10 flex items-center justify-center rounded-full bg-[#2c3829] text-white hover:bg-primary hover:text-[#131811] transition-colors">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0d120c] pt-20 pb-10 border-t border-[#2c3829] mt-auto">
                <div className="layout-container flex flex-col items-center justify-center px-4">
                    <div className="max-w-[600px] w-full text-center flex flex-col gap-6 mb-16">
                        <h2 className="text-white text-3xl font-black tracking-tight">Join the Pack</h2>
                        <p className="text-text-secondary">Get exclusive deals, pet care tips, and photos of cute animals delivered to your inbox.</p>
                        <form className="flex w-full items-stretch rounded-full h-14 bg-[#1a2118] border border-[#2c3829] focus-within:border-primary transition-colors p-1">
                            <input className="flex-1 bg-transparent border-none text-white px-6 focus:ring-0 placeholder:text-[#5c6b57]" placeholder="Enter your email address" type="email" />
                            <button className="bg-primary text-[#131811] h-full px-8 rounded-full font-bold hover:bg-[#3cc514] transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#2c3829] pt-10">
                        <div className="flex items-center gap-2 text-white">
                            <div className="size-6 text-primary">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="font-bold text-xl uppercase tracking-wide">Ryker</span>
                        </div>
                        <div className="flex gap-8 text-[#a4b89d] text-sm font-medium">
                            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                            <a className="hover:text-primary transition-colors" href="#">Shipping Info</a>
                        </div>
                        <div className="text-[#5c6b57] text-sm">
                            © 2024 Ryker Pet Shop. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetFood;
