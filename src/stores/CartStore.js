import { defineStore } from "pinia";


export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
        };
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        getUniqueItems: (state) => state.items.filter((e, i) => state.items.findIndex(a => a['name'] === e['name']) === i),
        getCountByItem: (state) => {
            return (itemName) => (state.items.filter((item) => item.name === itemName)).length;
        },
        cartTotal: (state) => state.items.reduce((acc, item) => acc + item.price, 0),
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push({ ...item });
            }
        },
        removeItems(count, item) {
            count = parseInt(count);
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
            this.items = [];
        },
        updateCount(count, item) {
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
    }
});