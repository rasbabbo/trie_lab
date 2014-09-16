Trie  = function () {
  this.characters = {};
};


Trie.prototype.learn = function(word, index){
    if(index === undefined){
      index=0;
    }
    if(index<word.length){
      var letter=word[index];
      if(this.characters[letter]===undefined){
        //create new Trie
        this.characters[letter]= new Trie();
      }
      //move on through new or existing Trie
      index++;
      this.characters[letter].learn(word,index);

    } else {
      this.isWord=true;
    }
  };

  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.


Trie.prototype.getWords = function(words, currentWord){

  var words = words || [];
  var currentWord = currentWord || "";

  if(this.isWord){
    words.push(currentWord);
  }

  for (var letter in this.characters) {
    this.characters[letter].getWords(words, currentWord + letter);
  }
  return words;
  };




  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.


Trie.prototype.find = function(word, index){

var letter = word[index];
  if (index === undefined){
  index = 0;
  }

// this.learn(word, index);

  if (index < word.length -1) {
// test for presence of letter in trie
    if (this.characters[letter] === undefined) {
// word not in tree
      return false;
    } else {
// move on through Trie, searching
    index++;
    this.find(word, index);
  }

} else if (index === word.length - 1) {
// by the index & word.length you know you are
// at the end of the word you are looking for

if (this.characters[letter].isWord === true) {
// this is already a learned word
// return it
return this.characters[letter];
} else {
// YES ADD ISWORD = TRUE
// return it

// if not already learned as a word, learn it?
// indicate it is a full word rather than just characters that are present?
// "learn" the world by adding isWord = true?
}

} else {
// error
return false;
}

// This function will return the node in the trie
// which corresponds to the end of the passed in word.

// Be sure to consider what happens if the word is not in this Trie.
};
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.




Trie.prototype.autoComplete = function(prefix){
  var  subTrie = this.find(prefix);
   if (subTrie) {
    return subTrie.getWords([], prefix);
  } else {
    return [];
  }
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};

try{
  module.exports = Trie;
} catch(e){

}