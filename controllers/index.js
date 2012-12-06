function showItems(e) {  
    Ti.API.info(e.rowData.itemName);
    var payload={
    	rowId:e.rowData.rowId,
		itemName:e.rowData.itemName
    }
    var w=Alloy.createController('detailwin',payload).getView();
    w.open();
}

var rowData=[];
for(var i=1;i<=10;i++){
	var payload={
		rowId:i,
		itemName:'Test' + i
	}
	var row=Alloy.createController('row',payload).getView();
	rowData.push(row);
}
$.itemsList.data=rowData;


$.win.open();
