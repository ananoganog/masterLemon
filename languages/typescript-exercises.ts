//4 . READBOOKS

interface Book {
    title: string;
    isRead: boolean;
}
interface IsBookRead {
    (someBooks: Array<Book>, someTitle: string): boolean;
}
const getTitle = function(book: Book): string {
    return book.title;
}
const getRead = function(book: Book): boolean {
    return book.isRead;
}
const reducerIsSomeRead = function(bool1: boolean, book: Book): boolean{
    return bool1 || getRead(book);
}
const isBookRead: IsBookRead = function(someBooks, someTitle) {
    return someBooks.filter( obj => getTitle(obj) === someTitle).reduce(reducerIsSomeRead, false);
}
const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false


//5. SLOTMACHINE
class SlothMachine {
    private coins: number;

    constructor() {
        this.coins = 0;
    }
    play(): void {
        this.incrementCoins();
        this.showCoins();
        const elem1 = Math.random() >= 0.5;
        const elem2 = Math.random() >= 0.5;
        const elem3 = Math.random() >= 0.5;
        console.log(`Play round: ${elem1} ${elem2} ${elem3} `);
        if (true === elem1 && elem1 === elem2 && elem2 === elem3) {
            console.log(`Congratulations!!!. You won ${this.coins} coin` + (this.coins == 1 ? `` : `s`) + `!!`);
            this.updateCoins(0);
        } else {
            console.log("Good luck next time!!");
        }
    }
    showCoins(): void {
        console.log(`I have ${this.coins} coin` + (this.coins == 1 ? `` : `s`) + `.`);
    }
    getCoins(): number {
        return this.coins
    }
    updateCoins(coins: number): void {
        this.coins = coins;
    }
    incrementCoins(): void {
        this.coins += 1;
    }
}
const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 