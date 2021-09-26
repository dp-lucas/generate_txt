const downloadTxt = (filename, text) => {
    const txtFile = document.createElement('a');
    txtFile.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    txtFile.setAttribute('download', filename);
    txtFile.click();
};

const cellVal = (row, cell) => {
    return row.cells[cell].getElementsByTagName('input')[0].value;
};

document.getElementById("myBtn").addEventListener("click", () => {
    let exportFile = '';
    const myRows = document.getElementById("myTable").rows;

    for(let i = 1; i < myRows.length; i++){
        if(cellVal(myRows[i], 1).length > 0){
            let tempRow = '\nF';
            tempRow += cellVal(myRows[i], 1); // Fecha
            tempRow += cellVal(myRows[i], 2).padStart(5, '0'); // Punto de venta
            tempRow += cellVal(myRows[i], 3); // Letra de Factura
            tempRow += cellVal(myRows[i], 4).padStart(8, '0'); // Numero de factura
            tempRow += '  0000000000000000';
            tempRow += parseInt(parseFloat(cellVal(myRows[i], 5)) * 100).toString().padStart(16, '0'); // Subtotal
            tempRow += parseInt((parseFloat(cellVal(myRows[i], 6)) + parseFloat(cellVal(myRows[i], 7))) * 100).toString().padStart(16, '0'); // Numero de percepciones
            
            exportFile += tempRow;
        } else{
            break;
        };
    };

    downloadTxt(document.getElementById("fileName").value, exportFile.trim());
  });
