const divElem = document.querySelector('.card-container');
function getDetails(id){
 const request = fetch(`https://dummyjson.com/uses/${id}`)
 console.log(request)
 const response = request.then((response)=>{
  if(!response.ok){
    throw new Error('Element id does not exist');
  }
  return response.json()
 })

 response.then((user)=>{
  console.log(user)
 })
// fetch(`https://dummyjson.com/users/${id}`).then((response)=>{
//  return response.json()
// }).then((user)=>{
//  console.log(user)
// }).catch((err)=>{
//   console.log(err)
// })
}
getDetails(4)