const request = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // console.log('Promise Initiated');
    // resolve('Promises fulfilled');
    reject('request has been rejected');
  },1000)
})
request.then((value)=>{
  console.log(value)
}).catch((err)=>{
  console.log(err)
}).finally(()=>{
  console.log('I love you SO much Vaishnavi')
})
console.log(request)