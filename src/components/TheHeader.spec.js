import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import TheHeader from "./TheHeader.vue";

describe("The Header", () => {
    it("renders properly", () => {
        const wrapper = mount(TheHeader);
        expect(wrapper.text()).toContain("The Pineapple Stand");
    })
})
