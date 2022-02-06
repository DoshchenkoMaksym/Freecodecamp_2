/* You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. */

function destroyer1(arr) {
    
    let dataForDelete = Object.values(arguments).slice(1);

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < dataForDelete.length; j++) {

            if (arr[i] === dataForDelete[j]) {

                delete arr[i];
            }
        }

    };

    return arr.filter(item => item !== null);
};


function destroyer2(arr, ...removeData) {

    return arr.filter( item => !removeData.includes(item));

};

destroyer1([1, 2, 3, 1, 2, 3], 2, 3);