let person_image = document.getElementById("photo")
let person_name = document.getElementById("name")
let person_comment = document.getElementById("comment")
let person_next = document.getElementById("next")
let person_prev = document.getElementById("prev")

let person_list = [
    {
        name: 'Lisa',
        Image: 'images/download.jfif',
        Comment:'hi this was an amazing app'
    },
    {
        name: 'maru',
        Image: 'images/photo.jfif',
        Comment:'hi this was an amazing app for me'
    },
    {
        name: 'reeve',
        Image: 'images/photu.jfif',
        Comment:'hi this was an amazing app for everyone'
    },
    {
        name: 'Somit',
        Image: 'images/image.jfif',
        Comment:'hi this was an amazing app without recent upgrades'
    }
]
let i = 0;
console.log(person_list[i].Image)
person_next.addEventListener("click", function(){
    person_image.src = person_list[i].Image;
    person_name.innerHTML = person_list[i].name;
    person_comment.innerHTML = person_list[i].Comment;

    i+=1;
    if(i>person_list.length){
        i=0;
    }
})

