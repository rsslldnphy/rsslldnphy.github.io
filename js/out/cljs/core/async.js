// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27397 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27397 = (function (f,fn_handler,meta27398){
this.f = f;
this.fn_handler = fn_handler;
this.meta27398 = meta27398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27397.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27399){
var self__ = this;
var _27399__$1 = this;
return self__.meta27398;
});

cljs.core.async.t27397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27399,meta27398__$1){
var self__ = this;
var _27399__$1 = this;
return (new cljs.core.async.t27397(self__.f,self__.fn_handler,meta27398__$1));
});

cljs.core.async.t27397.cljs$lang$type = true;

cljs.core.async.t27397.cljs$lang$ctorStr = "cljs.core.async/t27397";

cljs.core.async.t27397.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t27397");
});

cljs.core.async.__GT_t27397 = (function cljs$core$async$fn_handler_$___GT_t27397(f__$1,fn_handler__$1,meta27398){
return (new cljs.core.async.t27397(f__$1,fn_handler__$1,meta27398));
});

}

return (new cljs.core.async.t27397(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27401 = buff;
if(G__27401){
var bit__16870__auto__ = null;
if(cljs.core.truth_((function (){var or__16189__auto__ = bit__16870__auto__;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return G__27401.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27401.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27401);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27401);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27402 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27402);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27402,ret){
return (function (){
return fn1.call(null,val_27402);
});})(val_27402,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17076__auto___27403 = n;
var x_27404 = (0);
while(true){
if((x_27404 < n__17076__auto___27403)){
(a[x_27404] = (0));

var G__27405 = (x_27404 + (1));
x_27404 = G__27405;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27406 = (i + (1));
i = G__27406;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27410 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27410 = (function (flag,alt_flag,meta27411){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27411 = meta27411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27410.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27410.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27410.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27412){
var self__ = this;
var _27412__$1 = this;
return self__.meta27411;
});})(flag))
;

cljs.core.async.t27410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27412,meta27411__$1){
var self__ = this;
var _27412__$1 = this;
return (new cljs.core.async.t27410(self__.flag,self__.alt_flag,meta27411__$1));
});})(flag))
;

cljs.core.async.t27410.cljs$lang$type = true;

cljs.core.async.t27410.cljs$lang$ctorStr = "cljs.core.async/t27410";

cljs.core.async.t27410.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t27410");
});})(flag))
;

cljs.core.async.__GT_t27410 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27410(flag__$1,alt_flag__$1,meta27411){
return (new cljs.core.async.t27410(flag__$1,alt_flag__$1,meta27411));
});})(flag))
;

}

return (new cljs.core.async.t27410(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27416 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27416 = (function (cb,flag,alt_handler,meta27417){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27417 = meta27417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27416.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27418){
var self__ = this;
var _27418__$1 = this;
return self__.meta27417;
});

cljs.core.async.t27416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27418,meta27417__$1){
var self__ = this;
var _27418__$1 = this;
return (new cljs.core.async.t27416(self__.cb,self__.flag,self__.alt_handler,meta27417__$1));
});

cljs.core.async.t27416.cljs$lang$type = true;

cljs.core.async.t27416.cljs$lang$ctorStr = "cljs.core.async/t27416";

cljs.core.async.t27416.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t27416");
});

cljs.core.async.__GT_t27416 = (function cljs$core$async$alt_handler_$___GT_t27416(cb__$1,flag__$1,alt_handler__$1,meta27417){
return (new cljs.core.async.t27416(cb__$1,flag__$1,alt_handler__$1,meta27417));
});

}

return (new cljs.core.async.t27416(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27419_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27419_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27420_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27420_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16189__auto__ = wport;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27421 = (i + (1));
i = G__27421;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16189__auto__ = ret;
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__16177__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16177__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16177__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__27422){
var map__27424 = p__27422;
var map__27424__$1 = ((cljs.core.seq_QMARK_.call(null,map__27424))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var opts = map__27424__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__27422 = null;
if (arguments.length > 1) {
var G__27425__i = 0, G__27425__a = new Array(arguments.length -  1);
while (G__27425__i < G__27425__a.length) {G__27425__a[G__27425__i] = arguments[G__27425__i + 1]; ++G__27425__i;}
  p__27422 = new cljs.core.IndexedSeq(G__27425__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__27422);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__27426){
var ports = cljs.core.first(arglist__27426);
var p__27422 = cljs.core.rest(arglist__27426);
return cljs$core$async$alts_BANG___delegate(ports,p__27422);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__18370__auto___27521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___27521){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___27521){
return (function (state_27497){
var state_val_27498 = (state_27497[(1)]);
if((state_val_27498 === (7))){
var inst_27493 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
var statearr_27499_27522 = state_27497__$1;
(statearr_27499_27522[(2)] = inst_27493);

(statearr_27499_27522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (1))){
var state_27497__$1 = state_27497;
var statearr_27500_27523 = state_27497__$1;
(statearr_27500_27523[(2)] = null);

(statearr_27500_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (4))){
var inst_27476 = (state_27497[(7)]);
var inst_27476__$1 = (state_27497[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var state_27497__$1 = (function (){var statearr_27501 = state_27497;
(statearr_27501[(7)] = inst_27476__$1);

return statearr_27501;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27502_27524 = state_27497__$1;
(statearr_27502_27524[(1)] = (5));

} else {
var statearr_27503_27525 = state_27497__$1;
(statearr_27503_27525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (13))){
var state_27497__$1 = state_27497;
var statearr_27504_27526 = state_27497__$1;
(statearr_27504_27526[(2)] = null);

(statearr_27504_27526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (6))){
var inst_27476 = (state_27497[(7)]);
var state_27497__$1 = state_27497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27497__$1,(11),to,inst_27476);
} else {
if((state_val_27498 === (3))){
var inst_27495 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27497__$1,inst_27495);
} else {
if((state_val_27498 === (12))){
var state_27497__$1 = state_27497;
var statearr_27505_27527 = state_27497__$1;
(statearr_27505_27527[(2)] = null);

(statearr_27505_27527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (2))){
var state_27497__$1 = state_27497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27497__$1,(4),from);
} else {
if((state_val_27498 === (11))){
var inst_27486 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
if(cljs.core.truth_(inst_27486)){
var statearr_27506_27528 = state_27497__$1;
(statearr_27506_27528[(1)] = (12));

} else {
var statearr_27507_27529 = state_27497__$1;
(statearr_27507_27529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (9))){
var state_27497__$1 = state_27497;
var statearr_27508_27530 = state_27497__$1;
(statearr_27508_27530[(2)] = null);

(statearr_27508_27530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (5))){
var state_27497__$1 = state_27497;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27509_27531 = state_27497__$1;
(statearr_27509_27531[(1)] = (8));

} else {
var statearr_27510_27532 = state_27497__$1;
(statearr_27510_27532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (14))){
var inst_27491 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
var statearr_27511_27533 = state_27497__$1;
(statearr_27511_27533[(2)] = inst_27491);

(statearr_27511_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (10))){
var inst_27483 = (state_27497[(2)]);
var state_27497__$1 = state_27497;
var statearr_27512_27534 = state_27497__$1;
(statearr_27512_27534[(2)] = inst_27483);

(statearr_27512_27534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27498 === (8))){
var inst_27480 = cljs.core.async.close_BANG_.call(null,to);
var state_27497__$1 = state_27497;
var statearr_27513_27535 = state_27497__$1;
(statearr_27513_27535[(2)] = inst_27480);

(statearr_27513_27535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___27521))
;
return ((function (switch__18314__auto__,c__18370__auto___27521){
return (function() {
var cljs$core$async$pipe_$_state_machine__18315__auto__ = null;
var cljs$core$async$pipe_$_state_machine__18315__auto____0 = (function (){
var statearr_27517 = [null,null,null,null,null,null,null,null];
(statearr_27517[(0)] = cljs$core$async$pipe_$_state_machine__18315__auto__);

(statearr_27517[(1)] = (1));

return statearr_27517;
});
var cljs$core$async$pipe_$_state_machine__18315__auto____1 = (function (state_27497){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27518){if((e27518 instanceof Object)){
var ex__18318__auto__ = e27518;
var statearr_27519_27536 = state_27497;
(statearr_27519_27536[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27497;
state_27497 = G__27537;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__18315__auto__ = function(state_27497){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__18315__auto____1.call(this,state_27497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__18315__auto____0;
cljs$core$async$pipe_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__18315__auto____1;
return cljs$core$async$pipe_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___27521))
})();
var state__18372__auto__ = (function (){var statearr_27520 = f__18371__auto__.call(null);
(statearr_27520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27521);

return statearr_27520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___27521))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27721){
var vec__27722 = p__27721;
var v = cljs.core.nth.call(null,vec__27722,(0),null);
var p = cljs.core.nth.call(null,vec__27722,(1),null);
var job = vec__27722;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18370__auto___27904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results){
return (function (state_27727){
var state_val_27728 = (state_27727[(1)]);
if((state_val_27728 === (2))){
var inst_27724 = (state_27727[(2)]);
var inst_27725 = cljs.core.async.close_BANG_.call(null,res);
var state_27727__$1 = (function (){var statearr_27729 = state_27727;
(statearr_27729[(7)] = inst_27724);

return statearr_27729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27727__$1,inst_27725);
} else {
if((state_val_27728 === (1))){
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27727__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results))
;
return ((function (switch__18314__auto__,c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_27733 = [null,null,null,null,null,null,null,null];
(statearr_27733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__);

(statearr_27733[(1)] = (1));

return statearr_27733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1 = (function (state_27727){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27734){if((e27734 instanceof Object)){
var ex__18318__auto__ = e27734;
var statearr_27735_27905 = state_27727;
(statearr_27735_27905[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27906 = state_27727;
state_27727 = G__27906;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = function(state_27727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1.call(this,state_27727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results))
})();
var state__18372__auto__ = (function (){var statearr_27736 = f__18371__auto__.call(null);
(statearr_27736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27904);

return statearr_27736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___27904,res,vec__27722,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27737){
var vec__27738 = p__27737;
var v = cljs.core.nth.call(null,vec__27738,(0),null);
var p = cljs.core.nth.call(null,vec__27738,(1),null);
var job = vec__27738;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17076__auto___27907 = n;
var __27908 = (0);
while(true){
if((__27908 < n__17076__auto___27907)){
var G__27739_27909 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27739_27909) {
case "async":
var c__18370__auto___27911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27908,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (__27908,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (7))){
var inst_27748 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27754_27912 = state_27752__$1;
(statearr_27754_27912[(2)] = inst_27748);

(statearr_27754_27912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (6))){
var state_27752__$1 = state_27752;
var statearr_27755_27913 = state_27752__$1;
(statearr_27755_27913[(2)] = null);

(statearr_27755_27913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (5))){
var state_27752__$1 = state_27752;
var statearr_27756_27914 = state_27752__$1;
(statearr_27756_27914[(2)] = null);

(statearr_27756_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (4))){
var inst_27742 = (state_27752[(2)]);
var inst_27743 = async.call(null,inst_27742);
var state_27752__$1 = state_27752;
if(cljs.core.truth_(inst_27743)){
var statearr_27757_27915 = state_27752__$1;
(statearr_27757_27915[(1)] = (5));

} else {
var statearr_27758_27916 = state_27752__$1;
(statearr_27758_27916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (3))){
var inst_27750 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
if((state_val_27753 === (2))){
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(4),jobs);
} else {
if((state_val_27753 === (1))){
var state_27752__$1 = state_27752;
var statearr_27759_27917 = state_27752__$1;
(statearr_27759_27917[(2)] = null);

(statearr_27759_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27908,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
;
return ((function (__27908,switch__18314__auto__,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_27763 = [null,null,null,null,null,null,null];
(statearr_27763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__);

(statearr_27763[(1)] = (1));

return statearr_27763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1 = (function (state_27752){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27764){if((e27764 instanceof Object)){
var ex__18318__auto__ = e27764;
var statearr_27765_27918 = state_27752;
(statearr_27765_27918[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27919 = state_27752;
state_27752 = G__27919;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__;
})()
;})(__27908,switch__18314__auto__,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
})();
var state__18372__auto__ = (function (){var statearr_27766 = f__18371__auto__.call(null);
(statearr_27766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27911);

return statearr_27766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(__27908,c__18370__auto___27911,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
);


break;
case "compute":
var c__18370__auto___27920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27908,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (__27908,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function (state_27779){
var state_val_27780 = (state_27779[(1)]);
if((state_val_27780 === (7))){
var inst_27775 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
var statearr_27781_27921 = state_27779__$1;
(statearr_27781_27921[(2)] = inst_27775);

(statearr_27781_27921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (6))){
var state_27779__$1 = state_27779;
var statearr_27782_27922 = state_27779__$1;
(statearr_27782_27922[(2)] = null);

(statearr_27782_27922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (5))){
var state_27779__$1 = state_27779;
var statearr_27783_27923 = state_27779__$1;
(statearr_27783_27923[(2)] = null);

(statearr_27783_27923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (4))){
var inst_27769 = (state_27779[(2)]);
var inst_27770 = process.call(null,inst_27769);
var state_27779__$1 = state_27779;
if(cljs.core.truth_(inst_27770)){
var statearr_27784_27924 = state_27779__$1;
(statearr_27784_27924[(1)] = (5));

} else {
var statearr_27785_27925 = state_27779__$1;
(statearr_27785_27925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (3))){
var inst_27777 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27779__$1,inst_27777);
} else {
if((state_val_27780 === (2))){
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27779__$1,(4),jobs);
} else {
if((state_val_27780 === (1))){
var state_27779__$1 = state_27779;
var statearr_27786_27926 = state_27779__$1;
(statearr_27786_27926[(2)] = null);

(statearr_27786_27926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27908,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
;
return ((function (__27908,switch__18314__auto__,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_27790 = [null,null,null,null,null,null,null];
(statearr_27790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__);

(statearr_27790[(1)] = (1));

return statearr_27790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1 = (function (state_27779){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27791){if((e27791 instanceof Object)){
var ex__18318__auto__ = e27791;
var statearr_27792_27927 = state_27779;
(statearr_27792_27927[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27928 = state_27779;
state_27779 = G__27928;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = function(state_27779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1.call(this,state_27779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__;
})()
;})(__27908,switch__18314__auto__,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
})();
var state__18372__auto__ = (function (){var statearr_27793 = f__18371__auto__.call(null);
(statearr_27793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27920);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(__27908,c__18370__auto___27920,G__27739_27909,n__17076__auto___27907,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27929 = (__27908 + (1));
__27908 = G__27929;
continue;
} else {
}
break;
}

var c__18370__auto___27930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___27930,jobs,results,process,async){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___27930,jobs,results,process,async){
return (function (state_27815){
var state_val_27816 = (state_27815[(1)]);
if((state_val_27816 === (9))){
var inst_27808 = (state_27815[(2)]);
var state_27815__$1 = (function (){var statearr_27817 = state_27815;
(statearr_27817[(7)] = inst_27808);

return statearr_27817;
})();
var statearr_27818_27931 = state_27815__$1;
(statearr_27818_27931[(2)] = null);

(statearr_27818_27931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (8))){
var inst_27801 = (state_27815[(8)]);
var inst_27806 = (state_27815[(2)]);
var state_27815__$1 = (function (){var statearr_27819 = state_27815;
(statearr_27819[(9)] = inst_27806);

return statearr_27819;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27815__$1,(9),results,inst_27801);
} else {
if((state_val_27816 === (7))){
var inst_27811 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
var statearr_27820_27932 = state_27815__$1;
(statearr_27820_27932[(2)] = inst_27811);

(statearr_27820_27932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (6))){
var inst_27796 = (state_27815[(10)]);
var inst_27801 = (state_27815[(8)]);
var inst_27801__$1 = cljs.core.async.chan.call(null,(1));
var inst_27802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27803 = [inst_27796,inst_27801__$1];
var inst_27804 = (new cljs.core.PersistentVector(null,2,(5),inst_27802,inst_27803,null));
var state_27815__$1 = (function (){var statearr_27821 = state_27815;
(statearr_27821[(8)] = inst_27801__$1);

return statearr_27821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27815__$1,(8),jobs,inst_27804);
} else {
if((state_val_27816 === (5))){
var inst_27799 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27815__$1 = state_27815;
var statearr_27822_27933 = state_27815__$1;
(statearr_27822_27933[(2)] = inst_27799);

(statearr_27822_27933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (4))){
var inst_27796 = (state_27815[(10)]);
var inst_27796__$1 = (state_27815[(2)]);
var inst_27797 = (inst_27796__$1 == null);
var state_27815__$1 = (function (){var statearr_27823 = state_27815;
(statearr_27823[(10)] = inst_27796__$1);

return statearr_27823;
})();
if(cljs.core.truth_(inst_27797)){
var statearr_27824_27934 = state_27815__$1;
(statearr_27824_27934[(1)] = (5));

} else {
var statearr_27825_27935 = state_27815__$1;
(statearr_27825_27935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27816 === (3))){
var inst_27813 = (state_27815[(2)]);
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27815__$1,inst_27813);
} else {
if((state_val_27816 === (2))){
var state_27815__$1 = state_27815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27815__$1,(4),from);
} else {
if((state_val_27816 === (1))){
var state_27815__$1 = state_27815;
var statearr_27826_27936 = state_27815__$1;
(statearr_27826_27936[(2)] = null);

(statearr_27826_27936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___27930,jobs,results,process,async))
;
return ((function (switch__18314__auto__,c__18370__auto___27930,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_27830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__);

(statearr_27830[(1)] = (1));

return statearr_27830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1 = (function (state_27815){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27831){if((e27831 instanceof Object)){
var ex__18318__auto__ = e27831;
var statearr_27832_27937 = state_27815;
(statearr_27832_27937[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27938 = state_27815;
state_27815 = G__27938;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = function(state_27815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1.call(this,state_27815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___27930,jobs,results,process,async))
})();
var state__18372__auto__ = (function (){var statearr_27833 = f__18371__auto__.call(null);
(statearr_27833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___27930);

return statearr_27833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___27930,jobs,results,process,async))
);


var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__,jobs,results,process,async){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__,jobs,results,process,async){
return (function (state_27871){
var state_val_27872 = (state_27871[(1)]);
if((state_val_27872 === (7))){
var inst_27867 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27873_27939 = state_27871__$1;
(statearr_27873_27939[(2)] = inst_27867);

(statearr_27873_27939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (20))){
var state_27871__$1 = state_27871;
var statearr_27874_27940 = state_27871__$1;
(statearr_27874_27940[(2)] = null);

(statearr_27874_27940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (1))){
var state_27871__$1 = state_27871;
var statearr_27875_27941 = state_27871__$1;
(statearr_27875_27941[(2)] = null);

(statearr_27875_27941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (4))){
var inst_27836 = (state_27871[(7)]);
var inst_27836__$1 = (state_27871[(2)]);
var inst_27837 = (inst_27836__$1 == null);
var state_27871__$1 = (function (){var statearr_27876 = state_27871;
(statearr_27876[(7)] = inst_27836__$1);

return statearr_27876;
})();
if(cljs.core.truth_(inst_27837)){
var statearr_27877_27942 = state_27871__$1;
(statearr_27877_27942[(1)] = (5));

} else {
var statearr_27878_27943 = state_27871__$1;
(statearr_27878_27943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (15))){
var inst_27849 = (state_27871[(8)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27871__$1,(18),to,inst_27849);
} else {
if((state_val_27872 === (21))){
var inst_27862 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27879_27944 = state_27871__$1;
(statearr_27879_27944[(2)] = inst_27862);

(statearr_27879_27944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (13))){
var inst_27864 = (state_27871[(2)]);
var state_27871__$1 = (function (){var statearr_27880 = state_27871;
(statearr_27880[(9)] = inst_27864);

return statearr_27880;
})();
var statearr_27881_27945 = state_27871__$1;
(statearr_27881_27945[(2)] = null);

(statearr_27881_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (6))){
var inst_27836 = (state_27871[(7)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(11),inst_27836);
} else {
if((state_val_27872 === (17))){
var inst_27857 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
if(cljs.core.truth_(inst_27857)){
var statearr_27882_27946 = state_27871__$1;
(statearr_27882_27946[(1)] = (19));

} else {
var statearr_27883_27947 = state_27871__$1;
(statearr_27883_27947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (3))){
var inst_27869 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27871__$1,inst_27869);
} else {
if((state_val_27872 === (12))){
var inst_27846 = (state_27871[(10)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(14),inst_27846);
} else {
if((state_val_27872 === (2))){
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(4),results);
} else {
if((state_val_27872 === (19))){
var state_27871__$1 = state_27871;
var statearr_27884_27948 = state_27871__$1;
(statearr_27884_27948[(2)] = null);

(statearr_27884_27948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (11))){
var inst_27846 = (state_27871[(2)]);
var state_27871__$1 = (function (){var statearr_27885 = state_27871;
(statearr_27885[(10)] = inst_27846);

return statearr_27885;
})();
var statearr_27886_27949 = state_27871__$1;
(statearr_27886_27949[(2)] = null);

(statearr_27886_27949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (9))){
var state_27871__$1 = state_27871;
var statearr_27887_27950 = state_27871__$1;
(statearr_27887_27950[(2)] = null);

(statearr_27887_27950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (5))){
var state_27871__$1 = state_27871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27888_27951 = state_27871__$1;
(statearr_27888_27951[(1)] = (8));

} else {
var statearr_27889_27952 = state_27871__$1;
(statearr_27889_27952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (14))){
var inst_27849 = (state_27871[(8)]);
var inst_27851 = (state_27871[(11)]);
var inst_27849__$1 = (state_27871[(2)]);
var inst_27850 = (inst_27849__$1 == null);
var inst_27851__$1 = cljs.core.not.call(null,inst_27850);
var state_27871__$1 = (function (){var statearr_27890 = state_27871;
(statearr_27890[(8)] = inst_27849__$1);

(statearr_27890[(11)] = inst_27851__$1);

return statearr_27890;
})();
if(inst_27851__$1){
var statearr_27891_27953 = state_27871__$1;
(statearr_27891_27953[(1)] = (15));

} else {
var statearr_27892_27954 = state_27871__$1;
(statearr_27892_27954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (16))){
var inst_27851 = (state_27871[(11)]);
var state_27871__$1 = state_27871;
var statearr_27893_27955 = state_27871__$1;
(statearr_27893_27955[(2)] = inst_27851);

(statearr_27893_27955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (10))){
var inst_27843 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27894_27956 = state_27871__$1;
(statearr_27894_27956[(2)] = inst_27843);

(statearr_27894_27956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (18))){
var inst_27854 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27895_27957 = state_27871__$1;
(statearr_27895_27957[(2)] = inst_27854);

(statearr_27895_27957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (8))){
var inst_27840 = cljs.core.async.close_BANG_.call(null,to);
var state_27871__$1 = state_27871;
var statearr_27896_27958 = state_27871__$1;
(statearr_27896_27958[(2)] = inst_27840);

(statearr_27896_27958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto__,jobs,results,process,async))
;
return ((function (switch__18314__auto__,c__18370__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1 = (function (state_27871){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_27871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__18318__auto__ = e27901;
var statearr_27902_27959 = state_27871;
(statearr_27902_27959[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27960 = state_27871;
state_27871 = G__27960;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__ = function(state_27871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1.call(this,state_27871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__,jobs,results,process,async))
})();
var state__18372__auto__ = (function (){var statearr_27903 = f__18371__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__,jobs,results,process,async))
);

return c__18370__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18370__auto___28061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___28061,tc,fc){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___28061,tc,fc){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (7))){
var inst_28032 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28038_28062 = state_28036__$1;
(statearr_28038_28062[(2)] = inst_28032);

(statearr_28038_28062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (1))){
var state_28036__$1 = state_28036;
var statearr_28039_28063 = state_28036__$1;
(statearr_28039_28063[(2)] = null);

(statearr_28039_28063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_28013 = (state_28036[(7)]);
var inst_28013__$1 = (state_28036[(2)]);
var inst_28014 = (inst_28013__$1 == null);
var state_28036__$1 = (function (){var statearr_28040 = state_28036;
(statearr_28040[(7)] = inst_28013__$1);

return statearr_28040;
})();
if(cljs.core.truth_(inst_28014)){
var statearr_28041_28064 = state_28036__$1;
(statearr_28041_28064[(1)] = (5));

} else {
var statearr_28042_28065 = state_28036__$1;
(statearr_28042_28065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (13))){
var state_28036__$1 = state_28036;
var statearr_28043_28066 = state_28036__$1;
(statearr_28043_28066[(2)] = null);

(statearr_28043_28066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (6))){
var inst_28013 = (state_28036[(7)]);
var inst_28019 = p.call(null,inst_28013);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28019)){
var statearr_28044_28067 = state_28036__$1;
(statearr_28044_28067[(1)] = (9));

} else {
var statearr_28045_28068 = state_28036__$1;
(statearr_28045_28068[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (12))){
var state_28036__$1 = state_28036;
var statearr_28046_28069 = state_28036__$1;
(statearr_28046_28069[(2)] = null);

(statearr_28046_28069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28036__$1,(4),ch);
} else {
if((state_val_28037 === (11))){
var inst_28013 = (state_28036[(7)]);
var inst_28023 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28036__$1,(8),inst_28023,inst_28013);
} else {
if((state_val_28037 === (9))){
var state_28036__$1 = state_28036;
var statearr_28047_28070 = state_28036__$1;
(statearr_28047_28070[(2)] = tc);

(statearr_28047_28070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var inst_28016 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28017 = cljs.core.async.close_BANG_.call(null,fc);
var state_28036__$1 = (function (){var statearr_28048 = state_28036;
(statearr_28048[(8)] = inst_28016);

return statearr_28048;
})();
var statearr_28049_28071 = state_28036__$1;
(statearr_28049_28071[(2)] = inst_28017);

(statearr_28049_28071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (14))){
var inst_28030 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28050_28072 = state_28036__$1;
(statearr_28050_28072[(2)] = inst_28030);

(statearr_28050_28072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (10))){
var state_28036__$1 = state_28036;
var statearr_28051_28073 = state_28036__$1;
(statearr_28051_28073[(2)] = fc);

(statearr_28051_28073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (8))){
var inst_28025 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28025)){
var statearr_28052_28074 = state_28036__$1;
(statearr_28052_28074[(1)] = (12));

} else {
var statearr_28053_28075 = state_28036__$1;
(statearr_28053_28075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___28061,tc,fc))
;
return ((function (switch__18314__auto__,c__18370__auto___28061,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__18315__auto__ = null;
var cljs$core$async$split_$_state_machine__18315__auto____0 = (function (){
var statearr_28057 = [null,null,null,null,null,null,null,null,null];
(statearr_28057[(0)] = cljs$core$async$split_$_state_machine__18315__auto__);

(statearr_28057[(1)] = (1));

return statearr_28057;
});
var cljs$core$async$split_$_state_machine__18315__auto____1 = (function (state_28036){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e28058){if((e28058 instanceof Object)){
var ex__18318__auto__ = e28058;
var statearr_28059_28076 = state_28036;
(statearr_28059_28076[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28077 = state_28036;
state_28036 = G__28077;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__18315__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__18315__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__18315__auto____0;
cljs$core$async$split_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__18315__auto____1;
return cljs$core$async$split_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___28061,tc,fc))
})();
var state__18372__auto__ = (function (){var statearr_28060 = f__18371__auto__.call(null);
(statearr_28060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___28061);

return statearr_28060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___28061,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_28124){
var state_val_28125 = (state_28124[(1)]);
if((state_val_28125 === (7))){
var inst_28120 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
var statearr_28126_28142 = state_28124__$1;
(statearr_28126_28142[(2)] = inst_28120);

(statearr_28126_28142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (6))){
var inst_28110 = (state_28124[(7)]);
var inst_28113 = (state_28124[(8)]);
var inst_28117 = f.call(null,inst_28110,inst_28113);
var inst_28110__$1 = inst_28117;
var state_28124__$1 = (function (){var statearr_28127 = state_28124;
(statearr_28127[(7)] = inst_28110__$1);

return statearr_28127;
})();
var statearr_28128_28143 = state_28124__$1;
(statearr_28128_28143[(2)] = null);

(statearr_28128_28143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (5))){
var inst_28110 = (state_28124[(7)]);
var state_28124__$1 = state_28124;
var statearr_28129_28144 = state_28124__$1;
(statearr_28129_28144[(2)] = inst_28110);

(statearr_28129_28144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (4))){
var inst_28113 = (state_28124[(8)]);
var inst_28113__$1 = (state_28124[(2)]);
var inst_28114 = (inst_28113__$1 == null);
var state_28124__$1 = (function (){var statearr_28130 = state_28124;
(statearr_28130[(8)] = inst_28113__$1);

return statearr_28130;
})();
if(cljs.core.truth_(inst_28114)){
var statearr_28131_28145 = state_28124__$1;
(statearr_28131_28145[(1)] = (5));

} else {
var statearr_28132_28146 = state_28124__$1;
(statearr_28132_28146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28125 === (3))){
var inst_28122 = (state_28124[(2)]);
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28124__$1,inst_28122);
} else {
if((state_val_28125 === (2))){
var state_28124__$1 = state_28124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28124__$1,(4),ch);
} else {
if((state_val_28125 === (1))){
var inst_28110 = init;
var state_28124__$1 = (function (){var statearr_28133 = state_28124;
(statearr_28133[(7)] = inst_28110);

return statearr_28133;
})();
var statearr_28134_28147 = state_28124__$1;
(statearr_28134_28147[(2)] = null);

(statearr_28134_28147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18315__auto____0 = (function (){
var statearr_28138 = [null,null,null,null,null,null,null,null,null];
(statearr_28138[(0)] = cljs$core$async$reduce_$_state_machine__18315__auto__);

(statearr_28138[(1)] = (1));

return statearr_28138;
});
var cljs$core$async$reduce_$_state_machine__18315__auto____1 = (function (state_28124){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_28124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e28139){if((e28139 instanceof Object)){
var ex__18318__auto__ = e28139;
var statearr_28140_28148 = state_28124;
(statearr_28140_28148[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28149 = state_28124;
state_28124 = G__28149;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18315__auto__ = function(state_28124){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18315__auto____1.call(this,state_28124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18315__auto____0;
cljs$core$async$reduce_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18315__auto____1;
return cljs$core$async$reduce_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_28141 = f__18371__auto__.call(null);
(statearr_28141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_28141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (7))){
var inst_28205 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28225_28248 = state_28223__$1;
(statearr_28225_28248[(2)] = inst_28205);

(statearr_28225_28248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (1))){
var inst_28199 = cljs.core.seq.call(null,coll);
var inst_28200 = inst_28199;
var state_28223__$1 = (function (){var statearr_28226 = state_28223;
(statearr_28226[(7)] = inst_28200);

return statearr_28226;
})();
var statearr_28227_28249 = state_28223__$1;
(statearr_28227_28249[(2)] = null);

(statearr_28227_28249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (4))){
var inst_28200 = (state_28223[(7)]);
var inst_28203 = cljs.core.first.call(null,inst_28200);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28223__$1,(7),ch,inst_28203);
} else {
if((state_val_28224 === (13))){
var inst_28217 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28228_28250 = state_28223__$1;
(statearr_28228_28250[(2)] = inst_28217);

(statearr_28228_28250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var inst_28208 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28208)){
var statearr_28229_28251 = state_28223__$1;
(statearr_28229_28251[(1)] = (8));

} else {
var statearr_28230_28252 = state_28223__$1;
(statearr_28230_28252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (12))){
var state_28223__$1 = state_28223;
var statearr_28231_28253 = state_28223__$1;
(statearr_28231_28253[(2)] = null);

(statearr_28231_28253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var inst_28200 = (state_28223[(7)]);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28200)){
var statearr_28232_28254 = state_28223__$1;
(statearr_28232_28254[(1)] = (4));

} else {
var statearr_28233_28255 = state_28223__$1;
(statearr_28233_28255[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (11))){
var inst_28214 = cljs.core.async.close_BANG_.call(null,ch);
var state_28223__$1 = state_28223;
var statearr_28234_28256 = state_28223__$1;
(statearr_28234_28256[(2)] = inst_28214);

(statearr_28234_28256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (9))){
var state_28223__$1 = state_28223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28235_28257 = state_28223__$1;
(statearr_28235_28257[(1)] = (11));

} else {
var statearr_28236_28258 = state_28223__$1;
(statearr_28236_28258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (5))){
var inst_28200 = (state_28223[(7)]);
var state_28223__$1 = state_28223;
var statearr_28237_28259 = state_28223__$1;
(statearr_28237_28259[(2)] = inst_28200);

(statearr_28237_28259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (10))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28238_28260 = state_28223__$1;
(statearr_28238_28260[(2)] = inst_28219);

(statearr_28238_28260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (8))){
var inst_28200 = (state_28223[(7)]);
var inst_28210 = cljs.core.next.call(null,inst_28200);
var inst_28200__$1 = inst_28210;
var state_28223__$1 = (function (){var statearr_28239 = state_28223;
(statearr_28239[(7)] = inst_28200__$1);

return statearr_28239;
})();
var statearr_28240_28261 = state_28223__$1;
(statearr_28240_28261[(2)] = null);

(statearr_28240_28261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__18315__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__18315__auto____0 = (function (){
var statearr_28244 = [null,null,null,null,null,null,null,null];
(statearr_28244[(0)] = cljs$core$async$onto_chan_$_state_machine__18315__auto__);

(statearr_28244[(1)] = (1));

return statearr_28244;
});
var cljs$core$async$onto_chan_$_state_machine__18315__auto____1 = (function (state_28223){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e28245){if((e28245 instanceof Object)){
var ex__18318__auto__ = e28245;
var statearr_28246_28262 = state_28223;
(statearr_28246_28262[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28263 = state_28223;
state_28223 = G__28263;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__18315__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__18315__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__18315__auto____0;
cljs$core$async$onto_chan_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__18315__auto____1;
return cljs$core$async$onto_chan_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_28247 = f__18371__auto__.call(null);
(statearr_28247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_28247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28265 = {};
return obj28265;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16177__auto__ = _;
if(and__16177__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16177__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16833__auto__ = (((_ == null))?null:_);
return (function (){var or__16189__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28267 = {};
return obj28267;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28489 = (function (cs,ch,mult,meta28490){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28490 = meta28490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28489.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28491){
var self__ = this;
var _28491__$1 = this;
return self__.meta28490;
});})(cs))
;

cljs.core.async.t28489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28491,meta28490__$1){
var self__ = this;
var _28491__$1 = this;
return (new cljs.core.async.t28489(self__.cs,self__.ch,self__.mult,meta28490__$1));
});})(cs))
;

cljs.core.async.t28489.cljs$lang$type = true;

cljs.core.async.t28489.cljs$lang$ctorStr = "cljs.core.async/t28489";

cljs.core.async.t28489.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t28489");
});})(cs))
;

cljs.core.async.__GT_t28489 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28489(cs__$1,ch__$1,mult__$1,meta28490){
return (new cljs.core.async.t28489(cs__$1,ch__$1,mult__$1,meta28490));
});})(cs))
;

}

return (new cljs.core.async.t28489(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18370__auto___28710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___28710,cs,m,dchan,dctr,done){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___28710,cs,m,dchan,dctr,done){
return (function (state_28622){
var state_val_28623 = (state_28622[(1)]);
if((state_val_28623 === (7))){
var inst_28618 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28624_28711 = state_28622__$1;
(statearr_28624_28711[(2)] = inst_28618);

(statearr_28624_28711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (20))){
var inst_28523 = (state_28622[(7)]);
var inst_28533 = cljs.core.first.call(null,inst_28523);
var inst_28534 = cljs.core.nth.call(null,inst_28533,(0),null);
var inst_28535 = cljs.core.nth.call(null,inst_28533,(1),null);
var state_28622__$1 = (function (){var statearr_28625 = state_28622;
(statearr_28625[(8)] = inst_28534);

return statearr_28625;
})();
if(cljs.core.truth_(inst_28535)){
var statearr_28626_28712 = state_28622__$1;
(statearr_28626_28712[(1)] = (22));

} else {
var statearr_28627_28713 = state_28622__$1;
(statearr_28627_28713[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (27))){
var inst_28563 = (state_28622[(9)]);
var inst_28494 = (state_28622[(10)]);
var inst_28570 = (state_28622[(11)]);
var inst_28565 = (state_28622[(12)]);
var inst_28570__$1 = cljs.core._nth.call(null,inst_28563,inst_28565);
var inst_28571 = cljs.core.async.put_BANG_.call(null,inst_28570__$1,inst_28494,done);
var state_28622__$1 = (function (){var statearr_28628 = state_28622;
(statearr_28628[(11)] = inst_28570__$1);

return statearr_28628;
})();
if(cljs.core.truth_(inst_28571)){
var statearr_28629_28714 = state_28622__$1;
(statearr_28629_28714[(1)] = (30));

} else {
var statearr_28630_28715 = state_28622__$1;
(statearr_28630_28715[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (1))){
var state_28622__$1 = state_28622;
var statearr_28631_28716 = state_28622__$1;
(statearr_28631_28716[(2)] = null);

(statearr_28631_28716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (24))){
var inst_28523 = (state_28622[(7)]);
var inst_28540 = (state_28622[(2)]);
var inst_28541 = cljs.core.next.call(null,inst_28523);
var inst_28503 = inst_28541;
var inst_28504 = null;
var inst_28505 = (0);
var inst_28506 = (0);
var state_28622__$1 = (function (){var statearr_28632 = state_28622;
(statearr_28632[(13)] = inst_28505);

(statearr_28632[(14)] = inst_28504);

(statearr_28632[(15)] = inst_28540);

(statearr_28632[(16)] = inst_28503);

(statearr_28632[(17)] = inst_28506);

return statearr_28632;
})();
var statearr_28633_28717 = state_28622__$1;
(statearr_28633_28717[(2)] = null);

(statearr_28633_28717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (39))){
var state_28622__$1 = state_28622;
var statearr_28637_28718 = state_28622__$1;
(statearr_28637_28718[(2)] = null);

(statearr_28637_28718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (4))){
var inst_28494 = (state_28622[(10)]);
var inst_28494__$1 = (state_28622[(2)]);
var inst_28495 = (inst_28494__$1 == null);
var state_28622__$1 = (function (){var statearr_28638 = state_28622;
(statearr_28638[(10)] = inst_28494__$1);

return statearr_28638;
})();
if(cljs.core.truth_(inst_28495)){
var statearr_28639_28719 = state_28622__$1;
(statearr_28639_28719[(1)] = (5));

} else {
var statearr_28640_28720 = state_28622__$1;
(statearr_28640_28720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (15))){
var inst_28505 = (state_28622[(13)]);
var inst_28504 = (state_28622[(14)]);
var inst_28503 = (state_28622[(16)]);
var inst_28506 = (state_28622[(17)]);
var inst_28519 = (state_28622[(2)]);
var inst_28520 = (inst_28506 + (1));
var tmp28634 = inst_28505;
var tmp28635 = inst_28504;
var tmp28636 = inst_28503;
var inst_28503__$1 = tmp28636;
var inst_28504__$1 = tmp28635;
var inst_28505__$1 = tmp28634;
var inst_28506__$1 = inst_28520;
var state_28622__$1 = (function (){var statearr_28641 = state_28622;
(statearr_28641[(13)] = inst_28505__$1);

(statearr_28641[(14)] = inst_28504__$1);

(statearr_28641[(16)] = inst_28503__$1);

(statearr_28641[(18)] = inst_28519);

(statearr_28641[(17)] = inst_28506__$1);

return statearr_28641;
})();
var statearr_28642_28721 = state_28622__$1;
(statearr_28642_28721[(2)] = null);

(statearr_28642_28721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (21))){
var inst_28544 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28646_28722 = state_28622__$1;
(statearr_28646_28722[(2)] = inst_28544);

(statearr_28646_28722[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (31))){
var inst_28570 = (state_28622[(11)]);
var inst_28574 = done.call(null,null);
var inst_28575 = cljs.core.async.untap_STAR_.call(null,m,inst_28570);
var state_28622__$1 = (function (){var statearr_28647 = state_28622;
(statearr_28647[(19)] = inst_28574);

return statearr_28647;
})();
var statearr_28648_28723 = state_28622__$1;
(statearr_28648_28723[(2)] = inst_28575);

(statearr_28648_28723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (32))){
var inst_28563 = (state_28622[(9)]);
var inst_28564 = (state_28622[(20)]);
var inst_28565 = (state_28622[(12)]);
var inst_28562 = (state_28622[(21)]);
var inst_28577 = (state_28622[(2)]);
var inst_28578 = (inst_28565 + (1));
var tmp28643 = inst_28563;
var tmp28644 = inst_28564;
var tmp28645 = inst_28562;
var inst_28562__$1 = tmp28645;
var inst_28563__$1 = tmp28643;
var inst_28564__$1 = tmp28644;
var inst_28565__$1 = inst_28578;
var state_28622__$1 = (function (){var statearr_28649 = state_28622;
(statearr_28649[(9)] = inst_28563__$1);

(statearr_28649[(20)] = inst_28564__$1);

(statearr_28649[(12)] = inst_28565__$1);

(statearr_28649[(22)] = inst_28577);

(statearr_28649[(21)] = inst_28562__$1);

return statearr_28649;
})();
var statearr_28650_28724 = state_28622__$1;
(statearr_28650_28724[(2)] = null);

(statearr_28650_28724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (40))){
var inst_28590 = (state_28622[(23)]);
var inst_28594 = done.call(null,null);
var inst_28595 = cljs.core.async.untap_STAR_.call(null,m,inst_28590);
var state_28622__$1 = (function (){var statearr_28651 = state_28622;
(statearr_28651[(24)] = inst_28594);

return statearr_28651;
})();
var statearr_28652_28725 = state_28622__$1;
(statearr_28652_28725[(2)] = inst_28595);

(statearr_28652_28725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (33))){
var inst_28581 = (state_28622[(25)]);
var inst_28583 = cljs.core.chunked_seq_QMARK_.call(null,inst_28581);
var state_28622__$1 = state_28622;
if(inst_28583){
var statearr_28653_28726 = state_28622__$1;
(statearr_28653_28726[(1)] = (36));

} else {
var statearr_28654_28727 = state_28622__$1;
(statearr_28654_28727[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (13))){
var inst_28513 = (state_28622[(26)]);
var inst_28516 = cljs.core.async.close_BANG_.call(null,inst_28513);
var state_28622__$1 = state_28622;
var statearr_28655_28728 = state_28622__$1;
(statearr_28655_28728[(2)] = inst_28516);

(statearr_28655_28728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (22))){
var inst_28534 = (state_28622[(8)]);
var inst_28537 = cljs.core.async.close_BANG_.call(null,inst_28534);
var state_28622__$1 = state_28622;
var statearr_28656_28729 = state_28622__$1;
(statearr_28656_28729[(2)] = inst_28537);

(statearr_28656_28729[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (36))){
var inst_28581 = (state_28622[(25)]);
var inst_28585 = cljs.core.chunk_first.call(null,inst_28581);
var inst_28586 = cljs.core.chunk_rest.call(null,inst_28581);
var inst_28587 = cljs.core.count.call(null,inst_28585);
var inst_28562 = inst_28586;
var inst_28563 = inst_28585;
var inst_28564 = inst_28587;
var inst_28565 = (0);
var state_28622__$1 = (function (){var statearr_28657 = state_28622;
(statearr_28657[(9)] = inst_28563);

(statearr_28657[(20)] = inst_28564);

(statearr_28657[(12)] = inst_28565);

(statearr_28657[(21)] = inst_28562);

return statearr_28657;
})();
var statearr_28658_28730 = state_28622__$1;
(statearr_28658_28730[(2)] = null);

(statearr_28658_28730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (41))){
var inst_28581 = (state_28622[(25)]);
var inst_28597 = (state_28622[(2)]);
var inst_28598 = cljs.core.next.call(null,inst_28581);
var inst_28562 = inst_28598;
var inst_28563 = null;
var inst_28564 = (0);
var inst_28565 = (0);
var state_28622__$1 = (function (){var statearr_28659 = state_28622;
(statearr_28659[(9)] = inst_28563);

(statearr_28659[(20)] = inst_28564);

(statearr_28659[(12)] = inst_28565);

(statearr_28659[(21)] = inst_28562);

(statearr_28659[(27)] = inst_28597);

return statearr_28659;
})();
var statearr_28660_28731 = state_28622__$1;
(statearr_28660_28731[(2)] = null);

(statearr_28660_28731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (43))){
var state_28622__$1 = state_28622;
var statearr_28661_28732 = state_28622__$1;
(statearr_28661_28732[(2)] = null);

(statearr_28661_28732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (29))){
var inst_28606 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28662_28733 = state_28622__$1;
(statearr_28662_28733[(2)] = inst_28606);

(statearr_28662_28733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (44))){
var inst_28615 = (state_28622[(2)]);
var state_28622__$1 = (function (){var statearr_28663 = state_28622;
(statearr_28663[(28)] = inst_28615);

return statearr_28663;
})();
var statearr_28664_28734 = state_28622__$1;
(statearr_28664_28734[(2)] = null);

(statearr_28664_28734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (6))){
var inst_28554 = (state_28622[(29)]);
var inst_28553 = cljs.core.deref.call(null,cs);
var inst_28554__$1 = cljs.core.keys.call(null,inst_28553);
var inst_28555 = cljs.core.count.call(null,inst_28554__$1);
var inst_28556 = cljs.core.reset_BANG_.call(null,dctr,inst_28555);
var inst_28561 = cljs.core.seq.call(null,inst_28554__$1);
var inst_28562 = inst_28561;
var inst_28563 = null;
var inst_28564 = (0);
var inst_28565 = (0);
var state_28622__$1 = (function (){var statearr_28665 = state_28622;
(statearr_28665[(9)] = inst_28563);

(statearr_28665[(29)] = inst_28554__$1);

(statearr_28665[(20)] = inst_28564);

(statearr_28665[(12)] = inst_28565);

(statearr_28665[(21)] = inst_28562);

(statearr_28665[(30)] = inst_28556);

return statearr_28665;
})();
var statearr_28666_28735 = state_28622__$1;
(statearr_28666_28735[(2)] = null);

(statearr_28666_28735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (28))){
var inst_28562 = (state_28622[(21)]);
var inst_28581 = (state_28622[(25)]);
var inst_28581__$1 = cljs.core.seq.call(null,inst_28562);
var state_28622__$1 = (function (){var statearr_28667 = state_28622;
(statearr_28667[(25)] = inst_28581__$1);

return statearr_28667;
})();
if(inst_28581__$1){
var statearr_28668_28736 = state_28622__$1;
(statearr_28668_28736[(1)] = (33));

} else {
var statearr_28669_28737 = state_28622__$1;
(statearr_28669_28737[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (25))){
var inst_28564 = (state_28622[(20)]);
var inst_28565 = (state_28622[(12)]);
var inst_28567 = (inst_28565 < inst_28564);
var inst_28568 = inst_28567;
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28568)){
var statearr_28670_28738 = state_28622__$1;
(statearr_28670_28738[(1)] = (27));

} else {
var statearr_28671_28739 = state_28622__$1;
(statearr_28671_28739[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (34))){
var state_28622__$1 = state_28622;
var statearr_28672_28740 = state_28622__$1;
(statearr_28672_28740[(2)] = null);

(statearr_28672_28740[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (17))){
var state_28622__$1 = state_28622;
var statearr_28673_28741 = state_28622__$1;
(statearr_28673_28741[(2)] = null);

(statearr_28673_28741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (3))){
var inst_28620 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28622__$1,inst_28620);
} else {
if((state_val_28623 === (12))){
var inst_28549 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28674_28742 = state_28622__$1;
(statearr_28674_28742[(2)] = inst_28549);

(statearr_28674_28742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (2))){
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28622__$1,(4),ch);
} else {
if((state_val_28623 === (23))){
var state_28622__$1 = state_28622;
var statearr_28675_28743 = state_28622__$1;
(statearr_28675_28743[(2)] = null);

(statearr_28675_28743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (35))){
var inst_28604 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28676_28744 = state_28622__$1;
(statearr_28676_28744[(2)] = inst_28604);

(statearr_28676_28744[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (19))){
var inst_28523 = (state_28622[(7)]);
var inst_28527 = cljs.core.chunk_first.call(null,inst_28523);
var inst_28528 = cljs.core.chunk_rest.call(null,inst_28523);
var inst_28529 = cljs.core.count.call(null,inst_28527);
var inst_28503 = inst_28528;
var inst_28504 = inst_28527;
var inst_28505 = inst_28529;
var inst_28506 = (0);
var state_28622__$1 = (function (){var statearr_28677 = state_28622;
(statearr_28677[(13)] = inst_28505);

(statearr_28677[(14)] = inst_28504);

(statearr_28677[(16)] = inst_28503);

(statearr_28677[(17)] = inst_28506);

return statearr_28677;
})();
var statearr_28678_28745 = state_28622__$1;
(statearr_28678_28745[(2)] = null);

(statearr_28678_28745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (11))){
var inst_28503 = (state_28622[(16)]);
var inst_28523 = (state_28622[(7)]);
var inst_28523__$1 = cljs.core.seq.call(null,inst_28503);
var state_28622__$1 = (function (){var statearr_28679 = state_28622;
(statearr_28679[(7)] = inst_28523__$1);

return statearr_28679;
})();
if(inst_28523__$1){
var statearr_28680_28746 = state_28622__$1;
(statearr_28680_28746[(1)] = (16));

} else {
var statearr_28681_28747 = state_28622__$1;
(statearr_28681_28747[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (9))){
var inst_28551 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28682_28748 = state_28622__$1;
(statearr_28682_28748[(2)] = inst_28551);

(statearr_28682_28748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (5))){
var inst_28501 = cljs.core.deref.call(null,cs);
var inst_28502 = cljs.core.seq.call(null,inst_28501);
var inst_28503 = inst_28502;
var inst_28504 = null;
var inst_28505 = (0);
var inst_28506 = (0);
var state_28622__$1 = (function (){var statearr_28683 = state_28622;
(statearr_28683[(13)] = inst_28505);

(statearr_28683[(14)] = inst_28504);

(statearr_28683[(16)] = inst_28503);

(statearr_28683[(17)] = inst_28506);

return statearr_28683;
})();
var statearr_28684_28749 = state_28622__$1;
(statearr_28684_28749[(2)] = null);

(statearr_28684_28749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (14))){
var state_28622__$1 = state_28622;
var statearr_28685_28750 = state_28622__$1;
(statearr_28685_28750[(2)] = null);

(statearr_28685_28750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (45))){
var inst_28612 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28686_28751 = state_28622__$1;
(statearr_28686_28751[(2)] = inst_28612);

(statearr_28686_28751[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (26))){
var inst_28554 = (state_28622[(29)]);
var inst_28608 = (state_28622[(2)]);
var inst_28609 = cljs.core.seq.call(null,inst_28554);
var state_28622__$1 = (function (){var statearr_28687 = state_28622;
(statearr_28687[(31)] = inst_28608);

return statearr_28687;
})();
if(inst_28609){
var statearr_28688_28752 = state_28622__$1;
(statearr_28688_28752[(1)] = (42));

} else {
var statearr_28689_28753 = state_28622__$1;
(statearr_28689_28753[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (16))){
var inst_28523 = (state_28622[(7)]);
var inst_28525 = cljs.core.chunked_seq_QMARK_.call(null,inst_28523);
var state_28622__$1 = state_28622;
if(inst_28525){
var statearr_28690_28754 = state_28622__$1;
(statearr_28690_28754[(1)] = (19));

} else {
var statearr_28691_28755 = state_28622__$1;
(statearr_28691_28755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (38))){
var inst_28601 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28692_28756 = state_28622__$1;
(statearr_28692_28756[(2)] = inst_28601);

(statearr_28692_28756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (30))){
var state_28622__$1 = state_28622;
var statearr_28693_28757 = state_28622__$1;
(statearr_28693_28757[(2)] = null);

(statearr_28693_28757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (10))){
var inst_28504 = (state_28622[(14)]);
var inst_28506 = (state_28622[(17)]);
var inst_28512 = cljs.core._nth.call(null,inst_28504,inst_28506);
var inst_28513 = cljs.core.nth.call(null,inst_28512,(0),null);
var inst_28514 = cljs.core.nth.call(null,inst_28512,(1),null);
var state_28622__$1 = (function (){var statearr_28694 = state_28622;
(statearr_28694[(26)] = inst_28513);

return statearr_28694;
})();
if(cljs.core.truth_(inst_28514)){
var statearr_28695_28758 = state_28622__$1;
(statearr_28695_28758[(1)] = (13));

} else {
var statearr_28696_28759 = state_28622__$1;
(statearr_28696_28759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (18))){
var inst_28547 = (state_28622[(2)]);
var state_28622__$1 = state_28622;
var statearr_28697_28760 = state_28622__$1;
(statearr_28697_28760[(2)] = inst_28547);

(statearr_28697_28760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (42))){
var state_28622__$1 = state_28622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28622__$1,(45),dchan);
} else {
if((state_val_28623 === (37))){
var inst_28494 = (state_28622[(10)]);
var inst_28590 = (state_28622[(23)]);
var inst_28581 = (state_28622[(25)]);
var inst_28590__$1 = cljs.core.first.call(null,inst_28581);
var inst_28591 = cljs.core.async.put_BANG_.call(null,inst_28590__$1,inst_28494,done);
var state_28622__$1 = (function (){var statearr_28698 = state_28622;
(statearr_28698[(23)] = inst_28590__$1);

return statearr_28698;
})();
if(cljs.core.truth_(inst_28591)){
var statearr_28699_28761 = state_28622__$1;
(statearr_28699_28761[(1)] = (39));

} else {
var statearr_28700_28762 = state_28622__$1;
(statearr_28700_28762[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28623 === (8))){
var inst_28505 = (state_28622[(13)]);
var inst_28506 = (state_28622[(17)]);
var inst_28508 = (inst_28506 < inst_28505);
var inst_28509 = inst_28508;
var state_28622__$1 = state_28622;
if(cljs.core.truth_(inst_28509)){
var statearr_28701_28763 = state_28622__$1;
(statearr_28701_28763[(1)] = (10));

} else {
var statearr_28702_28764 = state_28622__$1;
(statearr_28702_28764[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___28710,cs,m,dchan,dctr,done))
;
return ((function (switch__18314__auto__,c__18370__auto___28710,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18315__auto__ = null;
var cljs$core$async$mult_$_state_machine__18315__auto____0 = (function (){
var statearr_28706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28706[(0)] = cljs$core$async$mult_$_state_machine__18315__auto__);

(statearr_28706[(1)] = (1));

return statearr_28706;
});
var cljs$core$async$mult_$_state_machine__18315__auto____1 = (function (state_28622){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_28622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e28707){if((e28707 instanceof Object)){
var ex__18318__auto__ = e28707;
var statearr_28708_28765 = state_28622;
(statearr_28708_28765[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28766 = state_28622;
state_28622 = G__28766;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18315__auto__ = function(state_28622){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18315__auto____1.call(this,state_28622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18315__auto____0;
cljs$core$async$mult_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18315__auto____1;
return cljs$core$async$mult_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___28710,cs,m,dchan,dctr,done))
})();
var state__18372__auto__ = (function (){var statearr_28709 = f__18371__auto__.call(null);
(statearr_28709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___28710);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___28710,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28768 = {};
return obj28768;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16177__auto__ = m;
if(and__16177__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16833__auto__ = (((m == null))?null:m);
return (function (){var or__16189__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28769){
var map__28774 = p__28769;
var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var opts = map__28774__$1;
var statearr_28775_28778 = state;
(statearr_28775_28778[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28774,map__28774__$1,opts){
return (function (val){
var statearr_28776_28779 = state;
(statearr_28776_28779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28774,map__28774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28777_28780 = state;
(statearr_28777_28780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28769 = null;
if (arguments.length > 3) {
var G__28781__i = 0, G__28781__a = new Array(arguments.length -  3);
while (G__28781__i < G__28781__a.length) {G__28781__a[G__28781__i] = arguments[G__28781__i + 3]; ++G__28781__i;}
  p__28769 = new cljs.core.IndexedSeq(G__28781__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28769);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28782){
var state = cljs.core.first(arglist__28782);
arglist__28782 = cljs.core.next(arglist__28782);
var cont_block = cljs.core.first(arglist__28782);
arglist__28782 = cljs.core.next(arglist__28782);
var ports = cljs.core.first(arglist__28782);
var p__28769 = cljs.core.rest(arglist__28782);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__28769);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28902 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28903){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28903 = meta28903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28902.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28902.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28902.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28904){
var self__ = this;
var _28904__$1 = this;
return self__.meta28903;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28904,meta28903__$1){
var self__ = this;
var _28904__$1 = this;
return (new cljs.core.async.t28902(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28903__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28902.cljs$lang$type = true;

cljs.core.async.t28902.cljs$lang$ctorStr = "cljs.core.async/t28902";

cljs.core.async.t28902.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t28902");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28902 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28902(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28903){
return (new cljs.core.async.t28902(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28903));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28902(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18370__auto___29021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28974){
var state_val_28975 = (state_28974[(1)]);
if((state_val_28975 === (7))){
var inst_28918 = (state_28974[(7)]);
var inst_28923 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28918);
var state_28974__$1 = state_28974;
var statearr_28976_29022 = state_28974__$1;
(statearr_28976_29022[(2)] = inst_28923);

(statearr_28976_29022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (20))){
var inst_28933 = (state_28974[(8)]);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28974__$1,(23),out,inst_28933);
} else {
if((state_val_28975 === (1))){
var inst_28908 = (state_28974[(9)]);
var inst_28908__$1 = calc_state.call(null);
var inst_28909 = cljs.core.seq_QMARK_.call(null,inst_28908__$1);
var state_28974__$1 = (function (){var statearr_28977 = state_28974;
(statearr_28977[(9)] = inst_28908__$1);

return statearr_28977;
})();
if(inst_28909){
var statearr_28978_29023 = state_28974__$1;
(statearr_28978_29023[(1)] = (2));

} else {
var statearr_28979_29024 = state_28974__$1;
(statearr_28979_29024[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (24))){
var inst_28926 = (state_28974[(10)]);
var inst_28918 = inst_28926;
var state_28974__$1 = (function (){var statearr_28980 = state_28974;
(statearr_28980[(7)] = inst_28918);

return statearr_28980;
})();
var statearr_28981_29025 = state_28974__$1;
(statearr_28981_29025[(2)] = null);

(statearr_28981_29025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (4))){
var inst_28908 = (state_28974[(9)]);
var inst_28914 = (state_28974[(2)]);
var inst_28915 = cljs.core.get.call(null,inst_28914,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28916 = cljs.core.get.call(null,inst_28914,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28917 = cljs.core.get.call(null,inst_28914,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28918 = inst_28908;
var state_28974__$1 = (function (){var statearr_28982 = state_28974;
(statearr_28982[(11)] = inst_28915);

(statearr_28982[(7)] = inst_28918);

(statearr_28982[(12)] = inst_28916);

(statearr_28982[(13)] = inst_28917);

return statearr_28982;
})();
var statearr_28983_29026 = state_28974__$1;
(statearr_28983_29026[(2)] = null);

(statearr_28983_29026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (15))){
var state_28974__$1 = state_28974;
var statearr_28984_29027 = state_28974__$1;
(statearr_28984_29027[(2)] = null);

(statearr_28984_29027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (21))){
var inst_28926 = (state_28974[(10)]);
var inst_28918 = inst_28926;
var state_28974__$1 = (function (){var statearr_28985 = state_28974;
(statearr_28985[(7)] = inst_28918);

return statearr_28985;
})();
var statearr_28986_29028 = state_28974__$1;
(statearr_28986_29028[(2)] = null);

(statearr_28986_29028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (13))){
var inst_28970 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28987_29029 = state_28974__$1;
(statearr_28987_29029[(2)] = inst_28970);

(statearr_28987_29029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (22))){
var inst_28968 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_28988_29030 = state_28974__$1;
(statearr_28988_29030[(2)] = inst_28968);

(statearr_28988_29030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (6))){
var inst_28972 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28974__$1,inst_28972);
} else {
if((state_val_28975 === (25))){
var state_28974__$1 = state_28974;
var statearr_28989_29031 = state_28974__$1;
(statearr_28989_29031[(2)] = null);

(statearr_28989_29031[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (17))){
var inst_28948 = (state_28974[(14)]);
var state_28974__$1 = state_28974;
var statearr_28990_29032 = state_28974__$1;
(statearr_28990_29032[(2)] = inst_28948);

(statearr_28990_29032[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (3))){
var inst_28908 = (state_28974[(9)]);
var state_28974__$1 = state_28974;
var statearr_28991_29033 = state_28974__$1;
(statearr_28991_29033[(2)] = inst_28908);

(statearr_28991_29033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (12))){
var inst_28934 = (state_28974[(15)]);
var inst_28929 = (state_28974[(16)]);
var inst_28948 = (state_28974[(14)]);
var inst_28948__$1 = inst_28929.call(null,inst_28934);
var state_28974__$1 = (function (){var statearr_28992 = state_28974;
(statearr_28992[(14)] = inst_28948__$1);

return statearr_28992;
})();
if(cljs.core.truth_(inst_28948__$1)){
var statearr_28993_29034 = state_28974__$1;
(statearr_28993_29034[(1)] = (17));

} else {
var statearr_28994_29035 = state_28974__$1;
(statearr_28994_29035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (2))){
var inst_28908 = (state_28974[(9)]);
var inst_28911 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28908);
var state_28974__$1 = state_28974;
var statearr_28995_29036 = state_28974__$1;
(statearr_28995_29036[(2)] = inst_28911);

(statearr_28995_29036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (23))){
var inst_28959 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28959)){
var statearr_28996_29037 = state_28974__$1;
(statearr_28996_29037[(1)] = (24));

} else {
var statearr_28997_29038 = state_28974__$1;
(statearr_28997_29038[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (19))){
var inst_28956 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28956)){
var statearr_28998_29039 = state_28974__$1;
(statearr_28998_29039[(1)] = (20));

} else {
var statearr_28999_29040 = state_28974__$1;
(statearr_28999_29040[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (11))){
var inst_28933 = (state_28974[(8)]);
var inst_28939 = (inst_28933 == null);
var state_28974__$1 = state_28974;
if(cljs.core.truth_(inst_28939)){
var statearr_29000_29041 = state_28974__$1;
(statearr_29000_29041[(1)] = (14));

} else {
var statearr_29001_29042 = state_28974__$1;
(statearr_29001_29042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (9))){
var inst_28926 = (state_28974[(10)]);
var inst_28926__$1 = (state_28974[(2)]);
var inst_28927 = cljs.core.get.call(null,inst_28926__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28928 = cljs.core.get.call(null,inst_28926__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28929 = cljs.core.get.call(null,inst_28926__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28974__$1 = (function (){var statearr_29002 = state_28974;
(statearr_29002[(16)] = inst_28929);

(statearr_29002[(10)] = inst_28926__$1);

(statearr_29002[(17)] = inst_28928);

return statearr_29002;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28974__$1,(10),inst_28927);
} else {
if((state_val_28975 === (5))){
var inst_28918 = (state_28974[(7)]);
var inst_28921 = cljs.core.seq_QMARK_.call(null,inst_28918);
var state_28974__$1 = state_28974;
if(inst_28921){
var statearr_29003_29043 = state_28974__$1;
(statearr_29003_29043[(1)] = (7));

} else {
var statearr_29004_29044 = state_28974__$1;
(statearr_29004_29044[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (14))){
var inst_28934 = (state_28974[(15)]);
var inst_28941 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28934);
var state_28974__$1 = state_28974;
var statearr_29005_29045 = state_28974__$1;
(statearr_29005_29045[(2)] = inst_28941);

(statearr_29005_29045[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (26))){
var inst_28964 = (state_28974[(2)]);
var state_28974__$1 = state_28974;
var statearr_29006_29046 = state_28974__$1;
(statearr_29006_29046[(2)] = inst_28964);

(statearr_29006_29046[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (16))){
var inst_28944 = (state_28974[(2)]);
var inst_28945 = calc_state.call(null);
var inst_28918 = inst_28945;
var state_28974__$1 = (function (){var statearr_29007 = state_28974;
(statearr_29007[(7)] = inst_28918);

(statearr_29007[(18)] = inst_28944);

return statearr_29007;
})();
var statearr_29008_29047 = state_28974__$1;
(statearr_29008_29047[(2)] = null);

(statearr_29008_29047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (10))){
var inst_28934 = (state_28974[(15)]);
var inst_28933 = (state_28974[(8)]);
var inst_28932 = (state_28974[(2)]);
var inst_28933__$1 = cljs.core.nth.call(null,inst_28932,(0),null);
var inst_28934__$1 = cljs.core.nth.call(null,inst_28932,(1),null);
var inst_28935 = (inst_28933__$1 == null);
var inst_28936 = cljs.core._EQ_.call(null,inst_28934__$1,change);
var inst_28937 = (inst_28935) || (inst_28936);
var state_28974__$1 = (function (){var statearr_29009 = state_28974;
(statearr_29009[(15)] = inst_28934__$1);

(statearr_29009[(8)] = inst_28933__$1);

return statearr_29009;
})();
if(cljs.core.truth_(inst_28937)){
var statearr_29010_29048 = state_28974__$1;
(statearr_29010_29048[(1)] = (11));

} else {
var statearr_29011_29049 = state_28974__$1;
(statearr_29011_29049[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (18))){
var inst_28934 = (state_28974[(15)]);
var inst_28929 = (state_28974[(16)]);
var inst_28928 = (state_28974[(17)]);
var inst_28951 = cljs.core.empty_QMARK_.call(null,inst_28929);
var inst_28952 = inst_28928.call(null,inst_28934);
var inst_28953 = cljs.core.not.call(null,inst_28952);
var inst_28954 = (inst_28951) && (inst_28953);
var state_28974__$1 = state_28974;
var statearr_29012_29050 = state_28974__$1;
(statearr_29012_29050[(2)] = inst_28954);

(statearr_29012_29050[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28975 === (8))){
var inst_28918 = (state_28974[(7)]);
var state_28974__$1 = state_28974;
var statearr_29013_29051 = state_28974__$1;
(statearr_29013_29051[(2)] = inst_28918);

(statearr_29013_29051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18314__auto__,c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18315__auto__ = null;
var cljs$core$async$mix_$_state_machine__18315__auto____0 = (function (){
var statearr_29017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29017[(0)] = cljs$core$async$mix_$_state_machine__18315__auto__);

(statearr_29017[(1)] = (1));

return statearr_29017;
});
var cljs$core$async$mix_$_state_machine__18315__auto____1 = (function (state_28974){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_28974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29018){if((e29018 instanceof Object)){
var ex__18318__auto__ = e29018;
var statearr_29019_29052 = state_28974;
(statearr_29019_29052[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29053 = state_28974;
state_28974 = G__29053;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18315__auto__ = function(state_28974){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18315__auto____1.call(this,state_28974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18315__auto____0;
cljs$core$async$mix_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18315__auto____1;
return cljs$core$async$mix_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18372__auto__ = (function (){var statearr_29020 = f__18371__auto__.call(null);
(statearr_29020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29021);

return statearr_29020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29021,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29055 = {};
return obj29055;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16177__auto__ = p;
if(and__16177__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16177__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16833__auto__ = (((p == null))?null:p);
return (function (){var or__16189__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16177__auto__ = p;
if(and__16177__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16177__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16833__auto__ = (((p == null))?null:p);
return (function (){var or__16189__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__16177__auto__ = p;
if(and__16177__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16177__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16833__auto__ = (((p == null))?null:p);
return (function (){var or__16189__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__16177__auto__ = p;
if(and__16177__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16177__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16833__auto__ = (((p == null))?null:p);
return (function (){var or__16189__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16833__auto__)]);
if(or__16189__auto__){
return or__16189__auto__;
} else {
var or__16189__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16189__auto____$1){
return or__16189__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16189__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16189__auto__)){
return or__16189__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16189__auto__,mults){
return (function (p1__29056_SHARP_){
if(cljs.core.truth_(p1__29056_SHARP_.call(null,topic))){
return p1__29056_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29056_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16189__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29179 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29179 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29180){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29180 = meta29180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29179.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29179.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29181){
var self__ = this;
var _29181__$1 = this;
return self__.meta29180;
});})(mults,ensure_mult))
;

cljs.core.async.t29179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29181,meta29180__$1){
var self__ = this;
var _29181__$1 = this;
return (new cljs.core.async.t29179(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29180__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29179.cljs$lang$type = true;

cljs.core.async.t29179.cljs$lang$ctorStr = "cljs.core.async/t29179";

cljs.core.async.t29179.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t29179");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29179 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t29179(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29180){
return (new cljs.core.async.t29179(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29180));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29179(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18370__auto___29301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29301,mults,ensure_mult,p){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29301,mults,ensure_mult,p){
return (function (state_29253){
var state_val_29254 = (state_29253[(1)]);
if((state_val_29254 === (7))){
var inst_29249 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29255_29302 = state_29253__$1;
(statearr_29255_29302[(2)] = inst_29249);

(statearr_29255_29302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (20))){
var state_29253__$1 = state_29253;
var statearr_29256_29303 = state_29253__$1;
(statearr_29256_29303[(2)] = null);

(statearr_29256_29303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (1))){
var state_29253__$1 = state_29253;
var statearr_29257_29304 = state_29253__$1;
(statearr_29257_29304[(2)] = null);

(statearr_29257_29304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (24))){
var inst_29232 = (state_29253[(7)]);
var inst_29241 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29232);
var state_29253__$1 = state_29253;
var statearr_29258_29305 = state_29253__$1;
(statearr_29258_29305[(2)] = inst_29241);

(statearr_29258_29305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (4))){
var inst_29184 = (state_29253[(8)]);
var inst_29184__$1 = (state_29253[(2)]);
var inst_29185 = (inst_29184__$1 == null);
var state_29253__$1 = (function (){var statearr_29259 = state_29253;
(statearr_29259[(8)] = inst_29184__$1);

return statearr_29259;
})();
if(cljs.core.truth_(inst_29185)){
var statearr_29260_29306 = state_29253__$1;
(statearr_29260_29306[(1)] = (5));

} else {
var statearr_29261_29307 = state_29253__$1;
(statearr_29261_29307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (15))){
var inst_29226 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29262_29308 = state_29253__$1;
(statearr_29262_29308[(2)] = inst_29226);

(statearr_29262_29308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (21))){
var inst_29246 = (state_29253[(2)]);
var state_29253__$1 = (function (){var statearr_29263 = state_29253;
(statearr_29263[(9)] = inst_29246);

return statearr_29263;
})();
var statearr_29264_29309 = state_29253__$1;
(statearr_29264_29309[(2)] = null);

(statearr_29264_29309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (13))){
var inst_29208 = (state_29253[(10)]);
var inst_29210 = cljs.core.chunked_seq_QMARK_.call(null,inst_29208);
var state_29253__$1 = state_29253;
if(inst_29210){
var statearr_29265_29310 = state_29253__$1;
(statearr_29265_29310[(1)] = (16));

} else {
var statearr_29266_29311 = state_29253__$1;
(statearr_29266_29311[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (22))){
var inst_29238 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
if(cljs.core.truth_(inst_29238)){
var statearr_29267_29312 = state_29253__$1;
(statearr_29267_29312[(1)] = (23));

} else {
var statearr_29268_29313 = state_29253__$1;
(statearr_29268_29313[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (6))){
var inst_29184 = (state_29253[(8)]);
var inst_29234 = (state_29253[(11)]);
var inst_29232 = (state_29253[(7)]);
var inst_29232__$1 = topic_fn.call(null,inst_29184);
var inst_29233 = cljs.core.deref.call(null,mults);
var inst_29234__$1 = cljs.core.get.call(null,inst_29233,inst_29232__$1);
var state_29253__$1 = (function (){var statearr_29269 = state_29253;
(statearr_29269[(11)] = inst_29234__$1);

(statearr_29269[(7)] = inst_29232__$1);

return statearr_29269;
})();
if(cljs.core.truth_(inst_29234__$1)){
var statearr_29270_29314 = state_29253__$1;
(statearr_29270_29314[(1)] = (19));

} else {
var statearr_29271_29315 = state_29253__$1;
(statearr_29271_29315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (25))){
var inst_29243 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29272_29316 = state_29253__$1;
(statearr_29272_29316[(2)] = inst_29243);

(statearr_29272_29316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (17))){
var inst_29208 = (state_29253[(10)]);
var inst_29217 = cljs.core.first.call(null,inst_29208);
var inst_29218 = cljs.core.async.muxch_STAR_.call(null,inst_29217);
var inst_29219 = cljs.core.async.close_BANG_.call(null,inst_29218);
var inst_29220 = cljs.core.next.call(null,inst_29208);
var inst_29194 = inst_29220;
var inst_29195 = null;
var inst_29196 = (0);
var inst_29197 = (0);
var state_29253__$1 = (function (){var statearr_29273 = state_29253;
(statearr_29273[(12)] = inst_29194);

(statearr_29273[(13)] = inst_29219);

(statearr_29273[(14)] = inst_29195);

(statearr_29273[(15)] = inst_29197);

(statearr_29273[(16)] = inst_29196);

return statearr_29273;
})();
var statearr_29274_29317 = state_29253__$1;
(statearr_29274_29317[(2)] = null);

(statearr_29274_29317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (3))){
var inst_29251 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29253__$1,inst_29251);
} else {
if((state_val_29254 === (12))){
var inst_29228 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29275_29318 = state_29253__$1;
(statearr_29275_29318[(2)] = inst_29228);

(statearr_29275_29318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (2))){
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29253__$1,(4),ch);
} else {
if((state_val_29254 === (23))){
var state_29253__$1 = state_29253;
var statearr_29276_29319 = state_29253__$1;
(statearr_29276_29319[(2)] = null);

(statearr_29276_29319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (19))){
var inst_29184 = (state_29253[(8)]);
var inst_29234 = (state_29253[(11)]);
var inst_29236 = cljs.core.async.muxch_STAR_.call(null,inst_29234);
var state_29253__$1 = state_29253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29253__$1,(22),inst_29236,inst_29184);
} else {
if((state_val_29254 === (11))){
var inst_29194 = (state_29253[(12)]);
var inst_29208 = (state_29253[(10)]);
var inst_29208__$1 = cljs.core.seq.call(null,inst_29194);
var state_29253__$1 = (function (){var statearr_29277 = state_29253;
(statearr_29277[(10)] = inst_29208__$1);

return statearr_29277;
})();
if(inst_29208__$1){
var statearr_29278_29320 = state_29253__$1;
(statearr_29278_29320[(1)] = (13));

} else {
var statearr_29279_29321 = state_29253__$1;
(statearr_29279_29321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (9))){
var inst_29230 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29280_29322 = state_29253__$1;
(statearr_29280_29322[(2)] = inst_29230);

(statearr_29280_29322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (5))){
var inst_29191 = cljs.core.deref.call(null,mults);
var inst_29192 = cljs.core.vals.call(null,inst_29191);
var inst_29193 = cljs.core.seq.call(null,inst_29192);
var inst_29194 = inst_29193;
var inst_29195 = null;
var inst_29196 = (0);
var inst_29197 = (0);
var state_29253__$1 = (function (){var statearr_29281 = state_29253;
(statearr_29281[(12)] = inst_29194);

(statearr_29281[(14)] = inst_29195);

(statearr_29281[(15)] = inst_29197);

(statearr_29281[(16)] = inst_29196);

return statearr_29281;
})();
var statearr_29282_29323 = state_29253__$1;
(statearr_29282_29323[(2)] = null);

(statearr_29282_29323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (14))){
var state_29253__$1 = state_29253;
var statearr_29286_29324 = state_29253__$1;
(statearr_29286_29324[(2)] = null);

(statearr_29286_29324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (16))){
var inst_29208 = (state_29253[(10)]);
var inst_29212 = cljs.core.chunk_first.call(null,inst_29208);
var inst_29213 = cljs.core.chunk_rest.call(null,inst_29208);
var inst_29214 = cljs.core.count.call(null,inst_29212);
var inst_29194 = inst_29213;
var inst_29195 = inst_29212;
var inst_29196 = inst_29214;
var inst_29197 = (0);
var state_29253__$1 = (function (){var statearr_29287 = state_29253;
(statearr_29287[(12)] = inst_29194);

(statearr_29287[(14)] = inst_29195);

(statearr_29287[(15)] = inst_29197);

(statearr_29287[(16)] = inst_29196);

return statearr_29287;
})();
var statearr_29288_29325 = state_29253__$1;
(statearr_29288_29325[(2)] = null);

(statearr_29288_29325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (10))){
var inst_29194 = (state_29253[(12)]);
var inst_29195 = (state_29253[(14)]);
var inst_29197 = (state_29253[(15)]);
var inst_29196 = (state_29253[(16)]);
var inst_29202 = cljs.core._nth.call(null,inst_29195,inst_29197);
var inst_29203 = cljs.core.async.muxch_STAR_.call(null,inst_29202);
var inst_29204 = cljs.core.async.close_BANG_.call(null,inst_29203);
var inst_29205 = (inst_29197 + (1));
var tmp29283 = inst_29194;
var tmp29284 = inst_29195;
var tmp29285 = inst_29196;
var inst_29194__$1 = tmp29283;
var inst_29195__$1 = tmp29284;
var inst_29196__$1 = tmp29285;
var inst_29197__$1 = inst_29205;
var state_29253__$1 = (function (){var statearr_29289 = state_29253;
(statearr_29289[(12)] = inst_29194__$1);

(statearr_29289[(14)] = inst_29195__$1);

(statearr_29289[(15)] = inst_29197__$1);

(statearr_29289[(17)] = inst_29204);

(statearr_29289[(16)] = inst_29196__$1);

return statearr_29289;
})();
var statearr_29290_29326 = state_29253__$1;
(statearr_29290_29326[(2)] = null);

(statearr_29290_29326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (18))){
var inst_29223 = (state_29253[(2)]);
var state_29253__$1 = state_29253;
var statearr_29291_29327 = state_29253__$1;
(statearr_29291_29327[(2)] = inst_29223);

(statearr_29291_29327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29254 === (8))){
var inst_29197 = (state_29253[(15)]);
var inst_29196 = (state_29253[(16)]);
var inst_29199 = (inst_29197 < inst_29196);
var inst_29200 = inst_29199;
var state_29253__$1 = state_29253;
if(cljs.core.truth_(inst_29200)){
var statearr_29292_29328 = state_29253__$1;
(statearr_29292_29328[(1)] = (10));

} else {
var statearr_29293_29329 = state_29253__$1;
(statearr_29293_29329[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29301,mults,ensure_mult,p))
;
return ((function (switch__18314__auto__,c__18370__auto___29301,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__18315__auto__ = null;
var cljs$core$async$pub_$_state_machine__18315__auto____0 = (function (){
var statearr_29297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29297[(0)] = cljs$core$async$pub_$_state_machine__18315__auto__);

(statearr_29297[(1)] = (1));

return statearr_29297;
});
var cljs$core$async$pub_$_state_machine__18315__auto____1 = (function (state_29253){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29298){if((e29298 instanceof Object)){
var ex__18318__auto__ = e29298;
var statearr_29299_29330 = state_29253;
(statearr_29299_29330[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29331 = state_29253;
state_29253 = G__29331;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__18315__auto__ = function(state_29253){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__18315__auto____1.call(this,state_29253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__18315__auto____0;
cljs$core$async$pub_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__18315__auto____1;
return cljs$core$async$pub_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29301,mults,ensure_mult,p))
})();
var state__18372__auto__ = (function (){var statearr_29300 = f__18371__auto__.call(null);
(statearr_29300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29301);

return statearr_29300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29301,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18370__auto___29468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29438){
var state_val_29439 = (state_29438[(1)]);
if((state_val_29439 === (7))){
var state_29438__$1 = state_29438;
var statearr_29440_29469 = state_29438__$1;
(statearr_29440_29469[(2)] = null);

(statearr_29440_29469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (1))){
var state_29438__$1 = state_29438;
var statearr_29441_29470 = state_29438__$1;
(statearr_29441_29470[(2)] = null);

(statearr_29441_29470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (4))){
var inst_29402 = (state_29438[(7)]);
var inst_29404 = (inst_29402 < cnt);
var state_29438__$1 = state_29438;
if(cljs.core.truth_(inst_29404)){
var statearr_29442_29471 = state_29438__$1;
(statearr_29442_29471[(1)] = (6));

} else {
var statearr_29443_29472 = state_29438__$1;
(statearr_29443_29472[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (15))){
var inst_29434 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29444_29473 = state_29438__$1;
(statearr_29444_29473[(2)] = inst_29434);

(statearr_29444_29473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (13))){
var inst_29427 = cljs.core.async.close_BANG_.call(null,out);
var state_29438__$1 = state_29438;
var statearr_29445_29474 = state_29438__$1;
(statearr_29445_29474[(2)] = inst_29427);

(statearr_29445_29474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (6))){
var state_29438__$1 = state_29438;
var statearr_29446_29475 = state_29438__$1;
(statearr_29446_29475[(2)] = null);

(statearr_29446_29475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (3))){
var inst_29436 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29438__$1,inst_29436);
} else {
if((state_val_29439 === (12))){
var inst_29424 = (state_29438[(8)]);
var inst_29424__$1 = (state_29438[(2)]);
var inst_29425 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29424__$1);
var state_29438__$1 = (function (){var statearr_29447 = state_29438;
(statearr_29447[(8)] = inst_29424__$1);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29425)){
var statearr_29448_29476 = state_29438__$1;
(statearr_29448_29476[(1)] = (13));

} else {
var statearr_29449_29477 = state_29438__$1;
(statearr_29449_29477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (2))){
var inst_29401 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29402 = (0);
var state_29438__$1 = (function (){var statearr_29450 = state_29438;
(statearr_29450[(9)] = inst_29401);

(statearr_29450[(7)] = inst_29402);

return statearr_29450;
})();
var statearr_29451_29478 = state_29438__$1;
(statearr_29451_29478[(2)] = null);

(statearr_29451_29478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (11))){
var inst_29402 = (state_29438[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29438,(10),Object,null,(9));
var inst_29411 = chs__$1.call(null,inst_29402);
var inst_29412 = done.call(null,inst_29402);
var inst_29413 = cljs.core.async.take_BANG_.call(null,inst_29411,inst_29412);
var state_29438__$1 = state_29438;
var statearr_29452_29479 = state_29438__$1;
(statearr_29452_29479[(2)] = inst_29413);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29438__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (9))){
var inst_29402 = (state_29438[(7)]);
var inst_29415 = (state_29438[(2)]);
var inst_29416 = (inst_29402 + (1));
var inst_29402__$1 = inst_29416;
var state_29438__$1 = (function (){var statearr_29453 = state_29438;
(statearr_29453[(7)] = inst_29402__$1);

(statearr_29453[(10)] = inst_29415);

return statearr_29453;
})();
var statearr_29454_29480 = state_29438__$1;
(statearr_29454_29480[(2)] = null);

(statearr_29454_29480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (5))){
var inst_29422 = (state_29438[(2)]);
var state_29438__$1 = (function (){var statearr_29455 = state_29438;
(statearr_29455[(11)] = inst_29422);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29438__$1,(12),dchan);
} else {
if((state_val_29439 === (14))){
var inst_29424 = (state_29438[(8)]);
var inst_29429 = cljs.core.apply.call(null,f,inst_29424);
var state_29438__$1 = state_29438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29438__$1,(16),out,inst_29429);
} else {
if((state_val_29439 === (16))){
var inst_29431 = (state_29438[(2)]);
var state_29438__$1 = (function (){var statearr_29456 = state_29438;
(statearr_29456[(12)] = inst_29431);

return statearr_29456;
})();
var statearr_29457_29481 = state_29438__$1;
(statearr_29457_29481[(2)] = null);

(statearr_29457_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (10))){
var inst_29406 = (state_29438[(2)]);
var inst_29407 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29438__$1 = (function (){var statearr_29458 = state_29438;
(statearr_29458[(13)] = inst_29406);

return statearr_29458;
})();
var statearr_29459_29482 = state_29438__$1;
(statearr_29459_29482[(2)] = inst_29407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29438__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29439 === (8))){
var inst_29420 = (state_29438[(2)]);
var state_29438__$1 = state_29438;
var statearr_29460_29483 = state_29438__$1;
(statearr_29460_29483[(2)] = inst_29420);

(statearr_29460_29483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18314__auto__,c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__18315__auto__ = null;
var cljs$core$async$map_$_state_machine__18315__auto____0 = (function (){
var statearr_29464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29464[(0)] = cljs$core$async$map_$_state_machine__18315__auto__);

(statearr_29464[(1)] = (1));

return statearr_29464;
});
var cljs$core$async$map_$_state_machine__18315__auto____1 = (function (state_29438){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29465){if((e29465 instanceof Object)){
var ex__18318__auto__ = e29465;
var statearr_29466_29484 = state_29438;
(statearr_29466_29484[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29485 = state_29438;
state_29438 = G__29485;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__18315__auto__ = function(state_29438){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__18315__auto____1.call(this,state_29438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__18315__auto____0;
cljs$core$async$map_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__18315__auto____1;
return cljs$core$async$map_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18372__auto__ = (function (){var statearr_29467 = f__18371__auto__.call(null);
(statearr_29467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29468);

return statearr_29467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29468,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___29593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29593,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29593,out){
return (function (state_29569){
var state_val_29570 = (state_29569[(1)]);
if((state_val_29570 === (7))){
var inst_29549 = (state_29569[(7)]);
var inst_29548 = (state_29569[(8)]);
var inst_29548__$1 = (state_29569[(2)]);
var inst_29549__$1 = cljs.core.nth.call(null,inst_29548__$1,(0),null);
var inst_29550 = cljs.core.nth.call(null,inst_29548__$1,(1),null);
var inst_29551 = (inst_29549__$1 == null);
var state_29569__$1 = (function (){var statearr_29571 = state_29569;
(statearr_29571[(9)] = inst_29550);

(statearr_29571[(7)] = inst_29549__$1);

(statearr_29571[(8)] = inst_29548__$1);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29551)){
var statearr_29572_29594 = state_29569__$1;
(statearr_29572_29594[(1)] = (8));

} else {
var statearr_29573_29595 = state_29569__$1;
(statearr_29573_29595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (1))){
var inst_29540 = cljs.core.vec.call(null,chs);
var inst_29541 = inst_29540;
var state_29569__$1 = (function (){var statearr_29574 = state_29569;
(statearr_29574[(10)] = inst_29541);

return statearr_29574;
})();
var statearr_29575_29596 = state_29569__$1;
(statearr_29575_29596[(2)] = null);

(statearr_29575_29596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (4))){
var inst_29541 = (state_29569[(10)]);
var state_29569__$1 = state_29569;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29569__$1,(7),inst_29541);
} else {
if((state_val_29570 === (6))){
var inst_29565 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29576_29597 = state_29569__$1;
(statearr_29576_29597[(2)] = inst_29565);

(statearr_29576_29597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (3))){
var inst_29567 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29569__$1,inst_29567);
} else {
if((state_val_29570 === (2))){
var inst_29541 = (state_29569[(10)]);
var inst_29543 = cljs.core.count.call(null,inst_29541);
var inst_29544 = (inst_29543 > (0));
var state_29569__$1 = state_29569;
if(cljs.core.truth_(inst_29544)){
var statearr_29578_29598 = state_29569__$1;
(statearr_29578_29598[(1)] = (4));

} else {
var statearr_29579_29599 = state_29569__$1;
(statearr_29579_29599[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (11))){
var inst_29541 = (state_29569[(10)]);
var inst_29558 = (state_29569[(2)]);
var tmp29577 = inst_29541;
var inst_29541__$1 = tmp29577;
var state_29569__$1 = (function (){var statearr_29580 = state_29569;
(statearr_29580[(11)] = inst_29558);

(statearr_29580[(10)] = inst_29541__$1);

return statearr_29580;
})();
var statearr_29581_29600 = state_29569__$1;
(statearr_29581_29600[(2)] = null);

(statearr_29581_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (9))){
var inst_29549 = (state_29569[(7)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29569__$1,(11),out,inst_29549);
} else {
if((state_val_29570 === (5))){
var inst_29563 = cljs.core.async.close_BANG_.call(null,out);
var state_29569__$1 = state_29569;
var statearr_29582_29601 = state_29569__$1;
(statearr_29582_29601[(2)] = inst_29563);

(statearr_29582_29601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (10))){
var inst_29561 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29583_29602 = state_29569__$1;
(statearr_29583_29602[(2)] = inst_29561);

(statearr_29583_29602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (8))){
var inst_29550 = (state_29569[(9)]);
var inst_29549 = (state_29569[(7)]);
var inst_29548 = (state_29569[(8)]);
var inst_29541 = (state_29569[(10)]);
var inst_29553 = (function (){var c = inst_29550;
var v = inst_29549;
var vec__29546 = inst_29548;
var cs = inst_29541;
return ((function (c,v,vec__29546,cs,inst_29550,inst_29549,inst_29548,inst_29541,state_val_29570,c__18370__auto___29593,out){
return (function (p1__29486_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29486_SHARP_);
});
;})(c,v,vec__29546,cs,inst_29550,inst_29549,inst_29548,inst_29541,state_val_29570,c__18370__auto___29593,out))
})();
var inst_29554 = cljs.core.filterv.call(null,inst_29553,inst_29541);
var inst_29541__$1 = inst_29554;
var state_29569__$1 = (function (){var statearr_29584 = state_29569;
(statearr_29584[(10)] = inst_29541__$1);

return statearr_29584;
})();
var statearr_29585_29603 = state_29569__$1;
(statearr_29585_29603[(2)] = null);

(statearr_29585_29603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29593,out))
;
return ((function (switch__18314__auto__,c__18370__auto___29593,out){
return (function() {
var cljs$core$async$merge_$_state_machine__18315__auto__ = null;
var cljs$core$async$merge_$_state_machine__18315__auto____0 = (function (){
var statearr_29589 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29589[(0)] = cljs$core$async$merge_$_state_machine__18315__auto__);

(statearr_29589[(1)] = (1));

return statearr_29589;
});
var cljs$core$async$merge_$_state_machine__18315__auto____1 = (function (state_29569){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29590){if((e29590 instanceof Object)){
var ex__18318__auto__ = e29590;
var statearr_29591_29604 = state_29569;
(statearr_29591_29604[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29605 = state_29569;
state_29569 = G__29605;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__18315__auto__ = function(state_29569){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__18315__auto____1.call(this,state_29569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__18315__auto____0;
cljs$core$async$merge_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__18315__auto____1;
return cljs$core$async$merge_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29593,out))
})();
var state__18372__auto__ = (function (){var statearr_29592 = f__18371__auto__.call(null);
(statearr_29592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29593);

return statearr_29592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29593,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___29698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29698,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29698,out){
return (function (state_29675){
var state_val_29676 = (state_29675[(1)]);
if((state_val_29676 === (7))){
var inst_29657 = (state_29675[(7)]);
var inst_29657__$1 = (state_29675[(2)]);
var inst_29658 = (inst_29657__$1 == null);
var inst_29659 = cljs.core.not.call(null,inst_29658);
var state_29675__$1 = (function (){var statearr_29677 = state_29675;
(statearr_29677[(7)] = inst_29657__$1);

return statearr_29677;
})();
if(inst_29659){
var statearr_29678_29699 = state_29675__$1;
(statearr_29678_29699[(1)] = (8));

} else {
var statearr_29679_29700 = state_29675__$1;
(statearr_29679_29700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (1))){
var inst_29652 = (0);
var state_29675__$1 = (function (){var statearr_29680 = state_29675;
(statearr_29680[(8)] = inst_29652);

return statearr_29680;
})();
var statearr_29681_29701 = state_29675__$1;
(statearr_29681_29701[(2)] = null);

(statearr_29681_29701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (4))){
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29675__$1,(7),ch);
} else {
if((state_val_29676 === (6))){
var inst_29670 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
var statearr_29682_29702 = state_29675__$1;
(statearr_29682_29702[(2)] = inst_29670);

(statearr_29682_29702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (3))){
var inst_29672 = (state_29675[(2)]);
var inst_29673 = cljs.core.async.close_BANG_.call(null,out);
var state_29675__$1 = (function (){var statearr_29683 = state_29675;
(statearr_29683[(9)] = inst_29672);

return statearr_29683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29675__$1,inst_29673);
} else {
if((state_val_29676 === (2))){
var inst_29652 = (state_29675[(8)]);
var inst_29654 = (inst_29652 < n);
var state_29675__$1 = state_29675;
if(cljs.core.truth_(inst_29654)){
var statearr_29684_29703 = state_29675__$1;
(statearr_29684_29703[(1)] = (4));

} else {
var statearr_29685_29704 = state_29675__$1;
(statearr_29685_29704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (11))){
var inst_29652 = (state_29675[(8)]);
var inst_29662 = (state_29675[(2)]);
var inst_29663 = (inst_29652 + (1));
var inst_29652__$1 = inst_29663;
var state_29675__$1 = (function (){var statearr_29686 = state_29675;
(statearr_29686[(8)] = inst_29652__$1);

(statearr_29686[(10)] = inst_29662);

return statearr_29686;
})();
var statearr_29687_29705 = state_29675__$1;
(statearr_29687_29705[(2)] = null);

(statearr_29687_29705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (9))){
var state_29675__$1 = state_29675;
var statearr_29688_29706 = state_29675__$1;
(statearr_29688_29706[(2)] = null);

(statearr_29688_29706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (5))){
var state_29675__$1 = state_29675;
var statearr_29689_29707 = state_29675__$1;
(statearr_29689_29707[(2)] = null);

(statearr_29689_29707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (10))){
var inst_29667 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
var statearr_29690_29708 = state_29675__$1;
(statearr_29690_29708[(2)] = inst_29667);

(statearr_29690_29708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (8))){
var inst_29657 = (state_29675[(7)]);
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29675__$1,(11),out,inst_29657);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29698,out))
;
return ((function (switch__18314__auto__,c__18370__auto___29698,out){
return (function() {
var cljs$core$async$take_$_state_machine__18315__auto__ = null;
var cljs$core$async$take_$_state_machine__18315__auto____0 = (function (){
var statearr_29694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29694[(0)] = cljs$core$async$take_$_state_machine__18315__auto__);

(statearr_29694[(1)] = (1));

return statearr_29694;
});
var cljs$core$async$take_$_state_machine__18315__auto____1 = (function (state_29675){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29695){if((e29695 instanceof Object)){
var ex__18318__auto__ = e29695;
var statearr_29696_29709 = state_29675;
(statearr_29696_29709[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29710 = state_29675;
state_29675 = G__29710;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__18315__auto__ = function(state_29675){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__18315__auto____1.call(this,state_29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__18315__auto____0;
cljs$core$async$take_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__18315__auto____1;
return cljs$core$async$take_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29698,out))
})();
var state__18372__auto__ = (function (){var statearr_29697 = f__18371__auto__.call(null);
(statearr_29697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29698);

return statearr_29697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29698,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29718 = (function (ch,f,map_LT_,meta29719){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29719 = meta29719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29721 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29721 = (function (fn1,_,meta29719,map_LT_,f,ch,meta29722){
this.fn1 = fn1;
this._ = _;
this.meta29719 = meta29719;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29722 = meta29722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29721.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29711_SHARP_){
return f1.call(null,(((p1__29711_SHARP_ == null))?null:self__.f.call(null,p1__29711_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29723){
var self__ = this;
var _29723__$1 = this;
return self__.meta29722;
});})(___$1))
;

cljs.core.async.t29721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29723,meta29722__$1){
var self__ = this;
var _29723__$1 = this;
return (new cljs.core.async.t29721(self__.fn1,self__._,self__.meta29719,self__.map_LT_,self__.f,self__.ch,meta29722__$1));
});})(___$1))
;

cljs.core.async.t29721.cljs$lang$type = true;

cljs.core.async.t29721.cljs$lang$ctorStr = "cljs.core.async/t29721";

cljs.core.async.t29721.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t29721");
});})(___$1))
;

cljs.core.async.__GT_t29721 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29721(fn1__$1,___$2,meta29719__$1,map_LT___$1,f__$1,ch__$1,meta29722){
return (new cljs.core.async.t29721(fn1__$1,___$2,meta29719__$1,map_LT___$1,f__$1,ch__$1,meta29722));
});})(___$1))
;

}

return (new cljs.core.async.t29721(fn1,___$1,self__.meta29719,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16177__auto__ = ret;
if(cljs.core.truth_(and__16177__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16177__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29720){
var self__ = this;
var _29720__$1 = this;
return self__.meta29719;
});

cljs.core.async.t29718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29720,meta29719__$1){
var self__ = this;
var _29720__$1 = this;
return (new cljs.core.async.t29718(self__.ch,self__.f,self__.map_LT_,meta29719__$1));
});

cljs.core.async.t29718.cljs$lang$type = true;

cljs.core.async.t29718.cljs$lang$ctorStr = "cljs.core.async/t29718";

cljs.core.async.t29718.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t29718");
});

cljs.core.async.__GT_t29718 = (function cljs$core$async$map_LT__$___GT_t29718(ch__$1,f__$1,map_LT___$1,meta29719){
return (new cljs.core.async.t29718(ch__$1,f__$1,map_LT___$1,meta29719));
});

}

return (new cljs.core.async.t29718(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29727 = (function (ch,f,map_GT_,meta29728){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29728 = meta29728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29729){
var self__ = this;
var _29729__$1 = this;
return self__.meta29728;
});

cljs.core.async.t29727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29729,meta29728__$1){
var self__ = this;
var _29729__$1 = this;
return (new cljs.core.async.t29727(self__.ch,self__.f,self__.map_GT_,meta29728__$1));
});

cljs.core.async.t29727.cljs$lang$type = true;

cljs.core.async.t29727.cljs$lang$ctorStr = "cljs.core.async/t29727";

cljs.core.async.t29727.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t29727");
});

cljs.core.async.__GT_t29727 = (function cljs$core$async$map_GT__$___GT_t29727(ch__$1,f__$1,map_GT___$1,meta29728){
return (new cljs.core.async.t29727(ch__$1,f__$1,map_GT___$1,meta29728));
});

}

return (new cljs.core.async.t29727(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29733 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29733 = (function (ch,p,filter_GT_,meta29734){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29734 = meta29734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29735){
var self__ = this;
var _29735__$1 = this;
return self__.meta29734;
});

cljs.core.async.t29733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29735,meta29734__$1){
var self__ = this;
var _29735__$1 = this;
return (new cljs.core.async.t29733(self__.ch,self__.p,self__.filter_GT_,meta29734__$1));
});

cljs.core.async.t29733.cljs$lang$type = true;

cljs.core.async.t29733.cljs$lang$ctorStr = "cljs.core.async/t29733";

cljs.core.async.t29733.cljs$lang$ctorPrWriter = (function (this__16776__auto__,writer__16777__auto__,opt__16778__auto__){
return cljs.core._write.call(null,writer__16777__auto__,"cljs.core.async/t29733");
});

cljs.core.async.__GT_t29733 = (function cljs$core$async$filter_GT__$___GT_t29733(ch__$1,p__$1,filter_GT___$1,meta29734){
return (new cljs.core.async.t29733(ch__$1,p__$1,filter_GT___$1,meta29734));
});

}

return (new cljs.core.async.t29733(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___29818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___29818,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___29818,out){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29799_29819 = state_29797__$1;
(statearr_29799_29819[(2)] = inst_29793);

(statearr_29799_29819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var state_29797__$1 = state_29797;
var statearr_29800_29820 = state_29797__$1;
(statearr_29800_29820[(2)] = null);

(statearr_29800_29820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29779 = (state_29797[(7)]);
var inst_29779__$1 = (state_29797[(2)]);
var inst_29780 = (inst_29779__$1 == null);
var state_29797__$1 = (function (){var statearr_29801 = state_29797;
(statearr_29801[(7)] = inst_29779__$1);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29780)){
var statearr_29802_29821 = state_29797__$1;
(statearr_29802_29821[(1)] = (5));

} else {
var statearr_29803_29822 = state_29797__$1;
(statearr_29803_29822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var inst_29779 = (state_29797[(7)]);
var inst_29784 = p.call(null,inst_29779);
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29784)){
var statearr_29804_29823 = state_29797__$1;
(statearr_29804_29823[(1)] = (8));

} else {
var statearr_29805_29824 = state_29797__$1;
(statearr_29805_29824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (2))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(4),ch);
} else {
if((state_val_29798 === (11))){
var inst_29787 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29806_29825 = state_29797__$1;
(statearr_29806_29825[(2)] = inst_29787);

(statearr_29806_29825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var state_29797__$1 = state_29797;
var statearr_29807_29826 = state_29797__$1;
(statearr_29807_29826[(2)] = null);

(statearr_29807_29826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var inst_29782 = cljs.core.async.close_BANG_.call(null,out);
var state_29797__$1 = state_29797;
var statearr_29808_29827 = state_29797__$1;
(statearr_29808_29827[(2)] = inst_29782);

(statearr_29808_29827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29790 = (state_29797[(2)]);
var state_29797__$1 = (function (){var statearr_29809 = state_29797;
(statearr_29809[(8)] = inst_29790);

return statearr_29809;
})();
var statearr_29810_29828 = state_29797__$1;
(statearr_29810_29828[(2)] = null);

(statearr_29810_29828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29779 = (state_29797[(7)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(11),out,inst_29779);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___29818,out))
;
return ((function (switch__18314__auto__,c__18370__auto___29818,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__18315__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__18315__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = cljs$core$async$filter_LT__$_state_machine__18315__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var cljs$core$async$filter_LT__$_state_machine__18315__auto____1 = (function (state_29797){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__18318__auto__ = e29815;
var statearr_29816_29829 = state_29797;
(statearr_29816_29829[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29830 = state_29797;
state_29797 = G__29830;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__18315__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__18315__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__18315__auto____0;
cljs$core$async$filter_LT__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__18315__auto____1;
return cljs$core$async$filter_LT__$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___29818,out))
})();
var state__18372__auto__ = (function (){var statearr_29817 = f__18371__auto__.call(null);
(statearr_29817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___29818);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___29818,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto__){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto__){
return (function (state_29996){
var state_val_29997 = (state_29996[(1)]);
if((state_val_29997 === (7))){
var inst_29992 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_29998_30039 = state_29996__$1;
(statearr_29998_30039[(2)] = inst_29992);

(statearr_29998_30039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (20))){
var inst_29962 = (state_29996[(7)]);
var inst_29973 = (state_29996[(2)]);
var inst_29974 = cljs.core.next.call(null,inst_29962);
var inst_29948 = inst_29974;
var inst_29949 = null;
var inst_29950 = (0);
var inst_29951 = (0);
var state_29996__$1 = (function (){var statearr_29999 = state_29996;
(statearr_29999[(8)] = inst_29948);

(statearr_29999[(9)] = inst_29950);

(statearr_29999[(10)] = inst_29951);

(statearr_29999[(11)] = inst_29949);

(statearr_29999[(12)] = inst_29973);

return statearr_29999;
})();
var statearr_30000_30040 = state_29996__$1;
(statearr_30000_30040[(2)] = null);

(statearr_30000_30040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (1))){
var state_29996__$1 = state_29996;
var statearr_30001_30041 = state_29996__$1;
(statearr_30001_30041[(2)] = null);

(statearr_30001_30041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (4))){
var inst_29937 = (state_29996[(13)]);
var inst_29937__$1 = (state_29996[(2)]);
var inst_29938 = (inst_29937__$1 == null);
var state_29996__$1 = (function (){var statearr_30002 = state_29996;
(statearr_30002[(13)] = inst_29937__$1);

return statearr_30002;
})();
if(cljs.core.truth_(inst_29938)){
var statearr_30003_30042 = state_29996__$1;
(statearr_30003_30042[(1)] = (5));

} else {
var statearr_30004_30043 = state_29996__$1;
(statearr_30004_30043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (15))){
var state_29996__$1 = state_29996;
var statearr_30008_30044 = state_29996__$1;
(statearr_30008_30044[(2)] = null);

(statearr_30008_30044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (21))){
var state_29996__$1 = state_29996;
var statearr_30009_30045 = state_29996__$1;
(statearr_30009_30045[(2)] = null);

(statearr_30009_30045[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (13))){
var inst_29948 = (state_29996[(8)]);
var inst_29950 = (state_29996[(9)]);
var inst_29951 = (state_29996[(10)]);
var inst_29949 = (state_29996[(11)]);
var inst_29958 = (state_29996[(2)]);
var inst_29959 = (inst_29951 + (1));
var tmp30005 = inst_29948;
var tmp30006 = inst_29950;
var tmp30007 = inst_29949;
var inst_29948__$1 = tmp30005;
var inst_29949__$1 = tmp30007;
var inst_29950__$1 = tmp30006;
var inst_29951__$1 = inst_29959;
var state_29996__$1 = (function (){var statearr_30010 = state_29996;
(statearr_30010[(8)] = inst_29948__$1);

(statearr_30010[(9)] = inst_29950__$1);

(statearr_30010[(10)] = inst_29951__$1);

(statearr_30010[(11)] = inst_29949__$1);

(statearr_30010[(14)] = inst_29958);

return statearr_30010;
})();
var statearr_30011_30046 = state_29996__$1;
(statearr_30011_30046[(2)] = null);

(statearr_30011_30046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (22))){
var state_29996__$1 = state_29996;
var statearr_30012_30047 = state_29996__$1;
(statearr_30012_30047[(2)] = null);

(statearr_30012_30047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (6))){
var inst_29937 = (state_29996[(13)]);
var inst_29946 = f.call(null,inst_29937);
var inst_29947 = cljs.core.seq.call(null,inst_29946);
var inst_29948 = inst_29947;
var inst_29949 = null;
var inst_29950 = (0);
var inst_29951 = (0);
var state_29996__$1 = (function (){var statearr_30013 = state_29996;
(statearr_30013[(8)] = inst_29948);

(statearr_30013[(9)] = inst_29950);

(statearr_30013[(10)] = inst_29951);

(statearr_30013[(11)] = inst_29949);

return statearr_30013;
})();
var statearr_30014_30048 = state_29996__$1;
(statearr_30014_30048[(2)] = null);

(statearr_30014_30048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (17))){
var inst_29962 = (state_29996[(7)]);
var inst_29966 = cljs.core.chunk_first.call(null,inst_29962);
var inst_29967 = cljs.core.chunk_rest.call(null,inst_29962);
var inst_29968 = cljs.core.count.call(null,inst_29966);
var inst_29948 = inst_29967;
var inst_29949 = inst_29966;
var inst_29950 = inst_29968;
var inst_29951 = (0);
var state_29996__$1 = (function (){var statearr_30015 = state_29996;
(statearr_30015[(8)] = inst_29948);

(statearr_30015[(9)] = inst_29950);

(statearr_30015[(10)] = inst_29951);

(statearr_30015[(11)] = inst_29949);

return statearr_30015;
})();
var statearr_30016_30049 = state_29996__$1;
(statearr_30016_30049[(2)] = null);

(statearr_30016_30049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (3))){
var inst_29994 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29996__$1,inst_29994);
} else {
if((state_val_29997 === (12))){
var inst_29982 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30017_30050 = state_29996__$1;
(statearr_30017_30050[(2)] = inst_29982);

(statearr_30017_30050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (2))){
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29996__$1,(4),in$);
} else {
if((state_val_29997 === (23))){
var inst_29990 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30018_30051 = state_29996__$1;
(statearr_30018_30051[(2)] = inst_29990);

(statearr_30018_30051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (19))){
var inst_29977 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30019_30052 = state_29996__$1;
(statearr_30019_30052[(2)] = inst_29977);

(statearr_30019_30052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (11))){
var inst_29948 = (state_29996[(8)]);
var inst_29962 = (state_29996[(7)]);
var inst_29962__$1 = cljs.core.seq.call(null,inst_29948);
var state_29996__$1 = (function (){var statearr_30020 = state_29996;
(statearr_30020[(7)] = inst_29962__$1);

return statearr_30020;
})();
if(inst_29962__$1){
var statearr_30021_30053 = state_29996__$1;
(statearr_30021_30053[(1)] = (14));

} else {
var statearr_30022_30054 = state_29996__$1;
(statearr_30022_30054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (9))){
var inst_29984 = (state_29996[(2)]);
var inst_29985 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29996__$1 = (function (){var statearr_30023 = state_29996;
(statearr_30023[(15)] = inst_29984);

return statearr_30023;
})();
if(cljs.core.truth_(inst_29985)){
var statearr_30024_30055 = state_29996__$1;
(statearr_30024_30055[(1)] = (21));

} else {
var statearr_30025_30056 = state_29996__$1;
(statearr_30025_30056[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (5))){
var inst_29940 = cljs.core.async.close_BANG_.call(null,out);
var state_29996__$1 = state_29996;
var statearr_30026_30057 = state_29996__$1;
(statearr_30026_30057[(2)] = inst_29940);

(statearr_30026_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (14))){
var inst_29962 = (state_29996[(7)]);
var inst_29964 = cljs.core.chunked_seq_QMARK_.call(null,inst_29962);
var state_29996__$1 = state_29996;
if(inst_29964){
var statearr_30027_30058 = state_29996__$1;
(statearr_30027_30058[(1)] = (17));

} else {
var statearr_30028_30059 = state_29996__$1;
(statearr_30028_30059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (16))){
var inst_29980 = (state_29996[(2)]);
var state_29996__$1 = state_29996;
var statearr_30029_30060 = state_29996__$1;
(statearr_30029_30060[(2)] = inst_29980);

(statearr_30029_30060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29997 === (10))){
var inst_29951 = (state_29996[(10)]);
var inst_29949 = (state_29996[(11)]);
var inst_29956 = cljs.core._nth.call(null,inst_29949,inst_29951);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29996__$1,(13),out,inst_29956);
} else {
if((state_val_29997 === (18))){
var inst_29962 = (state_29996[(7)]);
var inst_29971 = cljs.core.first.call(null,inst_29962);
var state_29996__$1 = state_29996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29996__$1,(20),out,inst_29971);
} else {
if((state_val_29997 === (8))){
var inst_29950 = (state_29996[(9)]);
var inst_29951 = (state_29996[(10)]);
var inst_29953 = (inst_29951 < inst_29950);
var inst_29954 = inst_29953;
var state_29996__$1 = state_29996;
if(cljs.core.truth_(inst_29954)){
var statearr_30030_30061 = state_29996__$1;
(statearr_30030_30061[(1)] = (10));

} else {
var statearr_30031_30062 = state_29996__$1;
(statearr_30031_30062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto__))
;
return ((function (switch__18314__auto__,c__18370__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____0 = (function (){
var statearr_30035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30035[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__);

(statearr_30035[(1)] = (1));

return statearr_30035;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____1 = (function (state_29996){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_29996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e30036){if((e30036 instanceof Object)){
var ex__18318__auto__ = e30036;
var statearr_30037_30063 = state_29996;
(statearr_30037_30063[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30064 = state_29996;
state_29996 = G__30064;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__ = function(state_29996){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____1.call(this,state_29996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto__))
})();
var state__18372__auto__ = (function (){var statearr_30038 = f__18371__auto__.call(null);
(statearr_30038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto__);

return statearr_30038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto__))
);

return c__18370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___30161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___30161,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___30161,out){
return (function (state_30136){
var state_val_30137 = (state_30136[(1)]);
if((state_val_30137 === (7))){
var inst_30131 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30138_30162 = state_30136__$1;
(statearr_30138_30162[(2)] = inst_30131);

(statearr_30138_30162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (1))){
var inst_30113 = null;
var state_30136__$1 = (function (){var statearr_30139 = state_30136;
(statearr_30139[(7)] = inst_30113);

return statearr_30139;
})();
var statearr_30140_30163 = state_30136__$1;
(statearr_30140_30163[(2)] = null);

(statearr_30140_30163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (4))){
var inst_30116 = (state_30136[(8)]);
var inst_30116__$1 = (state_30136[(2)]);
var inst_30117 = (inst_30116__$1 == null);
var inst_30118 = cljs.core.not.call(null,inst_30117);
var state_30136__$1 = (function (){var statearr_30141 = state_30136;
(statearr_30141[(8)] = inst_30116__$1);

return statearr_30141;
})();
if(inst_30118){
var statearr_30142_30164 = state_30136__$1;
(statearr_30142_30164[(1)] = (5));

} else {
var statearr_30143_30165 = state_30136__$1;
(statearr_30143_30165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (6))){
var state_30136__$1 = state_30136;
var statearr_30144_30166 = state_30136__$1;
(statearr_30144_30166[(2)] = null);

(statearr_30144_30166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (3))){
var inst_30133 = (state_30136[(2)]);
var inst_30134 = cljs.core.async.close_BANG_.call(null,out);
var state_30136__$1 = (function (){var statearr_30145 = state_30136;
(statearr_30145[(9)] = inst_30133);

return statearr_30145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30136__$1,inst_30134);
} else {
if((state_val_30137 === (2))){
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30136__$1,(4),ch);
} else {
if((state_val_30137 === (11))){
var inst_30116 = (state_30136[(8)]);
var inst_30125 = (state_30136[(2)]);
var inst_30113 = inst_30116;
var state_30136__$1 = (function (){var statearr_30146 = state_30136;
(statearr_30146[(7)] = inst_30113);

(statearr_30146[(10)] = inst_30125);

return statearr_30146;
})();
var statearr_30147_30167 = state_30136__$1;
(statearr_30147_30167[(2)] = null);

(statearr_30147_30167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (9))){
var inst_30116 = (state_30136[(8)]);
var state_30136__$1 = state_30136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30136__$1,(11),out,inst_30116);
} else {
if((state_val_30137 === (5))){
var inst_30113 = (state_30136[(7)]);
var inst_30116 = (state_30136[(8)]);
var inst_30120 = cljs.core._EQ_.call(null,inst_30116,inst_30113);
var state_30136__$1 = state_30136;
if(inst_30120){
var statearr_30149_30168 = state_30136__$1;
(statearr_30149_30168[(1)] = (8));

} else {
var statearr_30150_30169 = state_30136__$1;
(statearr_30150_30169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (10))){
var inst_30128 = (state_30136[(2)]);
var state_30136__$1 = state_30136;
var statearr_30151_30170 = state_30136__$1;
(statearr_30151_30170[(2)] = inst_30128);

(statearr_30151_30170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30137 === (8))){
var inst_30113 = (state_30136[(7)]);
var tmp30148 = inst_30113;
var inst_30113__$1 = tmp30148;
var state_30136__$1 = (function (){var statearr_30152 = state_30136;
(statearr_30152[(7)] = inst_30113__$1);

return statearr_30152;
})();
var statearr_30153_30171 = state_30136__$1;
(statearr_30153_30171[(2)] = null);

(statearr_30153_30171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___30161,out))
;
return ((function (switch__18314__auto__,c__18370__auto___30161,out){
return (function() {
var cljs$core$async$unique_$_state_machine__18315__auto__ = null;
var cljs$core$async$unique_$_state_machine__18315__auto____0 = (function (){
var statearr_30157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30157[(0)] = cljs$core$async$unique_$_state_machine__18315__auto__);

(statearr_30157[(1)] = (1));

return statearr_30157;
});
var cljs$core$async$unique_$_state_machine__18315__auto____1 = (function (state_30136){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_30136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e30158){if((e30158 instanceof Object)){
var ex__18318__auto__ = e30158;
var statearr_30159_30172 = state_30136;
(statearr_30159_30172[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30173 = state_30136;
state_30136 = G__30173;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__18315__auto__ = function(state_30136){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__18315__auto____1.call(this,state_30136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__18315__auto____0;
cljs$core$async$unique_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__18315__auto____1;
return cljs$core$async$unique_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___30161,out))
})();
var state__18372__auto__ = (function (){var statearr_30160 = f__18371__auto__.call(null);
(statearr_30160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___30161);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___30161,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___30308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___30308,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___30308,out){
return (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (7))){
var inst_30274 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30280_30309 = state_30278__$1;
(statearr_30280_30309[(2)] = inst_30274);

(statearr_30280_30309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (1))){
var inst_30241 = (new Array(n));
var inst_30242 = inst_30241;
var inst_30243 = (0);
var state_30278__$1 = (function (){var statearr_30281 = state_30278;
(statearr_30281[(7)] = inst_30242);

(statearr_30281[(8)] = inst_30243);

return statearr_30281;
})();
var statearr_30282_30310 = state_30278__$1;
(statearr_30282_30310[(2)] = null);

(statearr_30282_30310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (4))){
var inst_30246 = (state_30278[(9)]);
var inst_30246__$1 = (state_30278[(2)]);
var inst_30247 = (inst_30246__$1 == null);
var inst_30248 = cljs.core.not.call(null,inst_30247);
var state_30278__$1 = (function (){var statearr_30283 = state_30278;
(statearr_30283[(9)] = inst_30246__$1);

return statearr_30283;
})();
if(inst_30248){
var statearr_30284_30311 = state_30278__$1;
(statearr_30284_30311[(1)] = (5));

} else {
var statearr_30285_30312 = state_30278__$1;
(statearr_30285_30312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (15))){
var inst_30268 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30286_30313 = state_30278__$1;
(statearr_30286_30313[(2)] = inst_30268);

(statearr_30286_30313[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (13))){
var state_30278__$1 = state_30278;
var statearr_30287_30314 = state_30278__$1;
(statearr_30287_30314[(2)] = null);

(statearr_30287_30314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var inst_30243 = (state_30278[(8)]);
var inst_30264 = (inst_30243 > (0));
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30264)){
var statearr_30288_30315 = state_30278__$1;
(statearr_30288_30315[(1)] = (12));

} else {
var statearr_30289_30316 = state_30278__$1;
(statearr_30289_30316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var inst_30276 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (12))){
var inst_30242 = (state_30278[(7)]);
var inst_30266 = cljs.core.vec.call(null,inst_30242);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30278__$1,(15),out,inst_30266);
} else {
if((state_val_30279 === (2))){
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(4),ch);
} else {
if((state_val_30279 === (11))){
var inst_30258 = (state_30278[(2)]);
var inst_30259 = (new Array(n));
var inst_30242 = inst_30259;
var inst_30243 = (0);
var state_30278__$1 = (function (){var statearr_30290 = state_30278;
(statearr_30290[(7)] = inst_30242);

(statearr_30290[(8)] = inst_30243);

(statearr_30290[(10)] = inst_30258);

return statearr_30290;
})();
var statearr_30291_30317 = state_30278__$1;
(statearr_30291_30317[(2)] = null);

(statearr_30291_30317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (9))){
var inst_30242 = (state_30278[(7)]);
var inst_30256 = cljs.core.vec.call(null,inst_30242);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30278__$1,(11),out,inst_30256);
} else {
if((state_val_30279 === (5))){
var inst_30242 = (state_30278[(7)]);
var inst_30243 = (state_30278[(8)]);
var inst_30251 = (state_30278[(11)]);
var inst_30246 = (state_30278[(9)]);
var inst_30250 = (inst_30242[inst_30243] = inst_30246);
var inst_30251__$1 = (inst_30243 + (1));
var inst_30252 = (inst_30251__$1 < n);
var state_30278__$1 = (function (){var statearr_30292 = state_30278;
(statearr_30292[(12)] = inst_30250);

(statearr_30292[(11)] = inst_30251__$1);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30252)){
var statearr_30293_30318 = state_30278__$1;
(statearr_30293_30318[(1)] = (8));

} else {
var statearr_30294_30319 = state_30278__$1;
(statearr_30294_30319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (14))){
var inst_30271 = (state_30278[(2)]);
var inst_30272 = cljs.core.async.close_BANG_.call(null,out);
var state_30278__$1 = (function (){var statearr_30296 = state_30278;
(statearr_30296[(13)] = inst_30271);

return statearr_30296;
})();
var statearr_30297_30320 = state_30278__$1;
(statearr_30297_30320[(2)] = inst_30272);

(statearr_30297_30320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (10))){
var inst_30262 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30298_30321 = state_30278__$1;
(statearr_30298_30321[(2)] = inst_30262);

(statearr_30298_30321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (8))){
var inst_30242 = (state_30278[(7)]);
var inst_30251 = (state_30278[(11)]);
var tmp30295 = inst_30242;
var inst_30242__$1 = tmp30295;
var inst_30243 = inst_30251;
var state_30278__$1 = (function (){var statearr_30299 = state_30278;
(statearr_30299[(7)] = inst_30242__$1);

(statearr_30299[(8)] = inst_30243);

return statearr_30299;
})();
var statearr_30300_30322 = state_30278__$1;
(statearr_30300_30322[(2)] = null);

(statearr_30300_30322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___30308,out))
;
return ((function (switch__18314__auto__,c__18370__auto___30308,out){
return (function() {
var cljs$core$async$partition_$_state_machine__18315__auto__ = null;
var cljs$core$async$partition_$_state_machine__18315__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = cljs$core$async$partition_$_state_machine__18315__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var cljs$core$async$partition_$_state_machine__18315__auto____1 = (function (state_30278){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_30278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__18318__auto__ = e30305;
var statearr_30306_30323 = state_30278;
(statearr_30306_30323[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30324 = state_30278;
state_30278 = G__30324;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__18315__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__18315__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__18315__auto____0;
cljs$core$async$partition_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__18315__auto____1;
return cljs$core$async$partition_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___30308,out))
})();
var state__18372__auto__ = (function (){var statearr_30307 = f__18371__auto__.call(null);
(statearr_30307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___30308);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___30308,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18370__auto___30467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18370__auto___30467,out){
return (function (){
var f__18371__auto__ = (function (){var switch__18314__auto__ = ((function (c__18370__auto___30467,out){
return (function (state_30437){
var state_val_30438 = (state_30437[(1)]);
if((state_val_30438 === (7))){
var inst_30433 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30439_30468 = state_30437__$1;
(statearr_30439_30468[(2)] = inst_30433);

(statearr_30439_30468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (1))){
var inst_30396 = [];
var inst_30397 = inst_30396;
var inst_30398 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30437__$1 = (function (){var statearr_30440 = state_30437;
(statearr_30440[(7)] = inst_30398);

(statearr_30440[(8)] = inst_30397);

return statearr_30440;
})();
var statearr_30441_30469 = state_30437__$1;
(statearr_30441_30469[(2)] = null);

(statearr_30441_30469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (4))){
var inst_30401 = (state_30437[(9)]);
var inst_30401__$1 = (state_30437[(2)]);
var inst_30402 = (inst_30401__$1 == null);
var inst_30403 = cljs.core.not.call(null,inst_30402);
var state_30437__$1 = (function (){var statearr_30442 = state_30437;
(statearr_30442[(9)] = inst_30401__$1);

return statearr_30442;
})();
if(inst_30403){
var statearr_30443_30470 = state_30437__$1;
(statearr_30443_30470[(1)] = (5));

} else {
var statearr_30444_30471 = state_30437__$1;
(statearr_30444_30471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (15))){
var inst_30427 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30445_30472 = state_30437__$1;
(statearr_30445_30472[(2)] = inst_30427);

(statearr_30445_30472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (13))){
var state_30437__$1 = state_30437;
var statearr_30446_30473 = state_30437__$1;
(statearr_30446_30473[(2)] = null);

(statearr_30446_30473[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var inst_30397 = (state_30437[(8)]);
var inst_30422 = inst_30397.length;
var inst_30423 = (inst_30422 > (0));
var state_30437__$1 = state_30437;
if(cljs.core.truth_(inst_30423)){
var statearr_30447_30474 = state_30437__$1;
(statearr_30447_30474[(1)] = (12));

} else {
var statearr_30448_30475 = state_30437__$1;
(statearr_30448_30475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (3))){
var inst_30435 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30437__$1,inst_30435);
} else {
if((state_val_30438 === (12))){
var inst_30397 = (state_30437[(8)]);
var inst_30425 = cljs.core.vec.call(null,inst_30397);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30437__$1,(15),out,inst_30425);
} else {
if((state_val_30438 === (2))){
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30437__$1,(4),ch);
} else {
if((state_val_30438 === (11))){
var inst_30405 = (state_30437[(10)]);
var inst_30401 = (state_30437[(9)]);
var inst_30415 = (state_30437[(2)]);
var inst_30416 = [];
var inst_30417 = inst_30416.push(inst_30401);
var inst_30397 = inst_30416;
var inst_30398 = inst_30405;
var state_30437__$1 = (function (){var statearr_30449 = state_30437;
(statearr_30449[(7)] = inst_30398);

(statearr_30449[(8)] = inst_30397);

(statearr_30449[(11)] = inst_30415);

(statearr_30449[(12)] = inst_30417);

return statearr_30449;
})();
var statearr_30450_30476 = state_30437__$1;
(statearr_30450_30476[(2)] = null);

(statearr_30450_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (9))){
var inst_30397 = (state_30437[(8)]);
var inst_30413 = cljs.core.vec.call(null,inst_30397);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30437__$1,(11),out,inst_30413);
} else {
if((state_val_30438 === (5))){
var inst_30398 = (state_30437[(7)]);
var inst_30405 = (state_30437[(10)]);
var inst_30401 = (state_30437[(9)]);
var inst_30405__$1 = f.call(null,inst_30401);
var inst_30406 = cljs.core._EQ_.call(null,inst_30405__$1,inst_30398);
var inst_30407 = cljs.core.keyword_identical_QMARK_.call(null,inst_30398,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30408 = (inst_30406) || (inst_30407);
var state_30437__$1 = (function (){var statearr_30451 = state_30437;
(statearr_30451[(10)] = inst_30405__$1);

return statearr_30451;
})();
if(cljs.core.truth_(inst_30408)){
var statearr_30452_30477 = state_30437__$1;
(statearr_30452_30477[(1)] = (8));

} else {
var statearr_30453_30478 = state_30437__$1;
(statearr_30453_30478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (14))){
var inst_30430 = (state_30437[(2)]);
var inst_30431 = cljs.core.async.close_BANG_.call(null,out);
var state_30437__$1 = (function (){var statearr_30455 = state_30437;
(statearr_30455[(13)] = inst_30430);

return statearr_30455;
})();
var statearr_30456_30479 = state_30437__$1;
(statearr_30456_30479[(2)] = inst_30431);

(statearr_30456_30479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (10))){
var inst_30420 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30457_30480 = state_30437__$1;
(statearr_30457_30480[(2)] = inst_30420);

(statearr_30457_30480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (8))){
var inst_30397 = (state_30437[(8)]);
var inst_30405 = (state_30437[(10)]);
var inst_30401 = (state_30437[(9)]);
var inst_30410 = inst_30397.push(inst_30401);
var tmp30454 = inst_30397;
var inst_30397__$1 = tmp30454;
var inst_30398 = inst_30405;
var state_30437__$1 = (function (){var statearr_30458 = state_30437;
(statearr_30458[(7)] = inst_30398);

(statearr_30458[(8)] = inst_30397__$1);

(statearr_30458[(14)] = inst_30410);

return statearr_30458;
})();
var statearr_30459_30481 = state_30437__$1;
(statearr_30459_30481[(2)] = null);

(statearr_30459_30481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18370__auto___30467,out))
;
return ((function (switch__18314__auto__,c__18370__auto___30467,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__18315__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__18315__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = cljs$core$async$partition_by_$_state_machine__18315__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var cljs$core$async$partition_by_$_state_machine__18315__auto____1 = (function (state_30437){
while(true){
var ret_value__18316__auto__ = (function (){try{while(true){
var result__18317__auto__ = switch__18314__auto__.call(null,state_30437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18317__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__18318__auto__ = e30464;
var statearr_30465_30482 = state_30437;
(statearr_30465_30482[(5)] = ex__18318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30483 = state_30437;
state_30437 = G__30483;
continue;
} else {
return ret_value__18316__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__18315__auto__ = function(state_30437){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__18315__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__18315__auto____1.call(this,state_30437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__18315__auto____0;
cljs$core$async$partition_by_$_state_machine__18315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__18315__auto____1;
return cljs$core$async$partition_by_$_state_machine__18315__auto__;
})()
;})(switch__18314__auto__,c__18370__auto___30467,out))
})();
var state__18372__auto__ = (function (){var statearr_30466 = f__18371__auto__.call(null);
(statearr_30466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18370__auto___30467);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18372__auto__);
});})(c__18370__auto___30467,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map