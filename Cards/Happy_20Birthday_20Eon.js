(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Happy_20Birthday_20Eon_atlas_1", frames: [[0,0,1920,1080]]},
		{name:"Happy_20Birthday_20Eon_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Happy_20Birthday_20Eon_atlas_3", frames: [[0,0,1920,1080]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CopyofHappyBirthdayEon2 = function() {
	this.initialize(ss["Happy_20Birthday_20Eon_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CopyofHappyBirthdayEon3 = function() {
	this.initialize(ss["Happy_20Birthday_20Eon_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CopyofHappyBirthdayEonCopy = function() {
	this.initialize(ss["Happy_20Birthday_20Eon_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CopyofHappyBirthdayEon2();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CopyofHappyBirthdayEon2();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CopyofHappyBirthdayEon3();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CopyofHappyBirthdayEon3();
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// RightHand
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(400.9,577.55,1.4279,1.4279);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(1021,529);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,x:1021,y:529},69).wait(651));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},69).to({x:985.45},25).to({x:1016.55},25).to({x:983.2,y:535.7},24).wait(1).to({x:985.45,y:529},0).to({x:1018.75},25).to({x:983.2},25).to({x:1018.75},25).to({x:983.2},20).to({x:1005.4},25).wait(455).to({startPosition:0},0).wait(1));

	// LeftHand
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(1251.7,282.25,1.4466,1.4466);

	this.instance_3 = new lib.Tween6("synched",0);
	this.instance_3.setTransform(823,349);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:1,scaleY:1,x:823,y:349},69).wait(651));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},69).to({x:863},25).to({x:809.65},25).to({x:856.3},24).wait(1).to({x:863},0).to({x:834.1},25).to({x:858.55},25).to({x:834.1},25).to({x:860.75},20).to({x:827.4},25).wait(455).to({startPosition:0},0).wait(1));

	// Background
	this.instance_4 = new lib.CopyofHappyBirthdayEonCopy();
	this.instance_4.setTransform(1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAhFBCUIAA01MizTAAAMAAAhvzMCzTAAAMAAABUCMBxKAAAMAAAAwmg");
	this.shape.setTransform(936.9,426.45);

	this.instance_5 = new lib.CopyofHappyBirthdayEon3();
	this.instance_5.setTransform(-63,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},69).to({state:[{t:this.shape},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},20).to({state:[{t:this.instance_5},{t:this.instance_4}]},25).to({state:[{t:this.instance_5},{t:this.instance_4}]},455).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,41.1,2650.3,1307.6000000000001);
// library properties:
lib.properties = {
	id: 'A850D25EF556C04EA586B71235D6B8D4',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Happy_20Birthday_20Eon_atlas_1.png", id:"Happy_20Birthday_20Eon_atlas_1"},
		{src:"images/Happy_20Birthday_20Eon_atlas_2.png", id:"Happy_20Birthday_20Eon_atlas_2"},
		{src:"images/Happy_20Birthday_20Eon_atlas_3.png", id:"Happy_20Birthday_20Eon_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A850D25EF556C04EA586B71235D6B8D4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;