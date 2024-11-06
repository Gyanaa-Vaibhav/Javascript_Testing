export default function caesarCipher(string, append) {
    if (typeof append !== 'number') return string

    if (typeof string !== "string") return "Please enter a String"

    append = append % 27

    const arr = string.split("")
    const solution = arr.map((x) => {

        const charUnicode = x.charCodeAt(0)
        let appendedUnicode = charUnicode + append;

        if (appendedUnicode > 65 && appendedUnicode < 91) {
            return String.fromCharCode(appendedUnicode)
        } else if (appendedUnicode >= 97 && appendedUnicode < 123) {
            return String.fromCharCode(appendedUnicode)
        }
        if (appendedUnicode >= 91 && appendedUnicode < 97) {
            return String.fromCharCode(appendedUnicode = appendedUnicode - 90 + 64)
        }
        if (appendedUnicode >= 123 && appendedUnicode < 123) {
            return String.fromCharCode(appendedUnicode = appendedUnicode - 122 + 96)
        }
        return x
    })
    return (solution.join(""))
}