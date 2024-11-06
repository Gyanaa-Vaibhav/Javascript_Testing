export default function calculator(a, b, fun) {
    if (typeof a === ('string' || undefined) || typeof b === 'string') {
        return "Please Enter Number Only"
    }

    switch (fun) {
        case 'add':
            return a+b
        case 'subtract':
            return a-b
        case 'multiply':
            return a*b
        case 'divide':
            return Number((a/b).toFixed(2))
        default:
            return"Please Enter a correct function"
    }
}