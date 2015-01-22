// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
reagent.impl.component.cljs_state = "cljsState";
reagent.impl.component.cljs_render = "cljsRender";
reagent.impl.component.state_atom = (function state_atom(this$){var sa = (this$[reagent.impl.component.cljs_state]);if(!((sa == null)))
{return sa;
} else
{return (this$[reagent.impl.component.cljs_state] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){var G__14967 = reagent.impl.component.state_atom(this$);return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14967) : cljs.core.deref.call(null,G__14967));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){var G__14970 = reagent.impl.component.state_atom(this$);var G__14971 = new_state;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14970,G__14971) : cljs.core.reset_BANG_.call(null,G__14970,G__14971));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(C){var _STAR_current_component_STAR_14986 = reagent.impl.component._STAR_current_component_STAR_;try{reagent.impl.component._STAR_current_component_STAR_ = C;
var f = (C[reagent.impl.component.cljs_render]);var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))))})());var p = reagent.impl.util.js_props(C);var res = ((((C["componentFunction"]) == null))?(function (){var G__14987 = C;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14987) : f.call(null,G__14987));
})():(function (){var argv = (p[reagent.impl.util.cljs_argv]);var n = cljs.core.count(argv);var G__14988 = n;switch (G__14988) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__14989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14989) : f.call(null,G__14989));

break;
case (3):
var G__14990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__14991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14990,G__14991) : f.call(null,G__14990,G__14991));

break;
case (4):
var G__14992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__14993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__14994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14992,G__14993,G__14994) : f.call(null,G__14992,G__14993,G__14994));

break;
case (5):
var G__14995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));var G__14996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));var G__14997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));var G__14998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__14995,G__14996,G__14997,G__14998) : f.call(null,G__14995,G__14996,G__14997,G__14998));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());if(cljs.core.vector_QMARK_(res))
{return C.asComponent(res,(p[reagent.impl.util.cljs_level]));
} else
{if(cljs.core.ifn_QMARK_(res))
{(C[reagent.impl.component.cljs_render] = res);
return do_render(C);
} else
{return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_14986;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__15012 = (((key instanceof cljs.core.Keyword))?key.fqn:null);switch (G__15012) {
case "componentWillUnmount":
return ((function (G__15012){
return (function (){var C = this;reagent.impl.batching.dispose(C);
if((f == null))
{return null;
} else
{var G__15013 = C;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15013) : f.call(null,G__15013));
}
});
;})(G__15012))

break;
case "componentDidUpdate":
return ((function (G__15012){
return (function (oldprops){var C = this;var old_argv = (oldprops[reagent.impl.util.cljs_argv]);var G__15014 = C;var G__15015 = old_argv;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15014,G__15015) : f.call(null,G__15014,G__15015));
});
;})(G__15012))

break;
case "componentWillUpdate":
return ((function (G__15012){
return (function (nextprops){var C = this;var next_argv = (nextprops[reagent.impl.util.cljs_argv]);var G__15016 = C;var G__15017 = next_argv;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15016,G__15017) : f.call(null,G__15016,G__15017));
});
;})(G__15012))

break;
case "shouldComponentUpdate":
return ((function (G__15012){
return (function (nextprops,nextstate){var C = this;var inprops = reagent.impl.util.js_props(C);var old_argv = (inprops[reagent.impl.util.cljs_argv]);var new_argv = (nextprops[reagent.impl.util.cljs_argv]);if((f == null))
{return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else
{var G__15018 = C;var G__15019 = old_argv;var G__15020 = new_argv;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15018,G__15019,G__15020) : f.call(null,G__15018,G__15019,G__15020));
}
});
;})(G__15012))

break;
case "componentWillReceiveProps":
return ((function (G__15012){
return (function (props){var C = this;var G__15021 = C;var G__15022 = (props[reagent.impl.util.cljs_argv]);return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15021,G__15022) : f.call(null,G__15021,G__15022));
});
;})(G__15012))

break;
case "getInitialState":
return ((function (G__15012){
return (function (){var C = this;return reagent.impl.component.set_state(C,(function (){var G__15023 = C;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15023) : f.call(null,G__15023));
})());
});
;})(G__15012))

break;
case "getDefaultProps":
throw (new Error(("Assert failed: getDefaultProps not supported yet\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.ifn_QMARK_(f))
{return (function() { 
var G__15025__delegate = function (args){var C = this;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,C,args);
};
var G__15025 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15025__delegate.call(this,args);};
G__15025.cljs$lang$maxFixedArity = 0;
G__15025.cljs$lang$applyTo = (function (arglist__15026){
var args = cljs.core.seq(arglist__15026);
return G__15025__delegate(args);
});
G__15025.cljs$core$IFn$_invoke$arity$variadic = G__15025__delegate;
return G__15025;
})()
;
} else
{return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$22,null,cljs.core.constant$keyword$23,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){if(cljs.core.ifn_QMARK_(f))
{var G__15028 = f;(G__15028["__reactDontBind"] = true);
return G__15028;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){if(cljs.core.truth_((function (){var G__15030 = key;return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__15030) : reagent.impl.component.dont_wrap.call(null,G__15030));
})()))
{return reagent.impl.component.dont_bind(f);
} else
{var wrap = reagent.impl.component.custom_wrapper(key,f);if(cljs.core.truth_((function (){var and__8724__auto__ = wrap;if(cljs.core.truth_(and__8724__auto__))
{return f;
} else
{return and__8724__auto__;
}
})()))
{if(cljs.core.ifn_QMARK_(f))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Expected function in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0))))));
}
} else
{}
var or__8736__auto__ = wrap;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){return cljs.core.reduce_kv((function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__15032 = k;return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__15032) : reagent.impl.component.dash_to_camel.call(null,G__15032));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$21,render_f,cljs.core.array_seq([cljs.core.constant$keyword$22,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){var C = this;return reagent.impl.batching.run_reactively(C,((function (C){
return (function (){return reagent.impl.component.do_render(C);
});})(C))
);
}):(function (){var C = this;return reagent.impl.component.do_render(C);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){var render_fun = (function (){var or__8736__auto__ = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Render must be a function, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0))))))})());var name = (function (){var or__8736__auto__ = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = render_fun.displayName;if(cljs.core.truth_(or__8736__auto____$1))
{return or__8736__auto____$1;
} else
{return render_fun.name;
}
}
})();var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))):name);var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$26,name_SINGLEQUOTE_),render_fun);return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){return cljs.core.reduce_kv((function (o,k,v){var G__15034 = o;(G__15034[cljs.core.name(k)] = v);
return G__15034;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){if(cljs.core.map_QMARK_(body))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0))))));
}
var spec = reagent.impl.component.cljsify(body);var _ = spec.asComponent = reagent.impl.component.dont_bind(as_component);var res = reagent.impl.util.React.createClass(spec);var f = ((function (spec,_,res){
return (function() { 
var G__15037__delegate = function (args){var G__15036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(G__15036) : as_component.call(null,G__15036));
};
var G__15037 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15037__delegate.call(this,args);};
G__15037.cljs$lang$maxFixedArity = 0;
G__15037.cljs$lang$applyTo = (function (arglist__15038){
var args = cljs.core.seq(arglist__15038);
return G__15037__delegate(args);
});
G__15037.cljs$core$IFn$_invoke$arity$variadic = G__15037__delegate;
return G__15037;
})()
;})(spec,_,res))
;f.cljsReactClass = res;
res.cljsReactClass = res;
return f;
});
