/**
 * 活动交通工具项
 */
function ActivityVchicleEntry() {
    
  this.sid = null;  //唯一标识
  this.accountSID = null;  //账户标识
  this.accountObj = null;  //账户对象
  this.vchicleSID = null;  //交通工具标识
  this.vchicleObj = null;  //交通工具对象
  this.passengerSIDs = new Array();  //乘客标识集合
  this.passengerObjs = new AccountMap();  //乘客对象集合
  this.activityVchicleSID = null;  //活动交通工具标识
  this.activityVchicleObj = null;  //活动交通工具对象

  this.addPassenger = function (passenger) {

  }
}


function ActivityVchicleEntryMap() {

}