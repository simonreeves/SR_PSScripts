app.displayDialogs = DialogModes.NO;

var oSelection = app.activeDocument.selection;
var oCurrentDoc = app.activeDocument ;
var oCurrentLayer = oCurrentDoc.activeLayer ;
var oCompDoc = app.documents[0] ;

//rename layer to the filename
oCurrentLayer.name = oCurrentDoc.name ;

//add new layerset (group) and set name
var oNewLayerSet = oCurrentDoc.layerSets.add();
oNewLayerSet.name = oCurrentDoc.name+ "_GROUP";

// move layer to layerset
var move = oCurrentLayer.move(oNewLayerSet,ElementPlacement.PLACEATEND);


//create a selection so it can be reasigned
var shapeRef = [
[0,0],
[0,1],
[1,1],
[1,0]
]

oCurrentDoc.selection.select(shapeRef)

//load selection channel 3, alpha 1
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