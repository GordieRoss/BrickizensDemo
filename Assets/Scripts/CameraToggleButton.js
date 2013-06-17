public var ToggleBtnXPos =.8;
public var ToggleBtnYPos =.9;
public var ToggleBtnXSize =.1;
public var ToggleBtnYSize =.1;

var CameraState1 : GameObject;
var CameraState2 : GameObject;
var CameraState3 : GameObject;

var CameraState = 1;

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
    CameraState = CameraState+1;
    if (CameraState >3)
    CameraState = 1;    
    }
     
   
}

function Update(){
if(CameraState == 1){
CameraState1.SetActive(true);
CameraState2.SetActive(false);
CameraState3.SetActive(false);
GameObject.Find("CameraMode").GetComponent(GUIText).guiText.text = "GodCamera";

}
if(CameraState == 2){
CameraState1.SetActive(false);
CameraState2.SetActive(true);
CameraState3.SetActive(false);
GameObject.Find("CameraMode").GetComponent(GUIText).guiText.text = "MayorCamera";
}
if(CameraState ==3){
CameraState1.SetActive(false);
CameraState2.SetActive(false);
CameraState3.SetActive(true);
GameObject.Find("CameraMode").GetComponent(GUIText).guiText.text = "AICamera";
}

}