
// "Problem 1:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"




let str = "abcadeecfb";
let N = str.length;
let s = new Set(str);
let str2 = [...s].sort().join('');
console.log(str2);


// "Problem 2:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"


let str1 = "abcadeecfb";
let N1 = str1.length;
let arr = str1.split("");
let f = new Map()
for(let i = 0; i < arr.length; i++){
    if(f.has(arr[i]) == true){
        let val = f.get(arr[i])
        f.set(arr[i] , val+1);
    }
    else{
        f.set(arr[i] , 1)
    }
}
for(let i of f){
    console.log(i[0] + "=" + i[1]);
}