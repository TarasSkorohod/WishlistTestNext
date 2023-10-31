import React from 'react';



const Header = ({ currentPage, itemCount }) => {
    return (
        <header className="p-4">
            <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none" className="mr-5">
                    <path d="M12.924 4.84053L7.01111 0.175017C6.8659 0.0617637 6.68497 0 6.49841 0C6.31186 0 6.13093 0.0617637 5.98571 0.175017L0.0748125 4.84053C0.0331144 4.87339 0.00659605 4.92091 0.00107394 4.97265C-0.00444818 5.02439 0.0114767 5.07613 0.0453558 5.11654L0.301833 5.42127C0.33568 5.46141 0.384554 5.487 0.437819 5.49248C0.491083 5.49795 0.544427 5.48286 0.586243 5.45049L1.62383 4.63083V10.5978C1.62383 10.702 1.66664 10.8019 1.74283 10.8756C1.81903 10.9493 1.92237 10.9907 2.03013 10.9907H5.28053C5.38829 10.9907 5.49163 10.9493 5.56783 10.8756C5.64402 10.8019 5.68683 10.702 5.68683 10.5978V7.4547L7.31203 7.46206V10.6071C7.31203 10.7113 7.35484 10.8112 7.43103 10.8849C7.50723 10.9586 7.61057 11 7.71833 11L10.9687 10.9919C11.0765 10.9919 11.1798 10.9505 11.256 10.8768C11.3322 10.8031 11.375 10.7032 11.375 10.599V4.63083L12.4126 5.45049C12.4544 5.48333 12.508 5.49877 12.5616 5.49343C12.6151 5.48809 12.6643 5.4624 12.6983 5.42201L12.9548 5.11727C12.9716 5.09717 12.9841 5.07405 12.9917 5.04925C12.9993 5.02445 13.0017 4.99845 12.9988 4.97273C12.996 4.94702 12.9879 4.92211 12.9751 4.89942C12.9622 4.87674 12.9449 4.85673 12.924 4.84053ZM10.5596 10.2081H10.5622L8.12438 10.2155V7.0682C8.12404 6.96431 8.0813 6.86475 8.00546 6.79117C7.92961 6.7176 7.82678 6.67596 7.71935 6.67531L5.28155 6.66868C5.22808 6.66852 5.17511 6.67856 5.12567 6.69823C5.07623 6.71791 5.03129 6.74682 4.99343 6.78332C4.95556 6.81982 4.92552 6.86318 4.90503 6.91093C4.88453 6.95868 4.87398 7.00987 4.87398 7.06157V10.2081H2.43643V3.98969L6.49943 0.783498L10.5624 3.98969L10.5596 10.2081Z" fill="#999999"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none" className="mr-3">
                    <path d="M1.854 0.646895C1.78407 0.576788 1.6949 0.529023 1.59779 0.509657C1.50068 0.49029 1.40001 0.500193 1.30854 0.53811C1.21706 0.576028 1.13891 0.640252 1.08398 0.722642C1.02905 0.805031 0.999824 0.901874 1 1.00089V8.1729C1.00002 8.27183 1.02939 8.36854 1.0844 8.45077C1.1394 8.53301 1.21757 8.59708 1.309 8.63487C1.40043 8.67266 1.50102 8.68248 1.59804 8.66308C1.69505 8.64368 1.78413 8.59594 1.854 8.5259L5.439 4.9409C5.48556 4.89445 5.52251 4.83927 5.54771 4.77853C5.57292 4.71778 5.58589 4.65266 5.58589 4.58689C5.58589 4.52113 5.57292 4.45601 5.54771 4.39526C5.52251 4.33452 5.48556 4.27934 5.439 4.23289L1.854 0.647895V0.646895Z" stroke="#405EFF"/>
                </svg>
                {currentPage}
            </span>
            <h1 className="text-[24px] font-semibold">Wishlist</h1>
            <p>
                {itemCount} product
            </p>
        </header>
    );
};

export default Header;
