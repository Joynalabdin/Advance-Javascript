const id = [4, 5, 6, 7, 8]
const output =[];

for (let i=0; i<id.length; i++){
    const element = id[i];
    const result = element*element;
    output.push(result);

}
console.log(output);

id.map(function(element, array){
    console.log(element, array)
})

const result =id.map(function(element){
    return element*element;
})
console.log(result);

const square = id.map(x=> x*x)
{
    console.log(square)
}

const bigger = id.filter( x=> x >5)
console.log(bigger);

const finder = id.find( x=> x>3 )
console.log(finder)

// i learn about map, filter, find