
export class CssClass{
   

    constructor(styleType,className){
        this.styleType = styleType 
        this.className = className;
        this.styles = {}
    }


     setStyle(property,value){
        this.styles[property] = value;
    }
    
    removeStyle(property){
        delete this.styles[property];
    }

   
    getCss(){
      
        let styleStr = Object.entries(this.styles).map(([k,v]) => `${k}: ${v};`).join('\n')
        return `${this.styleType}${this.className} {\n ${styleStr} \n}`
    
    }

}