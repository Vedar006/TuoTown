import React from 'react'
import styles from "./Card.module.scss"
const Card:React.FC = () => {
  return (
    <li className={styles.Card}>
        <div className={styles.Card__top}>
<div className={styles.Card__icons}>
<svg className={styles.Card__plusIcon} width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className={styles.Card__basketIcon} width="15" height="19" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_67_4364)">
<path d="M7.86207 0C8.12591 0.0631229 8.39933 0.106823 8.65837 0.194224C10.1502 0.713775 11.0952 1.98109 11.1959 3.57858C11.1959 3.60772 11.2055 3.63685 11.2103 3.69512C11.2775 3.69512 11.3446 3.69512 11.407 3.69512C12.0402 3.69512 12.6782 3.69512 13.3114 3.69512C13.7047 3.69512 13.8966 3.86992 13.935 4.26322C14.0645 5.71991 14.1892 7.18145 14.3139 8.63813C14.4674 10.3716 14.6209 12.1099 14.7745 13.8433C14.8512 14.6931 14.9519 15.5428 14.9903 16.3925C15.0287 17.2665 14.6209 17.9366 13.935 18.4367C13.3929 18.8301 12.7741 18.9903 12.1074 18.9903C9.70889 18.9854 7.30563 18.9903 4.90717 18.9903C4.15405 18.9903 3.40573 19.0146 2.65261 18.9806C1.70282 18.9417 0.920918 18.5436 0.369272 17.7375C-0.00968591 17.184 -0.0480613 16.5625 0.0190957 15.9118C0.158207 14.5668 0.263739 13.217 0.378865 11.8671C0.493992 10.5415 0.613915 9.2208 0.729041 7.89522C0.834574 6.72016 0.935309 5.54511 1.03604 4.37005C1.04084 4.31664 1.04084 4.25837 1.05044 4.20496C1.0984 3.86506 1.28549 3.69512 1.63086 3.69026C2.27365 3.68541 2.91164 3.69026 3.55443 3.69026C3.62639 3.69026 3.69834 3.69026 3.77509 3.69026C3.80387 3.11245 3.9142 2.57833 4.16844 2.08306C4.77285 0.932277 5.70825 0.252492 6.97464 0.0388449C7.02741 0.0291337 7.08018 0.0145668 7.13294 0C7.37279 0 7.61743 0 7.86207 0ZM3.78948 4.7585C3.19946 4.7585 2.63342 4.7585 2.05779 4.7585C2.05299 4.79734 2.0434 4.82648 2.0434 4.86046C1.89949 6.52108 1.75079 8.18656 1.60688 9.84717C1.4198 12.0128 1.23272 14.1832 1.04084 16.3488C1.00726 16.747 1.13678 17.0772 1.39581 17.3637C1.79876 17.8007 2.31682 17.9512 2.88766 17.9512C5.95769 17.956 9.03253 17.956 12.1026 17.9512C12.4479 17.9512 12.7789 17.8929 13.0955 17.7375C13.5992 17.4899 14.0405 16.9606 13.9542 16.2809C13.9014 15.873 13.8774 15.4554 13.8438 15.0427C13.7191 13.586 13.5896 12.1245 13.4649 10.6678C13.321 9.02658 13.1771 7.38053 13.0332 5.73933C13.0044 5.414 12.9708 5.08868 12.942 4.76821C12.3568 4.76821 11.786 4.76821 11.2055 4.76821C11.2055 4.83619 11.2055 4.89445 11.2055 4.94787C11.2055 5.41886 11.2103 5.88985 11.2007 6.35599C11.1959 6.65218 10.9657 6.87069 10.6827 6.86583C10.4092 6.86098 10.1886 6.64733 10.1742 6.36085C10.1694 6.26374 10.1742 6.16177 10.1742 6.06466C10.1742 5.63251 10.1742 5.20036 10.1742 4.76821C8.38014 4.76821 6.61008 4.76821 4.82562 4.76821C4.82562 4.81676 4.82562 4.85561 4.82562 4.8896C4.82562 5.3703 4.83042 5.85586 4.82562 6.33657C4.82082 6.64733 4.59537 6.87069 4.30755 6.86583C4.02453 6.86583 3.80867 6.64247 3.79908 6.34628C3.79428 6.25402 3.79908 6.16177 3.79908 6.06951C3.78948 5.63251 3.78948 5.20036 3.78948 4.7585ZM10.1694 3.68541C10.1022 2.67058 9.66572 1.89369 8.80227 1.40327C7.86687 0.87401 6.92188 0.912854 6.02485 1.50524C5.26214 2.01022 4.87359 2.75313 4.82562 3.68541C6.61487 3.68541 8.38494 3.68541 10.1694 3.68541Z" />
</g>
<defs>
<clipPath id="clip0_67_4364">
<rect width="15" height="19"/>
</clipPath>
</defs>
</svg>
</div>


<div className={styles.Card__img}>
    <img src="/img/Card/12.png" alt="" />
</div>
        </div>
        <div className={styles.Card__bottom}>
            <h4 className={styles.Card__title}>
            Складной нож SQ01-B
            </h4>
           <div className={styles.Card__info}>
           <span className={styles.Card__price}>
            850 р.
            </span>
            <span className={styles.Card__new}>
                Новинка
            </span>
           </div>
        </div>
    </li>
  )
}

export default Card