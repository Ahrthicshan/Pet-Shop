import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
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
                                    <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-white focus:outline-0 focus:ring-0 bg-transparent border-none placeholder:text-[#a4b89d] px-2 text-sm font-normal leading-normal" placeholder="Search for products..." defaultValue="" />
                                </div>
                            </label>
                        </header>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-5 lg:py-10 px-4">
                <div className="flex flex-col max-w-[1200px] flex-1">
                    <div className="rounded-3xl overflow-hidden relative h-[300px] md:h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Close up of a cute cat face looking curious" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdDFsp5jSGpr-gic4nBmUnUsDcGIzQA9mbC2BpE-yLvdNb4PNfB3ROxkvuZjrLNQJ_wiHOw07XfdtB2Gifemw1jgyjTLTZjl90OFAGVOG3vxBUvXAVdb3M0Tt356TLCSl-zx2vsgd6Y3dV_ZFJxsSD1LmRh4zuKwU_zpSM4exuSR5kK6uBMw4yJaQl5HjLAtNW_Ha8NY0VGZAE5ZGX_Tf51RMVaj25hqF2sItko9l_oSdhlJDtAfZnGfDM1UG9PejdyT0llMts7Fkg")' }}></div>
                        <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                            <div className="flex flex-col gap-4 max-w-2xl">
                                <h1 className="text-white text-4xl lg:text-6xl font-black leading-[0.95] tracking-[-0.033em]">
                                    WE'RE HERE TO<br />
                                    <span className="text-primary">HELP YOU</span>
                                </h1>
                                <p className="text-text-secondary text-lg font-medium leading-relaxed max-w-[500px]">
                                    Questions about our products or services? Reach out to our team of pet experts. We are always happy to hear from you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10 px-4">
                <div className="flex flex-col lg:flex-row gap-12 max-w-[1200px] flex-1">
                    <div className="w-full lg:w-3/5 flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-white text-3xl font-bold leading-tight tracking-tight flex items-center gap-3">
                                <span className="w-2 h-8 rounded-full bg-primary"></span>
                                Send us a message
                            </h2>
                            <p className="text-text-secondary text-base">Fill out the form below and we will get back to you within 24 hours.</p>
                        </div>
                        <form className="flex flex-col gap-6 bg-[#1a2118] p-8 rounded-3xl border border-[#2c3829]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-bold" htmlFor="firstName">First Name</label>
                                    <input className="w-full bg-[#232c20] border border-[#2c3829] rounded-xl px-4 py-3 text-white placeholder:text-[#5c6b57] focus:border-primary focus:ring-0 transition-colors" id="firstName" placeholder="Jane" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white text-sm font-bold" htmlFor="lastName">Last Name</label>
                                    <input className="w-full bg-[#232c20] border border-[#2c3829] rounded-xl px-4 py-3 text-white placeholder:text-[#5c6b57] focus:border-primary focus:ring-0 transition-colors" id="lastName" placeholder="Doe" type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-bold" htmlFor="email">Email Address</label>
                                <input className="w-full bg-[#232c20] border border-[#2c3829] rounded-xl px-4 py-3 text-white placeholder:text-[#5c6b57] focus:border-primary focus:ring-0 transition-colors" id="email" placeholder="jane@example.com" type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-bold" htmlFor="subject">Subject</label>
                                <select className="w-full bg-[#232c20] border border-[#2c3829] rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-0 transition-colors" id="subject">
                                    <option>General Inquiry</option>
                                    <option>Order Status</option>
                                    <option>Product Information</option>
                                    <option>Grooming Appointment</option>
                                    <option>Returns & Exchanges</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-sm font-bold" htmlFor="message">Message</label>
                                <textarea className="w-full bg-[#232c20] border border-[#2c3829] rounded-xl px-4 py-3 text-white placeholder:text-[#5c6b57] focus:border-primary focus:ring-0 transition-colors min-h-[150px]" id="message" placeholder="How can we help you today?"></textarea>
                            </div>
                            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-[#131811] text-base font-bold leading-normal tracking-wide hover:bg-[#3cc514] hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(73,230,25,0.4)] mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-xl font-bold leading-tight tracking-tight mb-2">Get in touch</h3>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829] flex items-start gap-4">
                                <div className="size-12 rounded-full bg-[#2c3829] flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Visit Us</h4>
                                    <p className="text-text-secondary mt-1">1234 Pet Paradise Lane<br />Barkington, PA 19000</p>
                                </div>
                            </div>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829] flex items-start gap-4">
                                <div className="size-12 rounded-full bg-[#2c3829] flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Call Us</h4>
                                    <p className="text-text-secondary mt-1">+1 (555) 123-4567</p>
                                    <p className="text-text-secondary text-sm">Mon-Fri from 8am to 5pm</p>
                                </div>
                            </div>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829] flex items-start gap-4">
                                <div className="size-12 rounded-full bg-[#2c3829] flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Email Us</h4>
                                    <p className="text-text-secondary mt-1">hello@rykerpetshop.com</p>
                                    <p className="text-text-secondary">support@rykerpetshop.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white text-xl font-bold leading-tight tracking-tight mb-2">Business Hours</h3>
                            <div className="bg-[#1a2118] p-6 rounded-3xl border border-[#2c3829] flex flex-col gap-3">
                                <div className="flex justify-between items-center text-text-secondary border-b border-[#2c3829] pb-3">
                                    <span>Monday - Friday</span>
                                    <span className="text-white font-bold">8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-text-secondary border-b border-[#2c3829] pb-3">
                                    <span>Saturday</span>
                                    <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-text-secondary">
                                    <span>Sunday</span>
                                    <span className="text-primary font-bold">10:00 AM - 4:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10 px-4 bg-[#1a2118] border-y border-[#2c3829]">
                <div className="flex flex-col max-w-[800px] flex-1 items-center text-center gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-text-secondary">Find quick answers to common questions about our services and products.</p>
                    </div>
                    <div className="flex flex-col w-full gap-4 text-left">
                        <details className="group bg-[#232c20] rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-[#2c3829] transition-colors">
                            <summary className="flex items-center justify-between gap-4 text-white font-bold text-lg">
                                Do you offer grooming services?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-text-secondary leading-relaxed">
                                Yes! We have a full-service grooming salon. You can book an appointment online or call us directly. We offer baths, haircuts, nail trimming, and more for both dogs and cats.
                            </p>
                        </details>
                        <details className="group bg-[#232c20] rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-[#2c3829] transition-colors">
                            <summary className="flex items-center justify-between gap-4 text-white font-bold text-lg">
                                What is your return policy?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-text-secondary leading-relaxed">
                                We accept returns on unused and unopened items within 30 days of purchase. If your pet didn't like a specific food item, bring the bag back (even if opened) and we'll help you find an alternative.
                            </p>
                        </details>
                        <details className="group bg-[#232c20] rounded-2xl p-4 [&_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-[#2c3829] transition-colors">
                            <summary className="flex items-center justify-between gap-4 text-white font-bold text-lg">
                                Do you deliver?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-4 text-text-secondary leading-relaxed">
                                Absolutely. We offer free local delivery for orders over $50 within a 10-mile radius. For shipping outside our local area, standard carrier rates apply.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0d120c] pt-20 pb-10">
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

export default ContactUs;
