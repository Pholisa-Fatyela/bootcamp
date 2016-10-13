


You can use objects and lists together to group data.

 say your friend is playing WordCrush and needs help with this challenge.

`Find the letter that the most words in a sentence ends with and all the words that ends with that letter`

Example sentence:

```javascript
var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
```

The algorithm for this challenge looks like this:

* loop through all the words;
* get the letter the current word is ending with;
* keep track of how many words are ending with this letter in a list;
* once you looped through all the words check for which letter you have the most words;
* that will be the letter the most words ends in.

The challenge with this is that you need to keep a list variable for each letter, but you don't know in advance how many variables you would need. This is where using an object as a Map object works great.

You start of with an empty Object and as you loop through the words you check if there is an entry in the Object for the letter (called a key) in the Object. If not you add an empty list for the letter.

```javascript

//the empty object
var letterMap = {};
//use the sentence declared above
var words = sentence.split(' ');

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    //find the last letter
    var lastLetter = word[word.length - 1];
    //if there is no entry for the last word in the list add one
    if (!words[lastLetter] === undefined){
        letterMap[lastLetter] = [];
    }
    //push the word into the Obejct/Map
    letterMap[lastLetter].push(word);
}

//the letter map will contain all the letter word ends with with a list of words for each
console.log(letterMap);

```
