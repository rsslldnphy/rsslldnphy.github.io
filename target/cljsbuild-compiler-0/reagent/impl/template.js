// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.DOM = (reagent.impl.util.React["DOM"]);
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$15,"className",cljs.core.constant$keyword$27,"htmlFor",cljs.core.constant$keyword$28,"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){return (reagent.impl.template.hiccup_tag_QMARK_(x)) || (reagent.impl.util.clj_ifn_QMARK_(x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){if(!(cljs.core.ifn_QMARK_(v)))
{return v;
} else
{if((v instanceof cljs.core.Keyword))
{return cljs.core.name(v);
} else
{if((v instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else
{if(cljs.core.coll_QMARK_(v))
{return cljs.core.clj__GT_js(v);
} else
{return (function() { 
var G__15082__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args);
};
var G__15082 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15082__delegate.call(this,args);};
G__15082.cljs$lang$maxFixedArity = 0;
G__15082.cljs$lang$applyTo = (function (arglist__15083){
var args = cljs.core.seq(arglist__15083);
return G__15082__delegate(args);
});
G__15082.cljs$core$IFn$_invoke$arity$variadic = G__15082__delegate;
return G__15082;
})()
;

}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){var or__8736__auto__ = (function (){var G__15087 = n;return (reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1(G__15087) : reagent.impl.template.attr_aliases.call(null,G__15087));
})();if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return reagent.impl.util.dash_to_camel(n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1(reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_(val))
{return cljs.core.reduce_kv((function (res,k,v){var G__15090 = res;(G__15090[(function (){var G__15091 = k;return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__15091) : reagent.impl.template.cached_prop_name.call(null,G__15091));
})()] = reagent.impl.template.to_js_val(v));
return G__15090;
}),{},val);
} else
{return reagent.impl.template.to_js_val(val);
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__15092){var vec__15094 = p__15092;var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15094,(0),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15094,(1),null);var pid = (props["id"]);(props["id"] = ((!((pid == null)))?pid:id));
if((class$ == null))
{return null;
} else
{return (props["className"] = (function (){var old = (props["className"]);if(!((old == null)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(old));
} else
{return class$;
}
})());
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){if((cljs.core.empty_QMARK_(props)) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type(props) === Object))
{return props;
} else
{var objprops = cljs.core.reduce_kv((function (o,k,v){var pname_15097 = (function (){var G__15096 = k;return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__15096) : reagent.impl.template.cached_prop_name.call(null,G__15096));
})();if(!((pname_15097 === "key")))
{(o[pname_15097] = reagent.impl.template.convert_prop_value(v));
} else
{}
return o;
}),{},props);if((id_class == null))
{} else
{reagent.impl.template.set_id_class(objprops,id_class);
}
return objprops;

}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){var res = (function (){var G__15099 = e;return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__15099) : on_change.call(null,G__15099));
})();reagent.impl.batching.queue_render(this$);
return res;
});
reagent.impl.template.input_did_update = (function input_did_update(this$){var value = this$.cljsInputValue;if((value == null))
{return null;
} else
{var node = this$.getDOMNode();if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,node.value))
{return node.value = value;
} else
{return null;
}
}
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){var on_change = (jsprops["onChange"]);var value = (((on_change == null))?null:(jsprops["value"]));this$.cljsInputValue = value;
if((value == null))
{return null;
} else
{reagent.impl.batching.mark_rendered(this$);
var G__15102 = jsprops;(G__15102["defaultValue"] = value);
(G__15102["value"] = null);
(G__15102["onChange"] = ((function (G__15102,on_change,value){
return (function (p1__15100_SHARP_){return reagent.impl.template.input_handle_change(this$,on_change,p1__15100_SHARP_);
});})(G__15102,on_change,value))
);
return G__15102;
}
});
reagent.impl.template.input_components = cljs.core.PersistentHashSet.fromArray([(reagent.impl.template.DOM["input"]),(reagent.impl.template.DOM["textarea"])], true);
reagent.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class,input_setup){var inprops = reagent.impl.util.js_props(this$);var argv = (inprops[reagent.impl.util.cljs_argv]);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));var jsargs = (function (){var G__15108 = argv;var G__15109 = ((hasprops)?(2):(1));var G__15110 = ((inprops[reagent.impl.util.cljs_level]) + (1));return (reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3 ? reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3(G__15108,G__15109,G__15110) : reagent.impl.template.convert_args.call(null,G__15108,G__15109,G__15110));
})();var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),id_class);if((input_setup == null))
{} else
{var G__15111_15113 = this$;var G__15112_15114 = jsprops;(input_setup.cljs$core$IFn$_invoke$arity$2 ? input_setup.cljs$core$IFn$_invoke$arity$2(G__15111_15113,G__15112_15114) : input_setup.call(null,G__15111_15113,G__15112_15114));
}
(jsargs[(0)] = jsprops);
return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = reagent.impl.util.js_props(C);var a1 = (inprops[reagent.impl.util.cljs_argv]);var a2 = (nextprops[reagent.impl.util.cljs_argv]);return cljs.core.not(reagent.impl.util.equal_args(a1,a2));
});
reagent.impl.template.add_input_methods = (function add_input_methods(spec){var G__15116 = spec;(G__15116["componentDidUpdate"] = ((function (G__15116){
return (function (){var C = this;return reagent.impl.template.input_did_update(C);
});})(G__15116))
);
(G__15116["componentWillUnmount"] = ((function (G__15116){
return (function (){var C = this;return reagent.impl.batching.dispose(C);
});})(G__15116))
);
return G__15116;
});
reagent.impl.template.wrap_component = (function wrap_component(comp,extras,name){var input_QMARK_ = (function (){var G__15120 = comp;return (reagent.impl.template.input_components.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_components.cljs$core$IFn$_invoke$arity$1(G__15120) : reagent.impl.template.input_components.call(null,G__15120));
})();var input_setup = (cljs.core.truth_(input_QMARK_)?reagent.impl.template.input_render_setup:null);var spec = {"displayName": (function (){var or__8736__auto__ = name;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return "ComponentWrapper";
}
})(), "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__15117_SHARP_,p2__15118_SHARP_){var C = this;return reagent.impl.template.wrapped_should_update(C,p1__15117_SHARP_,p2__15118_SHARP_);
});})(input_QMARK_,input_setup))
, "render": ((function (input_QMARK_,input_setup){
return (function (){var C = this;return reagent.impl.template.wrapped_render(C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
};if(cljs.core.truth_(input_QMARK_))
{reagent.impl.template.add_input_methods(spec);
} else
{}
return reagent.impl.util.React.createClass(spec);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){var vec__15122 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15122,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15122,(1),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15122,(2),null);var comp = (reagent.impl.template.DOM[tag]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Unknown tag: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag)+"'"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"comp","comp",-1462482139,null)], 0))))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__8736__auto__ = id;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function get_wrapper(tag){var vec__15124 = reagent.impl.template.parse_tag(tag);var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(0),null);var id_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(1),null);return reagent.impl.template.wrap_component(comp,id_class,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1(reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta(f);var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$29,f);var res = (function (){var G__15126 = withrender;return (reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1(G__15126) : reagent.impl.template.create_class.call(null,G__15126));
})();var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){if(reagent.impl.template.hiccup_tag_QMARK_(tag))
{var G__15128 = tag;return (reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1(G__15128) : reagent.impl.template.cached_wrapper.call(null,G__15128));
} else
{var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(reagent.impl.util.React.isValidClass(tag)))
{return tag.cljsReactClass = reagent.impl.template.wrap_component(tag,null,null);
} else
{return reagent.impl.template.fn_to_class(tag);
}
}
}
});
reagent.impl.template.get_key = (function get_key(x){if(cljs.core.map_QMARK_(x))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$30);
} else
{return null;
}
});
reagent.impl.template.vec_to_comp = (function vec_to_comp(v,level){if((cljs.core.count(v) > (0)))
{} else
{throw (new Error(("Assert failed: Hiccup form should not be empty\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))], 0))))));
}
if(reagent.impl.template.valid_tag_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Hiccup form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"v","v",1661996586,null),(0)))], 0))))));
}
var c = reagent.impl.template.as_class(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)));var jsprops = (function (){var obj15133 = {};(obj15133[reagent.impl.util.cljs_argv] = v);
(obj15133[reagent.impl.util.cljs_level] = level);
return obj15133;
})();var k_15135 = reagent.impl.template.get_key(cljs.core.meta(v));var k_SINGLEQUOTE__15136 = (((k_15135 == null))?reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null)):k_15135);if((k_SINGLEQUOTE__15136 == null))
{} else
{(jsprops["key"] = k_SINGLEQUOTE__15136);
}
var G__15134 = jsprops;return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__15134) : c.call(null,G__15134));
});
reagent.impl.template.tmp = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){if(cljs.core.truth_(reagent.impl.template.tmp.warned))
{return null;
} else
{if(!((console.log == null)))
{console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)));
} else
{}
return reagent.impl.template.tmp.warned = true;
}
});
reagent.impl.template.as_component = (function() {
var as_component = null;
var as_component__1 = (function (x){return as_component.cljs$core$IFn$_invoke$arity$2(x,(0));
});
var as_component__2 = (function (x,level){if(cljs.core.vector_QMARK_(x))
{return reagent.impl.template.vec_to_comp(x,level);
} else
{if(cljs.core.seq_QMARK_(x))
{if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null))))
{var G__15143 = x;var G__15144 = level;return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(G__15143,G__15144) : reagent.impl.template.expand_seq.call(null,G__15143,G__15144));
} else
{var s = reagent.ratom.capture_derefed((function (){var G__15145 = x;var G__15146 = level;return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(G__15145,G__15146) : reagent.impl.template.expand_seq.call(null,G__15145,G__15146));
}),reagent.impl.template.tmp);if(cljs.core.truth_(reagent.ratom.captured(reagent.impl.template.tmp)))
{reagent.impl.template.warn_on_deref(x);
} else
{}
return s;
}
} else
{return x;

}
}
});
as_component = function(x,level){
switch(arguments.length){
case 1:
return as_component__1.call(this,x);
case 2:
return as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_component.cljs$core$IFn$_invoke$arity$1 = as_component__1;
as_component.cljs$core$IFn$_invoke$arity$2 = as_component__2;
return as_component;
})()
;
reagent.impl.template.create_class = (function create_class(spec){return reagent.impl.component.create_class(spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function expand_seq(s,level){var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);var level_SINGLEQUOTE_ = (level + (1));var n__9606__auto___15147 = a.length;var i_15148 = (0);while(true){
if((i_15148 < n__9606__auto___15147))
{(a[i_15148] = reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((a[i_15148]),level_SINGLEQUOTE_));
{
var G__15149 = (i_15148 + (1));
i_15148 = G__15149;
continue;
}
} else
{}
break;
}
return a;
});
reagent.impl.template.convert_args = (function convert_args(argv,first_child,level){var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv);var n__9606__auto___15150 = a.length;var i_15151 = (0);while(true){
if((i_15151 < n__9606__auto___15150))
{if((i_15151 >= first_child))
{(a[i_15151] = reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((a[i_15151]),level));
} else
{}
{
var G__15152 = (i_15151 + (1));
i_15151 = G__15152;
continue;
}
} else
{}
break;
}
if((first_child === (2)))
{a.shift();
} else
{}
return a;
});
