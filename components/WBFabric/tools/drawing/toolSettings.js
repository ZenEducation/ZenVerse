import { useWBFabric } from "@/stores/wbFabric";
import { toRaw } from 'vue';

const fabricStore = useWBFabric();
let canvas = null;

export function changePencilColor(color) {
    canvas = fabricStore.canvas;

    fabricStore.pencil.color = color;
    if (fabricStore.selectedTool == 'pencil') canvas.freeDrawingBrush.color = color;
}

export function changeHighlighterColor(color, opacity = '85', fromPalette = false) {
    canvas = fabricStore.canvas;


    fabricStore.highlighter.color = color;
    if (fabricStore.selectedTool == 'highlighter') {
        if (!fromPalette) {
            fabricStore.highlighter.opacity = opacity
            canvas.freeDrawingBrush.color = color;
        }
        else
            canvas.freeDrawingBrush.color = color + opacity;
    }
}

export function changeBrushWidth(type, val) {
    canvas = fabricStore.canvas;

    switch (type) {
        case 'pencil-width':
            fabricStore.pencil.width = val
            if (fabricStore.selectedTool == 'pencil')
                canvas.freeDrawingBrush.width = val;
            break
        case 'eraser-width':
            fabricStore.eraser.width = val
            if (fabricStore.selectedTool == 'eraser')
                canvas.freeDrawingBrush.width = val;
            break
        case 'highlighter-width':
            fabricStore.highlighter.width = val
            if (fabricStore.selectedTool == 'highlighter')
                canvas.freeDrawingBrush.width = val;
            break
    }
}

export function changeBrushOpacity(type, val) {
    canvas = fabricStore.canvas;

    if (val.length == 1) val = '0' + val;

    fabricStore.highlighter.opacity = val;
    selectHighlighter();
}

export function changeBackgroundColor(val) {
    canvas = fabricStore.canvas

    fabricStore.background = val;
    canvas.backgroundColor = val;
    canvas.renderAll();
}

export function selectHighlighter() {
    // console.log('Highlighter tool selected');
    canvas = fabricStore.canvas

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    fabricStore.currentDrawingBrush = canvas.freeDrawingBrush;
    canvas.freeDrawingBrush.width = fabricStore.highlighter.width;
    canvas.freeDrawingBrush.strokeLineCap = 'butt'
    canvas.freeDrawingBrush.strokeLineJoin = 'mitter'
    canvas.freeDrawingBrush.color = fabricStore.highlighter.color + fabricStore.highlighter.opacity;

    fabricStore.toolSettings = ((fabricStore.toolSettings && fabricStore.selectedTool == 'highlighter') ? false : true)
    fabricStore.selectedTool = 'highlighter'
}

export function selectEraser() {
    // console.log('Eraser tool selected');
    canvas = fabricStore.canvas;

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    fabricStore.currentDrawingBrush = canvas.freeDrawingBrush;
    canvas.freeDrawingBrush.width = fabricStore.eraser.width;
    fabricStore.toolSettings = ((fabricStore.toolSettings && fabricStore.selectedTool == 'eraser') ? false : true)
    fabricStore.selectedTool = 'eraser'
}

export function selectCursor() {
    canvas = fabricStore.canvas

    canvas.isDrawingMode = false;
    fabricStore.toolSettings = false
}

export function selectPencil() {
    // console.log('Pencil tool selected');
    canvas = fabricStore.canvas;

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    fabricStore.currentDrawingBrush = canvas.freeDrawingBrush;
    canvas.freeDrawingBrush.width = fabricStore.pencil.width;
    canvas.freeDrawingBrush.color = fabricStore.pencil.color;

    fabricStore.toolSettings = (fabricStore.toolSettings && fabricStore.selectedTool == 'pencil') ? false : true
    fabricStore.selectedTool = 'pencil'
}

export function selectChangeBackground() {
    canvas = fabricStore.canvas

    canvas.isDrawingMode = false;
    fabricStore.toolSettings = (fabricStore.toolSettings && fabricStore.selectedTool == 'changeBG') ? false : true
    fabricStore.selectedTool = 'changeBG'
}

export function openNav() {
    document.getElementById("sidebar-tool-settings").style.width = "0";
    document.getElementById("sidebar-bg-settings").style.width = "0";

    document.getElementById("mySidebar").style.width = "240px";
}

export function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
}

export function openToolSettings() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("sidebar-bg-settings").style.width = "0";

    document.getElementById("sidebar-tool-settings").style.width = "400px";
}

export function closeToolSettings() {
    document.getElementById("sidebar-tool-settings").style.width = "0";
    document.getElementById("pagetop-container").style.marginLeft = "0";
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
}

export function openBackgroundSettings() {
    document.getElementById("sidebar-tool-settings").style.width = "0";
    document.getElementById("mySidebar").style.width = "0";

    document.getElementById("sidebar-bg-settings").style.width = "400px";
}

export function closeBackgroundSettings() {
    document.getElementById("sidebar-bg-settings").style.width = "0";
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
}

export function openToolPage(pageName, elmnt, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

// Grid functions

function _drawGrid({ lineWidth, verticalSpacing, horizontalSpacing }) {
    canvas = fabricStore.canvas;

    const width = canvas.getWidth();
    const height = canvas.getHeight();

    const left = 40;
    const top = 40;

    const lines = [];
    const lineOption = {
        stroke: "rgba(0,0,0,.3)",
        strokeWidth: lineWidth,
        selectable: false,
    };

    if (verticalSpacing != 0) {
        for (let i = Math.ceil(width / verticalSpacing); i--;) {
            lines.push(
                new fabric.Line(
                    [verticalSpacing * i, -top, verticalSpacing * i, height],
                    lineOption
                )
            );
        }
    }

    if (horizontalSpacing != 0) {
        for (let i = Math.ceil(height / horizontalSpacing); i--;) {
            lines.push(
                new fabric.Line(
                    [-left, horizontalSpacing * i, width, horizontalSpacing * i],
                    lineOption
                )
            );
        }
    }
    const oGridGroup = new fabric.Group(lines, {
        left: 0,
        top: 0,
        selectable: false,
        evented: false,
        __grid: true,
        erasable: false
    });

    let gridGroup = toRaw(canvas.getObjects().filter(
        obj => obj.__grid === true
    )[0]);

    canvas.remove(gridGroup);
    canvas.add(oGridGroup);
    canvas.sendToBack(oGridGroup);
}

export function changeGridSettings(type, val) {
    canvas = fabricStore.canvas;

    switch (type) {
        case 'line-width':
            fabricStore.grid.lineWidth = val
            break
        case 'grid-spacing-vertical':
            fabricStore.grid.verticalSpacing = val
            break
        case 'grid-spacing-horizontal':
            fabricStore.grid.horizontalSpacing = val
            break
    }

    _drawGrid(fabricStore.grid);
}