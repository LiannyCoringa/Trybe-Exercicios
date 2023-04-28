const techList = (array, string) => {
    if (array.length === 0) {
        return 'Vazio!';
    } else if (array.length > 0) {
        let arrayOrder = array.sort();
        let objeto = [];
        for (let index = 0; index < arrayOrder.length; index += 1) {
        objeto.push({
            tech: arrayOrder[index],
            name: string
        })
    } return objeto;
    }
}
// {
//     tech: 'nomeTecnologia',
//     name: name,
//   }

  module.exports = techList;