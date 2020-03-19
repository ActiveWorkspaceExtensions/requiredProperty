# Making a Property Required Toggle Implementation

## Unzip
Unizp the contents of demo.7z to your \aws2\stage\src directory

## Generate module
Run the following:<br>
`<npm run generateModule>` <br>
Type to generate: module <br>
Name of Module: demo<br>

If you already have a kit created, add to the existing kit, otherwise it will default to the tc-aw-solution kit by default.

## Add Module Structure
After the demo module has been created, navigate to \aws2\stage\src\demo. <br>
You will see a module.json which contains the name of the module you created (demo). <br>
Add a new directory named src.
Under the src directory, create four new folders (html, i18n, js, viewmodel), all directly under the src directory.

The end result will look something like this: <br>
> src
>> html <br>
>> js <br>
>> i18n <br>
>> viewmodel <br>

## Copy view/viewmodel/js files from the demo.7z
* Copy the demoView.html into aws2\stage\src\<yourmodulename>\src\html
* Copy the demoViewModel.json into aws2\stage\src\<yourmodulename>\src\viewmodel
* Copy the demoService.js into aws2\stage\src\<yourmodulename>\src\js

## AW Build
After the files have been created and staged, from the aws2\stage directory, run the following:

`<initenv.cmd>` <br>
`<awbuild.cmd>` <br>

## Add the module to an existing XRT
1. Log into the AW Client
2. In the dba/DBA role, open the XRTEditor from the tile on the home page.
3. Navigate to an Item Revision, then edit the Awp0ItemRevSummary stylesheet.
4. Add the following into your XRT to test: <br>
`<page titleKey ="Demo" >` <br>
`<htmlPanel declarativeKey="demo"/>` <br>
`</page>`




