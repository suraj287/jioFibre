let selectedFile;



document.getElementById('input').addEventListener('change',(event)=>{
     selectedFile=event.target.files[0];
});

document.getElementById('button').addEventListener('click',(event)=>{

    if(selectedFile)
    {
        let fileReader=new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload=(event)=>{
            let data=event.target.result;
            let wb=XLSX.read(data,{type:'binary'});
            wb.SheetNames.forEach(sheet => {
                let rowObject=XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet]);

                document.getElementById('jsondata').innerHTML=JSON.stringify(rowObject,undefined,4);
                
            });
        }
    }

})