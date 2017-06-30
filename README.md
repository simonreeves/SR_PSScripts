# SR_PSScripts
Scripts for photoshop

## sr_SaveGroup.jsx
To save out the various types of textures from one PSD, Diffuse, Glossiness, Bump, Specular, Reflection, Refraction Etc.

When you run the script it will save out a jpg based on the name of the PSD file and the GROUP you have selected.

### Usage
Robot.psd
Using groups like the example below. Running the script with the ‘Diffuse’ group selected will save out ‘Robot_Diffuse.jpg’ in the same location as the PSD file.


Also if there is a ‘Wire’ or ‘Wireframe’ layer at the top, it will be temporarily hidden during save.

### Installation
Copy the script file into `[photoshop install dir]/Presets/Scripts/` folder.
And it will appear in `File > Scripts` - I’d recommend making a shortcut for it too from there.
