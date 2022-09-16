//=================================================================
// 20/06/2012
// sr_AllLayerOpacity
// www.simonreeves.com 
// simon@simonreeves.com
//=================================================================

app.displayDialogs = DialogModes.NO;

var oSelection = app.activeDocument.selection;
var oCurrentDoc = app.activeDocument ;

// art layers, doesn't change adjustment layers and groups
oLayers = oCurrentDoc.Layers;

for (i = 0; i < oLayers.length; i++)
{
    oLayers[i].opacity =100 ;
}