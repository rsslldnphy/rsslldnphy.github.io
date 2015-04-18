// Compiled by ClojureScript 0.0-3058 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__27275_SHARP_){
return (max === p1__27275_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__27276__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27276 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27277__i = 0, G__27277__a = new Array(arguments.length -  2);
while (G__27277__i < G__27277__a.length) {G__27277__a[G__27277__i] = arguments[G__27277__i + 2]; ++G__27277__i;}
  sets = new cljs.core.IndexedSeq(G__27277__a,0);
} 
return G__27276__delegate.call(this,s1,s2,sets);};
G__27276.cljs$lang$maxFixedArity = 2;
G__27276.cljs$lang$applyTo = (function (arglist__27278){
var s1 = cljs.core.first(arglist__27278);
arglist__27278 = cljs.core.next(arglist__27278);
var s2 = cljs.core.first(arglist__27278);
var sets = cljs.core.rest(arglist__27278);
return G__27276__delegate(s1,s2,sets);
});
G__27276.cljs$core$IFn$_invoke$arity$variadic = G__27276__delegate;
return G__27276;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__27279 = null;
if (arguments.length > 2) {
var G__27280__i = 0, G__27280__a = new Array(arguments.length -  2);
while (G__27280__i < G__27280__a.length) {G__27280__a[G__27280__i] = arguments[G__27280__i + 2]; ++G__27280__i;}
G__27279 = new cljs.core.IndexedSeq(G__27280__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__27282 = s2;
var G__27283 = s1;
s1 = G__27282;
s2 = G__27283;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__27284__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__27281_SHARP_){
return (- cljs.core.count.call(null,p1__27281_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure$set$intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27284 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27285__i = 0, G__27285__a = new Array(arguments.length -  2);
while (G__27285__i < G__27285__a.length) {G__27285__a[G__27285__i] = arguments[G__27285__i + 2]; ++G__27285__i;}
  sets = new cljs.core.IndexedSeq(G__27285__a,0);
} 
return G__27284__delegate.call(this,s1,s2,sets);};
G__27284.cljs$lang$maxFixedArity = 2;
G__27284.cljs$lang$applyTo = (function (arglist__27286){
var s1 = cljs.core.first(arglist__27286);
arglist__27286 = cljs.core.next(arglist__27286);
var s2 = cljs.core.first(arglist__27286);
var sets = cljs.core.rest(arglist__27286);
return G__27284__delegate(s1,s2,sets);
});
G__27284.cljs$core$IFn$_invoke$arity$variadic = G__27284__delegate;
return G__27284;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__27287 = null;
if (arguments.length > 2) {
var G__27288__i = 0, G__27288__a = new Array(arguments.length -  2);
while (G__27288__i < G__27288__a.length) {G__27288__a[G__27288__i] = arguments[G__27288__i + 2]; ++G__27288__i;}
G__27287 = new cljs.core.IndexedSeq(G__27288__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__27289__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure$set$difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__27289 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27290__i = 0, G__27290__a = new Array(arguments.length -  2);
while (G__27290__i < G__27290__a.length) {G__27290__a[G__27290__i] = arguments[G__27290__i + 2]; ++G__27290__i;}
  sets = new cljs.core.IndexedSeq(G__27290__a,0);
} 
return G__27289__delegate.call(this,s1,s2,sets);};
G__27289.cljs$lang$maxFixedArity = 2;
G__27289.cljs$lang$applyTo = (function (arglist__27291){
var s1 = cljs.core.first(arglist__27291);
arglist__27291 = cljs.core.next(arglist__27291);
var s2 = cljs.core.first(arglist__27291);
var sets = cljs.core.rest(arglist__27291);
return G__27289__delegate(s1,s2,sets);
});
G__27289.cljs$core$IFn$_invoke$arity$variadic = G__27289__delegate;
return G__27289;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__27292 = null;
if (arguments.length > 2) {
var G__27293__i = 0, G__27293__a = new Array(arguments.length -  2);
while (G__27293__i < G__27293__a.length) {G__27293__a[G__27293__i] = arguments[G__27293__i + 2]; ++G__27293__i;}
G__27292 = new cljs.core.IndexedSeq(G__27293__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27294_SHARP_){
return cljs.core.select_keys.call(null,p1__27294_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__27297){
var vec__27298 = p__27297;
var old = cljs.core.nth.call(null,vec__27298,(0),null);
var new$ = cljs.core.nth.call(null,vec__27298,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27299_SHARP_){
return clojure.set.rename_keys.call(null,p1__27299_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__27302){
var vec__27303 = p__27302;
var k = cljs.core.nth.call(null,vec__27303,(0),null);
var v = cljs.core.nth.call(null,vec__27303,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__27310 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__27310,(0),null);
var s = cljs.core.nth.call(null,vec__27310,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__27310,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__27310,r,s,idx){
return (function (p1__27304_SHARP_,p2__27305_SHARP_){
return cljs.core.conj.call(null,p1__27304_SHARP_,cljs.core.merge.call(null,p2__27305_SHARP_,x));
});})(found,ks,vec__27310,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__27310,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__27311 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__27311,(0),null);
var s = cljs.core.nth.call(null,vec__27311,(1),null);
var k = cljs.core.nth.call(null,vec__27311,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__27311,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__27311,r,s,k,idx){
return (function (p1__27306_SHARP_,p2__27307_SHARP_){
return cljs.core.conj.call(null,p1__27306_SHARP_,cljs.core.merge.call(null,p2__27307_SHARP_,x));
});})(found,vec__27311,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__27311,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27312_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__27312_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27313_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__27313_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map