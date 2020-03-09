
module.exports = class OverAndUnder{
    makeANumber(){
        this.nComputer = Math.ceil(Math.random() * 100);
        this.nTries = 0;
    }
    makeAMove(nInput, fCallback){
        if(!this.nComputer){
            this.makeANumber();
            fCallback(["Welcome to Over and Unders", "Please guess a number between 1 and 100"]);
            return;
        }
        let sReturn = "";        
        this.nTries++;
        if(isNaN(nInput)){
            sReturn = "Please enter a number";
        }
        else if(nInput > this.nComputer){
            sReturn = "Too High";
        }else if(nInput < this.nComputer){
            sReturn = "Too Low";
        }else{
            sReturn = "Just right (" + this.nTries + " tries)... Please guess a new number.";
            this.makeANumber();
        }
        setTimeout(() => { 
            fCallback([sReturn]); 
        }, 3000);
        
    }
}