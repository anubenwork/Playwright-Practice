const ExcelJS = require('exceljs');

//Install exceljs using command "npm install exceljs"
async function writeExcelFileTest(searchValue,replaceText,filePath) {
    // Create a new workbook and add a worksheet
    
    const workbook = new ExcelJS.Workbook(); //ExcelJS derived from exceljs installation.
    await workbook.xlsx.readFile(filePath) //build in function - readFile(build in parameter -filepath)
    const worksheet = workbook.getWorksheet('LoginPage'); //sheetname - LoginPage
    const output = await readExcelFile(worksheet,searchValue);

    const cell = worksheet.getCell(output.row, output.col); // Get the cell at row 2, column 2 (B2) // getCell() - built in
    cell.value = replaceText; // Update the cell value
    await workbook.xlsx.writeFile(filePath);

}

async function readExcelFile(worksheet,searchValue) {
    let output = {row:-1, col:-1}; //Dictionary - key:value pair
     worksheet.eachRow((row, rowNumber) => {  //syntax to read each row
        row.eachCell((cell, colNumber) => { //syntax to read each column
            //console.log(cell.value); -- To print all cell values
            if (cell.value === searchValue) { // ===  means checks value and memory allocation at a time
               // console.log(`Row ${rowNumber} Cell ${colNumber} = ${cell.value}`);
                output.row = rowNumber; //rewrite the output dictionary 
                output.col = colNumber; //rewrite the output dictionary
             
                
            }
        })
    })
    return output;
}

writeExcelFileTest("user","username","C:/Users/anube/Downloads/Test.xlsx"); //parameters for writeExcelFile - value,replace-text,path of the file