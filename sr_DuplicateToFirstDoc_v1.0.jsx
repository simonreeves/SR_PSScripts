//=================================================================
// 08/03/2012
// sr_DuplicateToFirstDoc
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================


app.displayDialogs = DialogModes.NO;


var oSelection = app.activeDocument.selection;
var oCurrentDoc = app.activeDocument ;
var oCurrentLayer = oCurrentDoc.activeLayer ;
var oCompDoc = app.documents[0] ;


//duplicate current layer to the first opened document
oCurrentLayer.duplicate (oCompDoc, ElementPlacement.PLACEATBEGINNING);

//oCurrentDoc.close(SaveOptions.DONOTSAVECHANGES)