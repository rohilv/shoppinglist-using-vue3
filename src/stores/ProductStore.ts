import { defineStore } from "pinia";
import { IProduct } from "../models/store.models";

export const useProductStore = defineStore("ProductStore", {
    // state
    state: () => {
        return {
            products: [] as IProduct | never[]
        }
    },
    // actions
    actions: {
        async fill() {
            this.products = (await import("../data/products.json")).default;
        }
    }
    // getters

})
