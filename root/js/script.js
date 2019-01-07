/* eslint-env browser */

window.onload = function(){
    
    
    /*
    ** Position Examples
    */
    var fixedExample = document.getElementById("pos-fixed-example");
    var fixedExampleDesc = document.getElementById("pos-fixed-desc");
    
    function isVisible(el)
    {
        var rect = el.getBoundingClientRect(), 
            vWidth = window.innerWidth || document.documentElement.clientWidth, 
            vHeight = window.innerHeight || document.documentElement.clientHeight, 
            efp = function (x, y) {return document.elementFromPoint(x, y)};
        
        if(rect.right < 0 || rect.bottom < 0 || 
           rect.left > vWidth || rect.top > vHeight)
            return false;
        
        return (el.contains(efp(rect.left, rect.top)) || 
                el.contains(efp(rect.right, rect.top)) || 
                el.contains(efp(rect.right, rect.bottom)) || 
                el.contains(efp(rect.left, rect.bottom)));
    }
    
    var fixedExampleHandler = function()
    {
        if(isVisible(fixedExampleDesc))
            fixedExample.style.visibility="visible";
        else
            fixedExample.style.visibility="hidden";
    }
    
    if(fixedExample != undefined && fixedExampleDesc != undefined)
        window.addEventListener("scroll", fixedExampleHandler);
    
}