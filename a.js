fs = require('fs')

p = new Promise(function(resolve){
    console.log('a')
    resolve('hey')
    fs.readFile('a.txt','utf-8',function(err,data){
        resolve(data)
    })
    // resolve('hey')
})

p.then(function(data){
    console.log(data)
    console.log(p)
})

sum=0
for(i=0;i<1e7;++i){
    sum+=i
}
console.log(sum)