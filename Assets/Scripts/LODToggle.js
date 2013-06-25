public var ToggleBtnXPos =.8;
public var ToggleBtnYPos =.9;
public var ToggleBtnXSize =.1;
public var ToggleBtnYSize =.1;

var LODState1 : GameObject;
var LODState2 : GameObject;
var LODState3 : GameObject;

var LODState = 1;

var Depth = -1;

var CustomButton : GUIStyle;


// Main Map Button Texture
var btnTexture : Texture;
// Performs GUI actions
function OnGUI() {
GUI.depth = Depth;
    //checks to make sure there is a button texture
        if (!btnTexture) {
        Debug.LogError("Please assign a texture on the inspector");
        return;
    }
    var ToggleButton = GUI.Button(Rect(Screen.width*ToggleBtnXPos,Screen.height * ToggleBtnYPos
									,(Screen.width*ToggleBtnXSize)
									,(Screen.height*ToggleBtnYSize)*(Screen.width/Screen.height)),btnTexture,CustomButton);
      
        
       if (ToggleButton)
    {
    LODState = LODState+1;
    if (LODState >3)
    LODState = 1;    
    }
     
   
}

function Update(){
if(LODState == 1){
LODState1.SetActive(true);
LODState2.SetActive(false);
LODState3.SetActive(false);
GameObject.Find("LODMode").GetComponent(GUIText).guiText.text = "0";

}
if(LODState == 2){
LODState1.SetActive(false);
LODState2.SetActive(true);
LODState3.SetActive(false);
GameObject.Find("LODMode").GetComponent(GUIText).guiText.text = "1";
}
if(LODState ==3){
LODState1.SetActive(false);
LODState2.SetActive(false);
LODState3.SetActive(true);
GameObject.Find("LODMode").GetComponent(GUIText).guiText.text = "2";
}

}