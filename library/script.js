// Book class
class Book {
    constructor(title, author, category, read = false) {
        this.id = Date.now(); // Unique ID based on timestamp
        this.title = title;
        this.author = author;
        this.category = category;
        this.read = read;
    }
}

// Library management
class Library {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('books')) || [];
    }

    addBook(book) {
        this.books.push(book);
        this.saveBooks();
    }

    toggleRead(id) {
        const book = this.books.find(b => b.id === id);
        if (book) {
            book.read = !book.read;
            this.saveBooks();
        }
    }

    deleteBook(id) {
        this.books = this.books.filter(b => b.id !== id);
        this.saveBooks();
    }

    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    getBooks(searchTerm = '', category = 'All') {
        let filteredBooks = this.books;
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filteredBooks = filteredBooks.filter(book => 
                book.title.toLowerCase().includes(term) || 
                book.author.toLowerCase().includes(term)
            );
        }

        if (category !== 'All') {
            filteredBooks = filteredBooks.filter(book => book.category === category);
        }

        return filteredBooks;
    }
}

// DOM Elements
const bookForm = document.getElementById('bookForm');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');
const bookContainer = document.getElementById('bookContainer');

const library = new Library();

// Render books
function renderBooks() {
    const searchTerm = searchInput.value.trim();
    const category = filterCategory.value;
    const books = library.getBooks(searchTerm, category);

    bookContainer.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        if (book.read) card.classList.add('read');

        card.innerHTML = `
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
            </div>
            <div class="book-actions">
                <button class="toggle-read" data-id="${book.id}">
                    ${book.read ? 'Mark Unread' : 'Mark Read'}
                </button>
                <button class="delete-book" data-id="${book.id}">Delete</button>
            </div>
        `;

        bookContainer.appendChild(card);
    });
}

// Event Listeners
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const category = document.getElementById('category').value;

    if (title && author && category) {
        const book = new Book(title, author, category);
        library.addBook(book);
        renderBooks();
        bookForm.reset();
    }
});

searchInput.addEventListener('input', renderBooks);
filterCategory.addEventListener('change', renderBooks);

bookContainer.addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (e.target.classList.contains('toggle-read')) {
        library.toggleRead(id);
        renderBooks();
    } else if (e.target.classList.contains('delete-book')) {
        library.deleteBook(id);
        renderBooks();
    }
});

// Initial render
renderBooks();