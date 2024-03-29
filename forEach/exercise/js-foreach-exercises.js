/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a 
* new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

function doubleValues(arr){
   //Your Code Here
   var result = [];
   // arr.forEach(function(index){
   // 		result.push(index*2);
   //});
   arr.forEach(element=>{
      result.push(element*2)
   });
   return result;
}
console.log(doubleValues([1,2,3]));
document.write(doubleValues([5,1,2,3,10]), "<br/>");

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a 
* new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

function onlyEvenValues(arr){
    //Your Code Here
    var result = [];
    // arr.forEach(function(index){
    // 	if(index%2 == 0){
    // 		result.push(index);
    // 	}
    // });
    arr.forEach(element=>{
      if(element%2==0){
        result.push(element);
      };
    });
    return result;
}
console.log(onlyEvenValues([1,2,3]));
document.write(onlyEvenValues([5,1,2,3,10]), "<br/>");

/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and 
* returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/

function showFirstAndLast(arr){
   //Your Code Here
   var result = [];
   var str;
   // arr.forEach(function(index){
   // 		str = index.split("");
   // 		str = str[0]+str[str.length-1];
   //  	result.push(str);
   // });
   arr.forEach(element=>{
    str = element.split("");
    str = str[0]+str[str.length-1];
    result.push(str);
   });
   return result;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
document.write(showFirstAndLast(['hi', 'goodbye', 'smile']), "<br/>");

/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, 
* and a value and returns the array passed to the function with the new key and 
* value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(arr,key,value){
    //Your Code Here
    // arr.forEach(function(index){
    // 	index[key] = value;
    // });
    arr.forEach(element=>{
      element[key]=value;
    });
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
document.write(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'), "<br/>");

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object 
* with the keys as the vowel and the values as the number of times the vowel 
* appears in the string. This function should be case insensitive so a lowercase 
* letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

// function vowelCount(str){
//   //Your Code Here
//   var vowels = ["a", "e", "i", "u", "o"];
//   var obj = {};
//   str = str.toLowerCase();
//   str = str.split("");
//   vowels.forEach(function(vowel){
//   	// obj[vowel] = 0;
//     var count = 0;
//   	str.forEach(function(character){
//   		if(character == vowel){
//         count++;
//   			obj[vowel] = count;
//   		};
//   	});
//   	// if(obj[vowel] == 0){
//   	// 	delete obj[vowel];
//   	// };
//   });
//   return obj;
// }

function vowelCount(str){
  //Your Code Here
  var vowels = ["a", "e", "i", "u", "o"];
  var obj = {};
  str = str.toLowerCase().split("");
  vowels.forEach(vowel=>{
    var count = 0;
    str.forEach(character=>{
      if(character === vowel){
        obj[vowel] = ++count;
      };
    });
  });
  return obj;
}


console.log(vowelCount('Elie'));
document.write(vowelCount('Tim'), "<br/>");
console.log(vowelCount('Matt'));
document.write(vowelCount('hmmm'), "<br/>");
console.log(vowelCount('I Am awesome and so are you'));