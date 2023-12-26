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
        books.map((book)=>{
            const list = document.getElementById('book-list')
            const row = document.createElement('tr')

            row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.ibsn}</td>
            <td><a href="" class="btn btn-danger btn-sm delete ">X</a></td>
            `

            list.appendChild(row)
        
        })


    }
}

document.addEventListener('DOMContentLoaded',UI.displayStoredBook)