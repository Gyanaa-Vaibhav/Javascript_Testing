import capitalize from "./capitalize";
import { describe, expect, it } from "vitest";

describe("capitalize", () => {
    it("Capitalizes a lowercase word", () => {
        expect(capitalize('hello')).toBe("Hello");
    });
    
    it("Capitalizes a single lowercase letter", () => {
        expect(capitalize('h')).toBe("H");
    });
    
    it("Handles an empty string", () => {
        expect(capitalize('')).toBe("");
    });
    
    it("Returns already capitalized word unchanged", () => {
        expect(capitalize('Hello')).toBe("Hello");
    });

    it("Capitalizes first letter with space in string", () => {
        expect(capitalize('h ello')).toBe("H ello");
    });

    it("Returns Number as-is", () => {
        expect(capitalize("12")).toBe("12");
    })

    it("Returns Special Characters as-is", () => {
        expect(capitalize("$12")).toBe("$12");
        expect(capitalize(".12")).toBe(".12");
        expect(capitalize("_12")).toBe("_12");
    })


})
