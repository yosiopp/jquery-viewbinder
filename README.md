# jquery-viewbinder
jqeury plugin for view binder

usage:
```
<span data-vmap="hoge" data-vpath="name"></span>

$(()=>{
    $("body").viewbinder({
        hoge: {name:"yosiopp"},
        fuga: {name:"john"}
    });
})
```

dependencies:
https://github.com/jquery/jquery
https://code.google.com/archive/p/jsonpath/


----
````
babel --presets es2015 jquery.viewbinder.src.js -o jquery.viewbinder.js
babel --presets es2015 --compact true jquery.viewbinder.src.js -o jquery.viewbinder.min.js
````