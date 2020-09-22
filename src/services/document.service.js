const { between } = require("sequelize");
//import { where } from "sequelize";
const { Op } = require("sequelize");
const db = require("../models");
const UserLog = db.userLog;

exports.userLogfindAll = async () => {
  const data = await UserLog.findAll();
  return createDocumenDefinition('Bitacora de todos los usuarios',data);
};

exports.userLogfilterByUser = async (username) => {
  const data = await UserLog.findAll({where :{username}});
  return createDocumenDefinition('Bitacora de todos los usuarios filtrada por usuario',data);
};

exports.userLogfilterByDate = async (dateStart,dateStop) => {
  const data = await  UserLog.findAll({
    where: {
      date : {
        [Op.between] : [dateStart,dateStop]
      }
    }
  });
  return createDocumenDefinition('Bitacora de todos los usuarios filtrada por fecha',data);
};
exports.userLogfilterByDateUser = async (username,dateStart,dateStop) => {
  const data = await  UserLog.findAll({
    where: {
      date : {
        username,
        [Op.between] : [dateStart,dateStop]
      }
    }
  });
  return createDocumenDefinition('Bitacora de todos los usuarios filtrada por fecha y usuario',data);
};
const top = [{text: 'Usuario', style: 'tableHeader'}, {text: 'Accion', style: 'tableHeader'}, {text: 'Fecha', style: 'tableHeader'},{text: 'Hora', style: 'tableHeader'}];
function createDocumenDefinition(subHeader,array){
  return {
    content: [
      {text: 'Bitacora', style: 'header'},
      {text: subHeader, style: 'subheader'},
      {
          table: {
          widths: ['*', '*', '*', '*'],
            body: fillBody(array)
          }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    },    
  }
}
function fillBody(arr){
  let body = [];
    body.push(top);
    arr.forEach((value)=>{
      let d = value.date.toJSON()
      let date = d.substring(0,d.indexOf("T"));
      let time = d.substring(d.indexOf("T")+1,d.length -5);
       body.push([value.username,value.action,date,time]); 
    });
    return body;
}