const downloadTxt = (filename, text) => {
    const txtFile = document.createElement('a');
    txtFile.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    txtFile.setAttribute('download', filename);
    txtFile.click();
};

const cellVal = (row, cell) => {
    return row.cells[cell].innerHTML;
};

document.getElementById("myBtn").addEventListener("click", () => {
    let exportFile = '';
    const myRows = document.getElementById("myTable").rows;

    for(let i = 1; i < myRows.length; i++){
        if(cellVal(myRows[i], 0).length > 0){
            let tempRow = '\nF';
            tempRow += cellVal(myRows[i], 0);
            tempRow += cellVal(myRows[i], 1).padStart(5, '0');
            tempRow += cellVal(myRows[i], 2).padStart(3, '0');
            tempRow += ' ';
            tempRow += parseInt(parseFloat(cellVal(myRows[i], 3)) * 100).toString().padStart(8, '0');
            tempRow += parseInt((parseFloat(cellVal(myRows[i], 3)) + parseFloat(cellVal(myRows[i], 4))) * 100).toString().padStart(8, '0');
            
            exportFile += tempRow;
        } else{
            break;
        };
    };

    downloadTxt(document.getElementById("fileName").value, exportFile.trim());
  });