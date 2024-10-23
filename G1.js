// We get a function and in it store the taxrate, we calculate the tax payable income and print the output
function  calculateTax(income){
    const taxrate = 0.15
    taxpayable = income * taxrate
    rem = income - taxpayable
    console.log(`The tax rate is ${taxrate}`)
    console.log(`The tax payable is ${taxpayable}`)
    console.log(`The income remaining after taxation is ${rem}`)
}

calculateTax(1000000)