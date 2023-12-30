const names = ['Lincoln', 'Daniel', 'Tabitha', 'McLeod']

function forLoop()
{
    for (let i = 0; i < names.length; i++) {
        const currentName = names[i]
        console.log(currentName, 'is at index', i)
    }
    console.log("-----------------------");
    console.log("end of for loop.");
    console.log("-----------------------");
}

function whileLoop()
{
    let i=0;
    while (i<names.length)
    {
        const currentName = names[i++]
        console.log(currentName, 'is at index', i)    
    }
    console.log("-----------------------");
    console.log("end of while loop.");
    console.log("-----------------------");
}

function forOfLoop()
{
    for (const name of names)
    {
        console.log(name);
    }
}