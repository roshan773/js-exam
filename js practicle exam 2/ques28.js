function bookdetail(title, author, year){
    return{
        title: title,
        author: author,
        year: year
    };
}

const mybook = bookdetail("The Life", "Mr.Peter", 1925);
console.log(mybook)