// let user = {
//     names:'buntu william' ,
//     age: 23,
//     degree:'bachelors degree',
//     college:'University Of Rwanda',
//     location:'Kigali Gasabo kinyinya',
//     height:1.73,
//     courses:['mahts','java','node.js','react js','python'],
//     Blogs:[
//     {lesson:'java', grades:75},
//     {lesson:'maths', grades:65},
//     {lesson:'node.js', grades:97}
// ],
//     array(){
//             this.courses.forEach(course =>
//                 { console.log(course)})
//     }
//     ,
//     array_1(){
//         this.Blogs.forEach(lesson =>
//             { console.log(lesson.lesson,lesson.grades)})
// }
// };

//console.log(user)
// user.array();
// user.array_1();
// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)
// area=34.5
// console.log(Math.round(area))
// const randomNumber = Math.random()
// console.log(Math.round(randomNumber*200))

// console.log(user.courses)
// user.age=2223
// console.log(user)
// console.log(typeof user)
//const para = document.querySelector('p')

// const para = document.querySelector('div.error')
// para.innerText = 'The next day is comming people will know'
// console.log(para.innerText)
// para.setAttribute('style','color:yellow')
// para.style.margin = '455px'
// const para = document.querySelector('button')
// para = document.addEventListener('click',()=>{
//     console.log('you clicked me')
// })
const ul = document.querySelector('ul')
const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    // ul.innerHTML +='<li>Something new<li>'
    const li = document.createElement('li')
    li.textContent='something New '
    // ul.append(li)
    ul.prepend(li)

})
const items = document.querySelectorAll('li')
items.forEach(item=>{

    item.addEventListener('click', e =>{
        // console.log(e.target)
        e.target.remove()
    })
  
})