


// CHANGE THESE STRINGS TO SUIT
var oPath = "/C/PSTest/";
var oDiffuseFilter = "*_Diffuse.*";
var oMaskFilter = "*_Mask.*";


//oInputFolder = Folder.selectDialog("Select a folder to process");
var oInputFolder = new Folder(oPath);

// get all files in the input folder
var oDiffuseFiles = oInputFolder.getFiles(oDiffuseFilter);
var oMaskFiles = oInputFolder.getFiles(oMaskFilter);



// Open each file in turn
for (oDoc in oDiffuseFiles)
{
        oDiffuseDoc = open(oDiffuseFiles[oDoc]);
        
        var oCurrentDoc = app.activeDocument ;
        var oCurrentLayer = oCurrentDoc.activeLayer ;
        oCurrentLayer.name = "Diffuse"
        
        oMaskDoc = open(oMaskFiles[oDoc]);
        var oCurrentDoc = app.activeDocument ;
        var oCurrentLayer = oCurrentDoc.activeLayer ;
       oCurrentLayer.name = "Mask"
       
        oCurrentLayer.duplicate (oDiffuseDoc, ElementPlacement.PLACEATBEGINNING);
        oMaskDoc.close(SaveOptions.DONOTSAVECHANGES);
        
        //save
        var psdOptions = new PhotoshopSaveOptions();
        psdOptions.alphaChannels = true;
        psdOptions.annotations = false;
        psdOptions.embedColorProfile = false;
        psdOptions.layers = true;
        psdOptions.spotColors = false;


        var oCurrentDoc = app.activeDocument ;
        oDocName =  oCurrentDoc.name
        
        oDocNameNoExt = oDocName.substr(0, oDocName.length - 12);
        oSavePSD = new File(oPath + oDocNameNoExt +".psd");
        
        
        oDiffuseDoc.saveAs(oSavePSD, psdOptions);

        activeDocument.close();

}
