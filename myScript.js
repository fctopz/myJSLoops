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
    console.log("-----------------------");
    console.log("end of for-of loop.");
    console.log("-----------------------");
}

function forEachLoop()
{
    let greetings="Hi"
    names.forEach((name,currentIndex,sourceArray)=>{
        if(currentIndex === sourceArray.length - 1) {
            greetings += ` and ${name}.`
          } else {
            greetings += ` ${name},`
          }
    });
    console.log(greetings);
    console.log("-----------------------");
    console.log("end of forEach loop.");
    console.log("-----------------------");
}

function someMethod()
{
    let nameWith2As
    const foundNameWith2As = names.some((name) => {
        const has2As = name.indexOf('a') !== name.lastIndexOf('a')
        if (has2As) {
            nameWith2As = name;
        }
    
        console.log(name);
    
        return has2As;
    })
    if (foundNameWith2As) {
        console.log('We found a name with two "a" characters:', nameWith2As);
    } 
    else {
        console.log('We did not find a name with two "a" characters.');
    }
    console.log("-----------------------");
    console.log("end of some Method.");
    console.log("-----------------------");
}

function filterMethod()
{
    let namesWithL = names.filter((name,currentIndex,sourceArray)=>{
        return name.toUpperCase().includes("L");
    });
    console.log(namesWithL);
    console.log("-----------------------");
    console.log("end of filter Method.");
    console.log("-----------------------");
}

function mapMethod()
{
    let reversedNames = names.map((name,currentIndex,sourceArray)=>{
        const reversedName = name.split('').reverse().join('');
        return reversedName;
    });
    console.log(reversedNames);
    console.log("-----------------------");
    console.log("end of map Method.");
    console.log("-----------------------");
}

function reduceMethod()
{
    const myFriends = [
        {name: 'Lincoln', age: 20},
        {name: 'Daniel', age: 23},
        {name: 'Tabitha', age: 24},
        {name: 'McLeod', age: 24},
      ]
      console.log(myFriends.reduce((str, friend, index, friends) => {
          if (index === 0) {
              return `${str} ${friend.name} (${friend.age})`
          } else if (index !== friends.length - 1) {
              return `${str}, ${friend.name} (${friend.age})`
          } else {
              return `${str}, and ${friend.name} (${friend.age}).`
          }
      }, 'My friends are'))
      console.log("-----------------------");
      console.log("end of reduce Method.");
      console.log("-----------------------");
  }
//source: https://medium.com/modernnerd-code/8-ways-to-loop-through-an-array-in-javascript-5bd89accaba5