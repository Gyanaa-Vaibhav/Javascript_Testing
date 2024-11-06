import calculator from "./calculator";
import { describe, expect, it } from "vitest";

describe("Calculator",()=> {
    it("Adds both the numbers", () => {
        expect(calculator(1,2,'add')).toBe(3)
    })
    it("Subtract both the numbers", () => {
        expect(calculator(1,2,'subtract')).toBe(-1)
    })
    it("Multiply both the numbers", () => {
        expect(calculator(1,2,'multiply')).toBe(2)
    })
    it("Divide both the numbers", () => {
        expect(calculator(1,2,'divide')).toBe(0.5)
    })

    // Edge Cases

    it("Passing String", () => {
        expect(calculator("a", 1, 'add')).toBe("Please Enter Number Only")
    })

    it("Passing Special Character", () => {
        expect(calculator(".$", 1, 'add')).toBe("Please Enter Number Only")
    })

    it("Not passing Values", () => {
        expect(calculator(undefined,NaN,'add')).toBe(NaN)
    })

    it("Passing Incorrect function Values", () => {
        expect(calculator(undefined, NaN, 'adds')).toBe("Please Enter a correct function")
    })
})