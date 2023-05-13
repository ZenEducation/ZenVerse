import { DataStore } from "@aws-amplify/datastore";
import { Whiteboard } from "@/models";

let models;

async function setup() {
    try {
        models = await DataStore.query(Whiteboard);
        console.log(models);
    } catch (e) {
        console.log(e);
    }
}

function _setCanvasProperties(canvas) {
    canvas.loadFromJSON(models[1].canvas)

    // canvas.setBackgroundColor(
    //     "rgba(255, 255, 255)",
    //     canvas.renderAll.bind(canvas)
    // );

    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#37403a";
    fabric.Object.prototype.cornerStyle = "circle";

    const par = document.getElementById("pagetop-container");
    canvas.setDimensions({ width: par.offsetWidth, height: par.offsetHeight });
    canvas.hoverCursor = 'pointer';
    // fabricStore.canvas = canvas;
}

function _addRectangle(canvas) {
    const rect = new fabric.Rect({
        top: 300,
        left: 400,
        fill: "red",
        width: 200,
        height: 200,
    });

    canvas.add(rect);
    // canvas.setActiveObject(rect);
}

function _addPolygon(canvas) {
    var points = [{
        x: 3, y: 4
    }, {
        x: 16, y: 3
    }, {
        x: 30, y: 5
    }, {
        x: 25, y: 55
    }, {
        x: 19, y: 44
    }, {
        x: 15, y: 30
    }, {
        x: 15, y: 55
    }, {
        x: 9, y: 55
    }, {
        x: 6, y: 53
    }, {
        x: -2, y: 55
    }, {
        x: -4, y: 40
    }, {
        x: 0, y: 20
    }]
    let polygon = new fabric.Polygon(points, {
        left: 1000,
        top: 50,
        fill: '#D81B60',
        strokeWidth: 4,
        stroke: 'green',
        scaleX: 4,
        scaleY: 4,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: 'blue',
    });
    // canvas.viewportTransform = [0.7, 0, 0, 0.7, -50, 50];
    canvas.add(polygon);
}

function _addCircle(canvas) {
    const circle = new fabric.Circle({
        fill: "red",
        radius: 100,
        top: 100,
        left: 400,
        strokeWidth: 4,
        stroke: "green",
    });
    canvas.add(circle);
}

const customControls = {
    _deleteControl: () => {
        const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

        const img = document.createElement('img');
        img.src = deleteIcon;

        fabric.Object.prototype.controls.deleteControl = new fabric.Control({
            x: 0.5,
            y: -0.5,
            offsetY: 24,
            cursorStyle: 'pointer',
            mouseUpHandler: deleteObject,
            render: renderIcon,
            cornerSize: 24
        });

        function deleteObject(eventData, transform) {
            const target = transform.target;
            const canvas = target.canvas;
            canvas.remove(target);
            canvas.requestRenderAll();
        }

        function renderIcon(ctx, left, top, styleOverride, fabricObject) {
            const size = this.cornerSize;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(img, -size / 2, -size / 2, size, size);
            ctx.restore();
        }
    }
}

function _workaround(canvas) {
    const helperObj = new fabric.Object({});    //abstract invisible object
    helperObj.set("selectable", false);         //so the user is not able to select and modify it manually
    canvas.add(helperObj);

    canvas.on("object:added", () => {
        //workaround - selecting all objects to enable object controls

        let objects = canvas.getObjects();
        var selection = new fabric.ActiveSelection(objects, {
            canvas: canvas,
        });
        canvas.setActiveObject(selection);   //selecting all objects...
        canvas.discardActiveObject();        //...and deselecting them
        canvas.requestRenderAll();
    });
}

export default async function (canvas) {
    await setup();

    _setCanvasProperties(canvas);

    // Object controls not working until common selection
    // Issue found when importing pdfs
    _workaround(canvas);

    // _addPolygon(canvas);
    // _addRectangle(canvas);
    // _addCircle(canvas);

    // Adding custom controls
    customControls._deleteControl()
}