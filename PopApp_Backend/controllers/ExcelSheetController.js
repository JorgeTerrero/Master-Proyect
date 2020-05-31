const sheet = {};
const path = require('path');
const XLSX = require('xlsx');
const buqueModel = require('../models/buque');
const cargaModel = require('../models/carga');
const companyModel = require('../models/company');
const contenedorModel = require('../models/contenedor');
const productModel = require('../models/producto');



sheet.ReadExcelSheet = async (req , res) =>{
      try {
         //const file = req.file;
         //const _path = path.join(__dirname , file.name)

         const body = req.body;
         const name = body.name;
         const opt = body.option;
         const excel = XLSX.readFile(name);
         const sheetName = excel.SheetNames;
         const data = XLSX.utils.sheet_to_json(excel.Sheets[sheetName[0]]);
          
        
         switch(opt){
             case "BUQUE":{
                 for( let i =0 ; i < data.length ; i++){
                     const buque  = new buqueModel(data[i]);
                     await buque.save();
                 }
             }break;
             case "CARGA":{
                
                for( let i =0 ; i < data.length ; i++){
                    const carga  = new cargaModel(data[i]);
                    await carga.save();
                }

             }break;
             case "Company":{

                for( let i =0 ; i < data.length ; i++){
                    const company  = new companyModel(data[i]);
                    await company.save();
                }
             }break;
             case "CONTENEDOR":{
                
                for( let i =0 ; i < data.length ; i++){
                    const contenedor  = new contenedorModel(data[i]);
                    await contenedor.save();
                }

             }break;
             case "PRODUCT":{

                for( let i =0 ; i < data.length ; i++){
                    const product  = new productModel(data[i]);
                    await product.save();
                }

             }break;
             default:{
                 console.log('La opcion no existe')
             }
         }

      res.json({
            ok: true,
            message: 'Carga Complet'
        });
        
          
      } catch (err) {
          res.status(400).json({
              ok: false ,
               err
          });
      }
};



module.exports = sheet;