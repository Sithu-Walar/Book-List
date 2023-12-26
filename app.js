class Book{
    constructor(name,author,ibsn){
        this.name = name;
        this.author = author;
        this.ibsn = ibsn;
    }
}

class UI {
    static displayStoredBook(){
        const storedBook = [
        {
            name : 'War and Peace',
            author: 'Charles Dicken',
            ibsn: 1234134
        },
        {
            name : 'The Root',
            author: 'Smith',
            ibsn: 233423
        }
        ]
        const books = storedBook;
        books.map(book=> UI.addBookToList(book))


    }

    static addBookToList(book){
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.ibsn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete ">X</a></td>
        `

        list.appendChild(row)
    
    }
    static clearInput(){
    document.getElementById('name').value = '';
   document.getElementById('author').value = '';
    document.getElementById('ibsn').value = '';

    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
    
}

document.addEventListener('DOMContentLoaded',UI.displayStoredBook)


document.querySelector('#book-form').addEventListener('submit', e =>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const ibsn = document.getElementById('ibsn').value;

    if(name == ''|| author ==''|| ibsn == ''){
        alert('fill in all fields')
    }else {
        const book = new Book(name,author,ibsn);
        console.log(book)
        UI.addBookToList(book)
    }
    
    UI.clearInput();
})

document.querySelector('#book-list').addEventListener('click', e => {
    console.log(e.target)
    UI.deleteBook(e.target)
})