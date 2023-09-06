import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../redux/store'


import { IToggleSidebar } from '../../types/Sidebar'
import { selectCart } from '../../redux/slices/cartSlice'
import HeaderSearch from '../HeaderSearch/HeaderSearch'

import styles from './Header.module.scss'




const Header: FC<IToggleSidebar> = ({ toggleSidebar, setToggleSidebar }) => {
	const {items} = useAppSelector(selectCart)
	const isMounted = React.useRef(false);
	const [headerSearch,setHeaderSearch] = useState<boolean>(false);

	useEffect(()=> {
 
		if(isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('cartItems',json);

			console.log('aaaaaaaaaaaaaaaaaaaaaaaaa',json);
			// @ts-ignore
			// console.log('ls',JSON.parse(localStorage.getItem('cartItems')))
		}
		isMounted.current = true;
 	},[items])

	console.log(items);
	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<div className={styles.header__column}>
					<button
						onClick={() => setToggleSidebar(!toggleSidebar)}
						className={`btn-reset ${styles.header__sidebarBtn}`}>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle cx="3.5" cy="3.5" r="3" />
							<circle cx="3.5" cy="11.5" r="3" />
							<circle cx="3.5" cy="19.5" r="3" />
							<circle cx="11.5" cy="3.5" r="3" />
							<circle cx="11.5" cy="11.5" r="3" />
							<circle cx="11.5" cy="19.5" r="3" />
							<circle cx="19.5" cy="3.5" r="3" />
							<circle cx="19.5" cy="11.5" r="3" />
							<circle cx="19.5" cy="19.5" r="3" />
						</svg>
					</button>
					<Link to="/map" className={styles.header__positionBtn}>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.125 9.58333C20.125 16.2917 11.5 22.0417 11.5 22.0417C11.5 
									22.0417 2.875 16.2917 2.875 9.58333C2.875 7.29584 3.7837 5.10203 5.4012
									3.48453C7.0187 1.86703 9.21251 0.958328 11.5 0.958328C13.7875 0.958328 
									15.9813 1.86703 17.5988 3.48453C19.2163 5.10203 20.125 7.29584 20.125 
									9.58333Z"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M11.5 12.4583C13.0878 12.4583 14.375 11.1711 14.375 9.58333C14.375 7.99551 
									13.0878 6.70833 11.5 6.70833C9.91218 6.70833 8.625 7.99551 8.625 9.58333C8.625 
									11.1711 9.91218 12.4583 11.5 12.4583Z"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Link>
					<a href="tel:89811201117" className={styles.header__phone}>
						8 981 120-11-17
					</a>
				</div>
				<Link to="/" className={styles.header__column}>
					<img src="img/header/logo.png" alt="logo" />
				</Link>
				<div className={styles.header__column}>
					<Link to="/basket" className={`btn-reset ${styles.header__basket}`}>
						<span className={styles.header__basketCount}>{items.length}</span>
						<svg
							width="19"
							height="23"
							viewBox="0 0 19 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_67_4242)">
								<path
									d="M9.72182 0C10.0481 0.076412 10.3862 0.129313 10.7065 0.235114C12.5512 0.864043 
								13.7198 2.39816 13.8443 4.33197C13.8443 4.36724 13.8562 4.4025 13.8621 4.47304C13.9452 
								4.47304 14.0282 4.47304 14.1053 4.47304C14.8883 4.47304 15.6772 4.47304 16.4602 
								4.47304C16.9466 4.47304 17.1839 4.68464 17.2313 5.16075C17.3915 6.9241 17.5457 
								8.69333 17.6999 10.4567C17.8898 12.5551 18.0796 14.6593 18.2694 16.7577C18.3643 
								17.7864 18.4889 18.815 18.5363 19.8436C18.5838 20.9016 18.0796 21.7128 17.2313 
								22.3182C16.5611 22.7943 15.7959 22.9882 14.9714 22.9882C12.0055 22.9824 9.03374 
								22.9882 6.0679 22.9882C5.13662 22.9882 4.21128 23.0176 3.28 22.9765C2.10553
								 22.9295 1.13867 22.4475 0.456521 21.4718C-0.0120822 20.8017 -0.0595357 
								 20.0493 0.0235079 19.2617C0.195527 17.6335 0.326024 15.9995 0.468385 14.3654C0.610745 
								 12.7608 0.759037 11.162 0.901398 9.55737C1.03189 8.13494 1.15646 6.7125 1.28103 
								 5.29006C1.28696 5.2254 1.28696 5.15487 1.29882 5.09021C1.35814 4.67876 1.58947 4.47304 
								 2.01656 4.46716C2.8114 4.46128 3.60032 4.46716 4.39516 4.46716C4.48414 4.46716 4.57311 
								 4.46716 4.66802 4.46716C4.70361 3.7677 4.84004 3.12113 5.15442 2.52159C5.90181 1.12855 7.05849 
								 0.305648 8.62446 0.0470227C8.6897 0.0352671 8.75495 0.0176335 8.8202 0C9.11679 0 9.4193 
								 0 9.72182 0ZM4.68581 5.76029C3.95622 5.76029 3.25628 5.76029 2.54448 5.76029C2.53854 
								 5.80731 2.52668 5.84258 2.52668 5.88372C2.34873 7.89394 2.16485 9.91004 1.9869 11.9203C1.75556 
								 14.5418 1.52422 17.1692 1.28696 19.7907C1.24544 20.2727 1.40559 20.6724 1.7259 21.0192C2.22416 
								 21.5482 2.86479 21.7304 3.57066 21.7304C7.36694 21.7363 11.1691 21.7363 14.9654 21.7304C15.3925 
								 21.7304 15.8018 21.6599 16.1933 21.4718C16.8161 21.172 17.3618 20.5313 17.2551 19.7084C17.1898 
								 19.2147 17.1602 18.7092 17.1186 18.2096C16.9644 16.4462 16.8043 14.677 16.65 12.9136C16.4721 
								 10.9269 16.2941 8.93432 16.1162 6.94761C16.0806 6.55379 16.0391 6.15998 16.0035 5.77204C15.2798 
								 5.77204 14.5739 5.77204 13.8562 5.77204C13.8562 5.85433 13.8562 5.92487 13.8562 5.98952C13.8562 
								 6.55967 13.8621 7.12982 13.8503 7.6941C13.8443 8.05264 13.5596 8.31715 13.2097 8.31127C12.8715
								  8.30539 12.5987 8.04677 12.5809 7.69997C12.575 7.58242 12.5809 7.45898 12.5809 7.34143C12.5809
									 6.8183 12.5809 6.29517 12.5809 5.77204C10.3624 5.77204 8.17365 5.77204 5.96706 5.77204C5.96706
									  5.83082 5.96706 5.87784 5.96706 5.91899C5.96706 6.50089 5.97299 7.08868 5.96706 7.67059C5.96113 
										8.04677 5.68234 8.31715 5.32644 8.31127C4.97647 8.31127 4.70954 8.04089 4.69768 7.68234C4.69175 
										7.57066 4.69768 7.45898 4.69768 7.3473C4.68581 6.8183 4.68581 6.29517 4.68581 5.76029ZM12.575 
										4.46128C12.4919 3.23281 11.9521 2.29236 10.8844 1.6987C9.72775 1.05801 8.55921 1.10503 7.44998 
										1.82213C6.50684 2.43343 6.02638 3.33274 5.96706 4.46128C8.17958 4.46128 10.3684 4.46128 12.575 
										4.46128Z"
								/>
							</g>
							<defs>
								<clipPath id="clip0_67_4242">
									<rect
										width="18.5484"
										height="23"
										fill="white"
									/>
								</clipPath>
							</defs>
						</svg>
					</Link>

					<Link to="/service" className={`btn-reset ${styles.header__mail}`}>
						<svg
							width="24"
							height="23"
							viewBox="0 0 24 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.38175 3.83333H19.7151C20.7693 3.83333 21.6318 4.69583 21.6318 5.74999V17.25C21.6318 
								18.3042 20.7693 19.1667 19.7151 19.1667H4.38175C3.32759 19.1667 2.46509 18.3042 2.46509 
								17.25V5.74999C2.46509 4.69583 3.32759 3.83333 4.38175 3.83333Z"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M21.6318 5.75L12.0484 12.4583L2.46509 5.75"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</Link>

					<button onClick={()=> setHeaderSearch(!headerSearch)} className={`btn-reset ${styles.header__search}`}>
						<svg
							width="24"
							height="23"
							viewBox="0 0 24 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M11.09 18.2083C15.3242 18.2083 18.7567 14.7759 18.7567 10.5417C18.7567 6.30748 15.3242 
							2.875 11.09 2.875C6.85582 2.875 3.42334 6.30748 3.42334 10.5417C3.42334 14.7759 6.85582 18.2083 
							11.09 18.2083Z"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M20.6734 20.125L16.5046 15.9563"
								stroke-width="1.3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
				{
					headerSearch && <HeaderSearch setHeaderSearch={setHeaderSearch}/>

				}
				
			</div>
		</header>
	)
}

export default Header
