export default function reverseString(string) {
    
    if (typeof string === 'string') return (string.split("").reverse().join(""))
    
    return string
}