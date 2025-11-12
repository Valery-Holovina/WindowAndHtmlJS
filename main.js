

import { HtmlElement } from "./htmlClass.js";
import { CssClass } from "./cssClass.js";
import { HtmlBlock } from "./htmlBlock.js";


//main button
let wrapper = new HtmlElement('button',false);

wrapper.setStyle('height', '50px');
wrapper.setStyle('width', '150px');
wrapper.setStyle('padding', '10px 20px');
wrapper.setStyle('background-color', '#ff4b4b');
wrapper.setStyle('border', 'none');
wrapper.setStyle('border-radius', '10px');
wrapper.setStyle('color', 'white');
wrapper.setStyle('font-size', '16px');
wrapper.setStyle('font-weight', 'bold');
wrapper.textContent = "Click here"




let block = new HtmlBlock();
block.setRootItem(wrapper);
console.log(block.getFullHtml())
document.body.innerHTML += block.getFullHtml()

const btn = document.querySelector('button');
btn.addEventListener('click', openPopup);




//open window
let win = null
function openPopup(){
    win = window.open('','','width=500,height=400,top=500,left=500,resizable=no,scrollbars=yes,location=no');
    win.document.open()
    
 
  let btnClass = new CssClass('.', 'toggle-btn');
  btnClass.setStyle('height', '50px');
  btnClass.setStyle('width', '150px');
  btnClass.setStyle('padding', '10px 20px');
  btnClass.setStyle('background-color', '#ebdc7e');
  btnClass.setStyle('border', 'none');
  btnClass.setStyle('border-radius', '10px');
  btnClass.setStyle('color', '#333');
  btnClass.setStyle('font-size', '16px');
  btnClass.setStyle('font-weight', 'bold');
  btnClass.setStyle('cursor', 'pointer');
  btnClass.setStyle('transition', 'all 0.5s ease');

  let inputClass = new CssClass('.', 'popup-input');
  inputClass.setStyle('padding', '10px');
  inputClass.setStyle('font-size', '16px');
  inputClass.setStyle('margin-top', '20px');
  inputClass.setStyle('border-radius', '8px');
  inputClass.setStyle('border', '1px solid #ccc');
  inputClass.setStyle('width', '80%');

  let bodyClass = new CssClass('.', 'popup-body');
  bodyClass.setStyle('display', 'flex');
  bodyClass.setStyle('flex-direction', 'column');
  bodyClass.setStyle('justify-content', 'center');
  bodyClass.setStyle('align-items', 'center');
  bodyClass.setStyle('height', '100vh');
  bodyClass.setStyle('transition', 'background-color 0.5s, color 0.5s');

 
  let toggleBtn = new HtmlElement('button', false);
  toggleBtn.setClass('toggle-btn');
  toggleBtn.textContent = "Toggle Theme";

  let inputField = new HtmlElement('input', false);
  inputField.setClass('popup-input');
  inputField.setAttribute('type', 'text');
  inputField.setAttribute('placeholder', 'Type something...');

  let bodyEl = new HtmlElement('div', false);
  bodyEl.setClass('popup-body');
  bodyEl.appendChild(toggleBtn);
  bodyEl.appendChild(inputField);

  
  let popupBlock = new HtmlBlock();
  popupBlock.addCssClass(btnClass);
  popupBlock.addCssClass(inputClass);
  popupBlock.addCssClass(bodyClass);
  popupBlock.setRootItem(bodyEl);

 
  win.document.writeln(`
    <html>
      <head>
        <title>Popup</title>
        <style>
          ${btnClass.getCss()}
          ${inputClass.getCss()}
          ${bodyClass.getCss()}
        </style>
      </head>
      <body>
        ${popupBlock.getFullHtml()}
        <script>
          const body = document.querySelector('.popup-body');
          const btn = document.querySelector('.toggle-btn');
          let isDark = false;
          btn.addEventListener('click', () => {
            isDark = !isDark;
            if(isDark){
              body.style.backgroundColor = '#222';
              body.style.color = '#eee';
              btn.style.backgroundColor = '#7eb3eb';
              btn.style.color = 'white';
            } else {
              body.style.backgroundColor = 'white';
              body.style.color = 'black';
              btn.style.backgroundColor = '#ebdc7e';
              btn.style.color = '#333';
            }
          });
        <\/script>
      </body>
    </html>
  `);

  win.document.close();
    
}




