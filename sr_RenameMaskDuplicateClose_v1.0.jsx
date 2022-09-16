//=================================================================
// 16/11/2012
// sr_RenameMaskDuplicateClose
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;

oCurrentDoc = app.activeDocument ;
oCurrentLayer = oCurrentDoc.activeLayer ;
oCurrentDocName = oCurrentDoc.name;





// Alpha mask Group
oSelection = app.activeDocument.selection;
oCompDoc = app.documents[0] ;


// Rename layer to the filename
oDocNameNoExt = oCurrentDocName.substr(0, oCurrentDocName.length - 4);

// Split file name into elements
oDocNameSplit = oDocNameNoExt.split("_") ;

oJob = oDocNameSplit[0] ;
oShotString = oDocNameSplit[1] ;
oShot = oDocNameSplit[2] ;
oScene = oDocNameSplit[3] ;
oVersion = oDocNameSplit[4] ;
oPass = oDocNameSplit[5] ;
oPassElement = oDocNameSplit[7] ;


// oRename =  oDocNameNoExt ;
oRename =  oShot + "_" + oVersion + "_" + oPass + "_" + oPassElement ;

// Rename layer
oCurrentLayer.name = oRename ;


// Add new layerset (group) and set name
oNewLayerSet = oCurrentDoc.layerSets.add();
oNewLayerSet.name = oRename + "_GRP";



// Move layer to layerset
var move = oCurrentLayer.move(oNewLayerSet,ElementPlacement.PLACEATEND);

// Create a selection so it can be reasigned
var shapeRef = [
[0,0],
[0,1],
[1,1],
[1,0]
]

oCurrentDoc.selection.select(shapeRef)

// Load selection channel 3, alpha 1
oSelection.load (oCurrentDoc.channels[3], SelectionType.EXTEND);


//listener version of use selection and make mask on current layer
// =======================================================
var id71 = charIDToTypeID( "Mk  " );
    var desc13 = new ActionDescriptor();
    var id72 = charIDToTypeID( "Nw  " );
    var id73 = charIDToTypeID( "Chnl" );
    desc13.putClass( id72, id73 );
    var id74 = charIDToTypeID( "At  " );
        var ref8 = new ActionReference();
        var id75 = charIDToTypeID( "Chnl" );
        var id76 = charIDToTypeID( "Chnl" );
        var id77 = charIDToTypeID( "Msk " );
        ref8.putEnumerated( id75, id76, id77 );
    desc13.putReference( id74, ref8 );
    var id78 = charIDToTypeID( "Usng" );
    var id79 = charIDToTypeID( "UsrM" );
    var id80 = charIDToTypeID( "RvlS" );
    desc13.putEnumerated( id78, id79, id80 );
executeAction( id71, desc13);
// =======================================================





// Pick the comp doc, the first open.
oCompDoc = app.documents[0] ;


// Duplicate the group (layerset) to the first opened document
oNewLayerSet.duplicate (oCompDoc, ElementPlacement.PLACEATBEGINNING);

oCurrentDoc.close(SaveOptions.DONOTSAVECHANGES)