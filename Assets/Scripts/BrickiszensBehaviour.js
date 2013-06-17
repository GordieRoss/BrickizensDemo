#pragma strict
var Destination : Vector3;
var distance = 0.00;
var DestNumber = 0;
var NewDestination = 1;
function Start () {
DestNumber = GameObject.FindGameObjectsWithTag("Destination").Length;
NewDestination = Random.Range(1,DestNumber);
Destination = GameObject.Find("Destination"+NewDestination).transform.position;
}

function FixedUpdate (){
DestNumber = GameObject.FindGameObjectsWithTag("Destination").Length;
//Move Brickizen
gameObject.GetComponent(NavMeshAgent).destination = Destination;
distance = Vector3.Distance(gameObject.GetComponent(NavMeshAgent).destination, gameObject.transform.position);

if (distance <= .6){


Debug.Log(DestNumber.ToString());
NewDestination = Random.Range(1,DestNumber);
Debug.Log(NewDestination.ToString());
NewDestination = Mathf.RoundToInt(NewDestination);

Destination = GameObject.Find("Destination"+NewDestination).transform.position;

Debug.Log(NewDestination.ToString());
}

}