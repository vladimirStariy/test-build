import {useState} from 'react';

import styles from './phone.dropdown.module.css'

const PhoneDropdown = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    const handleClose = () => setShow(false);

    return <>
        <div className={styles.dropdownLink}>
            <svg onClick={handleShow} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1408 3.24806C15.1699 3.13608 15.2422 3.04019 15.3418 2.98136C15.4414 2.92253 15.5603 2.90555 15.6724 2.93415C17.2214 3.33757 18.6346 4.14699 19.7664 5.27888C20.8981 6.41077 21.7073 7.82413 22.1105 9.37312C22.1391 9.48508 22.1223 9.60381 22.0636 9.70341C22.005 9.803 21.9094 9.87536 21.7976 9.90469C21.7621 9.91484 21.7252 9.91999 21.6882 9.92C21.5915 9.91969 21.4976 9.88731 21.4212 9.82794C21.3448 9.76857 21.2902 9.68555 21.266 9.59187C20.9008 8.19412 20.1698 6.91888 19.1483 5.89734C18.1267 4.8758 16.8514 4.14483 15.4536 3.77962C15.3419 3.75029 15.2462 3.67793 15.1876 3.57834C15.129 3.47875 15.1122 3.36001 15.1408 3.24806ZM14.5786 7.27966C16.2193 7.72045 17.3251 8.82624 17.7659 10.4669C17.7901 10.5606 17.8447 10.6436 17.9211 10.703C17.9974 10.7623 18.0914 10.7947 18.1881 10.795C18.2251 10.795 18.2619 10.7898 18.2975 10.7797C18.4094 10.7497 18.5048 10.6765 18.5628 10.5763C18.6209 10.476 18.6368 10.3568 18.607 10.2449C18.082 8.27608 16.764 6.96356 14.7974 6.43418C14.6881 6.41305 14.5748 6.43438 14.4807 6.49382C14.3866 6.55327 14.3186 6.64637 14.2907 6.75414C14.2629 6.86192 14.2771 6.97628 14.3306 7.07392C14.3841 7.17156 14.4728 7.24513 14.5786 7.27966ZM22.9942 18.0773C22.8127 19.4543 22.1359 20.718 21.0903 21.6323C20.0448 22.5466 18.702 23.0488 17.3131 23.0451C8.86902 23.0451 2.00001 16.1763 2.00001 7.73248C1.99713 6.34415 2.49975 5.00224 3.41399 3.9574C4.32822 2.91256 5.59155 2.23624 6.96801 2.05476C7.25 2.02048 7.5355 2.0786 7.78164 2.22041C8.02778 2.36221 8.22127 2.58004 8.33306 2.84118L10.641 7.99717C10.7272 8.1971 10.7624 8.41534 10.7433 8.63225C10.7242 8.84915 10.6515 9.0579 10.5316 9.23968C10.5217 9.2539 10.5119 9.26812 10.501 9.28125L8.18212 12.0386C8.14573 12.099 8.12489 12.1675 8.12145 12.2379C8.11802 12.3084 8.1321 12.3786 8.16243 12.4422C9.01996 14.1977 10.8586 16.0221 12.6349 16.8796C12.6991 16.9094 12.7696 16.9228 12.8402 16.9188C12.9108 16.9148 12.9793 16.8935 13.0396 16.8566L15.7599 14.5466L15.8015 14.5149C15.9835 14.3947 16.1926 14.3217 16.41 14.3026C16.6273 14.2835 16.846 14.3189 17.0462 14.4055L22.2111 16.7199C22.4696 16.8324 22.6851 17.0251 22.8255 17.2696C22.966 17.5141 23.024 17.7973 22.991 18.0773H22.9942ZM21.8622 17.5173L16.6951 15.2029C16.6323 15.1765 16.5642 15.1655 16.4963 15.1706C16.4284 15.1757 16.3627 15.1969 16.3046 15.2324L13.5942 17.5424L13.5537 17.5731C13.3653 17.6989 13.1475 17.7738 12.9215 17.7905C12.6955 17.8071 12.469 17.765 12.2641 17.6682C10.2953 16.7177 8.33634 14.7719 7.38584 12.8261C7.28808 12.6228 7.24438 12.3978 7.25894 12.1726C7.2735 11.9475 7.34583 11.73 7.46897 11.541C7.47881 11.5256 7.48975 11.5125 7.50069 11.4983L9.81843 8.74202C9.85317 8.68295 9.87355 8.61653 9.87792 8.54814C9.88229 8.47975 9.87053 8.41128 9.84359 8.34827L7.53131 3.19227C7.49873 3.11234 7.44323 3.04384 7.3718 2.99537C7.30037 2.94691 7.21621 2.92066 7.12989 2.91993C7.11241 2.91884 7.09487 2.91884 7.07739 2.91993C5.91169 3.07438 4.84214 3.6481 4.06873 4.53382C3.29531 5.41954 2.87097 6.55663 2.87505 7.73248C2.87505 15.6929 9.35248 22.1701 17.3131 22.1701C18.489 22.1742 19.6261 21.7499 20.5118 20.9765C21.3976 20.2031 21.9713 19.1336 22.1258 17.9679C22.1358 17.8741 22.1153 17.7795 22.0672 17.6982C22.0191 17.617 21.946 17.5535 21.8589 17.5173H21.8622Z" fill="black" stroke="black" strokeWidth="0.7"/>
            </svg>
            <div className={`${styles.dropdownContainer} ${show ? styles.show : styles.hidden}`}>
                +375 (29) 999-99-99
            </div>
        </div>
        
    </>
}

export default PhoneDropdown;