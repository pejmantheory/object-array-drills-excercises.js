////////////////////////////////////////////////
// Part 1: Working With Data Structures
////////////////////////////////////////////////

const album1 = {
  title: "Talking Heads: 77",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label:    "Sire",
    formats:  ["LP"]
  }
}  

// 1. Retrieve the string "Sire" from album1, and save it in a sensibly named
//    variable.
const label = album1.albumDetails.label;

// 2. Change the title of album1 from "Talking Heads" to "Talking Heads: 77"

// 3. Access album2's formats array and use an array method to add "LP" to
//    album3's formats
// Check out the Array.push method!
const album2 = {
  title: "More Songs About Buildings and Food",
  albumDetails: {
    released: new Date("July 14, 1978"),
    label:    "Sire",
    formats:  ["LP", "8-track"]
  }
};

const album3 = {
  title: "Fear of Music",
  albumDetails: {
    released: new Date("August 3, 1979"),
    label:    "Sire",
    formats:  []
  }
};

album2.albumDetails.formats.push("LP"); // add "LP" to album2's formats array
album3.albumDetails.formats.push(...album2.albumDetails.formats); // add album2's formats to album3's formats array

console.log(album3.albumDetails.formats); // Output: ["LP", "8-track"]


// 4. Change the release date of album3 from a string into a Date object
// Look ahead to album4 for a clue!

// const album3 = {
  // title: "Fear of Music",
  // albumDetails: {
    // released: new Date("August 3, 1979"),
    // label:    "Sire",
    // formats:  ["Cassette"]
  // }
// } 

// 5. Add the label "Sire" to album4's details
const album4 = {
  title: "Remain in Light",
  albumDetails: {
    released: new Date("October 8, 1980"),
    formats: ["Cassette", "LP"]
  }
};

album4.albumDetails.label = "Sire";

console.log(album4.albumDetails); // Output: { released: ..., formats: [...], label: "Sire" }


// 6. Add a 'formats' array to album 5 and add "CD", "Cassette", and "LP"
const album5 = {
  title: "Speaking in Tongues",
  albumDetails: {
    released: new Date("May 31, 1983"),
    label:    "Sire",
    formats:  ["CD", "Cassette", "LP"]
  }
};

console.log(album5.albumDetails.formats); // Output: ["CD", "Cassette", "LP"]

// 7. Make the label "emi" in album6 all uppercase
// google how to make a string uppercase in js!
const album6 = {
  title: "Little Creatures",
  albumDetails: {
    released: new Date("June 10, 1985"),
    labels:   ["Sire", "emi"],
    formats:  ["CD", "cassette", "LP"]
  }
};

album6.albumDetails.labels[1] = album6.albumDetails.labels[1].toUpperCase();

console.log(album6.albumDetails.labels); // Output: ["Sire", "EMI"]


// 8. Convert album7's 'labels' property from the string value
//    "Sire, EMI" into the array: ["Sire", "EMI"]
// google js array split!
const album7 = {
  title: "True Stories",
  albumDetails: {
    released: new Date("October 7, 1986"),
    labels:   "Sire, EMI",
    formats:  ["CD", "cassette", "LP"]
  }
};

album7.albumDetails.labels = album7.albumDetails.labels.split(", ");

console.log(album7.albumDetails.labels); // Output: ["Sire", "EMI"]


/////////////////////////////////////////////////////
// Part 2: More Tasks About Datatypes and Structures
/////////////////////////////////////////////////////

// 1. Create an object literal called `band`.
const band = {
  name: "Talking Heads",
  activeFrom: new Date("1975"),
  activeTo: new Date("1991"),
  albums: talkingHeadsAlbums
};

console.log(band);

// 2. Give it the property `name` and set it to "Talking Heads"

// const band = {
  // name: "Talking Heads",
  // activeFrom: new Date("1975"),
  // activeTo: new Date("1991"),
  // albums: talkingHeadsAlbums
// };
// console.log(band);


// 3. Give it the property `members` and set it to an array with a single
//    string, "David Byrne", in it.
// const band = {
  // name: "Talking Heads",
  // members: ["David Byrne"],
  // activeFrom: new Date("1975"),
  // activeTo: new Date("1991"),
  // albums: talkingHeadsAlbums
// };
// console.log(band);


// 4. Give it the property `albums` and set it to the array stored in the
//    variable talkingHeadsAlbums
// const band = {
  // name: "Talking Heads",
  // members: ["David Byrne"],
  // albums: talkingHeadsAlbums,
  // activeFrom: new Date("1975"),
  // activeTo: new Date("1991")
// };
// console.log(band);

// 5. Add "Tiny Weymouth", "Chris Franz" and "Jerry Harrison" to the members
//    array.
// const band = {
  // name: "Talking Heads",
  // members: ["David Byrne", "Tina Weymouth", "Chris Franz", // "Jerry Harrison"],
  // albums: talkingHeadsAlbums,
  // activeFrom: new Date("1975"),
  // activeTo: new Date("1991")
// };
// console.log(band);

////////////////////////////////////////////////
// Part 3: Conditional Logic
////////////////////////////////////////////////

// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.


if (talkingHeadsAlbums.length >= 6) {
  console.log("Talking Heads were a prolific band");
} else {
  console.log("Talking heads didn't have much output.");
}

// const album1 = new TalkingHeadsAlbum("Talking Heads: 77", "September 16, 1977", "Sire", ["CD", "cassette", "LP"]);
// const album2 = new TalkingHeadsAlbum("More Songs About Buildings and Food", "July 14, 1978", "Sire", ["LP", "8-track"]);
// const album3 = new TalkingHeadsAlbum("Fear of Music", "August 3, 1979", "Sire", ["CD", "cassette", "LP"]);
// const album4 = new TalkingHeadsAlbum("Remain in Light", "October 8, 1980", null, ["Cassette", "LP"]);
// const album5 = new TalkingHeadsAlbum("Speaking in Tongues", "May 31, 1983", "Sire", ["CD", "Cassette", "LP"]);
// const album6 = new TalkingHeadsAlbum("Little Creatures", "June 10, 1985", ["Sire", "EMI"], ["CD", "cassette", "LP"]);
// const album7 = new TalkingHeadsAlbum("True Stories", "October 7, 1986", ["Sire", "EMI"], ["CD", "cassette", "LP"]);
// const album8 = new TalkingHeadsAlbum("Naked", "March 15, 1988", ["Sire", "EMI"], ["CD", "cassette", "LP"]);

// 1. Write a conditional to console.log "Talking Heads were a prolific band"
//    if the Talking Heads have 6 albums or more. Otherwise, console.log
//    "Talking heads didn't have much output." Use the array of albums
//    talkingHeadsAlbums above.

const talkingHeads77 = {
  title: "Talking Heads: 77",
  albumDetails: {
    released: new Date("September 16, 1977"),
    label: "Sire",
    formats: ["LP", "cassette", "8-track"],
    producers: ["Tony Bongiovi", " Lance Quinn"],
    singles: ["Uh-Oh, Love Comes to Town", "Psycho Killer"]
  }
}

// 2. Write a conditional to check if the number of albums in
//    talkingHeadsAlbums is odd or even, and then console.log
//    "The number X is odd" or "The number X is even" with X being
//    the number of albums.
if (talkingHeadsAlbums.length % 2 === 0) {
  console.log("The number " + talkingHeadsAlbums.length + " is even");
} else {
  console.log("The number " + talkingHeadsAlbums.length + " is odd");
}

// 3. Write conditionals to check if the number of albums in
//    talkingHeadsAlbums is divisible by either 2 or 3, and then
//    console.log one of:
//    - "The number Y is divisible by 2",
//    - "The number Y is divisible by 3",
//    - "The number Y is divisible by 2 and 3", or
//    - "The number Y is not divisible by 2 or 3",
//
//    with Y being the number of albums.

const talkingHeadsAlbums = []; // replace this with your array of albums

const numAlbums = talkingHeadsAlbums.length;

if (numAlbums === 0) {
  console.log("There are no albums!");
} else if (numAlbums % 2 === 0 && numAlbums % 3 === 0) {
  console.log("The number " + numAlbums + " is divisible by 2 and 3");
} else if (numAlbums % 2 === 0) {
  console.log("The number " + numAlbums + " is divisible by 2");
} else if (numAlbums % 3 === 0) {
  console.log("The number " + numAlbums + " is divisible by 3");
} else {
  console.log("The number " + numAlbums + " is not divisible by 2 or 3");
}


// 4. Check your logic above against the numbers: 0, 1, 2, 6, 7, and 9.
//    Make sure it always works!




/////////////////////////////////////////////////////
// Part 4: For Loops
/////////////////////////////////////////////////////

// 1. Use a for loop to print out the name of each Talking Heads album
// const talkingHeadsAlbums = ["Talking Heads: 77", "More Songs About Buildings and Food", "Fear of Music", "Remain in Light", "Speaking in Tongues", "Little

// 2. Create a variable called `sireTally`, and set it to the integer value 0.
//    Then use a for-loop to go through all the Talking Heads albums,
//    incrementing sireTally if the album was released under the "Sire" label.
//
//    Warning: some albums have a property `.label`, which is a string, and some
//    have `.labels`, which is an Array!

let sireTally = 0;

for (let i = 0; i < talkingHeadsAlbums.length; i++) {
  const album = talkingHeadsAlbums[i];
  
  if (album.label === 'Sire' || (Array.isArray(album.labels) && album.labels.includes('Sire'))) {
    sireTally++;
  }
}

console.log(sireTally); // This will output the total number of albums released under the "Sire" label.







