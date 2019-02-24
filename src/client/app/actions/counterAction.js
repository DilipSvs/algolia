/*export function changeCount() {
    return {
        type: 'myActionName_UpdateCount',
        payload: 1
    };
}
export function nextCount() {
    return {
        type: 'COUNT_NEXT',
        payload: 1
    };
}*/

export const nextCount = () => ({
	type: 'COUNT_NEXT',
	payload: 1
});
export function prevCount() {
	return {
		type: 'COUNT_PREV',
		payload: 1
	};
}

export const hideRow = (user) => ({
	type: 'HIDE_ROW',
	payload: user
});
export const upPoint = (user) => ({
    type: 'UP_POINT',
    payload: user
})
//const changeCount = {type: 'myActionName_UpdateCount'}