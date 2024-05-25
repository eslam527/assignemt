var bookName= document.getElementById('bookname')
var url= document.getElementById('url')
var container =document.getElementById('body')
var bookArry ;
var reblacedIndex;
if(localStorage.getItem('bookItem') != null){
    bookArry = JSON.parse(localStorage.getItem('bookItem'))
    display(bookArry)
}
else{
    bookArry=[];
}



function add(){
   if(validoition() == true && bookName.value != '' ){
    var bookList={
        bookMarkaName:bookName.value,
        bookUrl:url.value
    }
    bookArry.push(bookList);
    localStorage.setItem('bookItem',JSON.stringify(bookArry))

    console.log(bookArry);

    clear()
    display(bookArry)

   }else{
    Swal.fire({
        title: "accebted data?",
        text: `${bookName.value == ''?'inter book name':''} ${validoition() == true?'':'and valid url' }`,
        icon: "question"});

      }

    }
// console.log(localStorage);


    function display(arr){
        var cartoona ='';
        for(i = 0; i< arr.length ;i++){
            cartoona+=`                            
        <tr>
            <td class="p-3">${i}</td>
            <td class="p-3">${arr[i].bookMarkaName}</td>
            <td><div class="btn btn-success"> <a href="${bookArry[i].bookUrl}"target="_blank"> 
            <i class="fa-solid fa-eye-low-vision"></i>visit</a>
            </div></td>
            <td><div class="btn btn-info" onclick="update(${i})"><i class="fa-solid fa-pen-nib"></i>update</div></td>

            <td><div class="btn btn-danger" onclick="delet(${i})"><i class="fa-solid fa-trash"></i>delete</div></td>
        </tr>`
        }
        document.getElementById('body').innerHTML=cartoona;

    }

    function clear(){
        bookName.value ='';
        url.value= ''

    }
    function delet(index){
        // console.log('ok');
        bookArry.splice(index , 1);
        localStorage.setItem('bookItem',JSON.stringify(bookArry))
        display(bookArry)
    }
    function update(Index){
        reblacedIndex=Index;
        bookName.value= bookArry[Index].bookMarkaName
        url.value = bookArry[Index].bookUrl
        // console.log(reblacedIndex);
        // console.log(Index);
        displayUpdate()

    }
    function displayUpdate(){
        document.getElementById('supbtn').classList.replace('d-block','d-none')
        document.getElementById('upbtn').classList.replace('d-none','d-block')
        // clear()

    }
    function displayUpdatehidden(){
        document.getElementById('supbtn').classList.replace('d-none','d-block')
        document.getElementById('upbtn').classList.replace('d-block','d-none')
clear()
    }
    function updatedElement(){
        // console.log('jjjj');
        var neweBookList={
            bookMarkaName:bookName.value,
            bookUrl:url.value
            }
            bookArry.splice(reblacedIndex,1,neweBookList)
            localStorage.setItem('bookItem',JSON.stringify(bookArry))
display(bookArry)
displayUpdatehidden()
    }
    function validoition(){
 var expression=
 /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
 console.log(expression.test(url.value));
 return expression.test(url.value);
    }