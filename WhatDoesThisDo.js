/*
What is the output of the following code?
*/

const HashMap = require('./HashMap');

const WhatDoesThisDo = function(){
  // declares two string variables with the same values
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';

  // creates new HashMap
  let map1 = new HashMap();

  /*sets the hash table: 
  [
    {key: 'Hello World', value: 10}, 
    {key: 'Hello World', value: 20}
  ]
  */
  map1.set(str1,10);
  map1.set(str2,20);

  // creates second HashMap
  let map2 = new HashMap();

  // two new variables with the values of str1 and str2
  let str3 = str1;
  let str4 = str2;

  // second HashMap created, sets the hash table to:
  /*
  [
    {key: 'Hello World', value: 20}, 
    {key: 'Hello World', value: 10}
  ]
  */
  map2.set(str3,20);
  map2.set(str4,10);

  // 10
  console.log(map1.get(str1));
  // 10
  console.log(map2.get(str3));
}

WhatDoesThisDo();