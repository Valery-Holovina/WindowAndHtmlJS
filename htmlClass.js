
export class HtmlElement{
   
    constructor(tagName,isSelfClosed,textContent){
        this.tagName = tagName || 'Div';
        this.isSelfClosed = isSelfClosed || false;
        this.textContent = textContent || '';
        this.attributes = {};
        this.styles = {};
        this.children = [];
    }
   
    setAttribute(name,value){
        this.attributes[name] = value;

    }
    
    setStyle(property,value){
        this.styles[property] = value;
    }
    
    appendChild(childElement){
        this.children.push(childElement)
    }
    
    prependChild(childElement){
        this.children.unshift(childElement)
    }

    setClass(className) {
    this.attributes['class'] = className;
}

    
    getHtml(){
  
        let attributeStr = ''
        for (let key in this.attributes) {
            attributeStr += `${key}="${this.attributes[key]}"`;
        }
        attributeStr = attributeStr.trim(); 


    
        let styleStr = '';
        for (let property in this.styles) {
            styleStr += `${property}:${this.styles[property]};`; 
            
        }
        styleStr = styleStr.trim();

      
        if(styleStr){
            attributeStr += (attributeStr? ' ': '') + `style ="${styleStr}"`;
        }

        if(this.isSelfClosed){
            return `<${this.tagName} ${attributeStr ? ' '+ attributeStr: ''} />`;
        }
      
        let innerHtml = this.textContent;
        for (let child of this.children) {
            innerHtml += child.getHtml();
            
            
        }
        return `<${this.tagName} ${attributeStr ? ' '+ attributeStr: ''}>${innerHtml} </${this.tagName}>`;
    }

    }
