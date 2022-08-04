// template strings/literals

const recipient = "James"
// Create a new variable, sender, and set its value to your name
const recipient2 = "John"
const sender = "Mike"
// Use your sender variable instead of "Per"
const email = `Hey ${recipient}! How is it going? Cheers Per`
const email2 = `Hey ${recipient2}! How is it going? Cheers ${sender}`

console.log(email)
console.log(email2)