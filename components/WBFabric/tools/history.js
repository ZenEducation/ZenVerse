import {useWBFabric} from "@/stores/wbFabric";
const fabricStore = useWBFabric();

class History {
  constructor() {
    this.currentStateIndex = -1;
    this.history = [];
  }
  add() {
    console.log("added dwdwdw")
    const canvas = fabricStore.canvas;
    this.canvas=canvas;
    if (this.currentStateIndex < this.history.length - 1) {
      this.history.splice(this.currentStateIndex + 1);
    }
    let temp = JSON.stringify(canvas.toJSON());
    temp=JSON.parse(JSON.stringify(canvas));
    temp.objects=temp.objects.filter((data)=>data.type!=='object');
    temp=JSON.stringify(temp);
    // // Add the current state to the history array
    this.history.push(temp);
    // // Update the current state index
    this.currentStateIndex = this.history.length - 1;
  }
  undo() {
    console.log("undoing",this.currentStateIndex )
    if (this.currentStateIndex > 0) {
  
      this.canvas.off('object:added');
      this.currentStateIndex--;
      // this.canvas.clear();
      this.canvas.loadFromJSON(this.history[this.currentStateIndex], () => {
        // Re-add the object:added event listener after the state has been loaded
        this.canvas.on('object:added', () => {
          // Add the current state to the history array
          this.add(this.canvas);
        });
        // Render the canvas after the state has been loaded
        this.canvas.renderAll();
      });
      fabricStore.canvas=this.canvas;
    }
  }
  redo() {
    if (this.currentStateIndex < this.history.length - 1) {
      this.canvas.off('object:added');
      this.currentStateIndex++;
      // this.canvas.clear();
      this.canvas.loadFromJSON(this.history[this.currentStateIndex], () => {
        // Re-add the object:added event listener after the state has been loaded
        this.canvas.on('object:added', () => {
          // Add the current state to the history array
          this.add(this.canvas);
        });
        // Render the canvas after the state has been loaded
        this.canvas.renderAll();
      });
    }
    fabricStore.canvas=this.canvas;
  }
}

export default new History();

