import { createSlice } from '@reduxjs/toolkit';

export interface IFilter {
	neww:boolean;
	sort:boolean;
	searchValue:string;
	page:number;
}

const initialState:IFilter = {
	neww:false,
	sort:false,
	searchValue:'',
	page:1,
}

export const filterSlice = createSlice({
	name:'filter',
	initialState,
	reducers: {
		// console.log('filterrrrrrrr',knives.filter((value:any) => value.new === true))
	      setFilter(state,action) {
        	state.neww = action.payload
		},
		setPage(state,action) {
			state.page = action.payload;
		},
		setSearchValue(state,action) {
			state.searchValue=action.payload
		},
		setSort(state,action) {
			state.sort = action.payload;
		},

	},
})


export const  {setFilter,setPage,setSearchValue,setSort} =filterSlice.actions;
export default filterSlice.reducer;