import { defineStore } from "pinia";
import { IProduct } from "../models/store.models";

export type RootState = {
    items: IProduct[];
    count: number;
}

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
            count: 0
        } as RootState;
    },
    getters: {
        count: (state: RootState) => state.items.length,
        isEmpty: (state: RootState) => state.count === 0,
        getUniqueItems: (state: RootState) => state.items.filter((e, i) => state.items.findIndex(a => a['name'] === e['name']) === i),
        getCountByItem: (state: RootState) => (itemName) => (state.items.filter((item: Product) => item.name === itemName)).length,
        cartTotal: (state: RootState) => state.items.reduce((acc, item) => acc + item.price, 0),
    },
    actions: {
        addItems(count: number, item: Product) {
            // count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push({ ...item });
            }
        },
        removeItems(count: number, item: Product) {
            // count = parseInt(count);
            for (let index = 0; index < count; index ++) {
                const match = this.items.lastIndexOf(item);
                if (match !==-1){
                    this.items = [...this.items.slice(0, match), ...this.items.slice(match+1)];
                }
            }
        },
        deleteProduct(item) {
            this.items = this.items.filter((i) => i.name !== item.name);;
        },
        emptyCart() {
            this.items = [] as Product[];
        },
        updateCount(count: number, item: Product) {
            if (count === 0) {
                this.deleteProduct(item);
                return;
            }
            const currentItemCount = this.getCountByItem(item.name);
            if (count > currentItemCount) {
                this.addItems(count - currentItemCount, item);
            } else if (count < currentItemCount) {
                this.removeItems(currentItemCount - count, item);
            }
        }
    },
});
export default { useCartStore }
