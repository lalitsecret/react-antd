import data from './data'
const initialState={
	products:data.products,
	tags:data.tags,
	cart:data.cart,
	orders:data.orders,
	users:data.users,
	filters:data.filters,
	user:{},
	loggedin:false,
	col:"",
	order:true,
	search:"",
	tagname:""
}
const reducer=(state,action) =>{
	switch(action.type)
	{
		default:
			return state
	}
}

export default reducer