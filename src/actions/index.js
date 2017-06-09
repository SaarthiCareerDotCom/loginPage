export const UPDATE_DATA = "UPDATE_DATA";
export const UPDATING_DATA = "UPDATING_DATA";

export const getData = data => ({
	type: UPDATE_DATA,
	data
});

export const updatingData = data => ({
	type: UPDATING_DATA
})


export const getUserData = () => dispatch => {
	// const {dispatch} = this.props;
	dispatch(updatingData());
	return fetch(`http://localhost:3000/data.json`)
		.then(response => response.json())
		.then(json => dispatch(getData(json)))
}