/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */



function diffArray(arr1, arr2) {

    var newArr = [];

    function findDifferences(first, second) {
        
        for (var i = 0; i < first.length; i++) {
            
            if (second.indexOf(first[i]) === -1) {
                
                newArr.push(first[i]);
                
            }
        }
    };
    
    findDifferences(arr1, arr2);

    findDifferences(arr2, arr1);
    
    return newArr;

};





