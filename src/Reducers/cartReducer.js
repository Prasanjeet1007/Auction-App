const cartReducer = (state = [], action = {}) =>
{
    switch(action.type)
    {
        case "AddItem":
            const itemAdded = [...state, {...action.item, count: 1}];
            return itemAdded;
        case "RemoveItem":
            const itemRemoved = state.filter((c)=>{return c.id !== action.item.id});
            return itemRemoved;
        case "IncreaseCount":
            action.item.count += 1;
            action.item.price *= action.item.count/(action.item.count-1); 
            const countIncreased = state.filter((c) => {return c.count});
            return countIncreased;
        case "DecreaseCount":
            action.item.count -= 1;
            action.item.price *= action.item.count/(action.item.count+1); 
            const countDecreased = state.filter((c) => {return c.count});
            return countDecreased;
        default:
            return state;
    }
}

export const editCart = (type, item) => async (dispatch) => {
    dispatch({
        type,
        item,
    })
}

export default cartReducer;
