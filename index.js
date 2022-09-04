const selectedFontSize=document.getElementById('selectionFonts');
const selectBackroundColor=document.getElementById("selectBackgroundColor");
const resetButton=document.getElementById('resetButton');
const mainElement=document.querySelector('main');

const setValue=(fontSize,bgColor)=>{
    selectBackroundColor.value=bgColor;
    selectedFontSize.value=fontSize;
    mainElement.style.fontSize=fontSize;
    mainElement.style.backgroundColor=bgColor;
}
//localStorage value
const initialSetUP=()=>{
    const bgColor=localStorage.getItem("bgColor");
    const fontSize=localStorage.getItem("fontSize");
    if(bgColor && fontSize)
    {
         setValue(fontSize,bgColor);

    }if(!bgColor && !fontSize)
    {
       setValue("16px","aqua");
    }
    if(!bgColor && fontSize){
        setValue(fontSize,"aqua");
    }
    if(bgColor && !fontSize){
        setValue("16px",bgColor);
    }
}

//add event listener
selectedFontSize.addEventListener('change',(event)=>{
    const selectedFontSize=event.target.value;
    mainElement.style.fontSize=selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize)
})
selectBackroundColor.addEventListener('change',(event)=>{
   const selectedBgColor=event.target.value;
   mainElement.style.backgroundColor=selectedBgColor;
   localStorage.setItem("bgColor",selectedBgColor);
})

resetButton.addEventListener('click',()=>{
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValue("16px","aqua");
})
//setItem

initialSetUP();