function hasTargetSum(array, target) {
  // Write your algorithm here
  // Initial position of the array.
  for (let i=0;i<array.length;i++){
    // Compare the position with the rest of the positions
    for (let j=i+1;j<array.length;j++){
      if(array[i] + array[j] === target){ //return true
        return true
      }
    } 
  }
  return false


}

/* 
  Write the Big O time complexity of your function here
  Steps: 2, Big ) time Complexity is O(n^2)
*/

/* 
  Add your pseudocode here
  Grab an initial position of the array, and another position that is not the initial position.
  Compare each item of the array to the others.
    If the two add up to the target, return true.
    Else return false.
*/

/*
  Add written explanation of your solution here
The function takes two parameters, an array and a target number
Return true if the any two numbers in the array add up to target.
Or else return false.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
