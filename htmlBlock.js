
export class HtmlBlock{
    

    constructor(){
        this.styles = []
        this.root = null;
    }
    
    addCssClass(cssClass){
        this.styles.push(cssClass)
    }
   
    setRootItem(elem){
        this.root = elem;
    }

    getCode(){
        let cssCode = '';
        for (let i = 0; i<this.styles.length; i++) {
            cssCode += this.styles[i].getCss()+`\n\n`;
            
        }
        let htmlCode = this.root.getHtml();
        return`<style>\n${cssCode}\n</style> \n ${htmlCode} `
    }

    getHead() {
        let cssCode = '';
        for (let i = 0; i < this.styles.length; i++) {
            cssCode += this.styles[i].getCss() + `\n\n`;
        }
        return `<head>\n<style>\n${cssCode}</style>\n</head>`;
    }

   
    getBody() {
        if (!this.root) return '<body></body>';
        return `<body>\n${this.root.getHtml()}\n</body>`;
    }

   
    getFullHtml() {
        return `<!DOCTYPE html>\n<html lang="en">\n${this.getHead()}\n${this.getBody()}\n</html>`;
    }
}