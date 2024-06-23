import {produce} from "immer"
import {z} from "zod"
import {type ReducerActions, ActionTypes} from "@/reducers/cart/actions";
import {type ItemDB, itemSchema} from "@/server/db/fake_database";

const orderSchema = z.object({
    cep: z.number({invalid_type_error: "Informe o CEP"}),
    street: z.string().min(1, "Informe a rua"),
    number: z.string().min(1, "Informe o número"),
    fullAddress: z.string(),
    neighborhood: z.string().min(1, "Informe o bairro"),
    city: z.string().min(1, "Informe a cidade"),
    state: z.string().min(1, "Informe a UF"),
    paymentMethod: z.enum(["credit", "debit", "cash"], {
        invalid_type_error: "Informe um método de pagamento",
    }),
})

export type OrderInfo = z.infer<typeof orderSchema>

export interface CartItem extends ItemDB {
    quantity: number;
}

export const cartItemSchema = itemSchema.extend({
    quantity: z.number().int().nonnegative(),
});

interface OrderDelivery extends OrderInfo {
    items: ItemDB[]
    totalPrice: number
}

export interface CartState {
    cart: CartItem[]
}

export const cartStateSchema = z.object({
    cart: z.array(cartItemSchema),
})

interface HistoryState {
    cart: Record<string, CartItem>
    orders: Record<string, OrderDelivery>
}

export function cartReducer(state: CartState, action: ReducerActions) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find(
                    (item) => item.id === action.payload.item.id,
                )

                if (itemAlreadyAdded) {
                    itemAlreadyAdded.quantity += action.payload.item.quantity
                } else {
                    draft.cart.push(action.payload.item)
                }
            })

        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                const itemToRemoveId = draft.cart.findIndex(
                    (item) => item.id === action.payload.itemId,
                )
                draft.cart.splice(itemToRemoveId, 1)
            })

        case ActionTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId,
                )

                if (itemToIncrement?.id) {
                    itemToIncrement.quantity += 1
                }
            })

        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToDecrement = draft.cart.find(
                    (item) => item.id === action.payload.itemId,
                )

                if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
                    itemToDecrement.quantity -= 1
                }
            })

        default:
            return state
    }
}