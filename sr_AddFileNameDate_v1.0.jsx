//=================================================================
//	02/04/2013
// 	sr_AddFileName
// 	www.simonreeves.com 
// 	simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;

// var Start =prompt("Layer Name","","Input Layer Name");

// User Variables
oPrefixText = " "
oTextMargin = 0.95
oFontScale = 0.03
oLogoFilePath = "/Z/BankAffairs/Marketing/Logos/720watermark.psd"
oDateInUse = false
oExtInUse = false

// PS Defaults
oSelection = app.activeDocument.selection;
oCurrentDoc = app.activeDocument ;
oCurrentDocPath = oCurrentDoc.path ;
oCurrentLayer = oCurrentDoc.activeLayer ;
oLayerComps = app.activeDocument.layerComps ;
oCurrentDocName= oCurrentDoc.name;
oCurrentDocNameNoExt= oCurrentDocName.substr(0, oCurrentDocName.length -4);
doc = app.activeDocument;
file = new File(doc.fullName.fsName);
Contents = file.modified;
var startRulerUnits = preferences.rulerUnits
app.preferences.rulerUnits = Units.PIXELS
var res =doc.resolution;

// resize it to 300 dpi 
doc.resizeImage(undefined, undefined, 300, ResampleMethod.NONE);

// Find the longest edge width or height
if (doc.width > doc.height)
{
	oLongestEdge = doc.width
}
else
{
	oLongestEdge = doc.height
}
oFontSize = oLongestEdge * (oFontScale/10);

oFontName = "Helvetica"; // NB: must be postscript name of font!
oTextColour = new SolidColor();
oColourInt = 255
oTextColour.rgb.red  = oColourInt;
oTextColour.rgb.green =oColourInt;
oTextColour.rgb.blue = oColourInt;

// Add text
var oTextMainLayer = doc.artLayers.add();
oTextMainLayer.kind = LayerKind.TEXT;
oTextMainLayer.textItem.kind = TextType.POINTTEXT
oTextMainLayer.textItem.color = oTextColour;
oTextMainLayer.textItem.font = oFontName;
oTextMainLayer.textItem.size = oFontSize;
oTextMainLayer.textItem.justification=Justification.RIGHT;

oDate= new Date();

oMonth = oDate.getMonth() + 1
oDay = oDate.getDate()
oYear = oDate.getFullYear()

oDateFull = oDay + "/" +oMonth+ "/" + oYear;


// Creat text based on user variables
oText =  oPrefixText 


if (oExtInUse == true)
{
    oText = oText + oCurrentDocName
}
else
{
    oText = oText + oCurrentDocNameNoExt
}

if (oDateInUse == true)
{
    oText = oText + " - " + oDateFull
}


oTextMainLayer.textItem.contents =  oText

oTextPosition = Array(doc.width * oTextMargin, doc.height * oTextMargin)
oTextMainLayer.textItem.position = oTextPosition

oTextMainLayer.applyStyle ("Basic Drop Shadow")
oTextMainLayer.opacity = "80"

app.activeDocument.flatten()

//var bounds = oTextMainLayer.bounds;
//var text = app.activeDocument.activeLayer;

/*
// Duplicate logo into corner
var oLogoFile = app.open(File(oLogoFilePath));

var oLogoFileLayer = oLogoFile.activeLayer ;
oLogoFileLayer.duplicate (oCurrentDoc, ElementPlacement.PLACEATBEGINNING);
oLogoFile.close(SaveOptions.DONOTSAVECHANGES)
*/

/*
// Save _1280x720 version
var o720OutputFile =  new File (oCurrentDocPath + "/" +  oCurrentDocNameNoExt + "_720.jpg") ;
var oExportOptions = new ExportOptionsSaveForWeb()
	oExportOptions.format = SaveDocumentType.JPEG ;

app.activeDocument.exportDocument(o720OutputFile , ExportType.SAVEFORWEB , oExportOptions);

// Save _800x450 version
app.activeDocument.resizeImage (800,450, 75, ResampleMethod.BICUBICSHARPER)
var o800OutputFile =  new File (oCurrentDocPath + "/" +  oCurrentDocNameNoExt + ".jpg") ;

app.activeDocument.exportDocument(o800OutputFile , ExportType.SAVEFORWEB , oExportOptions);
*/