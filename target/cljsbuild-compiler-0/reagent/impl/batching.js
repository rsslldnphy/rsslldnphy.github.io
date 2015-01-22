// Compiled by ClojureScript 0.0-2371
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.impl.batching.fake_raf = (function fake_raf(f){var G__15041 = f;var G__15042 = (16);return setTimeout(G__15041,G__15042);
});
reagent.impl.batching.next_tick = ((cljs.core.not(reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;var or__8736__auto__ = w.requestAnimationFrame;if(cljs.core.truth_(or__8736__auto__))
{return or__8736__auto__;
} else
{var or__8736__auto____$1 = w.webkitRequestAnimationFrame;if(cljs.core.truth_(or__8736__auto____$1))
{return or__8736__auto____$1;
} else
{var or__8736__auto____$2 = w.mozRequestAnimationFrame;if(cljs.core.truth_(or__8736__auto____$2))
{return or__8736__auto____$2;
} else
{var or__8736__auto____$3 = w.msRequestAnimationFrame;if(cljs.core.truth_(or__8736__auto____$3))
{return or__8736__auto____$3;
} else
{return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_levels = (function compare_levels(c1,c2){return (((c1["props"])[reagent.impl.util.cljs_level]) - ((c2["props"])[reagent.impl.util.cljs_level]));
});
reagent.impl.batching.run_queue = (function run_queue(a){a.sort(reagent.impl.batching.compare_levels);
var n__9606__auto__ = a.length;var i = (0);while(true){
if((i < n__9606__auto__))
{var C_15043 = (a[i]);if(cljs.core.truth_(C_15043.cljsIsDirty))
{C_15043.forceUpdate();
} else
{}
{
var G__15044 = (i + (1));
i = G__15044;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.cljs$lang$type = true;
reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";
reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__9313__auto__,writer__9314__auto__,opt__9315__auto__){return cljs.core._write(writer__9314__auto__,"reagent.impl.batching/RenderQueue");
});
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (C){var self__ = this;
var this$ = this;self__.queue.push(C);
return this$.schedule();
});
reagent.impl.batching.RenderQueue.prototype.schedule = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_(self__.scheduled_QMARK_))
{return null;
} else
{self__.scheduled_QMARK_ = true;
var G__15045 = ((function (this$){
return (function (){return this$.run_queue();
});})(this$))
;return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__15045) : reagent.impl.batching.next_tick.call(null,G__15045));
}
});
reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){var self__ = this;
var _ = this;var q = self__.queue;self__.queue = [];
self__.scheduled_QMARK_ = false;
return reagent.impl.batching.run_queue(q);
});
reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_){return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_));
});
reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false));
reagent.impl.batching.flush = (function flush(){return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function queue_render(C){C.cljsIsDirty = true;
return reagent.impl.batching.render_queue.queue_render(C);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(C){return C.cljsIsDirty = false;
});
reagent.impl.batching.is_reagent_component = (function is_reagent_component(C){var and__8724__auto__ = !((C == null));if(and__8724__auto__)
{var and__8724__auto____$1 = (C["props"]);if(cljs.core.truth_(and__8724__auto____$1))
{return ((C["props"])["cljsArgv"]);
} else
{return and__8724__auto____$1;
}
} else
{return and__8724__auto__;
}
});
reagent.impl.batching.run_reactively = (function run_reactively(C,run){if(cljs.core.truth_(reagent.impl.batching.is_reagent_component(C)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"is-reagent-component","is-reagent-component",-1856228005,null),new cljs.core.Symbol(null,"C","C",1466901940,null))], 0))))));
}
reagent.impl.batching.mark_rendered(C);
var rat = C.cljsRatom;if((rat == null))
{var res = reagent.ratom.capture_derefed(run,C);var derefed = reagent.ratom.captured(C);if(!((derefed == null)))
{C.cljsRatom = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(run,cljs.core.array_seq([cljs.core.constant$keyword$20,((function (res,derefed,rat){
return (function (){return reagent.impl.batching.queue_render(C);
});})(res,derefed,rat))
,cljs.core.constant$keyword$17,derefed], 0));
} else
{}
return res;
} else
{return reagent.ratom.run(rat);
}
});
reagent.impl.batching.dispose = (function dispose(C){var ratom_15046 = C.cljsRatom;if(!((ratom_15046 == null)))
{reagent.ratom.dispose_BANG_(ratom_15046);
} else
{}
return reagent.impl.batching.mark_rendered(C);
});
