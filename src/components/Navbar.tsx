import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 py-3">
            <div className="container mx-auto flex justify-between items-center">

                <a href="/" className="flex items-center justify-start">
                    <svg width="24" height="35" viewBox="0 0 44 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M41.2024 22.4476L26.0429 3.49813C27.427 5.22825 26.6483 9.25904 24.3249 13.9845C22.9028 16.8769 20.9017 20.032 18.4631 23.0789C16.0246 26.1257 13.5015 28.6285 11.1866 30.4061C7.40727 33.3104 4.18371 34.2851 2.79855 32.5536L17.9581 51.5031C19.3422 53.2332 22.5658 52.2598 26.3472 49.3556C28.6611 47.5779 31.1852 45.0765 33.6227 42.0283C36.0602 38.9802 38.0623 35.8263 39.4845 32.9327C41.8079 28.2072 42.5865 24.1803 41.2024 22.4476Z"
                            fill="#F4C753"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.29465 30.6795C4.37073 30.7244 4.71728 30.8869 5.65022 30.6359C6.78074 30.3322 8.30219 29.5226 10.0804 28.1557C12.2358 26.5008 14.6321 24.1328 16.9692 21.2114C19.3063 18.29 21.2007 15.2946 22.5246 12.6004C23.6181 10.3763 24.2658 8.47585 24.5088 7.0627C24.7095 5.89652 24.5796 5.46333 24.5437 5.36824C24.4781 5.32862 24.2647 5.24013 23.7618 5.3022C23.0296 5.39069 21.9952 5.77502 20.7009 6.55687C18.1303 8.11266 14.9606 10.9812 11.8723 14.8403C8.78398 18.6994 6.49019 22.6629 5.24662 25.8761C4.62007 27.494 4.31262 28.787 4.24183 29.7009C4.19217 30.3309 4.26296 30.599 4.29465 30.6795ZM28.2342 9.97353C27.7609 11.6944 27.0319 13.5236 26.1253 15.3673C24.6049 18.4591 22.496 21.774 19.9571 24.9464C17.4182 28.1187 14.7673 30.7561 12.2939 32.6566C10.8189 33.7898 9.35664 34.7011 7.97783 35.2927L19.4383 49.6184C19.4648 49.6369 19.7817 49.8614 20.8098 49.5854C21.9403 49.2816 23.4617 48.472 25.2399 47.1051C27.3953 45.449 29.7905 43.0823 32.1287 40.1609C34.4669 37.2395 36.3592 34.2441 37.6841 31.5499C38.7776 29.3258 39.4253 27.4253 39.6683 26.0122C39.8891 24.7258 39.7095 24.3309 39.6947 24.2979L28.2342 9.97353ZM27.5369 1.63065L42.6964 20.5801C44.1629 22.4119 44.1608 25.0216 43.7995 27.1229C43.4191 29.339 42.5147 31.8153 41.2849 34.3154C39.7634 37.4085 37.6545 40.7235 35.1167 43.8958C32.5788 47.0681 29.9268 49.7056 27.4524 51.6061C25.4523 53.1434 23.4712 54.2739 21.6983 54.7494C20.0184 55.201 17.9296 55.2037 16.4641 53.3705L1.30459 34.4211C0.119123 32.9406 -0.100642 30.9305 0.0356548 29.1885C0.173008 27.424 0.697062 25.4997 1.44194 23.5755C2.94225 19.7018 5.55302 15.2682 8.88436 11.1054C12.2157 6.94252 15.7615 3.67642 18.8604 1.80234C20.3998 0.871243 21.9392 0.216174 23.3508 0.0444824C24.7455 -0.125888 26.3514 0.150139 27.5369 1.62933"
                              fill="#F4C753"/>
                    </svg>
                    <h1 className="pl-2 font-bold text-xl text-white"> Film Affinity Fruna</h1>
                </a>

                <div
                    className="flex items-center bg-customBg rounded-md px-1 border border-gray-500 focus-within:border-2 focus-within:border-white transition-colors duration-200">
                    <div className="flex items-center pr-1 border-r border-r-gray-500">
                        <svg
                            width="24"
                            height="14"
                            viewBox="0 0 30 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.3657 22.8064L22.394 18.0051M22.394 9.60271C22.394 11.8312 21.2929 13.9683 19.3331 15.5441C17.3732 17.1198 14.7151 18.0051 11.9434 18.0051C9.17179 18.0051 6.51366 17.1198 4.5538 15.5441C2.59395 13.9683 1.49292 11.8312 1.49292 9.60271C1.49292 7.37426 2.59395 5.23708 4.5538 3.66133C6.51366 2.08558 9.17179 1.20034 11.9434 1.20034C14.7151 1.20034 17.3732 2.08558 19.3331 3.66133C21.2929 5.23708 22.394 7.37426 22.394 9.60271Z"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="bg-customBg text-white px-2 py-1 rounded outline-none"
                    />
                </div>


                <div className="flex space-x-4 items-center">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/Movies" className="font-semibold text-white hover:text-white">
                                Peliculas
                            </a>
                        </li>
                        <li>
                            <a href="/Actors" className="font-semibold text-white hover:text-white">
                                Actores
                            </a>
                        </li>
                        <li>
                            <a href="/Directors" className="font-semibold text-white hover:text-white">
                                Directores
                            </a>
                        </li>
                    </ul>

                    <button className="bg-white text-white p-2 rounded-lg font-semibold ">
                        <svg width="23" height="22" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38.0991 34.2543C35.6383 29.9999 31.8461 26.9494 27.4205 25.5033C29.6096 24.2001 31.3104 22.2143 32.2617 19.851C33.213 17.4876 33.3622 14.8773 32.6864 12.421C32.0106 9.96462 30.5471 7.798 28.5208 6.25387C26.4944 4.70973 24.0172 3.87345 21.4696 3.87345C18.922 3.87345 16.4448 4.70973 14.4184 6.25387C12.3921 7.798 10.9287 9.96462 10.2529 12.421C9.57705 14.8773 9.72626 17.4876 10.6776 19.851C11.6289 22.2143 13.3296 24.2001 15.5187 25.5033C11.0932 26.9478 7.30095 29.9983 4.84013 34.2543C4.74989 34.4014 4.69003 34.5651 4.66409 34.7358C4.63815 34.9064 4.64666 35.0806 4.6891 35.2479C4.73154 35.4152 4.80707 35.5723 4.91121 35.71C5.01536 35.8476 5.14603 35.963 5.2955 36.0493C5.44497 36.1357 5.61022 36.1912 5.78149 36.2126C5.95277 36.2341 6.1266 36.221 6.29274 36.1742C6.45888 36.1273 6.61396 36.0477 6.74882 35.94C6.88368 35.8322 6.9956 35.6986 7.07797 35.5469C10.1221 30.2859 15.5026 27.1449 21.4696 27.1449C27.4366 27.1449 32.8171 30.2859 35.8612 35.5469C35.9436 35.6986 36.0555 35.8322 36.1904 35.94C36.3253 36.0477 36.4803 36.1273 36.6465 36.1742C36.8126 36.221 36.9864 36.2341 37.1577 36.2126C37.329 36.1912 37.4942 36.1357 37.6437 36.0493C37.7932 35.963 37.9239 35.8476 38.028 35.71C38.1321 35.5723 38.2077 35.4152 38.2501 35.2479C38.2926 35.0806 38.3011 34.9064 38.2751 34.7358C38.2492 34.5651 38.1893 34.4014 38.0991 34.2543ZM12.4213 15.5114C12.4213 13.7218 12.952 11.9724 13.9462 10.4844C14.9405 8.99642 16.3536 7.83667 18.007 7.15183C19.6603 6.46698 21.4796 6.2878 23.2348 6.63693C24.99 6.98606 26.6023 7.84783 27.8677 9.11325C29.1331 10.3787 29.9949 11.9909 30.344 13.7461C30.6932 15.5013 30.514 17.3206 29.8291 18.974C29.1443 20.6274 27.9846 22.0405 26.4966 23.0347C25.0086 24.029 23.2592 24.5597 21.4696 24.5597C19.0706 24.5571 16.7707 23.603 15.0743 21.9066C13.378 20.2103 12.4239 17.9103 12.4213 15.5114Z"
                                fill="black"/>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
