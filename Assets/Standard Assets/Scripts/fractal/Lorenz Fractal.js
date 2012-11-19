var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var lengthOfLineRenderer : int = 50000;

function Start() {
     var lineRenderer : LineRenderer = gameObject.AddComponent(LineRenderer);
     lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
     lineRenderer.SetColors(c1, c1);
     lineRenderer.SetWidth(0.2,0.2);
     lineRenderer.SetVertexCount(lengthOfLineRenderer);
     lineRenderer.useWorldSpace = true;

}

function Update() {

	var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    obtainLorenzVectors();
    lineRenderer.SetColors(c2, c2);
}
 
 
var sigma = 10.0;
var rho = 28.0;
var beta = 8/3;
var dt = 0.001;
	
	
function dx(x,y, z) {
	return -sigma*(x - y);
}
    
function dy(x,y,z) {
	return -x*z + rho*x - y;
}
    
function dz(x,y,z) {
	return x*y - beta*z;
}
   
     
function obtainLorenzVectors()
{

	var x0 = 0.0;
	var y0 = 20.0;
	var z0 = 25.0;	
	
	
	var lineRenderer : LineRenderer = GetComponent(LineRenderer);
    for(var i : int = 0; i < lengthOfLineRenderer; i++) {
    	
    	
    	var x1 = x0 + dx(x0,y0,z0)*dt;
		var y1 = y0 + dy(x0,y0,z0)*dt;
		var z1 = z0 + dz(x0,y0,z0)*dt;
    	    	      	
      			
        var pos : Vector3 = Vector3(x0, y0, z0);
        lineRenderer.SetPosition(i, pos);
        
        x0 = x1;
      	y0 = y1;
      	z0 = z1;
    }
    

	
	

	return pos;	
}