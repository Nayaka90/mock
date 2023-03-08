var str="i am working in testyantra"
console.log(convertFirstCh(str))
function convertFirstCh(str){
 str=str.split(' ').map((word)=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(' ')
return str
}