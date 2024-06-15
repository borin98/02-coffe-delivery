import {type CartItem} from "@/reducers/cart/reducer";

export enum ActionTypes {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
    DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
}

export type ReducerActions =
    | {
    type: ActionTypes.ADD_ITEM;
    payload: {
        item: CartItem
    }
}
    | {
    type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
    payload: {
        itemId: CartItem["id"]
    }
}

export function addItemAction(item: CartItem) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item,
        },
    } satisfies ReducerActions
}

export function removeItemAction(itemId: CartItem["id"]) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    } satisfies ReducerActions
}

export function incrementItemQuantityAction(itemId: CartItem["id"]) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies ReducerActions
}

export function decrementItemQuantityAction(itemId: CartItem["id"]) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies ReducerActions
}