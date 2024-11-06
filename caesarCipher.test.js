import { describe, expect, it } from "vitest";
import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
    it("Appends 3 to Value", () => {
        expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
    })

    it("Appends Nothing/undefined to Value", () => {
        expect(caesarCipher("Hello, WorldZ!")).toBe("Hello, WorldZ!")
    })

    it("Appends 0 to Value", () => {
        expect(caesarCipher("Hello, World!",0)).toBe("Hello, World!")
    })

    it("Appends big to Value", () => {
        expect(caesarCipher("Hello, World!",81)).toBe("Hello, World!")
    })

    it("Passes number as Value", () => {
        expect(caesarCipher(1, 81)).toBe("Please enter a String")
    })

})
