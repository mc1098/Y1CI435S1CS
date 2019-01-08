/* eslint-env browser */

window.onload = function(){
    
    
    /*
    ** Tooltip
    */
    var tooltip = document.createElement("p");
    tooltip.classList.add("tooltip"); 
    
    function glossaryMouseOver()
    {
        var term = "glossary-" + this.innerHTML;
        term = term.toLowerCase();
        tooltip.innerHTML = document.getElementById(term).innerHTML;
        this.insertAdjacentElement("beforeend", tooltip);
        
    }
    
    function glossaryMouseOut()
    {
        this.removeChild(tooltip);
        tooltip.innerHTML = "";
    }
    
    var array = document.getElementsByClassName("glossary-term");
    
    for (var i = 0; i < array.length; i++)
    {
        var e = array[i];
        e.onmouseover = glossaryMouseOver
        e.onmouseout = glossaryMouseOut;
    }
    
    
    /*
    ** To Top Button
    */
    var toTop = document.createElement("a");
    document.body.insertAdjacentElement("beforeend", toTop);
    toTop.setAttribute("href", "#top");
    toTop.id = "to-top";
    toTop.innerHTML = "<i class='fa fa-chevron-circle-up'/>";
    
    var toTopHandler = function()
    {
        if(window.scrollY > 500)
            toTop.style.display = "block";
        else
            toTop.style.display = "none";
    }
    
    window.addEventListener("scroll", toTopHandler);
    
    
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