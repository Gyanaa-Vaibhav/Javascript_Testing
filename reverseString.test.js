import reverseString from "./reverseString";
import { describe, it, expect } from "vitest";

function test() {
    // DO nothing
}

describe("", () => {
    it("Reverses the String", () => {
        expect(reverseString("hello")).toBe("olleh")
    })

    it("Reverses the String with spaces", () => {
        expect(reverseString("hel lo")).toBe("ol leh")
    })

    it("Passing Number as String", () => {
        expect(reverseString("12345")).toBe("54321")
    })

    it("Passing Special Characters as String", () => {
        expect(reverseString("!@#$")).toBe("$#@!")
    })

    // Unexpected inputs
    it("Returns Number as-is", () => {
        expect(reverseString(13)).toBe(13)
    })

    it("Returns Function as-is", () => {
        expect(reverseString(test)).toBe(test)
    })

})