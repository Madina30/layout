window.addEventListener("load", shadowBox);


    function shadowBox() {
    const previe = document.getElementById("element")
    const resaltCSS = document.getElementById("resalt_css")
    const btnCOPY = document.getElementById("btn-copy")
    const inputs = document.querySelectorAll(".shadow-property");
    
    
    inputs.forEach(inp => inp.addEventListener("input", generateShadow));
    btnCOPY.addEventListener("click", copyCSS);

    function generateShadow() {
        const hShadow = document.getElementById("h-shadow").value;
        const vShadow = document.getElementById("v-shadow").value;
        const blurRadius = document.getElementById("blur-radius").value;
        const spreadRadius = document.getElementById("spread-radius").value;
        const shadowColor = document.getElementById("shadow-color").value;
        const shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
        const shadowInset = document.getElementById("shadow-inset").checked;
        let shadow = '';

        if (shadowInset) shadow += "inset ";
        shadow += `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexRGBA(shadowColor, shadowColorOpacity)}`
        previe.style.boxShadow = shadow;
        resaltCSS.textContent = `box-shadow: ${shadow};`
    }

    function hexRGBA(color, opacity) {
        const red = parseInt(color.substr(1, 2), 16);
        const green = parseInt(color.substr(3, 2), 16);
        const blue = parseInt(color.substr(5, 2), 16);
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    }

    function copyCSS() {

        resaltCSS.select();
        document.execCommand("copy");
        alert("CSS copied to clipboard")
    }
}
