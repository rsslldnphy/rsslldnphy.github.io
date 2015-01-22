// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__15153 = (0);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15153) : cljs.core.atom.call(null,G__15153));
})();
reagent.ratom.running = (function running(){var G__15155 = reagent.ratom._running;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15155) : cljs.core.deref.call(null,G__15155));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_15157 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_15157;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write(writer__9314__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15158 = this$__$1;return goog.getUid(G__15158);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){var G__15159_15170 = key;var G__15160_15171 = this$__$1;var G__15161_15172 = oldval;var G__15162_15173 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15159_15170,G__15160_15171,G__15161_15172,G__15162_15173) : f.call(null,G__15159_15170,G__15160_15171,G__15161_15172,G__15162_15173));
return null;
});})(this$__$1))
,null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15163 = self__.state;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15163) : f.call(null,G__15163));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15164 = self__.state;var G__15165 = x;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15164,G__15165) : f.call(null,G__15164,G__15165));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15166 = self__.state;var G__15167 = x;var G__15168 = y;return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15166,G__15167,G__15168) : f.call(null,G__15166,G__15167,G__15168));
})());
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_((function (){var G__15169 = new_value;return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__15169) : self__.validator.call(null,G__15169));
})()))
{} else
{throw (new Error(("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0))))));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches(a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__15177__delegate = function (x,p__15174){var map__15176 = p__15174;var map__15176__$1 = ((cljs.core.seq_QMARK_(map__15176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15176):map__15176);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15176__$1,cljs.core.constant$keyword$8);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15176__$1,cljs.core.constant$keyword$3);return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__15177 = function (x,var_args){
var p__15174 = null;if (arguments.length > 1) {
  p__15174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15177__delegate.call(this,x,p__15174);};
G__15177.cljs$lang$maxFixedArity = 1;
G__15177.cljs$lang$applyTo = (function (arglist__15178){
var x = cljs.core.first(arglist__15178);
var p__15174 = cljs.core.rest(arglist__15178);
return G__15177__delegate(x,p__15174);
});
G__15177.cljs$core$IFn$_invoke$arity$variadic = G__15177__delegate;
return G__15177;
})()
;
atom = function(x,var_args){
var p__15174 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj15180 = {};return obj15180;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__8724__auto__ = this$;if(and__8724__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__8724__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__9373__auto__ = (((this$ == null))?null:this$);return (function (){var or__8736__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__15184 = x__9373__auto__;return goog.typeOf(G__15184);
})()]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj15186 = {};return obj15186;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__8724__auto__ = this$;if(and__8724__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__8724__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__9373__auto__ = (((this$ == null))?null:this$);return (function (){var or__8736__auto__ = (reagent.ratom.run[(function (){var G__15190 = x__9373__auto__;return goog.typeOf(G__15190);
})()]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (reagent.ratom.run["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj15192 = {};return obj15192;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__8724__auto__ = this$;if(and__8724__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__8724__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__9373__auto__ = (((this$ == null))?null:this$);return (function (){var or__8736__auto__ = (reagent.ratom._update_watching[(function (){var G__15196 = x__9373__auto__;return goog.typeOf(G__15196);
})()]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__8724__auto__ = k;if(and__8724__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__8724__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__9373__auto__ = (((k == null))?null:k);return (function (){var or__8736__auto__ = (reagent.ratom._handle_change[(function (){var G__15200 = x__9373__auto__;return goog.typeOf(G__15200);
})()]);if(or__8736__auto__)
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__8736__auto____$1)
{return or__8736__auto____$1;
} else
{throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv((function (_,key,f){var G__15205_15209 = key;var G__15206_15210 = obs;var G__15207_15211 = oldval;var G__15208_15212 = newval;(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15205_15209,G__15206_15210,G__15207_15211,G__15208_15212) : f.call(null,G__15205_15209,G__15206_15210,G__15207_15211,G__15208_15212));
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write(writer__9314__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__8724__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__8724__auto__))
{return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__8724__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__8736__auto__ = self__.auto_run;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__15213_15234 = cljs.core.seq(derefed);var chunk__15214_15235 = null;var count__15215_15236 = (0);var i__15216_15237 = (0);while(true){
if((i__15216_15237 < count__15215_15236))
{var w_15238 = chunk__15214_15235.cljs$core$IIndexed$_nth$arity$2(null,i__15216_15237);if(cljs.core.contains_QMARK_(self__.watching,w_15238))
{} else
{cljs.core.add_watch(w_15238,this$__$1,reagent.ratom._handle_change);
}
{
var G__15239 = seq__15213_15234;
var G__15240 = chunk__15214_15235;
var G__15241 = count__15215_15236;
var G__15242 = (i__15216_15237 + (1));
seq__15213_15234 = G__15239;
chunk__15214_15235 = G__15240;
count__15215_15236 = G__15241;
i__15216_15237 = G__15242;
continue;
}
} else
{var temp__4126__auto___15243 = cljs.core.seq(seq__15213_15234);if(temp__4126__auto___15243)
{var seq__15213_15244__$1 = temp__4126__auto___15243;if(cljs.core.chunked_seq_QMARK_(seq__15213_15244__$1))
{var c__9506__auto___15245 = cljs.core.chunk_first(seq__15213_15244__$1);{
var G__15246 = cljs.core.chunk_rest(seq__15213_15244__$1);
var G__15247 = c__9506__auto___15245;
var G__15248 = cljs.core.count(c__9506__auto___15245);
var G__15249 = (0);
seq__15213_15234 = G__15246;
chunk__15214_15235 = G__15247;
count__15215_15236 = G__15248;
i__15216_15237 = G__15249;
continue;
}
} else
{var w_15250 = cljs.core.first(seq__15213_15244__$1);if(cljs.core.contains_QMARK_(self__.watching,w_15250))
{} else
{cljs.core.add_watch(w_15250,this$__$1,reagent.ratom._handle_change);
}
{
var G__15251 = cljs.core.next(seq__15213_15244__$1);
var G__15252 = null;
var G__15253 = (0);
var G__15254 = (0);
seq__15213_15234 = G__15251;
chunk__15214_15235 = G__15252;
count__15215_15236 = G__15253;
i__15216_15237 = G__15254;
continue;
}
}
} else
{}
}
break;
}
var seq__15217_15255 = cljs.core.seq(self__.watching);var chunk__15218_15256 = null;var count__15219_15257 = (0);var i__15220_15258 = (0);while(true){
if((i__15220_15258 < count__15219_15257))
{var w_15259 = chunk__15218_15256.cljs$core$IIndexed$_nth$arity$2(null,i__15220_15258);if(cljs.core.contains_QMARK_(derefed,w_15259))
{} else
{cljs.core.remove_watch(w_15259,this$__$1);
}
{
var G__15260 = seq__15217_15255;
var G__15261 = chunk__15218_15256;
var G__15262 = count__15219_15257;
var G__15263 = (i__15220_15258 + (1));
seq__15217_15255 = G__15260;
chunk__15218_15256 = G__15261;
count__15219_15257 = G__15262;
i__15220_15258 = G__15263;
continue;
}
} else
{var temp__4126__auto___15264 = cljs.core.seq(seq__15217_15255);if(temp__4126__auto___15264)
{var seq__15217_15265__$1 = temp__4126__auto___15264;if(cljs.core.chunked_seq_QMARK_(seq__15217_15265__$1))
{var c__9506__auto___15266 = cljs.core.chunk_first(seq__15217_15265__$1);{
var G__15267 = cljs.core.chunk_rest(seq__15217_15265__$1);
var G__15268 = c__9506__auto___15266;
var G__15269 = cljs.core.count(c__9506__auto___15266);
var G__15270 = (0);
seq__15217_15255 = G__15267;
chunk__15218_15256 = G__15268;
count__15219_15257 = G__15269;
i__15220_15258 = G__15270;
continue;
}
} else
{var w_15271 = cljs.core.first(seq__15217_15265__$1);if(cljs.core.contains_QMARK_(derefed,w_15271))
{} else
{cljs.core.remove_watch(w_15271,this$__$1);
}
{
var G__15272 = cljs.core.next(seq__15217_15265__$1);
var G__15273 = null;
var G__15274 = (0);
var G__15275 = (0);
seq__15217_15255 = G__15272;
chunk__15218_15256 = G__15273;
count__15219_15257 = G__15274;
i__15220_15258 = G__15275;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write(writer,("#<Reaction "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(this$__$1))+": "));
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var G__15221 = this$__$1;return goog.getUid(G__15221);
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__15222_15276 = cljs.core.seq(self__.watching);var chunk__15223_15277 = null;var count__15224_15278 = (0);var i__15225_15279 = (0);while(true){
if((i__15225_15279 < count__15224_15278))
{var w_15280 = chunk__15223_15277.cljs$core$IIndexed$_nth$arity$2(null,i__15225_15279);cljs.core.remove_watch(w_15280,this$__$1);
{
var G__15281 = seq__15222_15276;
var G__15282 = chunk__15223_15277;
var G__15283 = count__15224_15278;
var G__15284 = (i__15225_15279 + (1));
seq__15222_15276 = G__15281;
chunk__15223_15277 = G__15282;
count__15224_15278 = G__15283;
i__15225_15279 = G__15284;
continue;
}
} else
{var temp__4126__auto___15285 = cljs.core.seq(seq__15222_15276);if(temp__4126__auto___15285)
{var seq__15222_15286__$1 = temp__4126__auto___15285;if(cljs.core.chunked_seq_QMARK_(seq__15222_15286__$1))
{var c__9506__auto___15287 = cljs.core.chunk_first(seq__15222_15286__$1);{
var G__15288 = cljs.core.chunk_rest(seq__15222_15286__$1);
var G__15289 = c__9506__auto___15287;
var G__15290 = cljs.core.count(c__9506__auto___15287);
var G__15291 = (0);
seq__15222_15276 = G__15288;
chunk__15223_15277 = G__15289;
count__15224_15278 = G__15290;
i__15225_15279 = G__15291;
continue;
}
} else
{var w_15292 = cljs.core.first(seq__15222_15286__$1);cljs.core.remove_watch(w_15292,this$__$1);
{
var G__15293 = cljs.core.next(seq__15222_15286__$1);
var G__15294 = null;
var G__15295 = (0);
var G__15296 = (0);
seq__15222_15276 = G__15293;
chunk__15223_15277 = G__15294;
count__15224_15278 = G__15295;
i__15225_15279 = G__15296;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches(a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15226 = self__.state;return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__15226) : f__$1.call(null,G__15226));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15227 = self__.state;var G__15228 = x;return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__15227,G__15228) : f__$1.call(null,G__15227,G__15228));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,(function (){var G__15229 = self__.state;var G__15230 = x;var G__15231 = y;return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__15229,G__15230,G__15231) : f__$1.call(null,G__15229,G__15230,G__15231));
})());
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed(self__.f,this$__$1);var derefed = reagent.ratom.captured(this$__$1);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching))
{reagent.ratom._update_watching(this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{var G__15232_15297 = oldval;var G__15233_15298 = newval;(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__15232_15297,G__15233_15298) : self__.on_set.call(null,G__15232_15297,G__15233_15298));
} else
{}
return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
if(cljs.core.empty_QMARK_(self__.watches))
{return reagent.ratom.dispose_BANG_(this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not((function (){var or__8736__auto__ = self__.auto_run;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__14622__auto___15299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("dbg reagent.ratom:"+177+": [auto-run *ratom-context*]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__14622__auto___15299], 0)))))));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__8736__auto__ = self__.auto_run;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error(("Assert failed: Reaction derefed outside auto-running context\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0))))));
}
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run(this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__15300){var map__15302 = p__15300;var map__15302__$1 = ((cljs.core.seq_QMARK_(map__15302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15302):map__15302);var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15302__$1,cljs.core.constant$keyword$17);var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15302__$1,cljs.core.constant$keyword$18);var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15302__$1,cljs.core.constant$keyword$19);var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15302__$1,cljs.core.constant$keyword$20);var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else
{}
reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__15300 = null;if (arguments.length > 1) {
  p__15300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__15300);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__15303){
var f = cljs.core.first(arglist__15303);
var p__15300 = cljs.core.rest(arglist__15303);
return make_reaction__delegate(f,p__15300);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
