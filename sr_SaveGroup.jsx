//=================================================================
// 28/03/2013
// sr_SaveGroup
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;

var oSelection = app.activeDocument.selection;
var oCurrentDoc = app.activeDocument ;
var oCurrentDocPath = oCurrentDoc.path ;
var oCurrentLayer = oCurrentDoc.activeLayer ;
var oCompDoc = app.documents[0];

// Delete extension in name
oCurrentDocName = oCurrentDoc.name;
oCurrentDocName = oCurrentDocName.substr(0, oCurrentDocName.length -4);

// Check if there are any layers
if (oCurrentDoc.artLayers.length > 0) {
    // Hide top later if named Wire/wire/Wireframe/wireframe
    oTopLayer = oCurrentDoc.artLayers[0];
    oTopLayerVis = oTopLayer.visible
    if (oTopLayer.name == "Wire" || oTopLayer.name == "Wireframe" || oTopLayer.name == "wireframe" || oTopLayer.name == "wire") {	
        oTopLayer.visible = false
    }
}

if(oCurrentLayer.typename == "LayerSet") {
	// File output JPG
	oOutputFile = new File( oCurrentDocPath + "/" + oCurrentDocName + "_" + oCurrentLayer.name + ".jpg" )
	oJPEGSaveOptions = new JPEGSaveOptions();

	oJPEGSaveOptions.embedColorProfile = true;
	oJPEGSaveOptions.quality = 12;

	app.activeDocument.saveAs(oOutputFile, oJPEGSaveOptions , true,Extension.LOWERCASE)
}
else {
	alert("Save group only works with a group selected")
}

if (oCurrentDoc.artLayers.length > 0 ) {
// Reset wireframe layer vis
    if ( oTopLayerVis == true)
    {
        oTopLayer.visible = true
    }
}