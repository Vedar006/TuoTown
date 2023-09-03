import React,{useState,useEffect} from 'react'

import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import { useDebounce } from '../../hooks/debounce'
import { useAppDispatch } from '../../redux/store'

import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../../components/Home/Home'
import Filter from '../../components/Filter/Filter'
import { fetchCatalogItems } from '../../redux/slices/catalogSlice'
import { Status } from '../../redux/slices/catalogSlice'
import './Catalog.scss';
import { ICard } from '../../types/Card';
import Card from '../../components/Card/Card';
import Send from '../../components/Send/Send';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import CardSkeleton from '../../components/Card/CardSkeleton'
import { setPage } from '../../redux/slices/filterSlice'
import { setFilter,setSort } from '../../redux/slices/filterSlice';
const fakeArr = [...Array(10)];

const Catalog:React.FC<any> = ({toggleSidebar,setToggleSidebar}) => {

	const dispatch =useAppDispatch();
	const {knives,status} = useSelector((state:any)=> state.catalogSlice)
	const { neww,page,searchValue,sort } =useSelector((state:any)=> state.filterSlice);
	console.log('catalog',knives);
	

	const [knivesPerPage] = useState(6);
	
	const debouncedValue = useDebounce(searchValue,600);
	
	const search = searchValue.length>0?`&title=${debouncedValue}`:'';
	const check = neww===true?'&new=true':'';
	const sortByPrice= sort===true?'&sortBy=price&order=asc':'';
	useEffect(() => {

		// @ts-ignore
		dispatch(fetchCatalogItems({page,check,searchValue,search,neww,sortByPrice}))
		console.log('goodssss')
	
		searchValue.length > 3 && dispatch(setPage(1))
		// knives && knives.length >6 && setPage(1)

	}, [page,search,searchValue,check,neww,sort])
	// console.log('filterrrrrrrr',knives.filter((value:any) => value.new === true))
	const lastKniveIndex = page * knivesPerPage;
	const firstKniveIndex = lastKniveIndex - knivesPerPage;
	const currentKnives= knives.slice(firstKniveIndex,lastKniveIndex)

	const paginate = (pageNumber:number) => dispatch(setPage(pageNumber))

	return (
		<>
			<Helmet>
				<meta charSet="utf-8"/>
				<title>Catalog</title>
				
			</Helmet>
			<main className="Catalog">
				{toggleSidebar === true ? (
					<Sidebar
						toggleSidebar={toggleSidebar}
						setToggleSidebar={setToggleSidebar}
					/>
				) : null}
				<Home />

				<div className="Catalog__container">
					<h1 className="Catalog__title">
				Ножи
					</h1>
					<div className="Catalog__wrapper">
						<div className="Catalog__left">
							<Filter/>
							<Search/>
							<ul className="list-reset Catalog__mobile-filters">
								<li className="Accordion__item">
								Новинки <input type="checkbox" value={neww} onChange={()=> dispatch(setFilter(!neww))} />
								</li>
								<li className="Accordion__item">
								По цене <input type="checkbox" value={sort} onChange={()=>dispatch(setSort(!sort))} />
								</li>
							</ul>
						</div>
						<ul className="list-reset Catalog__goods">
							{
								status === Status.LOADING ? fakeArr.map(i => (
									<CardSkeleton/>
								)):currentKnives.map((knive: ICard): any => (
									<Card
										key={knive.id}
										id={knive.id}
										descr={knive.descr}
										title={knive.title}
										new={knive.new}
										newItem={knive.new}
										price={knive.price}
										imageUrl={knive.imageUrl}
										type={knive.type}
									/>
								))
							}
						
						</ul>
  

        
	
					
					</div>
					<Pagination  
						totalKnives={knives.length} 
						paginate={paginate} 
						page={page} 
						knivesPerPage={knivesPerPage}/>
					<Send/>
				</div>
			</main>
		</>
	)
}

export default Catalog