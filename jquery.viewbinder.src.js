/**
 * jquery-viewbinder 0.0.1 (2017-02-24)
 * @author yosiopp
 * @license MIT
 */
;(function($) {

function vars(str, params){
    if(str.length == 0){
        return params
    }
    else if(str.indexOf('#')===0){
        return JSON.parse(localStorage.getItem(str.substring(1)))||{}
    } else if(str.indexOf('%')===0){
        return JSON.parse(sessionStorage.getItem(str.substring(1)))||{}
    } else {
        let v = params[str];
        return ((typeof v === "string") ? [v] : v)||{}
    }
}

// minimum fallback
if(typeof jsonPath !== "function"){
    jsonPath = (v,n)=>{ return [v[n]] };
}

$.fn.viewbinder = function(params, opt){
    let setting = $.extend( {
        'escape'         : true
    }, opt);
    this.find("[data-vmap],[data-vpath]").each(function(){
        let el = $(this)
        let vm = el.attr("data-vmap")||""
        let vp = el.attr("data-vpath")||"*"
        let txt = (jsonPath(vars(vm, params), vp)||[]).join("");
        (setting.escape) ? el.text(txt) : el.html(txt)
        el.removeAttr("data-vmap data-vpath");
    })
};

})(jQuery);