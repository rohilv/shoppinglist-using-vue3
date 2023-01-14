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
        }
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push({ ...item });
            }
        },
        removeItems(item) {
            const matchedItems = this.items.filter((i) => i.name === item.name);
            this.items = { matchedItems, ...this.items };
        }
    }
});