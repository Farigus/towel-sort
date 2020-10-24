// You should implement your task here.

module.exports = function towelSort(matrix) {



    if (typeof matrix !== 'object' || matrix == [] || matrix.length == 0) {

        return [];
    }


    let newArray = [];

    for (let i = 0; i < matrix.length; i++) {

        if (i % 2 === 0) {

            newArray = newArray.concat(matrix[i]);

        } else {

            newArray = newArray.concat(matrix[i].reverse());


        }





    }


    return newArray;

}