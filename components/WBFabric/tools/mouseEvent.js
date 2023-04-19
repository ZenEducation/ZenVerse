import { fabric } from "fabric";
import { useWBFabric } from "~~/stores/wbFabric";
let fabricStore = useWBFabric();
class MouseEvents {
  constructor() {
    this.clear();
  }
  add(){
    this.canvas=fabricStore.canvas;    
    this.selectEvent('2');
}
selectEvent(id) {
  this.canvas=fabricStore.canvas;    
    const temp=this.canvas.getObjects();
    this.rect=temp[0];
    this.current=id;
    if(this.current==='0'){
        this.canvas.on('mouse:move', function(options) {
            var p = this.getPointer(options.e);
      
            this.forEachObject(function(obj) {
              var distX = Math.abs(p.x - obj.left-(obj.scaleX*100)),
                  distY = Math.abs(p.y - obj.top-(obj.scaleX*100)),
                  dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
      
              obj.set('opacity', 1 / (dist / 60));
            });
      
            this.renderAll();
        });
    }
    else if(this.current==='1'){
        
        this.canvas.on({
                'object:moving': function(e) {
                  e.target.opacity = 0.5;
                },
                'object:modified': function(e) {
                  e.target.opacity = 1;
                }
              });
    }
    else if(this.current==='2'){
        const canvas=this.canvas;
        const rect=this.rect;
        var $ = function(id){return document.getElementById(id)};
        var angleControl = $('angle-control');
        angleControl.oninput = function() {
            rect.set('angle', parseInt(this.value, 10)).setCoords();
          canvas.requestRenderAll();
        };
      
        var scaleControl = $('scale-control');
        scaleControl.oninput = function() {
            rect.scale(parseFloat(this.value)).setCoords();
          canvas.requestRenderAll();
        };
      
        var topControl = $('top-control');
        topControl.oninput = function() {
            rect.set('top', parseInt(this.value, 10)).setCoords();
          canvas.requestRenderAll();
        };
      
        var leftControl = $('left-control');
        leftControl.oninput = function() {
            rect.set('left', parseInt(this.value, 10)).setCoords();
          canvas.requestRenderAll();
        };
      
        var skewXControl = $('skewX-control');
        skewXControl.oninput = function() {
            rect.set('skewX', parseInt(this.value, 10)).setCoords();
          canvas.requestRenderAll();
        };
      
        var skewYControl = $('skewY-control');
        skewYControl.oninput = function() {
            // console.log(this,canvas);
          rect.set('skewY', parseInt(this.value, 10)).setCoords();
          canvas.requestRenderAll();
        };
      
        function updateControls() {
                  scaleControl.value = rect.scaleX;
                  angleControl.value = rect.angle;
                  leftControl.value = rect.left;
                  topControl.value = rect.top;
                  skewXControl.value = rect.skewX;
                  skewYControl.value = rect.skewY;
        }
        canvas.on({
          'object:moving': updateControls,
          'object:scaling': updateControls,
          'object:resizing': updateControls,
          'object:rotating': updateControls,
          'object:skewing': updateControls
        });
      
    }
    else if(this.current==='3'){
      const canvas=this.canvas;
      // canvas.clear();
      // console.log(canvas);
      canvas.remove(...canvas.getObjects());

      function makeCircle(left, top, line1, line2, line3, line4) {
        var c = new fabric.Circle({
          left: left,
          top: top,
          strokeWidth: 5,
          radius: 12,
          fill: '#fff',
          stroke: '#666'
        });
        c.hasControls = c.hasBorders = false;
    
        c.line1 = line1;
        c.line2 = line2;
        c.line3 = line3;
        c.line4 = line4;
    
        return c;
      }
    
      function makeLine(coords) {
        return new fabric.Line(coords, {
          fill: 'red',
          stroke: 'red',
          strokeWidth: 5,
          selectable: false,
          evented: false,
        });
      }
    
      var line = makeLine([ 550, 125, 550, 175 ]),
          line2 = makeLine([ 550, 175, 550, 250 ]),
          line3 = makeLine([ 550, 250, 600, 350]),
          line4 = makeLine([ 550, 250, 500, 350]),
          line5 = makeLine([ 550, 175, 475, 225 ]),
          line6 = makeLine([ 550, 175, 625, 225 ]);
    
      canvas.add(line, line2, line3, line4, line5, line6);
    
      canvas.add(
        makeCircle(line.get('x1'), line.get('y1'), null, line),
        makeCircle(line.get('x2'), line.get('y2'), line, line2, line5, line6),
        makeCircle(line2.get('x2'), line2.get('y2'), line2, line3, line4),
        makeCircle(line3.get('x2'), line3.get('y2'), line3),
        makeCircle(line4.get('x2'), line4.get('y2'), line4),
        makeCircle(line5.get('x2'), line5.get('y2'), line5),
        makeCircle(line6.get('x2'), line6.get('y2'), line6)
      );
      
      var stickMovement=function(e) {
        var p = e.target;
        p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
        p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
        p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
        p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
        // console.log(canvas.getObjects(),p);
        canvas.renderAll();
      }
      canvas.on('object:moving', stickMovement);
    }
    
  }
  
  clear() {
    this.current = -1;
  }
}

export default new MouseEvents();
