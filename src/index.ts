// ARRAYS
let nums: number[] = [1, 2, 3]
nums.forEach(c => c.toFixed())

// TUPLE
let user: [number, string] = [1, '0']

// ENUM
const enum Size { // if use const, then compiled code is more optimized
  Small = 1,
  Medium,
  Large
}
let mySize: Size = Size.Medium

// function
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022)
    return income * 1.2
  return income * 1.3
}

// type
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void 
}

// objects
let employee: Employee = {
  id: 1,
  name: 'che tam',
  retire: (date: Date) => {
    console.log(date)
  }
}
employee.name = 'MOOO'

// ADVANCED TYPES
// union types
function kgToLbs(weight: number | string) {
  // Narrowing
  if (typeof weight === 'number')
    return weight * 2.2
  else
    return parseInt(weight) * 2.2
}
kgToLbs(10)
kgToLbs('10kgs')

// intersection types
type Draggable = {
  drag: () => void
}
type Resizable = {
  resize: () => void
}
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal types
type Quantity = 50 | 100
let quantity: Quantity = 100

// Nullable types
function greet(name: string | null) {
  if (name)
    console.log(name.toUpperCase())
  else
    console.log('Hola')
}

greet(null)

// optional chaining
type Customer = {
  birthday: Date
}

function getCustomer(id: number): Customer | null{
  return id === 0 ? null : { birthday: new Date() }
}
let customer = getCustomer(0)
// Optional property access operator
console.log(customer?.birthday?.getDate())

// Optional element access operator
// customer?.[0]

// Optional call
// log?.()