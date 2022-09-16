//=================================================================
// 08/03/2012
// sr_RenameLayerToDoc
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;


oCurrentDoc = app.activeDocument ;
oCurrentLayer = oCurrentDoc.activeLayer ;


oCurrentDocName = oCurrentDoc.name;
// Remove Extension
oDocNameNoExt = oCurrentDocName.substr(0, oCurrentDocName.length - 4);
oCurrentLayer.name = oDocNameNoExt ;