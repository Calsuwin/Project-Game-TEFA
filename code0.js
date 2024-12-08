gdjs.DIALOGCode = {};
gdjs.DIALOGCode.localVariables = [];
gdjs.DIALOGCode.GDbackroundsObjects1= [];
gdjs.DIALOGCode.GDbackroundsObjects2= [];
gdjs.DIALOGCode.GDbackroundsObjects3= [];
gdjs.DIALOGCode.GDindyObjects1= [];
gdjs.DIALOGCode.GDindyObjects2= [];
gdjs.DIALOGCode.GDindyObjects3= [];
gdjs.DIALOGCode.GDasmiObjects1= [];
gdjs.DIALOGCode.GDasmiObjects2= [];
gdjs.DIALOGCode.GDasmiObjects3= [];
gdjs.DIALOGCode.GDdialogboxObjects1= [];
gdjs.DIALOGCode.GDdialogboxObjects2= [];
gdjs.DIALOGCode.GDdialogboxObjects3= [];
gdjs.DIALOGCode.GDnameboxObjects1= [];
gdjs.DIALOGCode.GDnameboxObjects2= [];
gdjs.DIALOGCode.GDnameboxObjects3= [];
gdjs.DIALOGCode.GDOptionBoxObjects1= [];
gdjs.DIALOGCode.GDOptionBoxObjects2= [];
gdjs.DIALOGCode.GDOptionBoxObjects3= [];
gdjs.DIALOGCode.GDNamesTXTObjects1= [];
gdjs.DIALOGCode.GDNamesTXTObjects2= [];
gdjs.DIALOGCode.GDNamesTXTObjects3= [];
gdjs.DIALOGCode.GDDialogueTXTObjects1= [];
gdjs.DIALOGCode.GDDialogueTXTObjects2= [];
gdjs.DIALOGCode.GDDialogueTXTObjects3= [];
gdjs.DIALOGCode.GDOptionTXTObjects1= [];
gdjs.DIALOGCode.GDOptionTXTObjects2= [];
gdjs.DIALOGCode.GDOptionTXTObjects3= [];
gdjs.DIALOGCode.GDBtnNextObjects1= [];
gdjs.DIALOGCode.GDBtnNextObjects2= [];
gdjs.DIALOGCode.GDBtnNextObjects3= [];


gdjs.DIALOGCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "typewriter") >= 0.02;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.hasClippedScrollingCompleted());
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.completeClippedTextScrolling();
}}

}


};gdjs.DIALOGCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogueTXT"), gdjs.DIALOGCode.GDDialogueTXTObjects1);
{for(var i = 0, len = gdjs.DIALOGCode.GDDialogueTXTObjects1.length ;i < len;++i) {
    gdjs.DIALOGCode.GDDialogueTXTObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.DIALOGCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.DIALOGCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("asmi");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NamesTXT"), gdjs.DIALOGCode.GDNamesTXTObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDNamesTXTObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDNamesTXTObjects2[i].setBBText("[b][color=#7cc5f2]asmi[/color][/b]");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("indy");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NamesTXT"), gdjs.DIALOGCode.GDNamesTXTObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDNamesTXTObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDNamesTXTObjects2[i].setBBText("[b][color=#f78df2]indy[/color][/b]");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("asminormal");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("asmi"), gdjs.DIALOGCode.GDasmiObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDasmiObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDasmiObjects2[i].getBehavior("Animation").setAnimationName("normal");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("asmisenyum");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("asmi"), gdjs.DIALOGCode.GDasmiObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDasmiObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDasmiObjects2[i].getBehavior("Animation").setAnimationName("senyum");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("asmikaget");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("asmi"), gdjs.DIALOGCode.GDasmiObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDasmiObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDasmiObjects2[i].getBehavior("Animation").setAnimationName("kaget");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("asmisenyum1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("asmi"), gdjs.DIALOGCode.GDasmiObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDasmiObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDasmiObjects2[i].getBehavior("Animation").setAnimationName("senyum1");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("indynormal");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indy"), gdjs.DIALOGCode.GDindyObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDindyObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDindyObjects2[i].getBehavior("Animation").setAnimationName("normal");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("indybingung");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indy"), gdjs.DIALOGCode.GDindyObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDindyObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDindyObjects2[i].getBehavior("Animation").setAnimationName("bingung");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("indysenyum");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indy"), gdjs.DIALOGCode.GDindyObjects2);
{for(var i = 0, len = gdjs.DIALOGCode.GDindyObjects2.length ;i < len;++i) {
    gdjs.DIALOGCode.GDindyObjects2[i].getBehavior("Animation").setAnimationName("senyum");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("indysenyum1");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("indy"), gdjs.DIALOGCode.GDindyObjects1);
{for(var i = 0, len = gdjs.DIALOGCode.GDindyObjects1.length ;i < len;++i) {
    gdjs.DIALOGCode.GDindyObjects1[i].getBehavior("Animation").setAnimationName("senyum1");
}
}}

}


};gdjs.DIALOGCode.mapOfGDgdjs_9546DIALOGCode_9546GDBtnNextObjects1Objects = Hashtable.newFrom({"BtnNext": gdjs.DIALOGCode.GDBtnNextObjects1});
gdjs.DIALOGCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "DialogueData");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typewriter");
}{gdjs.dialogueTree.startFrom("Mulai");
}}

}


{


gdjs.DIALOGCode.eventsList1(runtimeScene);
}


{


gdjs.DIALOGCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNext"), gdjs.DIALOGCode.GDBtnNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.DIALOGCode.mapOfGDgdjs_9546DIALOGCode_9546GDBtnNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sellect Level", false);
}}

}


};

gdjs.DIALOGCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DIALOGCode.GDbackroundsObjects1.length = 0;
gdjs.DIALOGCode.GDbackroundsObjects2.length = 0;
gdjs.DIALOGCode.GDbackroundsObjects3.length = 0;
gdjs.DIALOGCode.GDindyObjects1.length = 0;
gdjs.DIALOGCode.GDindyObjects2.length = 0;
gdjs.DIALOGCode.GDindyObjects3.length = 0;
gdjs.DIALOGCode.GDasmiObjects1.length = 0;
gdjs.DIALOGCode.GDasmiObjects2.length = 0;
gdjs.DIALOGCode.GDasmiObjects3.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects1.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects2.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects3.length = 0;
gdjs.DIALOGCode.GDnameboxObjects1.length = 0;
gdjs.DIALOGCode.GDnameboxObjects2.length = 0;
gdjs.DIALOGCode.GDnameboxObjects3.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects1.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects2.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects3.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects1.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects2.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects3.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects1.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects2.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects3.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects1.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects2.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects3.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects1.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects2.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects3.length = 0;

gdjs.DIALOGCode.eventsList3(runtimeScene);
gdjs.DIALOGCode.GDbackroundsObjects1.length = 0;
gdjs.DIALOGCode.GDbackroundsObjects2.length = 0;
gdjs.DIALOGCode.GDbackroundsObjects3.length = 0;
gdjs.DIALOGCode.GDindyObjects1.length = 0;
gdjs.DIALOGCode.GDindyObjects2.length = 0;
gdjs.DIALOGCode.GDindyObjects3.length = 0;
gdjs.DIALOGCode.GDasmiObjects1.length = 0;
gdjs.DIALOGCode.GDasmiObjects2.length = 0;
gdjs.DIALOGCode.GDasmiObjects3.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects1.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects2.length = 0;
gdjs.DIALOGCode.GDdialogboxObjects3.length = 0;
gdjs.DIALOGCode.GDnameboxObjects1.length = 0;
gdjs.DIALOGCode.GDnameboxObjects2.length = 0;
gdjs.DIALOGCode.GDnameboxObjects3.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects1.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects2.length = 0;
gdjs.DIALOGCode.GDOptionBoxObjects3.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects1.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects2.length = 0;
gdjs.DIALOGCode.GDNamesTXTObjects3.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects1.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects2.length = 0;
gdjs.DIALOGCode.GDDialogueTXTObjects3.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects1.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects2.length = 0;
gdjs.DIALOGCode.GDOptionTXTObjects3.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects1.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects2.length = 0;
gdjs.DIALOGCode.GDBtnNextObjects3.length = 0;


return;

}

gdjs['DIALOGCode'] = gdjs.DIALOGCode;
