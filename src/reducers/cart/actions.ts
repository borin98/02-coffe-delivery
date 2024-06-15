import {type Item} from "@/server/db/fake_database";

export enum ActionTypes {
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
    DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
}

export type Actions =
    | {
    type: ActionTypes.ADD_ITEM;
    payload: {
        item: Item
    }
}
    | {
    type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
    payload: {
        itemId: Item["id"]
    }
}

export function addItemAction(item: Item) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item,
        },
    } satisfies Actions
}

export function removeItemAction(itemId: Item["id"]) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    } satisfies Actions
}

export function incrementItemQuantityAction(itemId: Item["id"]) {
    return {
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies Actions
}

export function decrementItemQuantityAction(itemId: Item["id"]) {
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            itemId,
        },
    } satisfies Actions
}