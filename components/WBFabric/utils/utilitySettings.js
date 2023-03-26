import { fabric } from "fabric";
import { useWBFabric } from "~~/stores/wbFabric";
import img from '@/assets/img/indexremovebgpreview.png'
import sunsImg from '@/assets/img/sun.png'
import allPlanetImg from '@/assets/img/planets.png'

let fabricStore = useWBFabric();
export function discardSelection() {
    const canvas = fabricStore.canvas;
    canvas.discardActiveObject();
    canvas.requestRenderAll();
}

export function multipleSelect() {
    const canvas = fabricStore.canvas;
    var selection = new fabric.ActiveSelection(canvas.getObjects(), { canvas: canvas });
    canvas.setActiveObject(selection);
    canvas.renderAll();
}

export function group() {
    const canvas = fabricStore.canvas;
    if (!canvas.getActiveObject()) {
        return;
    }
    if (canvas.getActiveObject().type !== 'activeSelection') {
        return;
    }
    canvas.getActiveObject().toGroup();
    canvas.requestRenderAll();
}

export function unGroup() {
    const canvas = fabricStore.canvas;
    if (!canvas.getActiveObject()) {
        return;
    }
    if (canvas.getActiveObject().type !== 'group') {
        return;
    }
    canvas.getActiveObject().toActiveSelection();
    canvas.requestRenderAll();
}

let _clipboard = ref()
export function Copy() {
    const canvas = fabricStore.canvas;
    canvas.getActiveObject().clone(function (cloned) {
        _clipboard.value = cloned;
    });
}

export function Paste() {
    const canvas = fabricStore.canvas;
    // clone again, so you can do multiple copies.
    _clipboard.value.clone(function (clonedObj) {
        canvas.discardActiveObject();
        clonedObj.set({
            left: clonedObj.left + 10,
            top: clonedObj.top + 10,
            evented: true,
        });
        if (clonedObj.type === 'activeSelection') {
            // active selection needs a reference to the canvas.
            clonedObj.canvas = canvas;
            clonedObj.forEachObject(function (obj) {
                canvas.add(obj);
            });
            // this should solve the unselectability
            clonedObj.setCoords();
        } else {
            canvas.add(clonedObj);
        }
        _clipboard.value.top += 10;
        _clipboard.value.left += 10;
        canvas.setActiveObject(clonedObj);
        canvas.requestRenderAll();
    });
}


function polygonPositionHandler(dim, finalMatrix, fabricObject) {
    var x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
        y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
    return fabric.util.transformPoint(
        { x: x, y: y },
        fabric.util.multiplyTransformMatrices(
            fabricObject.canvas.viewportTransform,
            fabricObject.calcTransformMatrix()
        )
    );
}

function anchorWrapper(anchorIndex, fn) {
    return function (eventData, transform, x, y) {
        var fabricObject = transform.target,
            absolutePoint = fabric.util.transformPoint({
                x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
                y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
            }, fabricObject.calcTransformMatrix()),
            actionPerformed = fn(eventData, transform, x, y),
            newDim = fabricObject._setPositionDimensions({}),
            polygonBaseSize = getObjectSizeWithStroke(fabricObject),
            newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
            newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
        fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
        return actionPerformed;
    }
}

function getObjectSizeWithStroke(object) {
    var stroke = new fabric.Point(
        object.strokeUniform ? 1 / object.scaleX : 1,
        object.strokeUniform ? 1 / object.scaleY : 1
    ).multiply(object.strokeWidth);
    return new fabric.Point(object.width + stroke.x, object.height + stroke.y);
}


function actionHandler(eventData, transform, x, y) {
    var polygon = transform.target,
        currentControl = polygon.controls[polygon.__corner],
        mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
        polygonBaseSize = getObjectSizeWithStroke(polygon),
        size = polygon._getTransformedDimensions(0, 0),
        finalPointPosition = {
            x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
            y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
        };
    polygon.points[currentControl.pointIndex] = finalPointPosition;
    return true;
}

export function Edit() {
    const canvas = fabricStore.canvas


    var poly = canvas.getObjects()[0];
    canvas.setActiveObject(poly);
    poly.edit = !poly.edit;
    if (poly.edit) {
        var lastControl = poly.points.length - 1;
        poly.cornerStyle = 'circle';
        poly.cornerColor = 'rgba(0,0,255,0.5)';
        poly.controls = poly.points.reduce(function (acc, point, index) {
            acc['p' + index] = new fabric.Control({
                positionHandler: polygonPositionHandler,
                actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
                actionName: 'modifyPolygon',
                pointIndex: index
            });
            return acc;
        }, {});
    } else {
        poly.cornerColor = 'blue';
        poly.cornerStyle = 'rect';
        poly.controls = fabric.Object.prototype.controls;
    }
    poly.hasBorders = !poly.edit;
    canvas.requestRenderAll();
}

function removeAllElements(isAll = false) {
    const canvas = fabricStore.canvas;
    if (isAll) {
        canvas.getObjects().forEach((o) => {
            canvas.remove(o);
        });
    } else {
        canvas.getActiveObjects().forEach((o) => {
            canvas.remove(o);
        });
    }
}
export function renderNewOptions() {
    let elements = [];
    function additionalEle() {
        elements.push(...[new fabric.Circle({
            radius: 70, fill: '#f55', top: 80, left: 100, borderColor: 'red',
            cornerColor: 'green',
            cornerSize: 6,
            transparentCorners: false
        }),
        new fabric.Circle({ radius: 70, fill: '#f55', top: 80, left: 300, hasControls: false }),
        new fabric.Circle({ radius: 70, fill: '#f55', top: 80, left: 500, hasControls: false, hasBorders: false }),
        new fabric.Rect({ height: 150, width: 150, fill: '#f55', top: 80, left: 700, selectable: false }),
        new fabric.Rect({ height: 150, width: 150, fill: '#f55', top: 80, left: 900, lockRotation: true }),
        new fabric.Rect({ height: 150, width: 150, fill: '#f55', top: 80, left: 1100, lockScalingY: true, lockScalingX: true }),
        new fabric.Rect({ height: 150, width: 150, fill: '#f55', top: 400, left: 100, lockMovementX: true , hasRotatingPoint: true}),
        new fabric.Rect({ height: 150, width: 150, fill: '#f55', top: 400, left: 300, lockMovementY: true })
        ])

    }
    const canvas = fabricStore.canvas;
    removeAllElements(true)
    additionalEle();
    elements.forEach((ele) => {
        canvas.add(ele)
    })
    canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
    canvas.on('mouse:down', function (e) { animate(e, 1, canvas); });
    canvas.on('mouse:up', function (e) { animate(e, 0, canvas); });

}

export function renderSolarSystem () {
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
  
    const canvas = fabricStore.canvas;
  
    // load sun and center it
    fabric.Image.fromURL(sunsImg , function(sunImg) {
      canvas.add(sunImg);
      sunImg.center();
    });

    // const sun = new fabric.Image()
  
    var planetSize = 26,
        totalPlanets = 11,
        rotationSpeed = 20000,
        orbits = [ ],
        planets = [ ],
        planetNames = ['Selene', 'Mimas', 'Ares', 'Enceladus', 'Tethys', 'Dione',
                       'Zeus', 'Rhea', 'Titan', 'Janus', 'Hyperion', 'Iapetus'];
  
    var hoverCircle = new fabric.Circle({
      radius: 13,
      fill: '#000',
      stroke: 'rgb(0,192,255)',
      strokeWidth: 3,
      left: -100,
      top: -100
    });
  
    var planetLabel = new fabric.Text('', {
      fill: '#fff',
      fontSize: 16,
      fontFamily: 'Open Sans',
      textBackgroundColor: '#002244'
    });
  
    // load sprite with planets
    fabric.Image.fromURL(allPlanetImg, function(planetsImg) {
  
      // temp canvas to generate planet images
      var tempCanvas = new fabric.StaticCanvas();
  
      // only to fit one planet onto temp canvas
      tempCanvas.setDimensions({
        width: planetSize,
        height: planetSize
      });
  
      // make sure image is drawn from left/top corner
      planetsImg.originX = 'left';
      planetsImg.originY = 'top';
  
      // add it onto temp canvas
      tempCanvas.add(planetsImg);
  
      for (var i = 0; i < totalPlanets; i++) {
        createOrbit(i);
      }
      canvas.add(hoverCircle);
  
      for (var i = 0; i < totalPlanets; i++) {
        createPlanet(i, planetsImg, tempCanvas);
        
      }      
      
      // add group to canvas  
      canvas.add(planetLabel);
    });
  
    function createOrbit(i) {
      var orbit = new fabric.Circle({
        radius: 26 * i + 90,
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        fill: '',
        stroke: 'rgba(0,192,255,0.5)',
        hasBorders: false,
        hasControls: false,
        lockMovementX: true,
        lockMovementY: true,
        index: i
      });
      canvas.add(orbit);
      orbits.push(orbit);
    }
  
    function createPlanet(i, planetsImg, tempCanvas) {
  
      // offset planets sprite to fit each of the planets onto it
      planetsImg.left = -planetSize * i;
      planetsImg.setCoords();
      tempCanvas.renderAll();
  
      // get data url for that planet
      var img = new Image();
      img.onload = function() {
        // create image of a planet from data url
        var oImg = new fabric.Image(img, {
  
          name: planetNames[i],
          index: i,
          scaleX: 1 / canvas.getRetinaScaling(),
          scaleY: 1 / canvas.getRetinaScaling(),
          // position planet 90px from canvas center and 26px from previous planet
          left: (canvas.getWidth() / 2) - 90 - (planetSize * i),
          top: canvas.getHeight() / 2,
  
          // remove borders and corners but leaving object available for events
          hasBorders: false,
          hasControls: false
        });
        canvas.add(oImg);
        planets.push(oImg);
        animatePlanet(oImg, i);
      }
      img.src = tempCanvas.toDataURL();
    }


  
    function animatePlanet(oImg, planetIndex) {
  
      var radius = planetIndex * 26 + 90,
  
          // rotate around canvas center
          cx = canvas.getWidth() / 2,
          cy = canvas.getHeight() / 2,
  
          // speed of rotation slows down for further planets
          duration = (planetIndex + 1) * rotationSpeed,
  
          // randomize starting angle to avoid planets starting on one line
          startAngle = fabric.util.getRandomInt(-180, 0),
          endAngle = startAngle + 359;
  
      (function animate() {
  
        fabric.util.animate({
          startValue: startAngle,
          endValue: endAngle,
          duration: duration,
  
          // linear movement
          easing: function(t, b, c, d) { return c*t/d + b; },
  
          onChange: function(angle) {
            angle = fabric.util.degreesToRadians(angle);
  
            var x = cx + radius * Math.cos(angle);
            var y = cy + radius * Math.sin(angle);
  
            oImg.set({ left: x, top: y }).setCoords();
  
            // only render once
            if (planetIndex === totalPlanets - 1) {
              canvas.renderAll();
            }
          },
          onComplete: animate
        });
      })();
    }
  
    var hoverTarget, prevHoverTarget;
  
    canvas.on('mouse:over', function(options) {
      hoverTarget = options.target;
    });
  
    canvas.on('mouse:out', function(options) {
      hoverTarget = null;
      prevHoverTarget = options.target;
    });
  
    canvas.on('after:render', function() {
      orbits.forEach(function(orbit) {
        orbit.strokeWidth = 1;
        orbit.stroke = 'rgba(0,192,255,0.5)';
      });


      if (hoverTarget && !hoverTarget.text && hoverTarget.index) {
        var hoveredPlanet = planets[hoverTarget.index];
        var hoveredOrbit = orbits[hoveredPlanet.index];
  
        hoveredOrbit.set({
          strokeWidth: 3,
          stroke: 'rgb(0,192,255)'
        });
  
        hoverCircle.set({
          left: hoveredPlanet.left,
          top: hoveredPlanet.top
        });
  
        planetLabel.set({
          left: hoveredPlanet.left + 50,
          top: hoveredPlanet.top + 20,
          text: hoveredPlanet.name
        });
      }
      else {
        hoverCircle.set({ left: -100, top: -100 });
        planetLabel.set({ left: -100, top: -100 });
      }
    });
}

function animate(e, dir, canvas) {
    if (e.target) {
        fabric.util.animate({
            startValue: e.target.angle,
            endValue: dir ? 10 : 0,
            duration: 100,
            onChange: function (value) {
                e.target.rotate(value);
                canvas.renderAll();
            },
            onComplete: function () {
                e.target.setCoords();
            }
        });
        fabric.util.animate({
            startValue: e.target.scaleX,
            endValue: dir ? 1.2 : 1,
            duration: 100,
            onChange: function (value) {
                e.target.scale(value);
                canvas.renderAll();
            },
            onComplete: function () {
                e.target.setCoords();
            }
        });
    }
}