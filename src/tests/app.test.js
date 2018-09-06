const greetings = (name) => `Hello ${name}`

test('Name should me name', () => {
    const result = greetings('Nilesh')
    expect(result).toBe(`Hello ${result}`)
})