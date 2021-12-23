/**
 * 
 * retorna o index do valor da Array
 * @param {*} array coloca o array
 * @param {*} procurado o valor do indeice que quer achar
 * @returns {*} retorna (int) se achar uma ocorrencia || Array se achar mais de uma)
 */
function IndexOfArray(array, procurado) {
    var indices = new Array();
    for (let index = 0; index < array.length; index++) {
        if (array[index] == procurado) {
            indices.push(index);
        }
    }
    if (indices.length == 1) {
        return parseInt(indices);
    } else {
        return indices;
    }
}