import React from 'react';
//
const Home = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            {/* Top Navigation */}
            <div className="w-full border-b border-solid border-b-[#2c3829] bg-background-dark/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="layout-container flex justify-center">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 lg:px-10 py-3">
                        <header className="flex items-center justify-between whitespace-nowrap">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="size-8 text-primary">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                            <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-white text-2xl font-black leading-tight tracking-tight uppercase">Ryker</h2>
                                </div>
                                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-[#2c3829] border border-transparent focus-within:border-primary transition-colors">
                                        <div className="text-[#a4b89d] flex items-center justify-center pl-4 pr-1">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 bg-transparent border-none placeholder:text-[#a4b89d] px-2 text-sm font-normal leading-normal" placeholder="Search for products..." defaultValue="" />
                                    </div>
                                </label>
                            </div>
                            <div className="flex flex-1 justify-end gap-6 items-center">
                                <div className="hidden lg:flex items-center gap-9">
                                    <a className="text-white hover:text-primary transition-colors text-sm font-bold leading-normal uppercase tracking-wide" href="#">Shop</a>
                                    <a className="text-white hover:text-primary transition-colors text-sm font-bold leading-normal uppercase tracking-wide" href="#">Services</a>
                                    <a className="text-white hover:text-primary transition-colors text-sm font-bold leading-normal uppercase tracking-wide" href="#">About</a>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#2c3829] text-white hover:bg-[#3d4d39] transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
                                        <span className="truncate">Log In</span>
                                    </button>
                                    <button className="flex items-center justify-center overflow-hidden rounded-full size-10 bg-primary text-[#131811] hover:bg-[#3cc514] transition-colors shadow-[0_0_15px_rgba(73,230,25,0.3)]">
                                        <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex justify-center py-5 lg:py-10 px-4">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="@container">
                        <div className="flex flex-col-reverse gap-6 lg:flex-row items-center">
                            <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10 text-center lg:text-left items-center lg:items-start">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-white text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.033em]">
                                        EVERYTHING<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">YOUR BEST FRIEND</span><br />
                                        NEEDS
                                    </h1>
                                    <h2 className="text-text-secondary text-lg font-medium leading-relaxed max-w-[500px]">
                                        Premium supplies for modern pets. From nutrition to gear, experience the best for your furry companions.
                                    </h2>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-[#131811] text-base font-bold leading-normal tracking-wide hover:scale-105 transition-transform shadow-[0_0_20px_rgba(73,230,25,0.4)]">
                                        <span className="truncate">Shop Now</span>
                                    </button>
                                    <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-[#2c3829] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#3d4d39] transition-colors">
                                        <span className="truncate">Book Grooming</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent z-10"></div>
                                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform duration-700 group-hover:scale-110" data-alt="A happy golden retriever jumping to catch a frisbee in a park with sunlight filtering through" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaMdDFMZqwKNAGIjShxhYhUfXRqNeINUiso2ARRRK6FS6qDQrWCN1VodqP470CsFn3-C3ie1lu7fagn9-KkBh8ZL2RQu7T2bdf03MHf0bSbKXseqQfOIz4RD-XhweU7h6itIhue55Uzq-rj8IJMO7TA1cZ-Q66jJuacPb878iajDtHMylFmOWeJQQOoRENO8f40dX7EoxSJhH9y9C4te0opR_Lvh0bjK0RNfHI72cNBt5pS5_Z7dqppCb0DnXo-yhlaQWvOjSiDTc6")' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="flex justify-center py-10 px-4">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <h2 className="text-white text-2xl font-bold leading-tight tracking-tight px-4 pb-6 pt-5 flex items-center gap-2">
                        <span className="w-2 h-8 rounded-full bg-primary"></span>
                        Browse Categories
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                        {/* Category 1 */}
                        <a className="group flex flex-col gap-4 text-center items-center" href="#">
                            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#2c3829] group-hover:border-primary transition-colors duration-300 relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of a cute cat face looking curious" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBeSV_d_OE3O76SvEUk_H22GpumAJn1TVicB9Umhz6IgKDfNTpZD0x4k2t1D3UNBD6sZTHRJoulvkNh5tFMYt09T66WdP7yAy6AxyY5yUiiXllz8TlWHiD549idtoW5h86BOoOonKyxpTMGCj7MJ5L_x6bqsGqh-SQXR3iK4k2yeY46IpDo-JwQHK2vPAY_s2w40wbJtQdav7EZewpEgm2OHaHn_dWS-TKgF9w_AE7sNnM4ZUJHcDZH8Zx8N6JfXCL08HxTopGel8GE")' }}></div>
                            </div>
                            <div>
                                <p className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">Animals</p>
                                <p className="text-text-secondary text-sm font-medium">Adoption & Sale</p>
                            </div>
                        </a>
                        {/* Category 2 */}
                        <a className="group flex flex-col gap-4 text-center items-center" href="#">
                            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#2c3829] group-hover:border-primary transition-colors duration-300 relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-500" data-alt="A bowl of healthy dog food with fresh ingredients nearby" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI5UHcoJwEPRM41vzGXDzcrJWuChuJlchDp3AvKMXGzS8IyBPSiRkIMLqTN_lBvoB34IvMNULZKrcVYJuj6CnIojcNaJe4wiZMV5JxiRJWC9Yojwj2sWQ_XI62dfUPkpOJzX3rHDAxFFnjF_vFHbfvDZidU-PbLKwXZKOzLKOkP8TUNts-H9fCYdnbqUyomhYRXkAlmwGttHwnez0_VyTOCcjQWIcI5NlSgmv3vaA2N4txR2YqiSICb9VCG2zAwOtx-Fjl4-vwaGPv")' }}></div>
                            </div>
                            <div>
                                <p className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">Nutrition</p>
                                <p className="text-text-secondary text-sm font-medium">Food & Treats</p>
                            </div>
                        </a>
                        {/* Category 3 */}
                        <a className="group flex flex-col gap-4 text-center items-center" href="#">
                            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#2c3829] group-hover:border-primary transition-colors duration-300 relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-500" data-alt="Various colorful pet toys and leashes on a dark background" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIvUzeU-LtAIHULh_njTluw6WrR0aQWpD3KLb5RB93DUbIfajQ-qh-RpTzKgP1PIsOKMhHAT69FmLE7JKTJ73kMdsJTvWzS-bOoF3KYsKo3ZdhPCqOympBjsrTLpro0su1Z6Wzto3ogUi4Nj8MXki5tllYRV3jJCItxbJiIVaRiuz_IsbEmvt4-LRsHjXUQTvMBhEcy5K9gvLtEBZUWRQiTtgOU_s-UkD6-po7_6o34LkUlS7_Dw7J52dqDTi8vSCg7m3vc1Ir63G0")' }}></div>
                            </div>
                            <div>
                                <p className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">Gear</p>
                                <p className="text-text-secondary text-sm font-medium">Accessories</p>
                            </div>
                        </a>
                        {/* Category 4 */}
                        <a className="group flex flex-col gap-4 text-center items-center" href="#">
                            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#2c3829] group-hover:border-primary transition-colors duration-300 relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-500" data-alt="Bottles of pet vitamins and wellness supplements" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKv5yUtKhRZidmDBN8Jq2eoE15eV4UhhniH9hWFpqF8vseckUF-0x4yNk1c6v15utr0iadx7uXVm25V60Wca65hjgbcaxoBw2wbFBWMxuA88DF0YrkjlmzXbbG-Lz76roI_yqkBwxngI6t0qyUk2VFTx5HhEod2RCQ-p1rBo-A_H6Uze1FKHTuQoB9seb5yvEWRg3DywhUxO6ksFEiMjq0SZf3TzNi4k_z9YlP2U2czJxSExZaXGmwwdfvC_Xo04KL8Nr4xeEPgE_O")' }}></div>
                            </div>
                            <div>
                                <p className="text-white text-lg font-bold leading-normal group-hover:text-primary transition-colors">Wellness</p>
                                <p className="text-text-secondary text-sm font-medium">Meds & Vitamins</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="flex justify-center py-10 px-4 bg-[#1a2118]">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="flex justify-between items-end px-4 pb-6 pt-5">
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-tight flex items-center gap-2">
                            <span className="w-2 h-8 rounded-full bg-primary"></span>
                            Trending Now
                        </h2>
                        <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                        {/* Product 1 */}
                        <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-contain m-auto" data-alt="Bag of premium organic dog kibble" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSusEK4jd8R-kqQgFgxh2sGP2k42WN0OqRtxKP8XlOiMR1KlXOCL3IUuWvsITMGzoc6M1Ziz4MJhgxbZW4X8BO47cvH02AaQF4rGT_55wBaoGyzZ9fzaHYWEKsegk8E3uJTFI5h3zekV88y12YSI9ibd2D10uUVmReI10Y-wBMFydr_XrFv7F2hHHByyH2-ZCmmsvSxtT5KIboe-T6G4fmtBFTi6nhlh9n03JLD1mi11ffmUl9xFMCVKE9GOUo4LxtoOQfJh9KnjUF")' }}></div>
                                <div className="absolute top-3 right-3 bg-primary text-[#131811] text-xs font-bold px-2 py-1 rounded-full">New</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight truncate">Organic Kibble Mix</h3>
                                <p className="text-text-secondary text-sm">Nutrition</p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-white font-black text-xl">$45.00</span>
                                <button className="size-10 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Stylish leather dog collar with gold hardware" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz75ll5aNrVL4wpslQwIt8j7qkqkhpHsrNoyjNgtUBxULnU_C4DKumfbBo7gtUJ264xr5w8O0mhn_4BYijnFUvpzg0G3r4aHQHHCGT_pBAal7bzvZbiTVftcQ35wCBEtRDAPIOHD5SNad7A7tgkLE7bp3rT0g1RaCLZaomfUdkkCIBKTRFU3itPbS_SmXidYVO3Uu22JbdnF8cZBkQeibtIiMWQfpCxHLpc79RMjACRqnsV5uVGtwTqy95KKK3-fr-Oec6v5YN9tZY")' }}></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight truncate">Leather Luxe Collar</h3>
                                <p className="text-text-secondary text-sm">Gear</p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-white font-black text-xl">$28.50</span>
                                <button className="size-10 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Soft plush donut dog bed in grey" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWvW8l-u61oAhrFuEberJ7PTmpd1Emlr8CDUwiZCkGtW7XCbxQIea3DmyMA6BtvXA96a9aYTGIpgzwzCJ1AjIb_fuwcCiymRK12bbpKiPgxnPYmhE2fHUEMkN0EF9fkNDed0Gtuocy87gqDiQY2AVSZcytdgqBfHgBPg4Fgu9kUgKcczu5gu0guvn_VQoSclHMau7stn75xUu8waGNyDB5TlNiHdgQw8ML7iPkTCl7WY5bVjdaLxwScKQE5xW18lc5SoafAKq8feED")' }}></div>
                                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-20%</div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight truncate">Cloud Comfort Bed</h3>
                                <p className="text-text-secondary text-sm">Comfort</p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2 items-center">
                                    <span className="text-white font-black text-xl">$89.00</span>
                                    <span className="text-text-secondary text-sm line-through">$110</span>
                                </div>
                                <button className="size-10 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className="bg-[#232c20] p-4 rounded-3xl flex flex-col gap-4 group hover:bg-[#2c3829] transition-colors">
                            <div className="w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden relative">
                                <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Rubber chew toy for dogs shaped like a bone" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAc_B1Qz9waJO7C_YfK0cak2kUb1RSyGNTapfW96eesqM2PXa4DdbYaUqHaXmw94XwKZu7nR7WAoswDd_zkTYCsEnB7hWteuL8YT2w6eHoxFYC72W3FUEQ5CvgWxd2jFtLaEDIR7in8ka2fTjfb7ucQrLKaVYhjvSbLYBiZhL2P2kX-fNXP0JLvlH4swbBvQEPrcLnlCsWdfspLqPc2IBhWDOSvXDK0l1unQm56Bx3lfG2Taa_bbTaM6P73zj6eogLgwifw5toC145Z")' }}></div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-bold text-lg leading-tight truncate">Tough Chewer Toy</h3>
                                <p className="text-text-secondary text-sm">Play</p>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-white font-black text-xl">$15.99</span>
                                <button className="size-10 rounded-full bg-white text-[#131811] flex items-center justify-center hover:bg-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pet of the Month Spotlight */}
            <div className="flex justify-center py-20 px-4">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="bg-[#232c20] rounded-[3rem] overflow-hidden relative">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2 min-h-[400px] bg-cover bg-center" data-alt="Portrait of a french bulldog wearing sunglasses" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdDFsp5jSGpr-gic4nBmUnUsDcGIzQA9mbC2BpE-yLvdNb4PNfB3ROxkvuZjrLNQJ_wiHOw07XfdtB2Gifemw1jgyjTLTZjl90OFAGVOG3vxBUvXAVdb3M0Tt356TLCSl-zx2vsgd6Y3dV_ZFJxsSD1LmRh4zuKwU_zpSM4exuSR5kK6uBMw4yJaQl5HjLAtNW_Ha8NY0VGZAE5ZGX_Tf51RMVaj25hqF2sItko9l_oSdhlJDtAfZnGfDM1UG9PejdyT0llMts7Fkg")' }}></div>
                            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center gap-6">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">pets</span>
                                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Pet of the Month</h3>
                                </div>
                                <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight">Meet Barnaby</h2>
                                <p className="text-text-secondary text-lg leading-relaxed">
                                    Barnaby is a 3-year-old Frenchie with a heart of gold and a love for our Organic Kibble Mix. He's this month's Ryker superstar!
                                </p>
                                <div className="pt-4">
                                    <button className="text-white font-bold text-lg flex items-center gap-2 group">
                                        Read his story
                                        <span className="bg-[#2c3829] rounded-full p-2 group-hover:bg-primary group-hover:text-[#131811] transition-colors material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter & Footer */}
            <div className="w-full bg-[#0d120c] pt-20 pb-10 border-t border-[#2c3829]">
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

export default Home;
