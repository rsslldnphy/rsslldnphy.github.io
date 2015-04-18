// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31616_31620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31617_31621 = null;
var count__31618_31622 = (0);
var i__31619_31623 = (0);
while(true){
if((i__31619_31623 < count__31618_31622)){
var f_31624 = cljs.core._nth.call(null,chunk__31617_31621,i__31619_31623);
cljs.core.println.call(null,"  ",f_31624);

var G__31625 = seq__31616_31620;
var G__31626 = chunk__31617_31621;
var G__31627 = count__31618_31622;
var G__31628 = (i__31619_31623 + (1));
seq__31616_31620 = G__31625;
chunk__31617_31621 = G__31626;
count__31618_31622 = G__31627;
i__31619_31623 = G__31628;
continue;
} else {
var temp__4126__auto___31629 = cljs.core.seq.call(null,seq__31616_31620);
if(temp__4126__auto___31629){
var seq__31616_31630__$1 = temp__4126__auto___31629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31616_31630__$1)){
var c__16976__auto___31631 = cljs.core.chunk_first.call(null,seq__31616_31630__$1);
var G__31632 = cljs.core.chunk_rest.call(null,seq__31616_31630__$1);
var G__31633 = c__16976__auto___31631;
var G__31634 = cljs.core.count.call(null,c__16976__auto___31631);
var G__31635 = (0);
seq__31616_31620 = G__31632;
chunk__31617_31621 = G__31633;
count__31618_31622 = G__31634;
i__31619_31623 = G__31635;
continue;
} else {
var f_31636 = cljs.core.first.call(null,seq__31616_31630__$1);
cljs.core.println.call(null,"  ",f_31636);

var G__31637 = cljs.core.next.call(null,seq__31616_31630__$1);
var G__31638 = null;
var G__31639 = (0);
var G__31640 = (0);
seq__31616_31620 = G__31637;
chunk__31617_31621 = G__31638;
count__31618_31622 = G__31639;
i__31619_31623 = G__31640;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__16189__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map