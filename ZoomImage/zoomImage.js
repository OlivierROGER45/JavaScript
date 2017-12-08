

var drag;
var deltaX=0.0;
var deltaY=0.0;
var viewWidth;
var viewHeight;
var scale=2.0;

function onMouseDown(e,event) 
{
	event.preventDefault();
	view = $('#panZoomImage');
	img = view.children();
	console.log('onMouseDown '+e);
	console.log('   X '+event.clientX);
	console.log('   Y '+event.clientY);
	drag=true;
	
	deltaX = ( img.width() * scale ) - view.width();
	deltaY = ( img.height() * scale ) - view.height();
	view.css({'transform':'scale('+scale+')'});
	offX = - event.clientX * deltaX / view.width();
	offY = - event.clientY * deltaY / view.height();
	view.offset({left: offX,top: offY}) // Toujours négatif...
	event.stopPropagation();
}

function onMouseMove(e,event) 
{
	console.log('onMouseMove '+e);
	view = $('#panZoomImage');
	if(drag == true)
	{
		console.log('   X '+event.clientX);
		console.log('   Y '+event.clientY);
		view = $('#panZoomImage');
		img = view.children();
		offX = - event.clientX * deltaX / view.width();
		offY = - event.clientY * deltaY / view.height();
		view.offset({left: offX,top: offY}) // Toujours négatif...
	}
	event.stopPropagation();
}

function onMouseUp(e,event) 
{
	console.log('onMouseUp '+e);
	console.log('   X '+event.clientX);
	console.log('   Y '+event.clientY);
	view = $('#panZoomImage');
	console.log('view.drag '+view.drag);
	drag=false;
	$('#panZoomImage').css({'transform':'scale(1)'});
	view.offset({left:0,top:0});
	event.stopPropagation();
}

function onMouseOut(e,event)
{
	$('#panZoomImage').css({'transform':'scale(1)'});
	view.offset({left:0,top:0});
	event.stopPropagation();
}

function onClick(e,event)
{
	console.log('onClick '+e+' '+event);
	console.log('   X '+event.clientX);
	console.log('   Y '+event.clientY);
}

function onWheel(e,event)
{
	console.log('onWheel '+e+' '+event);
}

function onDrag(e,event)
{
	e.preventDefault();
	console.log('onDrag '+e+' '+event);
	console.log('   X '+event.clientX);
	console.log('   Y '+event.clientY);
	console.log('movX '+event.movementX);
	console.log('movY '+event.movementY);
	console.log('offX '+event.offsetX);
	console.log('offY '+event.offsetY);
	event.stopPropagation();
}

