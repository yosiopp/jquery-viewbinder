# jquery-viewbinder
jqeury plugin for view binder

## usage:
data binding to `data-vmap`, `data-vpath` elements.

### bind from object
```
<span data-vmap="hoge" data-vpath="name"></span>

$(()=>{
    $("body").viewbinder({
        hoge: {name:"yosiopp"},
        fuga: {name:"john"}
    });
})
```

### bind from localStorage
```
<div><span data-vmap="#lo" data-vpath="number"></span></div>

$(()=>{
    localStorage.setItem("lo", JSON.stringify({number: 1234567890}));
    $("div").viewbinder();
})
```

### bind from sessionStorage
```
<div><span data-vmap="%sess" data-vpath="$.items[0].number"></span></div>

$(()=>{
    sessionStorage.setItem("sess", JSON.stringify({items:[{number: 1234567890}]}));
    $("div").viewbinder();
})
```


## dependencies:
* https://github.com/jquery/jquery
* https://code.google.com/archive/p/jsonpath/


----
````
babel --presets es2015 jquery.viewbinder.src.js -o jquery.viewbinder.js
babel --presets es2015 --compact true jquery.viewbinder.src.js -o jquery.viewbinder.min.js
````