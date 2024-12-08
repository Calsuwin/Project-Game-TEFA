gdjs.Sellect_32LevelCode = {};
gdjs.Sellect_32LevelCode.localVariables = [];
gdjs.Sellect_32LevelCode.GDNewVideoObjects1= [];
gdjs.Sellect_32LevelCode.GDNewVideoObjects2= [];
gdjs.Sellect_32LevelCode.GDNewSpriteObjects1= [];
gdjs.Sellect_32LevelCode.GDNewSpriteObjects2= [];
gdjs.Sellect_32LevelCode.GDtxtlvlObjects1= [];
gdjs.Sellect_32LevelCode.GDtxtlvlObjects2= [];
gdjs.Sellect_32LevelCode.GDlvl1Objects1= [];
gdjs.Sellect_32LevelCode.GDlvl1Objects2= [];
gdjs.Sellect_32LevelCode.GDlvl2Objects1= [];
gdjs.Sellect_32LevelCode.GDlvl2Objects2= [];
gdjs.Sellect_32LevelCode.GDlvl3Objects1= [];
gdjs.Sellect_32LevelCode.GDlvl3Objects2= [];
gdjs.Sellect_32LevelCode.GDcloseObjects1= [];
gdjs.Sellect_32LevelCode.GDcloseObjects2= [];
gdjs.Sellect_32LevelCode.GDtextclObjects1= [];
gdjs.Sellect_32LevelCode.GDtextclObjects2= [];
gdjs.Sellect_32LevelCode.GDtextlvl1Objects1= [];
gdjs.Sellect_32LevelCode.GDtextlvl1Objects2= [];
gdjs.Sellect_32LevelCode.GDtextlvl2Objects1= [];
gdjs.Sellect_32LevelCode.GDtextlvl2Objects2= [];
gdjs.Sellect_32LevelCode.GDtextlvl3Objects1= [];
gdjs.Sellect_32LevelCode.GDtextlvl3Objects2= [];
gdjs.Sellect_32LevelCode.GDrcmndObjects1= [];
gdjs.Sellect_32LevelCode.GDrcmndObjects2= [];


gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Sellect_32LevelCode.GDNewSpriteObjects1});
gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.Sellect_32LevelCode.GDcloseObjects1});
gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl1Objects1Objects = Hashtable.newFrom({"lvl1": gdjs.Sellect_32LevelCode.GDlvl1Objects1});
gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl2Objects1Objects = Hashtable.newFrom({"lvl2": gdjs.Sellect_32LevelCode.GDlvl2Objects1});
gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl3Objects1Objects = Hashtable.newFrom({"lvl3": gdjs.Sellect_32LevelCode.GDlvl3Objects1});
gdjs.Sellect_32LevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Sellect_32LevelCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Sellect_32LevelCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Sellect_32LevelCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Sellect_32LevelCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Level");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.Sellect_32LevelCode.GDcloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDcloseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Level");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl1"), gdjs.Sellect_32LevelCode.GDlvl1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl2"), gdjs.Sellect_32LevelCode.GDlvl2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lvl3"), gdjs.Sellect_32LevelCode.GDlvl3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sellect_32LevelCode.mapOfGDgdjs_9546Sellect_959532LevelCode_9546GDlvl3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL3", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Sellect_32LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sellect_32LevelCode.GDNewVideoObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDNewVideoObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtxtlvlObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDtxtlvlObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl1Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl1Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl2Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl2Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl3Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl3Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDcloseObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDcloseObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextclObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextclObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl1Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl1Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl2Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl2Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl3Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl3Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDrcmndObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDrcmndObjects2.length = 0;

gdjs.Sellect_32LevelCode.eventsList0(runtimeScene);
gdjs.Sellect_32LevelCode.GDNewVideoObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDNewVideoObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtxtlvlObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDtxtlvlObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl1Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl1Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl2Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl2Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDlvl3Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDlvl3Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDcloseObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDcloseObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextclObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextclObjects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl1Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl1Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl2Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl2Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl3Objects1.length = 0;
gdjs.Sellect_32LevelCode.GDtextlvl3Objects2.length = 0;
gdjs.Sellect_32LevelCode.GDrcmndObjects1.length = 0;
gdjs.Sellect_32LevelCode.GDrcmndObjects2.length = 0;


return;

}

gdjs['Sellect_32LevelCode'] = gdjs.Sellect_32LevelCode;
