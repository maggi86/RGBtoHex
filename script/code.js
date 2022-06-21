const r=document.getElementById('r');
const g=document.getElementById('g');
const b=document.getElementById('b');
const rgbcode=document.getElementById('value');
const preview=document.getElementById('preview');
function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}
const btnConvert= document.getElementById('convert');
btnConvert.addEventListener('click',()=>{
    let redcode=parseInt(r.value);
    let  greencode=parseInt(g.value);
    let bluecode = parseInt(b.value);
    let hexstring =redcode.toString(16)+greencode.toString(16)+bluecode;
    document.querySelector('#hex').innerHTML='#'+hexstring;
    let previewColor='#'+ hexstring;
    preview.style=`background-color: ${previewColor}`;
});
const btnClear= document.getElementById('clear');
btnClear.addEventListener('click',()=>{
    const inputs = document.querySelectorAll('#r, #b,#g');
  inputs.forEach(input => {
    input.value = '';
  });
  document.querySelector('#hex').innerHTML = "";
  preview.style = `background-color: #FFFFFF`
})

