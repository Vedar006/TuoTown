import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import {useWhyDidYouUpdate} from 'ahooks'
// import { motion } from 'framer-motion'

import ErrorFallback from '../ErrorFallback/ErrorFallback'

import Send from '../Send/Send'

import './Categories.scss'
import CategoriesGoods from '../CategoriesGoods/CategoriesGoods'
import CategoriesList from '../CategoriesList/CategoriesList'


// const ulAnimation = {
// 	hidden:{
//       	y:-100,
// 	  	opacity:0,
// 	},
// 	visible:(custom:any)=>({
// 		y:0,
// 	  	opacity:1,
// 	  	transition:{delay:custom * 0.2},
// 	}),
// }

const Categories = () => {
	
	const [category, setCategory] = React.useState<number>(1)
	// console.log(category);
	// useEffect(() => {
	// 	fetch(`https://64cc9c882eafdcdc851a0655.mockapi.io/knives/items?page=1&limit=6&type=${category}`)
	// 		.then(res => res.json())
	// 		.then(data => setKnives(data))
	// }, [category])
	
	const onChangeCategory = React.useCallback((number:number)=> {
		setCategory(number)
	},[])

	return (
		<section className="Categories">
			{/* {category} */}
			<div className="container Categories__container">
				<div className="Categories__top">
				{/* <motion.ul 
                    	initial="hidden"
						whileInView="visible"
                        	viewport={{amount:0.2,once:true}}
						className="list-reset Categories__list">
						<motion.li
							role="button"
							variants={ulAnimation}
							custom={1}
							// tabIndex={1}
							onClick={() => setCategory(1)}
							className={`Categories__listItem ${
								category === 1 ? 'active' : ''
							}`}>
							<svg
								width="43"
								height="46"
								viewBox="0 0 43 46"
								xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.4" clip-path="url(#clip0_67_4292)">
									<path
										d="M41.5885 0C41.937 0.227604 42.0331 0.551042 42.0452 0.958333C42.2494 8.45729 
40.1586 15.3094 36.2172 21.6464C34.595 24.2578 32.6484 26.6057 30.4734 28.774C27.5174 
31.7208 24.5734 34.6557 21.6174 37.6026C21.0286 38.1896 20.7763 38.1896 20.1995 
37.6146C17.8443 35.2667 15.4891 32.9187 13.1339 30.5589C13.0137 30.4391 12.9176 
30.3073 12.7974 30.1516C12.6532 30.2833 12.5451 30.3552 12.461 30.451C9.02429 
33.8651 5.59964 37.2911 2.16297 40.7052C1.61022 41.2562 1.29779 41.8911 1.35787 
42.6698C1.44199 43.8437 2.42733 44.6943 3.60493 44.6583C4.75849 44.6224 5.70778 
43.712 5.70778 42.562C5.70778 41.6995 6.02021 41.0286 6.64506 40.4177C8.79598 
38.3094 10.9229 36.1651 13.0618 34.0448C13.1579 33.949 13.254 33.8411 13.3622 
33.7693C13.6626 33.5536 13.963 33.5776 14.2153 33.8292C14.4797 34.0807 14.4917 
34.3802 14.2995 34.6797C14.2153 34.7995 14.1072 34.9073 13.999 35.0151C11.8361 
37.1713 9.67317 39.3396 7.49822 41.4838C7.20982 41.7714 7.08966 42.0828 7.07764 
42.4781C7.05361 44.1193 6.00819 45.4729 4.45808 45.8802C2.95604 46.2755 1.32182 
45.6286 0.51673 44.3229C-0.288364 43.0052 -0.120136 41.1964 0.961334 40.0224C1.5982 
39.3276 2.28313 38.6807 2.95604 38.0099C15.5011 25.4797 28.0702 12.9615 40.6272 
0.443229C40.7834 0.2875 40.9637 0.14375 41.1319 0C41.2881 0 41.4323 0 41.5885 
0ZM20.9205 36.3687C21.0046 36.2849 21.0887 36.225 21.1608 36.1411C24.0447
 33.2661 26.9406 30.3911 29.8245 27.5042C33.0329 24.2818 35.6164 20.6042 
 37.503 16.4594C39.4616 12.1349 40.5792 7.59479 40.7234 2.83906C40.7234 
 2.68333 40.7234 2.5276 40.7234 2.2401C40.1706 2.80312 39.714 3.24635 
 39.2814 3.71354C39.1973 3.80937 39.1733 3.97708 39.1612 4.12083C38.993 
 5.36667 38.8969 6.62448 38.6566 7.85833C37.4069 14.5187 34.4268 20.3286 29.8125 
 25.276C27.1209 28.163 24.261 30.8823 21.4852 33.6734C21.3891 33.7693 21.2689 
 33.8891 21.1608 33.8891C20.9205 33.8771 20.608 33.8771 20.4758 33.7333C20.3317 
 33.5776 20.3076 33.2542 20.3317 33.0146C20.3437 32.8708 20.5359 32.7271 20.6561
  32.6073C22.9392 30.3312 25.2223 28.0552 27.5054 25.7792C32.6964 20.5922 36.1091 
	14.4708 37.4068 7.22344C37.515 6.63646 37.5751 6.04948 37.6592 5.51042C29.7044 
	13.4406 21.7496 21.3589 13.8188 29.2771C16.138 31.5891 18.5172 33.9609 20.9205 36.3687Z"
									/>
								</g>
								<defs>
									<clipPath id="clip0_67_4292">
										<rect width="42.0571" height="46" />
									</clipPath>
								</defs>
							</svg>
							<h4 className="Categories__listItemTitle">
								Кухонные ножи
							</h4>
						</motion.li>

						<motion.li
							role="button"
							variants={ulAnimation}
							custom={2}
							// tabIndex={2}
							onClick={() => setCategory(2)}
							className={`Categories__listItem ${
								category === 2 ? 'active' : ''
							}`}>
							<svg
								width="54"
								height="46"
								viewBox="0 0 54 46"
								xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.4" clip-path="url(#clip0_67_4285)">
									<path
										d="M-9.76529e-05 36.4991C0.0280274 36.4434 0.0842774 36.3877 
0.0983399 36.318C0.703028 33.8104 2.60147 32.3198 5.23115 
32.3198C17.2405 32.3198 29.2358 32.3198 41.2452 32.3198C43.5796 
32.3198 45.914 32.3198 48.2624 32.3198C48.4312 32.3198 48.5999 
32.3198 48.8812 32.3198C48.6562 32.083 48.5155 31.9437 48.3749 
31.7904C40.7671 24.2817 33.1593 16.7729 25.5515 9.27803C24.9608 
8.69293 24.8624 8.23321 25.2421 7.85707C25.6218 7.48094 26.0718 
7.56452 26.6765 8.16356C35.2405 16.6196 43.8187 25.0618 52.3687 
33.5179C53.128 34.2702 53.6905 35.1757 53.9015 36.2623C53.9155 
36.3459 53.9718 36.4155 53.9999 36.4852C53.9999 38.2683 53.9999 
40.0376 53.9999 41.8068C53.9577 41.9182 53.9015 42.0297 53.8734 
42.1411C53.3109 44.398 51.3562 45.9861 49.0359 45.9861C34.3405 
46 19.6452 45.9861 4.9499 45.9861C2.8124 45.9861 0.913965 44.6069 
0.238965 42.5869C0.15459 42.3222 0.0702149 42.0715 -0.0141602 
41.8068C-9.76529e-05 40.0515 -9.76529e-05 38.2823 -9.76529e-05 
36.4991ZM39.8812 44.4397C39.8812 40.9013 39.8812 37.4186 39.8812 
33.894C39.628 33.894 39.403 33.894 39.178 33.894C29.6015 33.894 
20.0249 33.894 10.4483 33.894C8.69053 33.894 6.93272 33.8801 
5.1749 33.894C3.02334 33.908 1.5749 35.3568 1.56084 37.4743C1.56084
 38.533 1.56084 39.5918 1.56084 40.6645C1.56084 43.0606 2.96709 
 44.4397 5.3999 44.4397C16.678 44.4397 27.9562 44.4397 39.2343 
 44.4397C39.4452 44.4397 39.6421 44.4397 39.8812 44.4397ZM41.5546 
 44.4258C44.1421 44.4258 46.6734 44.4815 49.2046 44.4119C51.0187 
 44.3562 52.3827 42.8656 52.4249 41.0406C52.453 39.8983 52.4249 
 38.742 52.4249 37.5997C52.4249 35.315 50.9905 33.894 48.6702 
 33.894C46.4765 33.894 44.2827 33.894 42.089 33.894C41.9202 
 33.894 41.7515 33.908 41.5546 33.9219C41.5546 37.4325 41.5546 40.9013 41.5546 44.4258Z"
									/>
									<path
										d="M15.3703 3.0091C15.3703 2.74441 15.3844 2.47973 15.3703 
									2.22897C15.2859 1.30953 15.7219 0.682634 16.4953 0.278637C17.325 
									-0.139292 18.1969 -0.11143 18.8578 0.529394C20.5875 2.15931 
									22.2609 3.84496 23.9484 5.5306C24.2859 5.86495 24.2438 6.35253 
									23.9203 6.64508C23.5828 6.93763 23.1328 6.90977 22.7531 
									6.53363C21.2344 5.05695 19.7438 3.56634 18.225 2.07573C18.1125 
									1.96428 18.0141 1.81104 17.8734 1.76925C17.6766 1.69959 17.4094
									 1.62994 17.2547 1.69959C17.1 1.76925 16.9734 2.04787 16.9734 
									 2.22897C16.9734 4.84799 17.325 7.42521 17.9719 9.97458C18.9141 
									 13.6663 20.4469 17.0933 22.5703 20.2696C22.95 20.8407 23.0484 
									 20.8686 23.5969 20.4646C24.4266 19.8516 25.4391 19.8795 26.1984 
									 20.576C26.775 21.1054 27.3375 21.6626 27.8859 22.2338C28.3219
									  22.6935 28.5047 23.2508 28.3922 23.8637C28.2656 24.5603 28.1391
										25.2708 27.9844 25.9673C27.9 26.3295 27.9844 26.5803 28.2516 
										26.845C29.3625 27.9176 30.4453 29.0043 31.5422 30.0909C31.8516 
										30.3834 32.0063 30.7178 31.8234 31.1218C31.6125 31.5954 30.9938 
										31.7487 30.5859 31.3586C29.2922 30.1048 28.0125 28.8371 26.7609 
										27.5415C26.2828 27.0539 26.2828 26.3992 26.4094 25.7583C26.5078 
										25.215 26.5922 24.6578 26.7469 24.1284C26.8734 23.6548 26.8172
										 23.3065 26.4234 22.9722C26.0297 22.6517 25.6922 22.2756 25.3406
										  21.9134C25.0594 21.6069 24.8063 21.5512 24.4406 21.8437C23.3859
											 22.6517 22.1344 22.4428 21.3891 21.3283C18.4219 16.9679 16.5375 
											 12.1896 15.75 7.00729C15.5531 5.68385 15.4688 4.34647 15.3281 
											 3.0091C15.3422 3.0091 15.3563 3.0091 15.3703 3.0091Z"
									/>
									<path
										d="M10.3358 42.977C8.84516 42.977 7.35454 42.991 5.86391 
									42.977C4.41547 42.9631 3.19204 41.8486 3.07954 40.4277C3.03735 
									39.8426 3.30454 39.4385 3.79672 39.4107C4.23266 39.3689 4.5561 
									39.6336 4.65454 40.0794C4.85141 41.1242 5.20297 41.4167 6.29985
									 41.4167C9.19672 41.4167 12.0936 41.4167 14.9905 41.4167C15.6092
									  41.4167 15.9889 41.779 15.9327 42.2805C15.8905 42.7123 15.553 
										42.977 15.0467 42.977C13.4577 42.977 11.8967 42.977 10.3358 42.977Z"
									/>
									<path
										d="M46.8842 36.3738C48.4733 36.3877 49.7108 37.6276 49.6968 
									39.2018C49.6827 40.7481 48.4311 41.9601 46.8702 41.9601C45.2952 
									41.9601 44.0014 40.6924 44.0155 39.146C44.0155 37.6136 45.3092 
									36.3598 46.8842 36.3738ZM48.1077 39.146C48.0936 38.4634 47.5452 
									37.948 46.8421 37.948C46.153 37.9619 45.6186 38.5052 45.6327 
									39.1878C45.6467 39.8704 46.1952 40.3859 46.8983 40.372C47.5874 40.372 48.1077 39.8286 48.1077 39.146Z"
									/>
								</g>
								<defs>
									<clipPath id="clip0_67_4285">
										<rect width="54" height="46" />
									</clipPath>
								</defs>
							</svg>

							<h4 className="Categories__listItemTitle">
								Складные ножи
							</h4>
						</motion.li>
						<motion.li
							role="button"
							variants={ulAnimation}
							custom={3}
							// tabIndex={3}
							onClick={() => setCategory(3)}
							className={`Categories__listItem ${
								category === 3 ? 'active' : ''
							}`}>
							<svg
								width="46"
								height="46"
								viewBox="0 0 46 46"
								xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.4" clip-path="url(#clip0_67_4295)">
									<path
										d="M41.9511 0C42.8375 0.203646 43.6641 0.503125 44.3589 1.11406C46.5271 
									3.01875 46.5391 6.21719 44.3708 8.19375C41.9151 10.4219 39.4594 12.626 36.9917 
									14.8302C36.836 14.974 36.6922 15.1057 36.5125 15.2734C36.6922 15.4651 36.836 
									15.6208 36.9917 15.7766C37.8182 16.7229 37.7703 18.1245 36.9078 18.987C36.0214 
									19.8615 34.6438 19.8974 33.7094 19.0349C33.3141 18.6755 32.9787 18.2443 32.6432 
									17.8969C31.0261 19.5021 29.4927 21.0474 27.8755 22.6526C28.6901 23.4432 29.5646 
									24.2698 30.4031 25.1083C33.386 28.0911 36.3568 31.0859 39.3396 34.0807C39.8787 
									34.6318 40.0104 35.1708 39.7229 35.7339C39.5193 36.1411 39.1719 36.3448 38.7406 
									36.4526C36.261 37.0635 33.8412 36.776 31.4813 35.8776C28.6542 34.7995 26.3422 
									32.9786 24.2219 30.8703C23.4552 30.1036 22.6646 29.337 21.862 28.5344C21.7422 
									28.6422 21.6224 28.762 21.4906 28.8818C16.9386 33.4339 12.3745 37.974 7.83439 
									42.538C6.87606 43.4964 5.82189 44.263 4.58804 44.826C3.9771 45.1016 3.39012 
									45.425 2.77918 45.7245C1.59325 46.2995 0.539079 45.8802 0.0599121 44.6464C0.0479329 
									44.6104 0.0119954 44.5745 -0.0119629 44.5385C-0.0119629 44.275 -0.0119629 43.9995 
									-0.0119629 43.724C0.38335 42.9214 0.790641 42.1307 1.162 41.3161C1.737 40.0823 
									2.5396 39.0161 3.49793 38.0578C8.03804 33.5417 12.5542 29.0016 17.0943 
									24.4734C17.2141 24.3536 17.3938 24.2818 17.5615 24.174C17.3339 23.9344 17.238 
									23.8266 17.1422 23.7188C16.3276 22.9042 15.513 22.0896 14.7104 21.263C13.7521 
									20.2807 13.7521 18.9271 14.6985 17.9208C14.8662 17.7411 15.0698 17.5974 15.1896 
									17.4057C15.3094 17.2021 15.4651 16.8906 15.3813 16.7229C15.1177 16.124 14.6865 
									15.6328 14.0396 15.3812C13.213 15.0458 12.3266 14.8062 11.5719 14.351C9.12814 
									12.8776 7.46304 10.6974 6.26512 8.13385C5.95366 7.46302 5.4745 6.82812 5.03127 
									6.16927C4.82762 5.86979 4.50418 5.77396 4.15679 5.85781C3.80939 5.94167 3.64168 
									6.20521 3.60575 6.54062C3.54585 7.01979 3.30627 7.35521 2.85106 7.49896C2.38387 
									7.64271 2.0245 7.45104 1.6771 7.13958C0.850537 6.3849 0.2396 5.51042 1.62767e-05 
									4.40833C1.62767e-05 4.04896 1.62767e-05 3.68958 1.62767e-05 3.33021C0.0359538 
									3.2224 0.0718913 3.1026 0.0958496 2.99479C0.443245 1.68906 1.22189 0.754687 
									2.4797 0.263542C2.75522 0.155729 3.04272 0.0838542 3.33022 0C3.6896 0 4.04897 
									0 4.40835 0C5.63022 0.251562 6.49272 1.05417 7.34325 1.91667C12.5781 7.19948 
									17.825 12.4703 23.0719 17.7411C23.1917 17.8729 23.2755 18.0406 23.3474 18.1484C24.9766 
									16.5312 26.5099 15.0099 28.1271 13.4047C27.7677 13.0693 27.3724 12.7458 27.025 
									12.3865C26.1026 11.4281 26.0906 10.0146 26.9771 9.11615C27.8516 8.22969 29.3011 
									8.20573 30.2714 9.06823C30.4151 9.2 30.5469 9.33177 30.7386 9.49948C30.8344 
									9.37969 30.9182 9.27187 31.0141 9.17604C33.2422 6.69635 35.4584 4.19271 37.7224 
									1.74896C38.2136 1.2099 38.8604 0.790625 39.4834 0.407292C39.8307 0.191667 
									40.2979 0.131771 40.7052 0C41.1125 0 41.5438 0 41.9511 0ZM38.1177 35.0391C31.7209 
									28.6062 25.3719 22.2214 19.0349 15.8604C17.9807 16.8906 16.9625 17.8969 15.9443 
									18.9151C15.3813 19.4781 15.3813 19.8135 15.9563 20.4005C18.2084 22.6646 20.4485 
									24.9286 22.7005 27.1807C24.1261 28.5943 25.5156 30.0437 27.013 31.3734C29.2292 
									33.338 31.7448 34.7755 34.7396 35.1828C35.8417 35.3266 36.9438 35.3146 38.1177 
									35.0391ZM35.4584 14.1714C38.1417 11.7516 40.825 9.34375 43.4964 6.92396C44.1193 
									6.36094 44.4307 5.61823 44.4667 4.76771C44.5146 3.47396 43.7479 2.28802 42.562 
									1.7849C41.3281 1.26979 39.9625 1.55729 39.0281 2.56354C37.962 3.72552 36.9198 
									4.89948 35.8776 6.06146C34.524 7.55885 33.1823 9.05625 31.8526 10.5297C33.0625 
									11.7396 34.2485 12.9375 35.4584 14.1714ZM18.6156 25.1802C18.4839 25.3 18.424 
									25.3479 18.3761 25.4078C13.6443 30.1396 8.91252 34.8714 4.19272 39.6151C3.76147 
									40.0464 3.37814 40.5375 3.07866 41.0646C2.55158 41.987 2.09637 42.9453 1.64116 
									43.9036C1.58127 44.0354 1.59325 44.263 1.66512 44.3708C1.71304 44.4427 1.97658 
									44.4307 2.09637 44.3708C2.58752 44.1552 3.0547 43.8917 3.54585 43.6641C4.71981 
									43.113 5.79793 42.4542 6.72033 41.5198C11.2604 36.9437 15.8365 32.3917 20.4005 
									27.8276C20.5203 27.7078 20.7 27.6359 20.9156 27.4922C20.3287 26.9292 19.8735 
									26.4979 19.4302 26.0547C19.1667 25.7792 18.9151 25.4917 18.6156 25.1802ZM2.30002 
									5.54635C3.33022 3.7974 5.43856 3.98906 6.40887 5.41458C6.8521 6.07344 7.30731 
									6.73229 7.63075 7.43906C8.39741 9.10417 9.40366 10.5896 10.7214 11.8714C11.6797 
									12.8057 12.8057 13.4766 14.0995 13.8359C14.2313 13.8719 14.4349 13.8599 14.5307 
									13.788C14.962 13.4167 15.3573 13.0214 15.7886 12.6141C15.6807 12.4823 15.6209 
									12.4224 15.561 12.3505C12.2307 9.00833 8.91252 5.66615 5.58231 2.32396C5.48647 
									2.22812 5.39064 2.13229 5.28283 2.06042C4.31252 1.30573 2.91095 1.42552 2.12033 
									2.33594C1.28179 3.27031 1.35366 4.63594 2.30002 5.54635ZM29.2531 14.6984C27.7078 
									16.2318 26.1745 17.7651 24.7011 19.2266C25.3959 19.9094 26.1266 20.6281 26.7854 
									21.275C28.2589 19.8016 29.7922 18.2682 31.2896 16.7708C30.6307 16.088 29.912 
									15.3693 29.2531 14.6984ZM36.1771 17.3578C35.9735 17.0703 35.8417 16.8068 
									35.638 16.6031C33.5656 14.5188 31.4932 12.4464 29.4089 10.3859C29.3011 
									10.2781 29.2052 10.1224 29.0735 10.0984C28.8099 10.0505 28.4865 9.97865 
									28.2709 10.0865C28.0792 10.1823 27.8636 10.5057 27.8755 10.7094C27.8875 
									10.9729 28.0672 11.2724 28.2709 11.4641C30.3313 13.5484 32.4156 15.6208 
									34.488 17.6932C34.6078 17.813 34.7156 17.9807 34.8594 18.0047C35.1229 
									18.0526 35.4344 18.1005 35.662 18.0047C35.8656 17.9089 35.9854 17.6214 
									36.1771 17.3578ZM16.9146 13.7401C16.5193 14.0875 16.1479 14.4109 15.7886 
									14.7344C16.124 15.1297 16.4474 15.501 16.699 15.7885C17.0703 15.4292 
									17.4656 15.0578 17.8849 14.6625C17.6453 14.4349 17.3818 14.1833 
									17.1302 13.9437C17.0344 13.8479 16.9505 13.7641 16.9146 13.7401Z"
									/>
									<path
										d="M18.4121 36.7281C18.448 36.6323 18.484 36.4766 18.5559 36.3328C19.023 35.3984 19.4783 
									34.4641 19.9574 33.5297C20.221 33.0146 20.6283 32.8469 21.0475 33.0625C21.4668 33.2781 21.5746 
									33.7094 21.323 34.2125C20.8439 35.1708 20.3647 36.1292 19.8855 37.0995C19.6939 37.4828 19.3824 
									37.6505 18.9632 37.5427C18.6158 37.4229 18.4241 37.1594 18.4121 36.7281Z"
									/>
									<path
										d="M23.7788 36.0333C23.7788 35.5422 23.7668 35.051 23.7788 34.5479C23.7907 34.0568 24.0782 
									33.7573 24.4975 33.7333C24.9407 33.7094 25.2881 34.0208 25.3001 34.512C25.3241 35.5182 25.3241 
									36.5125 25.3001 37.5187C25.2881 38.0099 24.9407 38.3333 24.5095 38.3213C24.0902 38.3094 23.8027 
									37.9859 23.7788 37.5068C23.7668 37.0276 23.7788 36.5365 23.7788 36.0333Z"
									/>
									<path
										d="M16.9146 13.7401C16.9386 13.7641 17.0344 13.8479 17.1183 13.9318C17.3818 14.1833 17.6334 
									14.4229 17.873 14.6505C17.4537 15.0578 17.0584 15.4292 16.687 15.7766C16.4355 15.4891 16.124 
									15.1177 15.7766 14.7224C16.148 14.4109 16.5193 14.0875 16.9146 13.7401Z"
									/>
									<path
										d="M13.8001 25.4557C13.7043 25.5755 13.5605 25.863 13.3329 25.9828C12.3506 26.5099 11.3444 
									27.001 10.3381 27.4922C9.91885 27.6958 9.4876 27.5521 9.29594 27.1807C9.09229 26.7974 9.23604 
									26.3542 9.66729 26.1266C10.6616 25.6114 11.6558 25.1083 12.6621 24.6292C13.2131 24.3656 13.7881 24.713 13.8001 25.4557Z"
									/>
									<path
										d="M10.7214 22.2333C10.2423 22.2333 9.76311 22.2453 9.28394 22.2333C8.76884 22.2213 8.45738 
									21.9338 8.4454 21.4906C8.43342 21.0474 8.74488 20.7239 9.24801 20.712C10.2303 20.688 11.2246 
									20.688 12.2069 20.712C12.71 20.7239 13.0214 21.0474 13.0214 21.4786C13.0214 21.9219 12.71 22.2213 
									12.1949 22.2333C11.7037 22.2453 11.2126 22.2333 10.7214 22.2333Z"
									/>
								</g>
								<defs>
									<clipPath id="clip0_67_4295">
										<rect width="46" height="46" />
									</clipPath>
								</defs>
							</svg>

							<h4 className="Categories__listItemTitle">
								Точилки для ножей
							</h4>
						</motion.li>
						<motion.li
							role="button"
							variants={ulAnimation}
							custom={4}
							// tabIndex={4}
							onClick={() => setCategory(4)}
							className={`Categories__listItem ${
								category === 4 ? 'active' : ''
							}`}>
							<svg
								width="46"
								height="46"
								viewBox="0 0 46 46"
								xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.4" clip-path="url(#clip0_67_4303)">
									<path
										d="M27.8607 35.7949C30.2495 37.3334 32.6 38.8334 34.9249 40.3334C36.2789 
									41.2052 36.7899 42.641 36.2789 44.0257C35.5891 45.8975 33.3664 46.5898 31.693 
									45.4103C29.4192 43.8205 27.1581 42.1923 24.8971 40.5769C24.3734 40.2052 23.8496 
									39.8462 23.3386 39.4616C23.0832 39.2693 22.9171 39.2949 22.6744 39.4744C19.9407 41.4359 
									17.1942 43.3975 14.435 45.3334C12.7999 46.4872 10.7049 45.9744 9.88738 44.2436C9.22312 42.8462 9.68299 
									41.2564 11.0243 40.3846C12.966 39.1154 14.9204 37.8718 16.8621 36.6282C17.2709 36.359 17.6924 36.0898 
									18.1395 35.8077C17.999 35.6923 17.884 35.6026 17.7691 35.5257C15.508 33.9103 13.2342 32.3077 10.986 
									30.6795C10.7177 30.4872 10.5261 30.4744 10.2195 30.6154C5.19924 32.9231 -0.0509711 28.718 0.000125856 
									24.077C0.0256743 21.3975 1.94181 19.1026 4.61162 18.577C8.26505 17.859 12.1229 20.2308 13.0682 
									23.8205C13.2598 24.5385 13.2598 25.3077 13.3109 26.0513C13.3236 26.3205 13.3747 26.4872 13.6047 26.6411C16.6449 
									28.5898 19.6852 30.5385 22.7127 32.5C22.9299 32.641 23.0832 32.641 23.3131 32.5C26.3406 30.5385 29.3809 28.5898 
									32.4211 26.6411C32.6638 26.4872 32.7149 26.3205 32.7022 26.0513C32.485 21.2949 36.5216 18.4616 40.0346 18.4616C44.4544 
									18.4487 47.1881 22.5257 45.5147 26.6282C44.1223 30.0257 39.894 32.5641 35.7041 30.5769C35.5764 30.5128 35.3592 
									30.5 35.2314 30.5769C34.8993 30.7693 34.6055 31.0128 34.2862 31.2308C32.1529 32.7308 30.0323 34.2436 27.8607 
									35.7949ZM5.94014 20C3.25755 20 1.3031 22 1.55858 24.577C1.92903 28.1667 6.18285 31.1667 9.9257 29C10.4878 
									28.6795 10.8838 28.718 11.3947 29.0769C15.9296 32.3205 20.4644 35.5513 25.0121 38.7821C27.4775 40.5385 29.9557 
									42.3077 32.4339 44.0641C33.1365 44.5641 33.9029 44.5385 34.4394 44.0128C35.1931 43.2821 35.0015 42.2052 34.0051 
									41.5641C26.8388 36.9487 19.6724 32.3334 12.4805 27.7564C11.8291 27.3462 11.5353 26.8975 11.7652 26.1539C11.8035 
									26.0257 11.7907 25.8718 11.8035 25.718C11.8546 22.6026 9.1848 20 5.94014 20ZM24.4372 33.5898C25.0121 
									33.9616 25.5486 34.2693 26.0468 34.6411C26.3661 34.8718 26.5705 34.8334 26.8771 34.6154C29.4958 
									32.7308 32.1273 30.8718 34.7588 28.9872C35.142 28.718 35.4869 28.6411 35.8957 28.8975C39.3703 
									31.0257 43.0493 28.718 44.1351 25.8975C45.1187 23.3205 43.8668 20.8077 41.2737 20.1282C38.0801 
									19.3077 33.6474 22.0128 34.3117 26.3718C34.4011 26.9359 34.2351 27.2949 33.7369 27.6026C31.1437 
									29.2436 28.5761 30.9103 25.9957 32.5769C25.4847 32.9103 24.9737 33.2436 24.4372 33.5898ZM21.678 
									38.2949C20.9882 37.8077 20.3239 37.3205 19.6597 36.8718C19.5702 36.8077 19.3531 36.8462 19.2509 
									36.9231C16.7599 38.5128 14.2817 40.1154 11.8035 41.7051C11.4075 41.9616 11.1648 42.3334 11.1393 
									42.8077C11.0882 43.3975 11.3181 43.8846 11.8291 44.1795C12.4039 44.5257 12.9915 44.4744 13.5408 
									44.0898C14.8949 43.1282 16.2489 42.1667 17.603 41.2051C18.9315 40.2564 20.2856 39.2949 21.678 38.2949Z"
									/>
									<path
										d="M31.3993 26.2949C30.8883 26.1923 30.4284 26.0898 29.9302 25.9872C30.0707 
									25.2693 30.1985 24.5769 30.339 23.859C25.4465 23.859 20.5795 23.859 15.687 23.859C15.8147 
									24.5641 15.9552 25.2564 16.0957 26C15.5975 26.1026 15.1249 26.1923 14.6011 26.2949C14.3329 
									24.9616 14.0774 23.6795 13.8219 22.3975C13.3748 20.1795 12.9277 17.9744 12.5062 15.7564C12.4423 
									15.4487 12.3401 15.3334 12.0335 15.2821C8.39287 14.7436 5.78693 11.4103 6.15738 7.83335C6.55338 4.03848 
									9.77248 1.28207 13.5409 1.5513C14.7672 1.64104 15.9041 2.03848 16.9261 2.74361C17.041 2.82053 17.156 
									2.91027 17.2837 2.9872C20.0941 -0.987163 25.8936 -0.999983 28.7294 2.9872C29.5725 2.37181 30.4923 
									1.91027 31.5142 1.69232C35.2698 0.858991 39.0638 3.33335 39.7664 7.07694C40.5073 11.0257 37.9269 
									14.718 34.018 15.2821C33.6858 15.3334 33.5836 15.4616 33.5198 15.7821C32.8683 19.1154 32.204 22.4359 
									31.5398 25.7564C31.5014 25.9231 31.4504 26.0769 31.3993 26.2949ZM15.3548 22.2693C16.364 22.2693 17.3221 22.2693 
									18.2801 22.2693C18.063 20.7693 17.8586 19.2949 17.6542 17.8077C18.1779 17.7308 18.6633 17.6667 19.1615 17.5898C19.3915 
									19.1923 19.6214 20.7308 19.8386 22.2821C20.6561 22.2821 21.4354 22.2821 22.2529 22.2821C22.2529 19.4616 22.2529 16.6667 
									22.2529 13.8718C22.7766 13.8718 23.2493 13.8718 23.773 13.8718C23.773 16.6923 23.773 19.4872 23.773 22.2821C24.6034
									 22.2821 25.3698 22.2821 26.1618 22.2821C26.3918 20.718 26.6089 19.1667 26.8389 17.5769C27.3626 17.6539 27.848 17.7308 
									 28.3462 17.8077C28.1291 19.3205 27.9247 20.7949 27.7203 22.2821C28.7039 22.2821 29.662 22.2821 30.6328 22.2821C30.6711 
									 22.0898 30.7222 21.9103 30.7605 21.718C31.2204 19.3975 31.6803 17.0769 32.1529 14.7564C32.3062 13.9872 32.4595 13.8718 
									 33.2387 13.8334C35.9469 13.7051 38.1951 11.4616 38.3229 8.75643C38.4251 6.50002 37.1988 4.47438 35.1677 3.5513C33.1621 
									 2.64104 30.8755 3.0513 29.2276 4.6154C28.5889 5.21797 28.1546 5.14104 27.7203 4.38463C26.6728 2.53848 25.0888 1.56412 
									 22.9938 1.56412C20.9116 1.56412 19.3404 2.5513 18.3057 4.37181C17.8586 5.15386 17.437 5.21797 16.76 
									 4.60258C15.3293 3.26925 13.6559 2.76925 11.7653 3.24361C9.23597 3.85899 7.57532 6.12822 7.69029 
									 8.74361C7.79248 11.2564 9.69584 13.3975 12.2379 13.7564C13.8475 13.9872 13.6558 13.7821 
									 14.0135 15.5385C14.4606 17.7821 14.8949 20.0257 15.3548 22.2693Z"
									/>
									<path
										d="M44.7227 30.3846C45.0676 30.7564 45.3869 31.1026 45.7446 31.5C44.7865 32.3975 
									43.7263 33.077 42.5383 33.5641C40.4561 34.4231 38.31 34.5513 36.1128 34.0385C35.9212 
									33.9872 35.6402 34.0385 35.4741 34.1539C34.5288 34.7949 33.5963 35.4744 32.6383 36.1539C32.3444 
									35.7308 32.0634 35.3462 31.7568 34.9231C32.0379 34.718 32.2934 34.5129 32.5616 34.3205C33.3919 
									33.7308 34.2095 33.1154 35.0654 32.5641C35.2953 32.4103 35.6785 32.3205 35.9468 32.3975C39.1659 33.3205 
									42.0273 32.6795 44.5566 30.5128C44.5949 30.4616 44.646 30.4359 44.7227 30.3846Z"
									/>
									<path
										d="M5.04595 11.2821C4.59885 11.4359 4.15175 11.6026 3.70465 11.7564C2.24839 
									8.42311 3.21923 2.9231 7.53692 0.141052C7.80518 0.538488 8.07344 0.948745 8.35447 
									1.359C5.05872 3.9231 3.93459 7.19234 5.04595 11.2821Z"
									/>
									<path
										d="M5.54429 15.0769C5.14829 14.5257 4.79061 14.0257 4.38184 13.4744C4.84171 
									13.2051 5.25048 12.9615 5.69758 12.7051C6.02971 13.1539 6.34907 13.6026 6.6812 
									14.0641C6.32352 14.3846 5.96584 14.7051 5.54429 15.0769Z"
									/>
								</g>
								<defs>
									<clipPath id="clip0_67_4303">
										<rect width="46" height="46" />
									</clipPath>
								</defs>
							</svg>

							<h4 className="Categories__listItemTitle">
								Аксессуары для кухни
							</h4>
						</motion.li>
					</motion.ul> */}
					<CategoriesList category={category} setCategory={onChangeCategory} />
				</div>
				<div className="Categories__bottom">
					<ErrorBoundary 
						FallbackComponent={ErrorFallback}>
					
                        	<CategoriesGoods category={category}/>
					</ErrorBoundary>
					<Send />
				</div>
			</div>
		</section>
	)
}

export default Categories