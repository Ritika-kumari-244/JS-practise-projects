function generate(){
 let quotes ={
    "— Oscar Wilde" : '"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom."',"— Lilly Pulitzer" : '"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."'," — Anne Lamott" :'"Time you enjoy wasting is not wasted time." '

}

let authors = Object.keys(quotes);

let author = authors[Math.floor(Math.random() * authors.length)]

let quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;

}
