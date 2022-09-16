//=================================================================
// 28/02/2012
// sr_SaveSpec
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;

var oSelection = app.activeDocument.selection;
var oCurrentDoc = app.activeDocument ;
var oCurrentDocPath = oCurrentDoc.path ;
var oCurrentLayer = oCurrentDoc.activeLayer ;
var oCompDoc = app.documents[0] ;

//delete extension in name
var oCurrentDocName= oCurrentDoc.name;
oCurrentDocName= oCurrentDocName.substr(0, oCurrentDocName.length -4);


// Hide top later if named Wire/wire/Wireframe/wireframe

oTopLayer = oCurrentDoc.artLayers[0];
oTopLayerVis = oTopLayer.visible
if (oTopLayer.name == "Wire" || oTopLayer.name == "Wireframe" || oTopLayer.name == "wireframe" || oTopLayer.name == "wire")
{	
	oTopLayer.visible = false
}


/*
// file output PNG OLD

var oOutputFile = new File( oCurrentDocPath + "/" + oCurrentDocName + "_Spec.png" )
var oPNGSaveOptions = new PNGSaveOptions()
oPNGSaveOptions.embedColorProfile = true;
app.activeDocument.saveAs(oOutputFile, oPNGSaveOptions , true,Extension.LOWERCASE)
*/


// file output JPG

var oOutputFile = new File( oCurrentDocPath + "/" + oCurrentDocName + "_Spec.jpg" )
var oJPEGSaveOptions = new JPEGSaveOptions();

oJPEGSaveOptions.embedColorProfile = true;
oJPEGSaveOptions.quality = 12;

app.activeDocument.saveAs(oOutputFile, oJPEGSaveOptions , true,Extension.LOWERCASE)

// Reset wireframe layer vis
if ( oTopLayerVis == true)
{
	oTopLayer.visible = true
}

// alert("Finished saving Spec:  " + oCurrentDocName + "_Spec.jpg" );
