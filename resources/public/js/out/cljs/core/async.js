// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23156 = (function (f,fn_handler,meta23157){
this.f = f;
this.fn_handler = fn_handler;
this.meta23157 = meta23157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23156.cljs$lang$type = true;
cljs.core.async.t23156.cljs$lang$ctorStr = "cljs.core.async/t23156";
cljs.core.async.t23156.cljs$lang$ctorPrWriter = (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t23156");
});
cljs.core.async.t23156.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23158){var self__ = this;
var _23158__$1 = this;return self__.meta23157;
});
cljs.core.async.t23156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23158,meta23157__$1){var self__ = this;
var _23158__$1 = this;return (new cljs.core.async.t23156(self__.f,self__.fn_handler,meta23157__$1));
});
cljs.core.async.__GT_t23156 = (function __GT_t23156(f__$1,fn_handler__$1,meta23157){return (new cljs.core.async.t23156(f__$1,fn_handler__$1,meta23157));
});
}
return (new cljs.core.async.t23156(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23160 = buff;if(G__23160)
{var bit__16490__auto__ = null;if(cljs.core.truth_((function (){var or__15826__auto__ = bit__16490__auto__;if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{return G__23160.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23160.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23160);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23160);
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
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_23161 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23161);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23161,ret){
return (function (){return fn1.call(null,val_23161);
});})(val_23161,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__16696__auto___23162 = n;var x_23163 = (0);while(true){
if((x_23163 < n__16696__auto___23162))
{(a[x_23163] = (0));
{
var G__23164 = (x_23163 + (1));
x_23163 = G__23164;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23165 = (i + (1));
i = G__23165;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23169 = (function (flag,alt_flag,meta23170){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23170 = meta23170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23169.cljs$lang$type = true;
cljs.core.async.t23169.cljs$lang$ctorStr = "cljs.core.async/t23169";
cljs.core.async.t23169.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t23169");
});})(flag))
;
cljs.core.async.t23169.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23171){var self__ = this;
var _23171__$1 = this;return self__.meta23170;
});})(flag))
;
cljs.core.async.t23169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23171,meta23170__$1){var self__ = this;
var _23171__$1 = this;return (new cljs.core.async.t23169(self__.flag,self__.alt_flag,meta23170__$1));
});})(flag))
;
cljs.core.async.__GT_t23169 = ((function (flag){
return (function __GT_t23169(flag__$1,alt_flag__$1,meta23170){return (new cljs.core.async.t23169(flag__$1,alt_flag__$1,meta23170));
});})(flag))
;
}
return (new cljs.core.async.t23169(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23175 = (function (cb,flag,alt_handler,meta23176){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23176 = meta23176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23175.cljs$lang$type = true;
cljs.core.async.t23175.cljs$lang$ctorStr = "cljs.core.async/t23175";
cljs.core.async.t23175.cljs$lang$ctorPrWriter = (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t23175");
});
cljs.core.async.t23175.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23177){var self__ = this;
var _23177__$1 = this;return self__.meta23176;
});
cljs.core.async.t23175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23177,meta23176__$1){var self__ = this;
var _23177__$1 = this;return (new cljs.core.async.t23175(self__.cb,self__.flag,self__.alt_handler,meta23176__$1));
});
cljs.core.async.__GT_t23175 = (function __GT_t23175(cb__$1,flag__$1,alt_handler__$1,meta23176){return (new cljs.core.async.t23175(cb__$1,flag__$1,alt_handler__$1,meta23176));
});
}
return (new cljs.core.async.t23175(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23178_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23178_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23179_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23179_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15826__auto__ = wport;if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23180 = (i + (1));
i = G__23180;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15826__auto__ = ret;if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__15814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15814__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15814__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
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
var alts_BANG___delegate = function (ports,p__23181){var map__23183 = p__23181;var map__23183__$1 = ((cljs.core.seq_QMARK_.call(null,map__23183))?cljs.core.apply.call(null,cljs.core.hash_map,map__23183):map__23183);var opts = map__23183__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23181 = null;if (arguments.length > 1) {
  p__23181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23181);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23184){
var ports = cljs.core.first(arglist__23184);
var p__23181 = cljs.core.rest(arglist__23184);
return alts_BANG___delegate(ports,p__23181);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__18391__auto___23279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___23279){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___23279){
return (function (state_23255){var state_val_23256 = (state_23255[(1)]);if((state_val_23256 === (7)))
{var inst_23251 = (state_23255[(2)]);var state_23255__$1 = state_23255;var statearr_23257_23280 = state_23255__$1;(statearr_23257_23280[(2)] = inst_23251);
(statearr_23257_23280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (1)))
{var state_23255__$1 = state_23255;var statearr_23258_23281 = state_23255__$1;(statearr_23258_23281[(2)] = null);
(statearr_23258_23281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (4)))
{var inst_23234 = (state_23255[(7)]);var inst_23234__$1 = (state_23255[(2)]);var inst_23235 = (inst_23234__$1 == null);var state_23255__$1 = (function (){var statearr_23259 = state_23255;(statearr_23259[(7)] = inst_23234__$1);
return statearr_23259;
})();if(cljs.core.truth_(inst_23235))
{var statearr_23260_23282 = state_23255__$1;(statearr_23260_23282[(1)] = (5));
} else
{var statearr_23261_23283 = state_23255__$1;(statearr_23261_23283[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (13)))
{var state_23255__$1 = state_23255;var statearr_23262_23284 = state_23255__$1;(statearr_23262_23284[(2)] = null);
(statearr_23262_23284[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (6)))
{var inst_23234 = (state_23255[(7)]);var state_23255__$1 = state_23255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23255__$1,(11),to,inst_23234);
} else
{if((state_val_23256 === (3)))
{var inst_23253 = (state_23255[(2)]);var state_23255__$1 = state_23255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23255__$1,inst_23253);
} else
{if((state_val_23256 === (12)))
{var state_23255__$1 = state_23255;var statearr_23263_23285 = state_23255__$1;(statearr_23263_23285[(2)] = null);
(statearr_23263_23285[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (2)))
{var state_23255__$1 = state_23255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23255__$1,(4),from);
} else
{if((state_val_23256 === (11)))
{var inst_23244 = (state_23255[(2)]);var state_23255__$1 = state_23255;if(cljs.core.truth_(inst_23244))
{var statearr_23264_23286 = state_23255__$1;(statearr_23264_23286[(1)] = (12));
} else
{var statearr_23265_23287 = state_23255__$1;(statearr_23265_23287[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (9)))
{var state_23255__$1 = state_23255;var statearr_23266_23288 = state_23255__$1;(statearr_23266_23288[(2)] = null);
(statearr_23266_23288[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (5)))
{var state_23255__$1 = state_23255;if(cljs.core.truth_(close_QMARK_))
{var statearr_23267_23289 = state_23255__$1;(statearr_23267_23289[(1)] = (8));
} else
{var statearr_23268_23290 = state_23255__$1;(statearr_23268_23290[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (14)))
{var inst_23249 = (state_23255[(2)]);var state_23255__$1 = state_23255;var statearr_23269_23291 = state_23255__$1;(statearr_23269_23291[(2)] = inst_23249);
(statearr_23269_23291[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (10)))
{var inst_23241 = (state_23255[(2)]);var state_23255__$1 = state_23255;var statearr_23270_23292 = state_23255__$1;(statearr_23270_23292[(2)] = inst_23241);
(statearr_23270_23292[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23256 === (8)))
{var inst_23238 = cljs.core.async.close_BANG_.call(null,to);var state_23255__$1 = state_23255;var statearr_23271_23293 = state_23255__$1;(statearr_23271_23293[(2)] = inst_23238);
(statearr_23271_23293[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___23279))
;return ((function (switch__18335__auto__,c__18391__auto___23279){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23275 = [null,null,null,null,null,null,null,null];(statearr_23275[(0)] = state_machine__18336__auto__);
(statearr_23275[(1)] = (1));
return statearr_23275;
});
var state_machine__18336__auto____1 = (function (state_23255){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23255);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23276){if((e23276 instanceof Object))
{var ex__18339__auto__ = e23276;var statearr_23277_23294 = state_23255;(statearr_23277_23294[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23276;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23295 = state_23255;
state_23255 = G__23295;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23255){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___23279))
})();var state__18393__auto__ = (function (){var statearr_23278 = f__18392__auto__.call(null);(statearr_23278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23279);
return statearr_23278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___23279))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__23479){var vec__23480 = p__23479;var v = cljs.core.nth.call(null,vec__23480,(0),null);var p = cljs.core.nth.call(null,vec__23480,(1),null);var job = vec__23480;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__18391__auto___23662 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results){
return (function (state_23485){var state_val_23486 = (state_23485[(1)]);if((state_val_23486 === (2)))
{var inst_23482 = (state_23485[(2)]);var inst_23483 = cljs.core.async.close_BANG_.call(null,res);var state_23485__$1 = (function (){var statearr_23487 = state_23485;(statearr_23487[(7)] = inst_23482);
return statearr_23487;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23485__$1,inst_23483);
} else
{if((state_val_23486 === (1)))
{var state_23485__$1 = state_23485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23485__$1,(2),res,v);
} else
{return null;
}
}
});})(c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results))
;return ((function (switch__18335__auto__,c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23491 = [null,null,null,null,null,null,null,null];(statearr_23491[(0)] = state_machine__18336__auto__);
(statearr_23491[(1)] = (1));
return statearr_23491;
});
var state_machine__18336__auto____1 = (function (state_23485){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23485);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23492){if((e23492 instanceof Object))
{var ex__18339__auto__ = e23492;var statearr_23493_23663 = state_23485;(statearr_23493_23663[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23485);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23664 = state_23485;
state_23485 = G__23664;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23485){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results))
})();var state__18393__auto__ = (function (){var statearr_23494 = f__18392__auto__.call(null);(statearr_23494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23662);
return statearr_23494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___23662,res,vec__23480,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23495){var vec__23496 = p__23495;var v = cljs.core.nth.call(null,vec__23496,(0),null);var p = cljs.core.nth.call(null,vec__23496,(1),null);var job = vec__23496;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__16696__auto___23665 = n;var __23666 = (0);while(true){
if((__23666 < n__16696__auto___23665))
{var G__23497_23667 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23497_23667) {
case "async":
var c__18391__auto___23669 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23666,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (__23666,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function (state_23510){var state_val_23511 = (state_23510[(1)]);if((state_val_23511 === (7)))
{var inst_23506 = (state_23510[(2)]);var state_23510__$1 = state_23510;var statearr_23512_23670 = state_23510__$1;(statearr_23512_23670[(2)] = inst_23506);
(statearr_23512_23670[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23511 === (6)))
{var state_23510__$1 = state_23510;var statearr_23513_23671 = state_23510__$1;(statearr_23513_23671[(2)] = null);
(statearr_23513_23671[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23511 === (5)))
{var state_23510__$1 = state_23510;var statearr_23514_23672 = state_23510__$1;(statearr_23514_23672[(2)] = null);
(statearr_23514_23672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23511 === (4)))
{var inst_23500 = (state_23510[(2)]);var inst_23501 = async.call(null,inst_23500);var state_23510__$1 = state_23510;if(cljs.core.truth_(inst_23501))
{var statearr_23515_23673 = state_23510__$1;(statearr_23515_23673[(1)] = (5));
} else
{var statearr_23516_23674 = state_23510__$1;(statearr_23516_23674[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23511 === (3)))
{var inst_23508 = (state_23510[(2)]);var state_23510__$1 = state_23510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23510__$1,inst_23508);
} else
{if((state_val_23511 === (2)))
{var state_23510__$1 = state_23510;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23510__$1,(4),jobs);
} else
{if((state_val_23511 === (1)))
{var state_23510__$1 = state_23510;var statearr_23517_23675 = state_23510__$1;(statearr_23517_23675[(2)] = null);
(statearr_23517_23675[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23666,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
;return ((function (__23666,switch__18335__auto__,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23521 = [null,null,null,null,null,null,null];(statearr_23521[(0)] = state_machine__18336__auto__);
(statearr_23521[(1)] = (1));
return statearr_23521;
});
var state_machine__18336__auto____1 = (function (state_23510){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23510);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23522){if((e23522 instanceof Object))
{var ex__18339__auto__ = e23522;var statearr_23523_23676 = state_23510;(statearr_23523_23676[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23510);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23677 = state_23510;
state_23510 = G__23677;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23510){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(__23666,switch__18335__auto__,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
})();var state__18393__auto__ = (function (){var statearr_23524 = f__18392__auto__.call(null);(statearr_23524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23669);
return statearr_23524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(__23666,c__18391__auto___23669,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
);

break;
case "compute":
var c__18391__auto___23678 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__23666,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (__23666,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function (state_23537){var state_val_23538 = (state_23537[(1)]);if((state_val_23538 === (7)))
{var inst_23533 = (state_23537[(2)]);var state_23537__$1 = state_23537;var statearr_23539_23679 = state_23537__$1;(statearr_23539_23679[(2)] = inst_23533);
(statearr_23539_23679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23538 === (6)))
{var state_23537__$1 = state_23537;var statearr_23540_23680 = state_23537__$1;(statearr_23540_23680[(2)] = null);
(statearr_23540_23680[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23538 === (5)))
{var state_23537__$1 = state_23537;var statearr_23541_23681 = state_23537__$1;(statearr_23541_23681[(2)] = null);
(statearr_23541_23681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23538 === (4)))
{var inst_23527 = (state_23537[(2)]);var inst_23528 = process.call(null,inst_23527);var state_23537__$1 = state_23537;if(cljs.core.truth_(inst_23528))
{var statearr_23542_23682 = state_23537__$1;(statearr_23542_23682[(1)] = (5));
} else
{var statearr_23543_23683 = state_23537__$1;(statearr_23543_23683[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23538 === (3)))
{var inst_23535 = (state_23537[(2)]);var state_23537__$1 = state_23537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23537__$1,inst_23535);
} else
{if((state_val_23538 === (2)))
{var state_23537__$1 = state_23537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23537__$1,(4),jobs);
} else
{if((state_val_23538 === (1)))
{var state_23537__$1 = state_23537;var statearr_23544_23684 = state_23537__$1;(statearr_23544_23684[(2)] = null);
(statearr_23544_23684[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__23666,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
;return ((function (__23666,switch__18335__auto__,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23548 = [null,null,null,null,null,null,null];(statearr_23548[(0)] = state_machine__18336__auto__);
(statearr_23548[(1)] = (1));
return statearr_23548;
});
var state_machine__18336__auto____1 = (function (state_23537){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23537);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23549){if((e23549 instanceof Object))
{var ex__18339__auto__ = e23549;var statearr_23550_23685 = state_23537;(statearr_23550_23685[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23549;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23686 = state_23537;
state_23537 = G__23686;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23537){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(__23666,switch__18335__auto__,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
})();var state__18393__auto__ = (function (){var statearr_23551 = f__18392__auto__.call(null);(statearr_23551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23678);
return statearr_23551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(__23666,c__18391__auto___23678,G__23497_23667,n__16696__auto___23665,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__23687 = (__23666 + (1));
__23666 = G__23687;
continue;
}
} else
{}
break;
}
var c__18391__auto___23688 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___23688,jobs,results,process,async){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___23688,jobs,results,process,async){
return (function (state_23573){var state_val_23574 = (state_23573[(1)]);if((state_val_23574 === (9)))
{var inst_23566 = (state_23573[(2)]);var state_23573__$1 = (function (){var statearr_23575 = state_23573;(statearr_23575[(7)] = inst_23566);
return statearr_23575;
})();var statearr_23576_23689 = state_23573__$1;(statearr_23576_23689[(2)] = null);
(statearr_23576_23689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23574 === (8)))
{var inst_23559 = (state_23573[(8)]);var inst_23564 = (state_23573[(2)]);var state_23573__$1 = (function (){var statearr_23577 = state_23573;(statearr_23577[(9)] = inst_23564);
return statearr_23577;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23573__$1,(9),results,inst_23559);
} else
{if((state_val_23574 === (7)))
{var inst_23569 = (state_23573[(2)]);var state_23573__$1 = state_23573;var statearr_23578_23690 = state_23573__$1;(statearr_23578_23690[(2)] = inst_23569);
(statearr_23578_23690[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23574 === (6)))
{var inst_23554 = (state_23573[(10)]);var inst_23559 = (state_23573[(8)]);var inst_23559__$1 = cljs.core.async.chan.call(null,(1));var inst_23560 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23561 = [inst_23554,inst_23559__$1];var inst_23562 = (new cljs.core.PersistentVector(null,2,(5),inst_23560,inst_23561,null));var state_23573__$1 = (function (){var statearr_23579 = state_23573;(statearr_23579[(8)] = inst_23559__$1);
return statearr_23579;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23573__$1,(8),jobs,inst_23562);
} else
{if((state_val_23574 === (5)))
{var inst_23557 = cljs.core.async.close_BANG_.call(null,jobs);var state_23573__$1 = state_23573;var statearr_23580_23691 = state_23573__$1;(statearr_23580_23691[(2)] = inst_23557);
(statearr_23580_23691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23574 === (4)))
{var inst_23554 = (state_23573[(10)]);var inst_23554__$1 = (state_23573[(2)]);var inst_23555 = (inst_23554__$1 == null);var state_23573__$1 = (function (){var statearr_23581 = state_23573;(statearr_23581[(10)] = inst_23554__$1);
return statearr_23581;
})();if(cljs.core.truth_(inst_23555))
{var statearr_23582_23692 = state_23573__$1;(statearr_23582_23692[(1)] = (5));
} else
{var statearr_23583_23693 = state_23573__$1;(statearr_23583_23693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23574 === (3)))
{var inst_23571 = (state_23573[(2)]);var state_23573__$1 = state_23573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23573__$1,inst_23571);
} else
{if((state_val_23574 === (2)))
{var state_23573__$1 = state_23573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23573__$1,(4),from);
} else
{if((state_val_23574 === (1)))
{var state_23573__$1 = state_23573;var statearr_23584_23694 = state_23573__$1;(statearr_23584_23694[(2)] = null);
(statearr_23584_23694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__18391__auto___23688,jobs,results,process,async))
;return ((function (switch__18335__auto__,c__18391__auto___23688,jobs,results,process,async){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23588 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23588[(0)] = state_machine__18336__auto__);
(statearr_23588[(1)] = (1));
return statearr_23588;
});
var state_machine__18336__auto____1 = (function (state_23573){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23573);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23589){if((e23589 instanceof Object))
{var ex__18339__auto__ = e23589;var statearr_23590_23695 = state_23573;(statearr_23590_23695[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23589;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23696 = state_23573;
state_23573 = G__23696;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23573){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___23688,jobs,results,process,async))
})();var state__18393__auto__ = (function (){var statearr_23591 = f__18392__auto__.call(null);(statearr_23591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23688);
return statearr_23591;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___23688,jobs,results,process,async))
);
var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__,jobs,results,process,async){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__,jobs,results,process,async){
return (function (state_23629){var state_val_23630 = (state_23629[(1)]);if((state_val_23630 === (7)))
{var inst_23625 = (state_23629[(2)]);var state_23629__$1 = state_23629;var statearr_23631_23697 = state_23629__$1;(statearr_23631_23697[(2)] = inst_23625);
(statearr_23631_23697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (20)))
{var state_23629__$1 = state_23629;var statearr_23632_23698 = state_23629__$1;(statearr_23632_23698[(2)] = null);
(statearr_23632_23698[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (1)))
{var state_23629__$1 = state_23629;var statearr_23633_23699 = state_23629__$1;(statearr_23633_23699[(2)] = null);
(statearr_23633_23699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (4)))
{var inst_23594 = (state_23629[(7)]);var inst_23594__$1 = (state_23629[(2)]);var inst_23595 = (inst_23594__$1 == null);var state_23629__$1 = (function (){var statearr_23634 = state_23629;(statearr_23634[(7)] = inst_23594__$1);
return statearr_23634;
})();if(cljs.core.truth_(inst_23595))
{var statearr_23635_23700 = state_23629__$1;(statearr_23635_23700[(1)] = (5));
} else
{var statearr_23636_23701 = state_23629__$1;(statearr_23636_23701[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (15)))
{var inst_23607 = (state_23629[(8)]);var state_23629__$1 = state_23629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23629__$1,(18),to,inst_23607);
} else
{if((state_val_23630 === (21)))
{var inst_23620 = (state_23629[(2)]);var state_23629__$1 = state_23629;var statearr_23637_23702 = state_23629__$1;(statearr_23637_23702[(2)] = inst_23620);
(statearr_23637_23702[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (13)))
{var inst_23622 = (state_23629[(2)]);var state_23629__$1 = (function (){var statearr_23638 = state_23629;(statearr_23638[(9)] = inst_23622);
return statearr_23638;
})();var statearr_23639_23703 = state_23629__$1;(statearr_23639_23703[(2)] = null);
(statearr_23639_23703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (6)))
{var inst_23594 = (state_23629[(7)]);var state_23629__$1 = state_23629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23629__$1,(11),inst_23594);
} else
{if((state_val_23630 === (17)))
{var inst_23615 = (state_23629[(2)]);var state_23629__$1 = state_23629;if(cljs.core.truth_(inst_23615))
{var statearr_23640_23704 = state_23629__$1;(statearr_23640_23704[(1)] = (19));
} else
{var statearr_23641_23705 = state_23629__$1;(statearr_23641_23705[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (3)))
{var inst_23627 = (state_23629[(2)]);var state_23629__$1 = state_23629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23629__$1,inst_23627);
} else
{if((state_val_23630 === (12)))
{var inst_23604 = (state_23629[(10)]);var state_23629__$1 = state_23629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23629__$1,(14),inst_23604);
} else
{if((state_val_23630 === (2)))
{var state_23629__$1 = state_23629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23629__$1,(4),results);
} else
{if((state_val_23630 === (19)))
{var state_23629__$1 = state_23629;var statearr_23642_23706 = state_23629__$1;(statearr_23642_23706[(2)] = null);
(statearr_23642_23706[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (11)))
{var inst_23604 = (state_23629[(2)]);var state_23629__$1 = (function (){var statearr_23643 = state_23629;(statearr_23643[(10)] = inst_23604);
return statearr_23643;
})();var statearr_23644_23707 = state_23629__$1;(statearr_23644_23707[(2)] = null);
(statearr_23644_23707[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (9)))
{var state_23629__$1 = state_23629;var statearr_23645_23708 = state_23629__$1;(statearr_23645_23708[(2)] = null);
(statearr_23645_23708[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (5)))
{var state_23629__$1 = state_23629;if(cljs.core.truth_(close_QMARK_))
{var statearr_23646_23709 = state_23629__$1;(statearr_23646_23709[(1)] = (8));
} else
{var statearr_23647_23710 = state_23629__$1;(statearr_23647_23710[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (14)))
{var inst_23609 = (state_23629[(11)]);var inst_23607 = (state_23629[(8)]);var inst_23607__$1 = (state_23629[(2)]);var inst_23608 = (inst_23607__$1 == null);var inst_23609__$1 = cljs.core.not.call(null,inst_23608);var state_23629__$1 = (function (){var statearr_23648 = state_23629;(statearr_23648[(11)] = inst_23609__$1);
(statearr_23648[(8)] = inst_23607__$1);
return statearr_23648;
})();if(inst_23609__$1)
{var statearr_23649_23711 = state_23629__$1;(statearr_23649_23711[(1)] = (15));
} else
{var statearr_23650_23712 = state_23629__$1;(statearr_23650_23712[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (16)))
{var inst_23609 = (state_23629[(11)]);var state_23629__$1 = state_23629;var statearr_23651_23713 = state_23629__$1;(statearr_23651_23713[(2)] = inst_23609);
(statearr_23651_23713[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (10)))
{var inst_23601 = (state_23629[(2)]);var state_23629__$1 = state_23629;var statearr_23652_23714 = state_23629__$1;(statearr_23652_23714[(2)] = inst_23601);
(statearr_23652_23714[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (18)))
{var inst_23612 = (state_23629[(2)]);var state_23629__$1 = state_23629;var statearr_23653_23715 = state_23629__$1;(statearr_23653_23715[(2)] = inst_23612);
(statearr_23653_23715[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23630 === (8)))
{var inst_23598 = cljs.core.async.close_BANG_.call(null,to);var state_23629__$1 = state_23629;var statearr_23654_23716 = state_23629__$1;(statearr_23654_23716[(2)] = inst_23598);
(statearr_23654_23716[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto__,jobs,results,process,async))
;return ((function (switch__18335__auto__,c__18391__auto__,jobs,results,process,async){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23658 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23658[(0)] = state_machine__18336__auto__);
(statearr_23658[(1)] = (1));
return statearr_23658;
});
var state_machine__18336__auto____1 = (function (state_23629){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23629);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23659){if((e23659 instanceof Object))
{var ex__18339__auto__ = e23659;var statearr_23660_23717 = state_23629;(statearr_23660_23717[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23659;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23718 = state_23629;
state_23629 = G__23718;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23629){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__,jobs,results,process,async))
})();var state__18393__auto__ = (function (){var statearr_23661 = f__18392__auto__.call(null);(statearr_23661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_23661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__,jobs,results,process,async))
);
return c__18391__auto__;
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
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
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
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18391__auto___23819 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___23819,tc,fc){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___23819,tc,fc){
return (function (state_23794){var state_val_23795 = (state_23794[(1)]);if((state_val_23795 === (7)))
{var inst_23790 = (state_23794[(2)]);var state_23794__$1 = state_23794;var statearr_23796_23820 = state_23794__$1;(statearr_23796_23820[(2)] = inst_23790);
(statearr_23796_23820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (1)))
{var state_23794__$1 = state_23794;var statearr_23797_23821 = state_23794__$1;(statearr_23797_23821[(2)] = null);
(statearr_23797_23821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (4)))
{var inst_23771 = (state_23794[(7)]);var inst_23771__$1 = (state_23794[(2)]);var inst_23772 = (inst_23771__$1 == null);var state_23794__$1 = (function (){var statearr_23798 = state_23794;(statearr_23798[(7)] = inst_23771__$1);
return statearr_23798;
})();if(cljs.core.truth_(inst_23772))
{var statearr_23799_23822 = state_23794__$1;(statearr_23799_23822[(1)] = (5));
} else
{var statearr_23800_23823 = state_23794__$1;(statearr_23800_23823[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (13)))
{var state_23794__$1 = state_23794;var statearr_23801_23824 = state_23794__$1;(statearr_23801_23824[(2)] = null);
(statearr_23801_23824[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (6)))
{var inst_23771 = (state_23794[(7)]);var inst_23777 = p.call(null,inst_23771);var state_23794__$1 = state_23794;if(cljs.core.truth_(inst_23777))
{var statearr_23802_23825 = state_23794__$1;(statearr_23802_23825[(1)] = (9));
} else
{var statearr_23803_23826 = state_23794__$1;(statearr_23803_23826[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (3)))
{var inst_23792 = (state_23794[(2)]);var state_23794__$1 = state_23794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23794__$1,inst_23792);
} else
{if((state_val_23795 === (12)))
{var state_23794__$1 = state_23794;var statearr_23804_23827 = state_23794__$1;(statearr_23804_23827[(2)] = null);
(statearr_23804_23827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (2)))
{var state_23794__$1 = state_23794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23794__$1,(4),ch);
} else
{if((state_val_23795 === (11)))
{var inst_23771 = (state_23794[(7)]);var inst_23781 = (state_23794[(2)]);var state_23794__$1 = state_23794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23794__$1,(8),inst_23781,inst_23771);
} else
{if((state_val_23795 === (9)))
{var state_23794__$1 = state_23794;var statearr_23805_23828 = state_23794__$1;(statearr_23805_23828[(2)] = tc);
(statearr_23805_23828[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (5)))
{var inst_23774 = cljs.core.async.close_BANG_.call(null,tc);var inst_23775 = cljs.core.async.close_BANG_.call(null,fc);var state_23794__$1 = (function (){var statearr_23806 = state_23794;(statearr_23806[(8)] = inst_23774);
return statearr_23806;
})();var statearr_23807_23829 = state_23794__$1;(statearr_23807_23829[(2)] = inst_23775);
(statearr_23807_23829[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (14)))
{var inst_23788 = (state_23794[(2)]);var state_23794__$1 = state_23794;var statearr_23808_23830 = state_23794__$1;(statearr_23808_23830[(2)] = inst_23788);
(statearr_23808_23830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (10)))
{var state_23794__$1 = state_23794;var statearr_23809_23831 = state_23794__$1;(statearr_23809_23831[(2)] = fc);
(statearr_23809_23831[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23795 === (8)))
{var inst_23783 = (state_23794[(2)]);var state_23794__$1 = state_23794;if(cljs.core.truth_(inst_23783))
{var statearr_23810_23832 = state_23794__$1;(statearr_23810_23832[(1)] = (12));
} else
{var statearr_23811_23833 = state_23794__$1;(statearr_23811_23833[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___23819,tc,fc))
;return ((function (switch__18335__auto__,c__18391__auto___23819,tc,fc){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23815 = [null,null,null,null,null,null,null,null,null];(statearr_23815[(0)] = state_machine__18336__auto__);
(statearr_23815[(1)] = (1));
return statearr_23815;
});
var state_machine__18336__auto____1 = (function (state_23794){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23794);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23816){if((e23816 instanceof Object))
{var ex__18339__auto__ = e23816;var statearr_23817_23834 = state_23794;(statearr_23817_23834[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23816;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23835 = state_23794;
state_23794 = G__23835;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23794){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___23819,tc,fc))
})();var state__18393__auto__ = (function (){var statearr_23818 = f__18392__auto__.call(null);(statearr_23818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___23819);
return statearr_23818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___23819,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__){
return (function (state_23882){var state_val_23883 = (state_23882[(1)]);if((state_val_23883 === (7)))
{var inst_23878 = (state_23882[(2)]);var state_23882__$1 = state_23882;var statearr_23884_23900 = state_23882__$1;(statearr_23884_23900[(2)] = inst_23878);
(statearr_23884_23900[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23883 === (6)))
{var inst_23871 = (state_23882[(7)]);var inst_23868 = (state_23882[(8)]);var inst_23875 = f.call(null,inst_23868,inst_23871);var inst_23868__$1 = inst_23875;var state_23882__$1 = (function (){var statearr_23885 = state_23882;(statearr_23885[(8)] = inst_23868__$1);
return statearr_23885;
})();var statearr_23886_23901 = state_23882__$1;(statearr_23886_23901[(2)] = null);
(statearr_23886_23901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23883 === (5)))
{var inst_23868 = (state_23882[(8)]);var state_23882__$1 = state_23882;var statearr_23887_23902 = state_23882__$1;(statearr_23887_23902[(2)] = inst_23868);
(statearr_23887_23902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23883 === (4)))
{var inst_23871 = (state_23882[(7)]);var inst_23871__$1 = (state_23882[(2)]);var inst_23872 = (inst_23871__$1 == null);var state_23882__$1 = (function (){var statearr_23888 = state_23882;(statearr_23888[(7)] = inst_23871__$1);
return statearr_23888;
})();if(cljs.core.truth_(inst_23872))
{var statearr_23889_23903 = state_23882__$1;(statearr_23889_23903[(1)] = (5));
} else
{var statearr_23890_23904 = state_23882__$1;(statearr_23890_23904[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23883 === (3)))
{var inst_23880 = (state_23882[(2)]);var state_23882__$1 = state_23882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23882__$1,inst_23880);
} else
{if((state_val_23883 === (2)))
{var state_23882__$1 = state_23882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23882__$1,(4),ch);
} else
{if((state_val_23883 === (1)))
{var inst_23868 = init;var state_23882__$1 = (function (){var statearr_23891 = state_23882;(statearr_23891[(8)] = inst_23868);
return statearr_23891;
})();var statearr_23892_23905 = state_23882__$1;(statearr_23892_23905[(2)] = null);
(statearr_23892_23905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__18391__auto__))
;return ((function (switch__18335__auto__,c__18391__auto__){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_23896 = [null,null,null,null,null,null,null,null,null];(statearr_23896[(0)] = state_machine__18336__auto__);
(statearr_23896[(1)] = (1));
return statearr_23896;
});
var state_machine__18336__auto____1 = (function (state_23882){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23882);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e23897){if((e23897 instanceof Object))
{var ex__18339__auto__ = e23897;var statearr_23898_23906 = state_23882;(statearr_23898_23906[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23897;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23907 = state_23882;
state_23882 = G__23907;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23882){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__))
})();var state__18393__auto__ = (function (){var statearr_23899 = f__18392__auto__.call(null);(statearr_23899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_23899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__))
);
return c__18391__auto__;
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
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__){
return (function (state_23981){var state_val_23982 = (state_23981[(1)]);if((state_val_23982 === (7)))
{var inst_23963 = (state_23981[(2)]);var state_23981__$1 = state_23981;var statearr_23983_24006 = state_23981__$1;(statearr_23983_24006[(2)] = inst_23963);
(statearr_23983_24006[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (1)))
{var inst_23957 = cljs.core.seq.call(null,coll);var inst_23958 = inst_23957;var state_23981__$1 = (function (){var statearr_23984 = state_23981;(statearr_23984[(7)] = inst_23958);
return statearr_23984;
})();var statearr_23985_24007 = state_23981__$1;(statearr_23985_24007[(2)] = null);
(statearr_23985_24007[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (4)))
{var inst_23958 = (state_23981[(7)]);var inst_23961 = cljs.core.first.call(null,inst_23958);var state_23981__$1 = state_23981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23981__$1,(7),ch,inst_23961);
} else
{if((state_val_23982 === (13)))
{var inst_23975 = (state_23981[(2)]);var state_23981__$1 = state_23981;var statearr_23986_24008 = state_23981__$1;(statearr_23986_24008[(2)] = inst_23975);
(statearr_23986_24008[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (6)))
{var inst_23966 = (state_23981[(2)]);var state_23981__$1 = state_23981;if(cljs.core.truth_(inst_23966))
{var statearr_23987_24009 = state_23981__$1;(statearr_23987_24009[(1)] = (8));
} else
{var statearr_23988_24010 = state_23981__$1;(statearr_23988_24010[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (3)))
{var inst_23979 = (state_23981[(2)]);var state_23981__$1 = state_23981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23981__$1,inst_23979);
} else
{if((state_val_23982 === (12)))
{var state_23981__$1 = state_23981;var statearr_23989_24011 = state_23981__$1;(statearr_23989_24011[(2)] = null);
(statearr_23989_24011[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (2)))
{var inst_23958 = (state_23981[(7)]);var state_23981__$1 = state_23981;if(cljs.core.truth_(inst_23958))
{var statearr_23990_24012 = state_23981__$1;(statearr_23990_24012[(1)] = (4));
} else
{var statearr_23991_24013 = state_23981__$1;(statearr_23991_24013[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (11)))
{var inst_23972 = cljs.core.async.close_BANG_.call(null,ch);var state_23981__$1 = state_23981;var statearr_23992_24014 = state_23981__$1;(statearr_23992_24014[(2)] = inst_23972);
(statearr_23992_24014[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (9)))
{var state_23981__$1 = state_23981;if(cljs.core.truth_(close_QMARK_))
{var statearr_23993_24015 = state_23981__$1;(statearr_23993_24015[(1)] = (11));
} else
{var statearr_23994_24016 = state_23981__$1;(statearr_23994_24016[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (5)))
{var inst_23958 = (state_23981[(7)]);var state_23981__$1 = state_23981;var statearr_23995_24017 = state_23981__$1;(statearr_23995_24017[(2)] = inst_23958);
(statearr_23995_24017[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (10)))
{var inst_23977 = (state_23981[(2)]);var state_23981__$1 = state_23981;var statearr_23996_24018 = state_23981__$1;(statearr_23996_24018[(2)] = inst_23977);
(statearr_23996_24018[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23982 === (8)))
{var inst_23958 = (state_23981[(7)]);var inst_23968 = cljs.core.next.call(null,inst_23958);var inst_23958__$1 = inst_23968;var state_23981__$1 = (function (){var statearr_23997 = state_23981;(statearr_23997[(7)] = inst_23958__$1);
return statearr_23997;
})();var statearr_23998_24019 = state_23981__$1;(statearr_23998_24019[(2)] = null);
(statearr_23998_24019[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto__))
;return ((function (switch__18335__auto__,c__18391__auto__){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_24002 = [null,null,null,null,null,null,null,null];(statearr_24002[(0)] = state_machine__18336__auto__);
(statearr_24002[(1)] = (1));
return statearr_24002;
});
var state_machine__18336__auto____1 = (function (state_23981){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_23981);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e24003){if((e24003 instanceof Object))
{var ex__18339__auto__ = e24003;var statearr_24004_24020 = state_23981;(statearr_24004_24020[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24003;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24021 = state_23981;
state_23981 = G__24021;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_23981){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_23981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__))
})();var state__18393__auto__ = (function (){var statearr_24005 = f__18392__auto__.call(null);(statearr_24005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_24005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__))
);
return c__18391__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24023 = {};return obj24023;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15814__auto__ = _;if(and__15814__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15814__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__16463__auto__ = (((_ == null))?null:_);return (function (){var or__15826__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24025 = {};return obj24025;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24247 = (function (cs,ch,mult,meta24248){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24248 = meta24248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24247.cljs$lang$type = true;
cljs.core.async.t24247.cljs$lang$ctorStr = "cljs.core.async/t24247";
cljs.core.async.t24247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t24247");
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24249){var self__ = this;
var _24249__$1 = this;return self__.meta24248;
});})(cs))
;
cljs.core.async.t24247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24249,meta24248__$1){var self__ = this;
var _24249__$1 = this;return (new cljs.core.async.t24247(self__.cs,self__.ch,self__.mult,meta24248__$1));
});})(cs))
;
cljs.core.async.__GT_t24247 = ((function (cs){
return (function __GT_t24247(cs__$1,ch__$1,mult__$1,meta24248){return (new cljs.core.async.t24247(cs__$1,ch__$1,mult__$1,meta24248));
});})(cs))
;
}
return (new cljs.core.async.t24247(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18391__auto___24468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___24468,cs,m,dchan,dctr,done){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___24468,cs,m,dchan,dctr,done){
return (function (state_24380){var state_val_24381 = (state_24380[(1)]);if((state_val_24381 === (7)))
{var inst_24376 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24382_24469 = state_24380__$1;(statearr_24382_24469[(2)] = inst_24376);
(statearr_24382_24469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (20)))
{var inst_24281 = (state_24380[(7)]);var inst_24291 = cljs.core.first.call(null,inst_24281);var inst_24292 = cljs.core.nth.call(null,inst_24291,(0),null);var inst_24293 = cljs.core.nth.call(null,inst_24291,(1),null);var state_24380__$1 = (function (){var statearr_24383 = state_24380;(statearr_24383[(8)] = inst_24292);
return statearr_24383;
})();if(cljs.core.truth_(inst_24293))
{var statearr_24384_24470 = state_24380__$1;(statearr_24384_24470[(1)] = (22));
} else
{var statearr_24385_24471 = state_24380__$1;(statearr_24385_24471[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (27)))
{var inst_24252 = (state_24380[(9)]);var inst_24328 = (state_24380[(10)]);var inst_24321 = (state_24380[(11)]);var inst_24323 = (state_24380[(12)]);var inst_24328__$1 = cljs.core._nth.call(null,inst_24321,inst_24323);var inst_24329 = cljs.core.async.put_BANG_.call(null,inst_24328__$1,inst_24252,done);var state_24380__$1 = (function (){var statearr_24386 = state_24380;(statearr_24386[(10)] = inst_24328__$1);
return statearr_24386;
})();if(cljs.core.truth_(inst_24329))
{var statearr_24387_24472 = state_24380__$1;(statearr_24387_24472[(1)] = (30));
} else
{var statearr_24388_24473 = state_24380__$1;(statearr_24388_24473[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (1)))
{var state_24380__$1 = state_24380;var statearr_24389_24474 = state_24380__$1;(statearr_24389_24474[(2)] = null);
(statearr_24389_24474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (24)))
{var inst_24281 = (state_24380[(7)]);var inst_24298 = (state_24380[(2)]);var inst_24299 = cljs.core.next.call(null,inst_24281);var inst_24261 = inst_24299;var inst_24262 = null;var inst_24263 = (0);var inst_24264 = (0);var state_24380__$1 = (function (){var statearr_24390 = state_24380;(statearr_24390[(13)] = inst_24264);
(statearr_24390[(14)] = inst_24262);
(statearr_24390[(15)] = inst_24261);
(statearr_24390[(16)] = inst_24298);
(statearr_24390[(17)] = inst_24263);
return statearr_24390;
})();var statearr_24391_24475 = state_24380__$1;(statearr_24391_24475[(2)] = null);
(statearr_24391_24475[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (39)))
{var state_24380__$1 = state_24380;var statearr_24395_24476 = state_24380__$1;(statearr_24395_24476[(2)] = null);
(statearr_24395_24476[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (4)))
{var inst_24252 = (state_24380[(9)]);var inst_24252__$1 = (state_24380[(2)]);var inst_24253 = (inst_24252__$1 == null);var state_24380__$1 = (function (){var statearr_24396 = state_24380;(statearr_24396[(9)] = inst_24252__$1);
return statearr_24396;
})();if(cljs.core.truth_(inst_24253))
{var statearr_24397_24477 = state_24380__$1;(statearr_24397_24477[(1)] = (5));
} else
{var statearr_24398_24478 = state_24380__$1;(statearr_24398_24478[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (15)))
{var inst_24264 = (state_24380[(13)]);var inst_24262 = (state_24380[(14)]);var inst_24261 = (state_24380[(15)]);var inst_24263 = (state_24380[(17)]);var inst_24277 = (state_24380[(2)]);var inst_24278 = (inst_24264 + (1));var tmp24392 = inst_24262;var tmp24393 = inst_24261;var tmp24394 = inst_24263;var inst_24261__$1 = tmp24393;var inst_24262__$1 = tmp24392;var inst_24263__$1 = tmp24394;var inst_24264__$1 = inst_24278;var state_24380__$1 = (function (){var statearr_24399 = state_24380;(statearr_24399[(13)] = inst_24264__$1);
(statearr_24399[(14)] = inst_24262__$1);
(statearr_24399[(15)] = inst_24261__$1);
(statearr_24399[(18)] = inst_24277);
(statearr_24399[(17)] = inst_24263__$1);
return statearr_24399;
})();var statearr_24400_24479 = state_24380__$1;(statearr_24400_24479[(2)] = null);
(statearr_24400_24479[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (21)))
{var inst_24302 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24404_24480 = state_24380__$1;(statearr_24404_24480[(2)] = inst_24302);
(statearr_24404_24480[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (31)))
{var inst_24328 = (state_24380[(10)]);var inst_24332 = done.call(null,null);var inst_24333 = cljs.core.async.untap_STAR_.call(null,m,inst_24328);var state_24380__$1 = (function (){var statearr_24405 = state_24380;(statearr_24405[(19)] = inst_24332);
return statearr_24405;
})();var statearr_24406_24481 = state_24380__$1;(statearr_24406_24481[(2)] = inst_24333);
(statearr_24406_24481[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (32)))
{var inst_24320 = (state_24380[(20)]);var inst_24322 = (state_24380[(21)]);var inst_24321 = (state_24380[(11)]);var inst_24323 = (state_24380[(12)]);var inst_24335 = (state_24380[(2)]);var inst_24336 = (inst_24323 + (1));var tmp24401 = inst_24320;var tmp24402 = inst_24322;var tmp24403 = inst_24321;var inst_24320__$1 = tmp24401;var inst_24321__$1 = tmp24403;var inst_24322__$1 = tmp24402;var inst_24323__$1 = inst_24336;var state_24380__$1 = (function (){var statearr_24407 = state_24380;(statearr_24407[(20)] = inst_24320__$1);
(statearr_24407[(21)] = inst_24322__$1);
(statearr_24407[(11)] = inst_24321__$1);
(statearr_24407[(12)] = inst_24323__$1);
(statearr_24407[(22)] = inst_24335);
return statearr_24407;
})();var statearr_24408_24482 = state_24380__$1;(statearr_24408_24482[(2)] = null);
(statearr_24408_24482[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (40)))
{var inst_24348 = (state_24380[(23)]);var inst_24352 = done.call(null,null);var inst_24353 = cljs.core.async.untap_STAR_.call(null,m,inst_24348);var state_24380__$1 = (function (){var statearr_24409 = state_24380;(statearr_24409[(24)] = inst_24352);
return statearr_24409;
})();var statearr_24410_24483 = state_24380__$1;(statearr_24410_24483[(2)] = inst_24353);
(statearr_24410_24483[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (33)))
{var inst_24339 = (state_24380[(25)]);var inst_24341 = cljs.core.chunked_seq_QMARK_.call(null,inst_24339);var state_24380__$1 = state_24380;if(inst_24341)
{var statearr_24411_24484 = state_24380__$1;(statearr_24411_24484[(1)] = (36));
} else
{var statearr_24412_24485 = state_24380__$1;(statearr_24412_24485[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (13)))
{var inst_24271 = (state_24380[(26)]);var inst_24274 = cljs.core.async.close_BANG_.call(null,inst_24271);var state_24380__$1 = state_24380;var statearr_24413_24486 = state_24380__$1;(statearr_24413_24486[(2)] = inst_24274);
(statearr_24413_24486[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (22)))
{var inst_24292 = (state_24380[(8)]);var inst_24295 = cljs.core.async.close_BANG_.call(null,inst_24292);var state_24380__$1 = state_24380;var statearr_24414_24487 = state_24380__$1;(statearr_24414_24487[(2)] = inst_24295);
(statearr_24414_24487[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (36)))
{var inst_24339 = (state_24380[(25)]);var inst_24343 = cljs.core.chunk_first.call(null,inst_24339);var inst_24344 = cljs.core.chunk_rest.call(null,inst_24339);var inst_24345 = cljs.core.count.call(null,inst_24343);var inst_24320 = inst_24344;var inst_24321 = inst_24343;var inst_24322 = inst_24345;var inst_24323 = (0);var state_24380__$1 = (function (){var statearr_24415 = state_24380;(statearr_24415[(20)] = inst_24320);
(statearr_24415[(21)] = inst_24322);
(statearr_24415[(11)] = inst_24321);
(statearr_24415[(12)] = inst_24323);
return statearr_24415;
})();var statearr_24416_24488 = state_24380__$1;(statearr_24416_24488[(2)] = null);
(statearr_24416_24488[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (41)))
{var inst_24339 = (state_24380[(25)]);var inst_24355 = (state_24380[(2)]);var inst_24356 = cljs.core.next.call(null,inst_24339);var inst_24320 = inst_24356;var inst_24321 = null;var inst_24322 = (0);var inst_24323 = (0);var state_24380__$1 = (function (){var statearr_24417 = state_24380;(statearr_24417[(20)] = inst_24320);
(statearr_24417[(27)] = inst_24355);
(statearr_24417[(21)] = inst_24322);
(statearr_24417[(11)] = inst_24321);
(statearr_24417[(12)] = inst_24323);
return statearr_24417;
})();var statearr_24418_24489 = state_24380__$1;(statearr_24418_24489[(2)] = null);
(statearr_24418_24489[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (43)))
{var state_24380__$1 = state_24380;var statearr_24419_24490 = state_24380__$1;(statearr_24419_24490[(2)] = null);
(statearr_24419_24490[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (29)))
{var inst_24364 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24420_24491 = state_24380__$1;(statearr_24420_24491[(2)] = inst_24364);
(statearr_24420_24491[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (44)))
{var inst_24373 = (state_24380[(2)]);var state_24380__$1 = (function (){var statearr_24421 = state_24380;(statearr_24421[(28)] = inst_24373);
return statearr_24421;
})();var statearr_24422_24492 = state_24380__$1;(statearr_24422_24492[(2)] = null);
(statearr_24422_24492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (6)))
{var inst_24312 = (state_24380[(29)]);var inst_24311 = cljs.core.deref.call(null,cs);var inst_24312__$1 = cljs.core.keys.call(null,inst_24311);var inst_24313 = cljs.core.count.call(null,inst_24312__$1);var inst_24314 = cljs.core.reset_BANG_.call(null,dctr,inst_24313);var inst_24319 = cljs.core.seq.call(null,inst_24312__$1);var inst_24320 = inst_24319;var inst_24321 = null;var inst_24322 = (0);var inst_24323 = (0);var state_24380__$1 = (function (){var statearr_24423 = state_24380;(statearr_24423[(20)] = inst_24320);
(statearr_24423[(30)] = inst_24314);
(statearr_24423[(21)] = inst_24322);
(statearr_24423[(11)] = inst_24321);
(statearr_24423[(12)] = inst_24323);
(statearr_24423[(29)] = inst_24312__$1);
return statearr_24423;
})();var statearr_24424_24493 = state_24380__$1;(statearr_24424_24493[(2)] = null);
(statearr_24424_24493[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (28)))
{var inst_24320 = (state_24380[(20)]);var inst_24339 = (state_24380[(25)]);var inst_24339__$1 = cljs.core.seq.call(null,inst_24320);var state_24380__$1 = (function (){var statearr_24425 = state_24380;(statearr_24425[(25)] = inst_24339__$1);
return statearr_24425;
})();if(inst_24339__$1)
{var statearr_24426_24494 = state_24380__$1;(statearr_24426_24494[(1)] = (33));
} else
{var statearr_24427_24495 = state_24380__$1;(statearr_24427_24495[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (25)))
{var inst_24322 = (state_24380[(21)]);var inst_24323 = (state_24380[(12)]);var inst_24325 = (inst_24323 < inst_24322);var inst_24326 = inst_24325;var state_24380__$1 = state_24380;if(cljs.core.truth_(inst_24326))
{var statearr_24428_24496 = state_24380__$1;(statearr_24428_24496[(1)] = (27));
} else
{var statearr_24429_24497 = state_24380__$1;(statearr_24429_24497[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (34)))
{var state_24380__$1 = state_24380;var statearr_24430_24498 = state_24380__$1;(statearr_24430_24498[(2)] = null);
(statearr_24430_24498[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (17)))
{var state_24380__$1 = state_24380;var statearr_24431_24499 = state_24380__$1;(statearr_24431_24499[(2)] = null);
(statearr_24431_24499[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (3)))
{var inst_24378 = (state_24380[(2)]);var state_24380__$1 = state_24380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24380__$1,inst_24378);
} else
{if((state_val_24381 === (12)))
{var inst_24307 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24432_24500 = state_24380__$1;(statearr_24432_24500[(2)] = inst_24307);
(statearr_24432_24500[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (2)))
{var state_24380__$1 = state_24380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24380__$1,(4),ch);
} else
{if((state_val_24381 === (23)))
{var state_24380__$1 = state_24380;var statearr_24433_24501 = state_24380__$1;(statearr_24433_24501[(2)] = null);
(statearr_24433_24501[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (35)))
{var inst_24362 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24434_24502 = state_24380__$1;(statearr_24434_24502[(2)] = inst_24362);
(statearr_24434_24502[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (19)))
{var inst_24281 = (state_24380[(7)]);var inst_24285 = cljs.core.chunk_first.call(null,inst_24281);var inst_24286 = cljs.core.chunk_rest.call(null,inst_24281);var inst_24287 = cljs.core.count.call(null,inst_24285);var inst_24261 = inst_24286;var inst_24262 = inst_24285;var inst_24263 = inst_24287;var inst_24264 = (0);var state_24380__$1 = (function (){var statearr_24435 = state_24380;(statearr_24435[(13)] = inst_24264);
(statearr_24435[(14)] = inst_24262);
(statearr_24435[(15)] = inst_24261);
(statearr_24435[(17)] = inst_24263);
return statearr_24435;
})();var statearr_24436_24503 = state_24380__$1;(statearr_24436_24503[(2)] = null);
(statearr_24436_24503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (11)))
{var inst_24261 = (state_24380[(15)]);var inst_24281 = (state_24380[(7)]);var inst_24281__$1 = cljs.core.seq.call(null,inst_24261);var state_24380__$1 = (function (){var statearr_24437 = state_24380;(statearr_24437[(7)] = inst_24281__$1);
return statearr_24437;
})();if(inst_24281__$1)
{var statearr_24438_24504 = state_24380__$1;(statearr_24438_24504[(1)] = (16));
} else
{var statearr_24439_24505 = state_24380__$1;(statearr_24439_24505[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (9)))
{var inst_24309 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24440_24506 = state_24380__$1;(statearr_24440_24506[(2)] = inst_24309);
(statearr_24440_24506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (5)))
{var inst_24259 = cljs.core.deref.call(null,cs);var inst_24260 = cljs.core.seq.call(null,inst_24259);var inst_24261 = inst_24260;var inst_24262 = null;var inst_24263 = (0);var inst_24264 = (0);var state_24380__$1 = (function (){var statearr_24441 = state_24380;(statearr_24441[(13)] = inst_24264);
(statearr_24441[(14)] = inst_24262);
(statearr_24441[(15)] = inst_24261);
(statearr_24441[(17)] = inst_24263);
return statearr_24441;
})();var statearr_24442_24507 = state_24380__$1;(statearr_24442_24507[(2)] = null);
(statearr_24442_24507[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (14)))
{var state_24380__$1 = state_24380;var statearr_24443_24508 = state_24380__$1;(statearr_24443_24508[(2)] = null);
(statearr_24443_24508[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (45)))
{var inst_24370 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24444_24509 = state_24380__$1;(statearr_24444_24509[(2)] = inst_24370);
(statearr_24444_24509[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (26)))
{var inst_24312 = (state_24380[(29)]);var inst_24366 = (state_24380[(2)]);var inst_24367 = cljs.core.seq.call(null,inst_24312);var state_24380__$1 = (function (){var statearr_24445 = state_24380;(statearr_24445[(31)] = inst_24366);
return statearr_24445;
})();if(inst_24367)
{var statearr_24446_24510 = state_24380__$1;(statearr_24446_24510[(1)] = (42));
} else
{var statearr_24447_24511 = state_24380__$1;(statearr_24447_24511[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (16)))
{var inst_24281 = (state_24380[(7)]);var inst_24283 = cljs.core.chunked_seq_QMARK_.call(null,inst_24281);var state_24380__$1 = state_24380;if(inst_24283)
{var statearr_24448_24512 = state_24380__$1;(statearr_24448_24512[(1)] = (19));
} else
{var statearr_24449_24513 = state_24380__$1;(statearr_24449_24513[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (38)))
{var inst_24359 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24450_24514 = state_24380__$1;(statearr_24450_24514[(2)] = inst_24359);
(statearr_24450_24514[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (30)))
{var state_24380__$1 = state_24380;var statearr_24451_24515 = state_24380__$1;(statearr_24451_24515[(2)] = null);
(statearr_24451_24515[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (10)))
{var inst_24264 = (state_24380[(13)]);var inst_24262 = (state_24380[(14)]);var inst_24270 = cljs.core._nth.call(null,inst_24262,inst_24264);var inst_24271 = cljs.core.nth.call(null,inst_24270,(0),null);var inst_24272 = cljs.core.nth.call(null,inst_24270,(1),null);var state_24380__$1 = (function (){var statearr_24452 = state_24380;(statearr_24452[(26)] = inst_24271);
return statearr_24452;
})();if(cljs.core.truth_(inst_24272))
{var statearr_24453_24516 = state_24380__$1;(statearr_24453_24516[(1)] = (13));
} else
{var statearr_24454_24517 = state_24380__$1;(statearr_24454_24517[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (18)))
{var inst_24305 = (state_24380[(2)]);var state_24380__$1 = state_24380;var statearr_24455_24518 = state_24380__$1;(statearr_24455_24518[(2)] = inst_24305);
(statearr_24455_24518[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (42)))
{var state_24380__$1 = state_24380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24380__$1,(45),dchan);
} else
{if((state_val_24381 === (37)))
{var inst_24252 = (state_24380[(9)]);var inst_24339 = (state_24380[(25)]);var inst_24348 = (state_24380[(23)]);var inst_24348__$1 = cljs.core.first.call(null,inst_24339);var inst_24349 = cljs.core.async.put_BANG_.call(null,inst_24348__$1,inst_24252,done);var state_24380__$1 = (function (){var statearr_24456 = state_24380;(statearr_24456[(23)] = inst_24348__$1);
return statearr_24456;
})();if(cljs.core.truth_(inst_24349))
{var statearr_24457_24519 = state_24380__$1;(statearr_24457_24519[(1)] = (39));
} else
{var statearr_24458_24520 = state_24380__$1;(statearr_24458_24520[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24381 === (8)))
{var inst_24264 = (state_24380[(13)]);var inst_24263 = (state_24380[(17)]);var inst_24266 = (inst_24264 < inst_24263);var inst_24267 = inst_24266;var state_24380__$1 = state_24380;if(cljs.core.truth_(inst_24267))
{var statearr_24459_24521 = state_24380__$1;(statearr_24459_24521[(1)] = (10));
} else
{var statearr_24460_24522 = state_24380__$1;(statearr_24460_24522[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___24468,cs,m,dchan,dctr,done))
;return ((function (switch__18335__auto__,c__18391__auto___24468,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_24464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24464[(0)] = state_machine__18336__auto__);
(statearr_24464[(1)] = (1));
return statearr_24464;
});
var state_machine__18336__auto____1 = (function (state_24380){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_24380);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e24465){if((e24465 instanceof Object))
{var ex__18339__auto__ = e24465;var statearr_24466_24523 = state_24380;(statearr_24466_24523[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24465;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24524 = state_24380;
state_24380 = G__24524;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_24380){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_24380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___24468,cs,m,dchan,dctr,done))
})();var state__18393__auto__ = (function (){var statearr_24467 = f__18392__auto__.call(null);(statearr_24467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___24468);
return statearr_24467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___24468,cs,m,dchan,dctr,done))
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
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj24526 = {};return obj24526;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15814__auto__ = m;if(and__15814__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__16463__auto__ = (((m == null))?null:m);return (function (){var or__15826__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24527){var map__24532 = p__24527;var map__24532__$1 = ((cljs.core.seq_QMARK_.call(null,map__24532))?cljs.core.apply.call(null,cljs.core.hash_map,map__24532):map__24532);var opts = map__24532__$1;var statearr_24533_24536 = state;(statearr_24533_24536[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24532,map__24532__$1,opts){
return (function (val){var statearr_24534_24537 = state;(statearr_24534_24537[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24532,map__24532__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24535_24538 = state;(statearr_24535_24538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24527 = null;if (arguments.length > 3) {
  p__24527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24527);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24539){
var state = cljs.core.first(arglist__24539);
arglist__24539 = cljs.core.next(arglist__24539);
var cont_block = cljs.core.first(arglist__24539);
arglist__24539 = cljs.core.next(arglist__24539);
var ports = cljs.core.first(arglist__24539);
var p__24527 = cljs.core.rest(arglist__24539);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24527);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24659 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24660){
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
this.meta24660 = meta24660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24659.cljs$lang$type = true;
cljs.core.async.t24659.cljs$lang$ctorStr = "cljs.core.async/t24659";
cljs.core.async.t24659.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t24659");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24661){var self__ = this;
var _24661__$1 = this;return self__.meta24660;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24661,meta24660__$1){var self__ = this;
var _24661__$1 = this;return (new cljs.core.async.t24659(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24660__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24659 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24660){return (new cljs.core.async.t24659(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24660));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24659(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__18391__auto___24778 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24731){var state_val_24732 = (state_24731[(1)]);if((state_val_24732 === (7)))
{var inst_24675 = (state_24731[(7)]);var inst_24680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24675);var state_24731__$1 = state_24731;var statearr_24733_24779 = state_24731__$1;(statearr_24733_24779[(2)] = inst_24680);
(statearr_24733_24779[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (20)))
{var inst_24690 = (state_24731[(8)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24731__$1,(23),out,inst_24690);
} else
{if((state_val_24732 === (1)))
{var inst_24665 = (state_24731[(9)]);var inst_24665__$1 = calc_state.call(null);var inst_24666 = cljs.core.seq_QMARK_.call(null,inst_24665__$1);var state_24731__$1 = (function (){var statearr_24734 = state_24731;(statearr_24734[(9)] = inst_24665__$1);
return statearr_24734;
})();if(inst_24666)
{var statearr_24735_24780 = state_24731__$1;(statearr_24735_24780[(1)] = (2));
} else
{var statearr_24736_24781 = state_24731__$1;(statearr_24736_24781[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (24)))
{var inst_24683 = (state_24731[(10)]);var inst_24675 = inst_24683;var state_24731__$1 = (function (){var statearr_24737 = state_24731;(statearr_24737[(7)] = inst_24675);
return statearr_24737;
})();var statearr_24738_24782 = state_24731__$1;(statearr_24738_24782[(2)] = null);
(statearr_24738_24782[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (4)))
{var inst_24665 = (state_24731[(9)]);var inst_24671 = (state_24731[(2)]);var inst_24672 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24673 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24674 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_24675 = inst_24665;var state_24731__$1 = (function (){var statearr_24739 = state_24731;(statearr_24739[(11)] = inst_24672);
(statearr_24739[(7)] = inst_24675);
(statearr_24739[(12)] = inst_24674);
(statearr_24739[(13)] = inst_24673);
return statearr_24739;
})();var statearr_24740_24783 = state_24731__$1;(statearr_24740_24783[(2)] = null);
(statearr_24740_24783[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (15)))
{var state_24731__$1 = state_24731;var statearr_24741_24784 = state_24731__$1;(statearr_24741_24784[(2)] = null);
(statearr_24741_24784[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (21)))
{var inst_24683 = (state_24731[(10)]);var inst_24675 = inst_24683;var state_24731__$1 = (function (){var statearr_24742 = state_24731;(statearr_24742[(7)] = inst_24675);
return statearr_24742;
})();var statearr_24743_24785 = state_24731__$1;(statearr_24743_24785[(2)] = null);
(statearr_24743_24785[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (13)))
{var inst_24727 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24744_24786 = state_24731__$1;(statearr_24744_24786[(2)] = inst_24727);
(statearr_24744_24786[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (22)))
{var inst_24725 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24745_24787 = state_24731__$1;(statearr_24745_24787[(2)] = inst_24725);
(statearr_24745_24787[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (6)))
{var inst_24729 = (state_24731[(2)]);var state_24731__$1 = state_24731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24731__$1,inst_24729);
} else
{if((state_val_24732 === (25)))
{var state_24731__$1 = state_24731;var statearr_24746_24788 = state_24731__$1;(statearr_24746_24788[(2)] = null);
(statearr_24746_24788[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (17)))
{var inst_24705 = (state_24731[(14)]);var state_24731__$1 = state_24731;var statearr_24747_24789 = state_24731__$1;(statearr_24747_24789[(2)] = inst_24705);
(statearr_24747_24789[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (3)))
{var inst_24665 = (state_24731[(9)]);var state_24731__$1 = state_24731;var statearr_24748_24790 = state_24731__$1;(statearr_24748_24790[(2)] = inst_24665);
(statearr_24748_24790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (12)))
{var inst_24686 = (state_24731[(15)]);var inst_24705 = (state_24731[(14)]);var inst_24691 = (state_24731[(16)]);var inst_24705__$1 = inst_24686.call(null,inst_24691);var state_24731__$1 = (function (){var statearr_24749 = state_24731;(statearr_24749[(14)] = inst_24705__$1);
return statearr_24749;
})();if(cljs.core.truth_(inst_24705__$1))
{var statearr_24750_24791 = state_24731__$1;(statearr_24750_24791[(1)] = (17));
} else
{var statearr_24751_24792 = state_24731__$1;(statearr_24751_24792[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (2)))
{var inst_24665 = (state_24731[(9)]);var inst_24668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24665);var state_24731__$1 = state_24731;var statearr_24752_24793 = state_24731__$1;(statearr_24752_24793[(2)] = inst_24668);
(statearr_24752_24793[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (23)))
{var inst_24716 = (state_24731[(2)]);var state_24731__$1 = state_24731;if(cljs.core.truth_(inst_24716))
{var statearr_24753_24794 = state_24731__$1;(statearr_24753_24794[(1)] = (24));
} else
{var statearr_24754_24795 = state_24731__$1;(statearr_24754_24795[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (19)))
{var inst_24713 = (state_24731[(2)]);var state_24731__$1 = state_24731;if(cljs.core.truth_(inst_24713))
{var statearr_24755_24796 = state_24731__$1;(statearr_24755_24796[(1)] = (20));
} else
{var statearr_24756_24797 = state_24731__$1;(statearr_24756_24797[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (11)))
{var inst_24690 = (state_24731[(8)]);var inst_24696 = (inst_24690 == null);var state_24731__$1 = state_24731;if(cljs.core.truth_(inst_24696))
{var statearr_24757_24798 = state_24731__$1;(statearr_24757_24798[(1)] = (14));
} else
{var statearr_24758_24799 = state_24731__$1;(statearr_24758_24799[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (9)))
{var inst_24683 = (state_24731[(10)]);var inst_24683__$1 = (state_24731[(2)]);var inst_24684 = cljs.core.get.call(null,inst_24683__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_24685 = cljs.core.get.call(null,inst_24683__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_24686 = cljs.core.get.call(null,inst_24683__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_24731__$1 = (function (){var statearr_24759 = state_24731;(statearr_24759[(10)] = inst_24683__$1);
(statearr_24759[(15)] = inst_24686);
(statearr_24759[(17)] = inst_24685);
return statearr_24759;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_24731__$1,(10),inst_24684);
} else
{if((state_val_24732 === (5)))
{var inst_24675 = (state_24731[(7)]);var inst_24678 = cljs.core.seq_QMARK_.call(null,inst_24675);var state_24731__$1 = state_24731;if(inst_24678)
{var statearr_24760_24800 = state_24731__$1;(statearr_24760_24800[(1)] = (7));
} else
{var statearr_24761_24801 = state_24731__$1;(statearr_24761_24801[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (14)))
{var inst_24691 = (state_24731[(16)]);var inst_24698 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24691);var state_24731__$1 = state_24731;var statearr_24762_24802 = state_24731__$1;(statearr_24762_24802[(2)] = inst_24698);
(statearr_24762_24802[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (26)))
{var inst_24721 = (state_24731[(2)]);var state_24731__$1 = state_24731;var statearr_24763_24803 = state_24731__$1;(statearr_24763_24803[(2)] = inst_24721);
(statearr_24763_24803[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (16)))
{var inst_24701 = (state_24731[(2)]);var inst_24702 = calc_state.call(null);var inst_24675 = inst_24702;var state_24731__$1 = (function (){var statearr_24764 = state_24731;(statearr_24764[(18)] = inst_24701);
(statearr_24764[(7)] = inst_24675);
return statearr_24764;
})();var statearr_24765_24804 = state_24731__$1;(statearr_24765_24804[(2)] = null);
(statearr_24765_24804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (10)))
{var inst_24691 = (state_24731[(16)]);var inst_24690 = (state_24731[(8)]);var inst_24689 = (state_24731[(2)]);var inst_24690__$1 = cljs.core.nth.call(null,inst_24689,(0),null);var inst_24691__$1 = cljs.core.nth.call(null,inst_24689,(1),null);var inst_24692 = (inst_24690__$1 == null);var inst_24693 = cljs.core._EQ_.call(null,inst_24691__$1,change);var inst_24694 = (inst_24692) || (inst_24693);var state_24731__$1 = (function (){var statearr_24766 = state_24731;(statearr_24766[(16)] = inst_24691__$1);
(statearr_24766[(8)] = inst_24690__$1);
return statearr_24766;
})();if(cljs.core.truth_(inst_24694))
{var statearr_24767_24805 = state_24731__$1;(statearr_24767_24805[(1)] = (11));
} else
{var statearr_24768_24806 = state_24731__$1;(statearr_24768_24806[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (18)))
{var inst_24686 = (state_24731[(15)]);var inst_24691 = (state_24731[(16)]);var inst_24685 = (state_24731[(17)]);var inst_24708 = cljs.core.empty_QMARK_.call(null,inst_24686);var inst_24709 = inst_24685.call(null,inst_24691);var inst_24710 = cljs.core.not.call(null,inst_24709);var inst_24711 = (inst_24708) && (inst_24710);var state_24731__$1 = state_24731;var statearr_24769_24807 = state_24731__$1;(statearr_24769_24807[(2)] = inst_24711);
(statearr_24769_24807[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24732 === (8)))
{var inst_24675 = (state_24731[(7)]);var state_24731__$1 = state_24731;var statearr_24770_24808 = state_24731__$1;(statearr_24770_24808[(2)] = inst_24675);
(statearr_24770_24808[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__18335__auto__,c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_24774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24774[(0)] = state_machine__18336__auto__);
(statearr_24774[(1)] = (1));
return statearr_24774;
});
var state_machine__18336__auto____1 = (function (state_24731){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_24731);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e24775){if((e24775 instanceof Object))
{var ex__18339__auto__ = e24775;var statearr_24776_24809 = state_24731;(statearr_24776_24809[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24775;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24810 = state_24731;
state_24731 = G__24810;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_24731){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_24731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__18393__auto__ = (function (){var statearr_24777 = f__18392__auto__.call(null);(statearr_24777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___24778);
return statearr_24777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___24778,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj24812 = {};return obj24812;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15814__auto__ = p;if(and__15814__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15814__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__16463__auto__ = (((p == null))?null:p);return (function (){var or__15826__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15814__auto__ = p;if(and__15814__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__16463__auto__ = (((p == null))?null:p);return (function (){var or__15826__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15814__auto__ = p;if(and__15814__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__16463__auto__ = (((p == null))?null:p);return (function (){var or__15826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15814__auto__ = p;if(and__15814__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15814__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__16463__auto__ = (((p == null))?null:p);return (function (){var or__15826__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16463__auto__)]);if(or__15826__auto__)
{return or__15826__auto__;
} else
{var or__15826__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15826__auto____$1)
{return or__15826__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
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
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__15826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15826__auto__))
{return or__15826__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15826__auto__,mults){
return (function (p1__24813_SHARP_){if(cljs.core.truth_(p1__24813_SHARP_.call(null,topic)))
{return p1__24813_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__24813_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15826__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24936 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24937){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24937 = meta24937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24936.cljs$lang$type = true;
cljs.core.async.t24936.cljs$lang$ctorStr = "cljs.core.async/t24936";
cljs.core.async.t24936.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t24936");
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24936.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24938){var self__ = this;
var _24938__$1 = this;return self__.meta24937;
});})(mults,ensure_mult))
;
cljs.core.async.t24936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24938,meta24937__$1){var self__ = this;
var _24938__$1 = this;return (new cljs.core.async.t24936(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24937__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24936 = ((function (mults,ensure_mult){
return (function __GT_t24936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24937){return (new cljs.core.async.t24936(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24937));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24936(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18391__auto___25058 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25058,mults,ensure_mult,p){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25058,mults,ensure_mult,p){
return (function (state_25010){var state_val_25011 = (state_25010[(1)]);if((state_val_25011 === (7)))
{var inst_25006 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25012_25059 = state_25010__$1;(statearr_25012_25059[(2)] = inst_25006);
(statearr_25012_25059[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (20)))
{var state_25010__$1 = state_25010;var statearr_25013_25060 = state_25010__$1;(statearr_25013_25060[(2)] = null);
(statearr_25013_25060[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (1)))
{var state_25010__$1 = state_25010;var statearr_25014_25061 = state_25010__$1;(statearr_25014_25061[(2)] = null);
(statearr_25014_25061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (24)))
{var inst_24989 = (state_25010[(7)]);var inst_24998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24989);var state_25010__$1 = state_25010;var statearr_25015_25062 = state_25010__$1;(statearr_25015_25062[(2)] = inst_24998);
(statearr_25015_25062[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (4)))
{var inst_24941 = (state_25010[(8)]);var inst_24941__$1 = (state_25010[(2)]);var inst_24942 = (inst_24941__$1 == null);var state_25010__$1 = (function (){var statearr_25016 = state_25010;(statearr_25016[(8)] = inst_24941__$1);
return statearr_25016;
})();if(cljs.core.truth_(inst_24942))
{var statearr_25017_25063 = state_25010__$1;(statearr_25017_25063[(1)] = (5));
} else
{var statearr_25018_25064 = state_25010__$1;(statearr_25018_25064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (15)))
{var inst_24983 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25019_25065 = state_25010__$1;(statearr_25019_25065[(2)] = inst_24983);
(statearr_25019_25065[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (21)))
{var inst_25003 = (state_25010[(2)]);var state_25010__$1 = (function (){var statearr_25020 = state_25010;(statearr_25020[(9)] = inst_25003);
return statearr_25020;
})();var statearr_25021_25066 = state_25010__$1;(statearr_25021_25066[(2)] = null);
(statearr_25021_25066[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (13)))
{var inst_24965 = (state_25010[(10)]);var inst_24967 = cljs.core.chunked_seq_QMARK_.call(null,inst_24965);var state_25010__$1 = state_25010;if(inst_24967)
{var statearr_25022_25067 = state_25010__$1;(statearr_25022_25067[(1)] = (16));
} else
{var statearr_25023_25068 = state_25010__$1;(statearr_25023_25068[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (22)))
{var inst_24995 = (state_25010[(2)]);var state_25010__$1 = state_25010;if(cljs.core.truth_(inst_24995))
{var statearr_25024_25069 = state_25010__$1;(statearr_25024_25069[(1)] = (23));
} else
{var statearr_25025_25070 = state_25010__$1;(statearr_25025_25070[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (6)))
{var inst_24941 = (state_25010[(8)]);var inst_24991 = (state_25010[(11)]);var inst_24989 = (state_25010[(7)]);var inst_24989__$1 = topic_fn.call(null,inst_24941);var inst_24990 = cljs.core.deref.call(null,mults);var inst_24991__$1 = cljs.core.get.call(null,inst_24990,inst_24989__$1);var state_25010__$1 = (function (){var statearr_25026 = state_25010;(statearr_25026[(11)] = inst_24991__$1);
(statearr_25026[(7)] = inst_24989__$1);
return statearr_25026;
})();if(cljs.core.truth_(inst_24991__$1))
{var statearr_25027_25071 = state_25010__$1;(statearr_25027_25071[(1)] = (19));
} else
{var statearr_25028_25072 = state_25010__$1;(statearr_25028_25072[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (25)))
{var inst_25000 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25029_25073 = state_25010__$1;(statearr_25029_25073[(2)] = inst_25000);
(statearr_25029_25073[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (17)))
{var inst_24965 = (state_25010[(10)]);var inst_24974 = cljs.core.first.call(null,inst_24965);var inst_24975 = cljs.core.async.muxch_STAR_.call(null,inst_24974);var inst_24976 = cljs.core.async.close_BANG_.call(null,inst_24975);var inst_24977 = cljs.core.next.call(null,inst_24965);var inst_24951 = inst_24977;var inst_24952 = null;var inst_24953 = (0);var inst_24954 = (0);var state_25010__$1 = (function (){var statearr_25030 = state_25010;(statearr_25030[(12)] = inst_24976);
(statearr_25030[(13)] = inst_24951);
(statearr_25030[(14)] = inst_24952);
(statearr_25030[(15)] = inst_24953);
(statearr_25030[(16)] = inst_24954);
return statearr_25030;
})();var statearr_25031_25074 = state_25010__$1;(statearr_25031_25074[(2)] = null);
(statearr_25031_25074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (3)))
{var inst_25008 = (state_25010[(2)]);var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25010__$1,inst_25008);
} else
{if((state_val_25011 === (12)))
{var inst_24985 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25032_25075 = state_25010__$1;(statearr_25032_25075[(2)] = inst_24985);
(statearr_25032_25075[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (2)))
{var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25010__$1,(4),ch);
} else
{if((state_val_25011 === (23)))
{var state_25010__$1 = state_25010;var statearr_25033_25076 = state_25010__$1;(statearr_25033_25076[(2)] = null);
(statearr_25033_25076[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (19)))
{var inst_24941 = (state_25010[(8)]);var inst_24991 = (state_25010[(11)]);var inst_24993 = cljs.core.async.muxch_STAR_.call(null,inst_24991);var state_25010__$1 = state_25010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25010__$1,(22),inst_24993,inst_24941);
} else
{if((state_val_25011 === (11)))
{var inst_24951 = (state_25010[(13)]);var inst_24965 = (state_25010[(10)]);var inst_24965__$1 = cljs.core.seq.call(null,inst_24951);var state_25010__$1 = (function (){var statearr_25034 = state_25010;(statearr_25034[(10)] = inst_24965__$1);
return statearr_25034;
})();if(inst_24965__$1)
{var statearr_25035_25077 = state_25010__$1;(statearr_25035_25077[(1)] = (13));
} else
{var statearr_25036_25078 = state_25010__$1;(statearr_25036_25078[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (9)))
{var inst_24987 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25037_25079 = state_25010__$1;(statearr_25037_25079[(2)] = inst_24987);
(statearr_25037_25079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (5)))
{var inst_24948 = cljs.core.deref.call(null,mults);var inst_24949 = cljs.core.vals.call(null,inst_24948);var inst_24950 = cljs.core.seq.call(null,inst_24949);var inst_24951 = inst_24950;var inst_24952 = null;var inst_24953 = (0);var inst_24954 = (0);var state_25010__$1 = (function (){var statearr_25038 = state_25010;(statearr_25038[(13)] = inst_24951);
(statearr_25038[(14)] = inst_24952);
(statearr_25038[(15)] = inst_24953);
(statearr_25038[(16)] = inst_24954);
return statearr_25038;
})();var statearr_25039_25080 = state_25010__$1;(statearr_25039_25080[(2)] = null);
(statearr_25039_25080[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (14)))
{var state_25010__$1 = state_25010;var statearr_25043_25081 = state_25010__$1;(statearr_25043_25081[(2)] = null);
(statearr_25043_25081[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (16)))
{var inst_24965 = (state_25010[(10)]);var inst_24969 = cljs.core.chunk_first.call(null,inst_24965);var inst_24970 = cljs.core.chunk_rest.call(null,inst_24965);var inst_24971 = cljs.core.count.call(null,inst_24969);var inst_24951 = inst_24970;var inst_24952 = inst_24969;var inst_24953 = inst_24971;var inst_24954 = (0);var state_25010__$1 = (function (){var statearr_25044 = state_25010;(statearr_25044[(13)] = inst_24951);
(statearr_25044[(14)] = inst_24952);
(statearr_25044[(15)] = inst_24953);
(statearr_25044[(16)] = inst_24954);
return statearr_25044;
})();var statearr_25045_25082 = state_25010__$1;(statearr_25045_25082[(2)] = null);
(statearr_25045_25082[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (10)))
{var inst_24951 = (state_25010[(13)]);var inst_24952 = (state_25010[(14)]);var inst_24953 = (state_25010[(15)]);var inst_24954 = (state_25010[(16)]);var inst_24959 = cljs.core._nth.call(null,inst_24952,inst_24954);var inst_24960 = cljs.core.async.muxch_STAR_.call(null,inst_24959);var inst_24961 = cljs.core.async.close_BANG_.call(null,inst_24960);var inst_24962 = (inst_24954 + (1));var tmp25040 = inst_24951;var tmp25041 = inst_24952;var tmp25042 = inst_24953;var inst_24951__$1 = tmp25040;var inst_24952__$1 = tmp25041;var inst_24953__$1 = tmp25042;var inst_24954__$1 = inst_24962;var state_25010__$1 = (function (){var statearr_25046 = state_25010;(statearr_25046[(13)] = inst_24951__$1);
(statearr_25046[(17)] = inst_24961);
(statearr_25046[(14)] = inst_24952__$1);
(statearr_25046[(15)] = inst_24953__$1);
(statearr_25046[(16)] = inst_24954__$1);
return statearr_25046;
})();var statearr_25047_25083 = state_25010__$1;(statearr_25047_25083[(2)] = null);
(statearr_25047_25083[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (18)))
{var inst_24980 = (state_25010[(2)]);var state_25010__$1 = state_25010;var statearr_25048_25084 = state_25010__$1;(statearr_25048_25084[(2)] = inst_24980);
(statearr_25048_25084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25011 === (8)))
{var inst_24953 = (state_25010[(15)]);var inst_24954 = (state_25010[(16)]);var inst_24956 = (inst_24954 < inst_24953);var inst_24957 = inst_24956;var state_25010__$1 = state_25010;if(cljs.core.truth_(inst_24957))
{var statearr_25049_25085 = state_25010__$1;(statearr_25049_25085[(1)] = (10));
} else
{var statearr_25050_25086 = state_25010__$1;(statearr_25050_25086[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___25058,mults,ensure_mult,p))
;return ((function (switch__18335__auto__,c__18391__auto___25058,mults,ensure_mult,p){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25054[(0)] = state_machine__18336__auto__);
(statearr_25054[(1)] = (1));
return statearr_25054;
});
var state_machine__18336__auto____1 = (function (state_25010){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25010);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25055){if((e25055 instanceof Object))
{var ex__18339__auto__ = e25055;var statearr_25056_25087 = state_25010;(statearr_25056_25087[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25010);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25055;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25088 = state_25010;
state_25010 = G__25088;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25010){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25058,mults,ensure_mult,p))
})();var state__18393__auto__ = (function (){var statearr_25057 = f__18392__auto__.call(null);(statearr_25057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25058);
return statearr_25057;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25058,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
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
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__18391__auto___25225 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25195){var state_val_25196 = (state_25195[(1)]);if((state_val_25196 === (7)))
{var state_25195__$1 = state_25195;var statearr_25197_25226 = state_25195__$1;(statearr_25197_25226[(2)] = null);
(statearr_25197_25226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (1)))
{var state_25195__$1 = state_25195;var statearr_25198_25227 = state_25195__$1;(statearr_25198_25227[(2)] = null);
(statearr_25198_25227[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (4)))
{var inst_25159 = (state_25195[(7)]);var inst_25161 = (inst_25159 < cnt);var state_25195__$1 = state_25195;if(cljs.core.truth_(inst_25161))
{var statearr_25199_25228 = state_25195__$1;(statearr_25199_25228[(1)] = (6));
} else
{var statearr_25200_25229 = state_25195__$1;(statearr_25200_25229[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (15)))
{var inst_25191 = (state_25195[(2)]);var state_25195__$1 = state_25195;var statearr_25201_25230 = state_25195__$1;(statearr_25201_25230[(2)] = inst_25191);
(statearr_25201_25230[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (13)))
{var inst_25184 = cljs.core.async.close_BANG_.call(null,out);var state_25195__$1 = state_25195;var statearr_25202_25231 = state_25195__$1;(statearr_25202_25231[(2)] = inst_25184);
(statearr_25202_25231[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (6)))
{var state_25195__$1 = state_25195;var statearr_25203_25232 = state_25195__$1;(statearr_25203_25232[(2)] = null);
(statearr_25203_25232[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (3)))
{var inst_25193 = (state_25195[(2)]);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25195__$1,inst_25193);
} else
{if((state_val_25196 === (12)))
{var inst_25181 = (state_25195[(8)]);var inst_25181__$1 = (state_25195[(2)]);var inst_25182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25181__$1);var state_25195__$1 = (function (){var statearr_25204 = state_25195;(statearr_25204[(8)] = inst_25181__$1);
return statearr_25204;
})();if(cljs.core.truth_(inst_25182))
{var statearr_25205_25233 = state_25195__$1;(statearr_25205_25233[(1)] = (13));
} else
{var statearr_25206_25234 = state_25195__$1;(statearr_25206_25234[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (2)))
{var inst_25158 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25159 = (0);var state_25195__$1 = (function (){var statearr_25207 = state_25195;(statearr_25207[(7)] = inst_25159);
(statearr_25207[(9)] = inst_25158);
return statearr_25207;
})();var statearr_25208_25235 = state_25195__$1;(statearr_25208_25235[(2)] = null);
(statearr_25208_25235[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (11)))
{var inst_25159 = (state_25195[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25195,(10),Object,null,(9));var inst_25168 = chs__$1.call(null,inst_25159);var inst_25169 = done.call(null,inst_25159);var inst_25170 = cljs.core.async.take_BANG_.call(null,inst_25168,inst_25169);var state_25195__$1 = state_25195;var statearr_25209_25236 = state_25195__$1;(statearr_25209_25236[(2)] = inst_25170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (9)))
{var inst_25159 = (state_25195[(7)]);var inst_25172 = (state_25195[(2)]);var inst_25173 = (inst_25159 + (1));var inst_25159__$1 = inst_25173;var state_25195__$1 = (function (){var statearr_25210 = state_25195;(statearr_25210[(7)] = inst_25159__$1);
(statearr_25210[(10)] = inst_25172);
return statearr_25210;
})();var statearr_25211_25237 = state_25195__$1;(statearr_25211_25237[(2)] = null);
(statearr_25211_25237[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (5)))
{var inst_25179 = (state_25195[(2)]);var state_25195__$1 = (function (){var statearr_25212 = state_25195;(statearr_25212[(11)] = inst_25179);
return statearr_25212;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25195__$1,(12),dchan);
} else
{if((state_val_25196 === (14)))
{var inst_25181 = (state_25195[(8)]);var inst_25186 = cljs.core.apply.call(null,f,inst_25181);var state_25195__$1 = state_25195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25195__$1,(16),out,inst_25186);
} else
{if((state_val_25196 === (16)))
{var inst_25188 = (state_25195[(2)]);var state_25195__$1 = (function (){var statearr_25213 = state_25195;(statearr_25213[(12)] = inst_25188);
return statearr_25213;
})();var statearr_25214_25238 = state_25195__$1;(statearr_25214_25238[(2)] = null);
(statearr_25214_25238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (10)))
{var inst_25163 = (state_25195[(2)]);var inst_25164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25195__$1 = (function (){var statearr_25215 = state_25195;(statearr_25215[(13)] = inst_25163);
return statearr_25215;
})();var statearr_25216_25239 = state_25195__$1;(statearr_25216_25239[(2)] = inst_25164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25196 === (8)))
{var inst_25177 = (state_25195[(2)]);var state_25195__$1 = state_25195;var statearr_25217_25240 = state_25195__$1;(statearr_25217_25240[(2)] = inst_25177);
(statearr_25217_25240[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__18335__auto__,c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25221[(0)] = state_machine__18336__auto__);
(statearr_25221[(1)] = (1));
return statearr_25221;
});
var state_machine__18336__auto____1 = (function (state_25195){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25195);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25222){if((e25222 instanceof Object))
{var ex__18339__auto__ = e25222;var statearr_25223_25241 = state_25195;(statearr_25223_25241[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25222;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25242 = state_25195;
state_25195 = G__25242;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25195){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__18393__auto__ = (function (){var statearr_25224 = f__18392__auto__.call(null);(statearr_25224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25225);
return statearr_25224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25225,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___25350 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25350,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25350,out){
return (function (state_25326){var state_val_25327 = (state_25326[(1)]);if((state_val_25327 === (7)))
{var inst_25305 = (state_25326[(7)]);var inst_25306 = (state_25326[(8)]);var inst_25305__$1 = (state_25326[(2)]);var inst_25306__$1 = cljs.core.nth.call(null,inst_25305__$1,(0),null);var inst_25307 = cljs.core.nth.call(null,inst_25305__$1,(1),null);var inst_25308 = (inst_25306__$1 == null);var state_25326__$1 = (function (){var statearr_25328 = state_25326;(statearr_25328[(9)] = inst_25307);
(statearr_25328[(7)] = inst_25305__$1);
(statearr_25328[(8)] = inst_25306__$1);
return statearr_25328;
})();if(cljs.core.truth_(inst_25308))
{var statearr_25329_25351 = state_25326__$1;(statearr_25329_25351[(1)] = (8));
} else
{var statearr_25330_25352 = state_25326__$1;(statearr_25330_25352[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (1)))
{var inst_25297 = cljs.core.vec.call(null,chs);var inst_25298 = inst_25297;var state_25326__$1 = (function (){var statearr_25331 = state_25326;(statearr_25331[(10)] = inst_25298);
return statearr_25331;
})();var statearr_25332_25353 = state_25326__$1;(statearr_25332_25353[(2)] = null);
(statearr_25332_25353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (4)))
{var inst_25298 = (state_25326[(10)]);var state_25326__$1 = state_25326;return cljs.core.async.ioc_alts_BANG_.call(null,state_25326__$1,(7),inst_25298);
} else
{if((state_val_25327 === (6)))
{var inst_25322 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25333_25354 = state_25326__$1;(statearr_25333_25354[(2)] = inst_25322);
(statearr_25333_25354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (3)))
{var inst_25324 = (state_25326[(2)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25326__$1,inst_25324);
} else
{if((state_val_25327 === (2)))
{var inst_25298 = (state_25326[(10)]);var inst_25300 = cljs.core.count.call(null,inst_25298);var inst_25301 = (inst_25300 > (0));var state_25326__$1 = state_25326;if(cljs.core.truth_(inst_25301))
{var statearr_25335_25355 = state_25326__$1;(statearr_25335_25355[(1)] = (4));
} else
{var statearr_25336_25356 = state_25326__$1;(statearr_25336_25356[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (11)))
{var inst_25298 = (state_25326[(10)]);var inst_25315 = (state_25326[(2)]);var tmp25334 = inst_25298;var inst_25298__$1 = tmp25334;var state_25326__$1 = (function (){var statearr_25337 = state_25326;(statearr_25337[(10)] = inst_25298__$1);
(statearr_25337[(11)] = inst_25315);
return statearr_25337;
})();var statearr_25338_25357 = state_25326__$1;(statearr_25338_25357[(2)] = null);
(statearr_25338_25357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (9)))
{var inst_25306 = (state_25326[(8)]);var state_25326__$1 = state_25326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25326__$1,(11),out,inst_25306);
} else
{if((state_val_25327 === (5)))
{var inst_25320 = cljs.core.async.close_BANG_.call(null,out);var state_25326__$1 = state_25326;var statearr_25339_25358 = state_25326__$1;(statearr_25339_25358[(2)] = inst_25320);
(statearr_25339_25358[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (10)))
{var inst_25318 = (state_25326[(2)]);var state_25326__$1 = state_25326;var statearr_25340_25359 = state_25326__$1;(statearr_25340_25359[(2)] = inst_25318);
(statearr_25340_25359[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25327 === (8)))
{var inst_25307 = (state_25326[(9)]);var inst_25298 = (state_25326[(10)]);var inst_25305 = (state_25326[(7)]);var inst_25306 = (state_25326[(8)]);var inst_25310 = (function (){var c = inst_25307;var v = inst_25306;var vec__25303 = inst_25305;var cs = inst_25298;return ((function (c,v,vec__25303,cs,inst_25307,inst_25298,inst_25305,inst_25306,state_val_25327,c__18391__auto___25350,out){
return (function (p1__25243_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25243_SHARP_);
});
;})(c,v,vec__25303,cs,inst_25307,inst_25298,inst_25305,inst_25306,state_val_25327,c__18391__auto___25350,out))
})();var inst_25311 = cljs.core.filterv.call(null,inst_25310,inst_25298);var inst_25298__$1 = inst_25311;var state_25326__$1 = (function (){var statearr_25341 = state_25326;(statearr_25341[(10)] = inst_25298__$1);
return statearr_25341;
})();var statearr_25342_25360 = state_25326__$1;(statearr_25342_25360[(2)] = null);
(statearr_25342_25360[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___25350,out))
;return ((function (switch__18335__auto__,c__18391__auto___25350,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25346 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25346[(0)] = state_machine__18336__auto__);
(statearr_25346[(1)] = (1));
return statearr_25346;
});
var state_machine__18336__auto____1 = (function (state_25326){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25326);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object))
{var ex__18339__auto__ = e25347;var statearr_25348_25361 = state_25326;(statearr_25348_25361[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25347;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25362 = state_25326;
state_25326 = G__25362;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25326){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25350,out))
})();var state__18393__auto__ = (function (){var statearr_25349 = f__18392__auto__.call(null);(statearr_25349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25350);
return statearr_25349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25350,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___25455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25455,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25455,out){
return (function (state_25432){var state_val_25433 = (state_25432[(1)]);if((state_val_25433 === (7)))
{var inst_25414 = (state_25432[(7)]);var inst_25414__$1 = (state_25432[(2)]);var inst_25415 = (inst_25414__$1 == null);var inst_25416 = cljs.core.not.call(null,inst_25415);var state_25432__$1 = (function (){var statearr_25434 = state_25432;(statearr_25434[(7)] = inst_25414__$1);
return statearr_25434;
})();if(inst_25416)
{var statearr_25435_25456 = state_25432__$1;(statearr_25435_25456[(1)] = (8));
} else
{var statearr_25436_25457 = state_25432__$1;(statearr_25436_25457[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (1)))
{var inst_25409 = (0);var state_25432__$1 = (function (){var statearr_25437 = state_25432;(statearr_25437[(8)] = inst_25409);
return statearr_25437;
})();var statearr_25438_25458 = state_25432__$1;(statearr_25438_25458[(2)] = null);
(statearr_25438_25458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (4)))
{var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25432__$1,(7),ch);
} else
{if((state_val_25433 === (6)))
{var inst_25427 = (state_25432[(2)]);var state_25432__$1 = state_25432;var statearr_25439_25459 = state_25432__$1;(statearr_25439_25459[(2)] = inst_25427);
(statearr_25439_25459[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (3)))
{var inst_25429 = (state_25432[(2)]);var inst_25430 = cljs.core.async.close_BANG_.call(null,out);var state_25432__$1 = (function (){var statearr_25440 = state_25432;(statearr_25440[(9)] = inst_25429);
return statearr_25440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25432__$1,inst_25430);
} else
{if((state_val_25433 === (2)))
{var inst_25409 = (state_25432[(8)]);var inst_25411 = (inst_25409 < n);var state_25432__$1 = state_25432;if(cljs.core.truth_(inst_25411))
{var statearr_25441_25460 = state_25432__$1;(statearr_25441_25460[(1)] = (4));
} else
{var statearr_25442_25461 = state_25432__$1;(statearr_25442_25461[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (11)))
{var inst_25409 = (state_25432[(8)]);var inst_25419 = (state_25432[(2)]);var inst_25420 = (inst_25409 + (1));var inst_25409__$1 = inst_25420;var state_25432__$1 = (function (){var statearr_25443 = state_25432;(statearr_25443[(10)] = inst_25419);
(statearr_25443[(8)] = inst_25409__$1);
return statearr_25443;
})();var statearr_25444_25462 = state_25432__$1;(statearr_25444_25462[(2)] = null);
(statearr_25444_25462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (9)))
{var state_25432__$1 = state_25432;var statearr_25445_25463 = state_25432__$1;(statearr_25445_25463[(2)] = null);
(statearr_25445_25463[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (5)))
{var state_25432__$1 = state_25432;var statearr_25446_25464 = state_25432__$1;(statearr_25446_25464[(2)] = null);
(statearr_25446_25464[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (10)))
{var inst_25424 = (state_25432[(2)]);var state_25432__$1 = state_25432;var statearr_25447_25465 = state_25432__$1;(statearr_25447_25465[(2)] = inst_25424);
(statearr_25447_25465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25433 === (8)))
{var inst_25414 = (state_25432[(7)]);var state_25432__$1 = state_25432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25432__$1,(11),out,inst_25414);
} else
{return null;
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
});})(c__18391__auto___25455,out))
;return ((function (switch__18335__auto__,c__18391__auto___25455,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25451 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25451[(0)] = state_machine__18336__auto__);
(statearr_25451[(1)] = (1));
return statearr_25451;
});
var state_machine__18336__auto____1 = (function (state_25432){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25432);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25452){if((e25452 instanceof Object))
{var ex__18339__auto__ = e25452;var statearr_25453_25466 = state_25432;(statearr_25453_25466[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25467 = state_25432;
state_25432 = G__25467;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25432){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25455,out))
})();var state__18393__auto__ = (function (){var statearr_25454 = f__18392__auto__.call(null);(statearr_25454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25455);
return statearr_25454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25455,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25475 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25475 = (function (ch,f,map_LT_,meta25476){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25476 = meta25476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25475.cljs$lang$type = true;
cljs.core.async.t25475.cljs$lang$ctorStr = "cljs.core.async/t25475";
cljs.core.async.t25475.cljs$lang$ctorPrWriter = (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t25475");
});
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25478 = (function (fn1,_,meta25476,ch,f,map_LT_,meta25479){
this.fn1 = fn1;
this._ = _;
this.meta25476 = meta25476;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25479 = meta25479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25478.cljs$lang$type = true;
cljs.core.async.t25478.cljs$lang$ctorStr = "cljs.core.async/t25478";
cljs.core.async.t25478.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t25478");
});})(___$1))
;
cljs.core.async.t25478.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25468_SHARP_){return f1.call(null,(((p1__25468_SHARP_ == null))?null:self__.f.call(null,p1__25468_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25480){var self__ = this;
var _25480__$1 = this;return self__.meta25479;
});})(___$1))
;
cljs.core.async.t25478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25480,meta25479__$1){var self__ = this;
var _25480__$1 = this;return (new cljs.core.async.t25478(self__.fn1,self__._,self__.meta25476,self__.ch,self__.f,self__.map_LT_,meta25479__$1));
});})(___$1))
;
cljs.core.async.__GT_t25478 = ((function (___$1){
return (function __GT_t25478(fn1__$1,___$2,meta25476__$1,ch__$2,f__$2,map_LT___$2,meta25479){return (new cljs.core.async.t25478(fn1__$1,___$2,meta25476__$1,ch__$2,f__$2,map_LT___$2,meta25479));
});})(___$1))
;
}
return (new cljs.core.async.t25478(fn1,___$1,self__.meta25476,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15814__auto__ = ret;if(cljs.core.truth_(and__15814__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15814__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25477){var self__ = this;
var _25477__$1 = this;return self__.meta25476;
});
cljs.core.async.t25475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25477,meta25476__$1){var self__ = this;
var _25477__$1 = this;return (new cljs.core.async.t25475(self__.ch,self__.f,self__.map_LT_,meta25476__$1));
});
cljs.core.async.__GT_t25475 = (function __GT_t25475(ch__$1,f__$1,map_LT___$1,meta25476){return (new cljs.core.async.t25475(ch__$1,f__$1,map_LT___$1,meta25476));
});
}
return (new cljs.core.async.t25475(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25484 = (function (ch,f,map_GT_,meta25485){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25485 = meta25485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25484.cljs$lang$type = true;
cljs.core.async.t25484.cljs$lang$ctorStr = "cljs.core.async/t25484";
cljs.core.async.t25484.cljs$lang$ctorPrWriter = (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t25484");
});
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25486){var self__ = this;
var _25486__$1 = this;return self__.meta25485;
});
cljs.core.async.t25484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25486,meta25485__$1){var self__ = this;
var _25486__$1 = this;return (new cljs.core.async.t25484(self__.ch,self__.f,self__.map_GT_,meta25485__$1));
});
cljs.core.async.__GT_t25484 = (function __GT_t25484(ch__$1,f__$1,map_GT___$1,meta25485){return (new cljs.core.async.t25484(ch__$1,f__$1,map_GT___$1,meta25485));
});
}
return (new cljs.core.async.t25484(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25490 = (function (ch,p,filter_GT_,meta25491){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25491 = meta25491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25490.cljs$lang$type = true;
cljs.core.async.t25490.cljs$lang$ctorStr = "cljs.core.async/t25490";
cljs.core.async.t25490.cljs$lang$ctorPrWriter = (function (this__16403__auto__,writer__16404__auto__,opt__16405__auto__){return cljs.core._write.call(null,writer__16404__auto__,"cljs.core.async/t25490");
});
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25492){var self__ = this;
var _25492__$1 = this;return self__.meta25491;
});
cljs.core.async.t25490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25492,meta25491__$1){var self__ = this;
var _25492__$1 = this;return (new cljs.core.async.t25490(self__.ch,self__.p,self__.filter_GT_,meta25491__$1));
});
cljs.core.async.__GT_t25490 = (function __GT_t25490(ch__$1,p__$1,filter_GT___$1,meta25491){return (new cljs.core.async.t25490(ch__$1,p__$1,filter_GT___$1,meta25491));
});
}
return (new cljs.core.async.t25490(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___25575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25575,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25575,out){
return (function (state_25554){var state_val_25555 = (state_25554[(1)]);if((state_val_25555 === (7)))
{var inst_25550 = (state_25554[(2)]);var state_25554__$1 = state_25554;var statearr_25556_25576 = state_25554__$1;(statearr_25556_25576[(2)] = inst_25550);
(statearr_25556_25576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (1)))
{var state_25554__$1 = state_25554;var statearr_25557_25577 = state_25554__$1;(statearr_25557_25577[(2)] = null);
(statearr_25557_25577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (4)))
{var inst_25536 = (state_25554[(7)]);var inst_25536__$1 = (state_25554[(2)]);var inst_25537 = (inst_25536__$1 == null);var state_25554__$1 = (function (){var statearr_25558 = state_25554;(statearr_25558[(7)] = inst_25536__$1);
return statearr_25558;
})();if(cljs.core.truth_(inst_25537))
{var statearr_25559_25578 = state_25554__$1;(statearr_25559_25578[(1)] = (5));
} else
{var statearr_25560_25579 = state_25554__$1;(statearr_25560_25579[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (6)))
{var inst_25536 = (state_25554[(7)]);var inst_25541 = p.call(null,inst_25536);var state_25554__$1 = state_25554;if(cljs.core.truth_(inst_25541))
{var statearr_25561_25580 = state_25554__$1;(statearr_25561_25580[(1)] = (8));
} else
{var statearr_25562_25581 = state_25554__$1;(statearr_25562_25581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (3)))
{var inst_25552 = (state_25554[(2)]);var state_25554__$1 = state_25554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25554__$1,inst_25552);
} else
{if((state_val_25555 === (2)))
{var state_25554__$1 = state_25554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25554__$1,(4),ch);
} else
{if((state_val_25555 === (11)))
{var inst_25544 = (state_25554[(2)]);var state_25554__$1 = state_25554;var statearr_25563_25582 = state_25554__$1;(statearr_25563_25582[(2)] = inst_25544);
(statearr_25563_25582[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (9)))
{var state_25554__$1 = state_25554;var statearr_25564_25583 = state_25554__$1;(statearr_25564_25583[(2)] = null);
(statearr_25564_25583[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (5)))
{var inst_25539 = cljs.core.async.close_BANG_.call(null,out);var state_25554__$1 = state_25554;var statearr_25565_25584 = state_25554__$1;(statearr_25565_25584[(2)] = inst_25539);
(statearr_25565_25584[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (10)))
{var inst_25547 = (state_25554[(2)]);var state_25554__$1 = (function (){var statearr_25566 = state_25554;(statearr_25566[(8)] = inst_25547);
return statearr_25566;
})();var statearr_25567_25585 = state_25554__$1;(statearr_25567_25585[(2)] = null);
(statearr_25567_25585[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25555 === (8)))
{var inst_25536 = (state_25554[(7)]);var state_25554__$1 = state_25554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25554__$1,(11),out,inst_25536);
} else
{return null;
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
});})(c__18391__auto___25575,out))
;return ((function (switch__18335__auto__,c__18391__auto___25575,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25571 = [null,null,null,null,null,null,null,null,null];(statearr_25571[(0)] = state_machine__18336__auto__);
(statearr_25571[(1)] = (1));
return statearr_25571;
});
var state_machine__18336__auto____1 = (function (state_25554){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25554);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25572){if((e25572 instanceof Object))
{var ex__18339__auto__ = e25572;var statearr_25573_25586 = state_25554;(statearr_25573_25586[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25587 = state_25554;
state_25554 = G__25587;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25554){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25575,out))
})();var state__18393__auto__ = (function (){var statearr_25574 = f__18392__auto__.call(null);(statearr_25574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25575);
return statearr_25574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25575,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18391__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto__){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto__){
return (function (state_25753){var state_val_25754 = (state_25753[(1)]);if((state_val_25754 === (7)))
{var inst_25749 = (state_25753[(2)]);var state_25753__$1 = state_25753;var statearr_25755_25796 = state_25753__$1;(statearr_25755_25796[(2)] = inst_25749);
(statearr_25755_25796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (20)))
{var inst_25719 = (state_25753[(7)]);var inst_25730 = (state_25753[(2)]);var inst_25731 = cljs.core.next.call(null,inst_25719);var inst_25705 = inst_25731;var inst_25706 = null;var inst_25707 = (0);var inst_25708 = (0);var state_25753__$1 = (function (){var statearr_25756 = state_25753;(statearr_25756[(8)] = inst_25705);
(statearr_25756[(9)] = inst_25708);
(statearr_25756[(10)] = inst_25706);
(statearr_25756[(11)] = inst_25730);
(statearr_25756[(12)] = inst_25707);
return statearr_25756;
})();var statearr_25757_25797 = state_25753__$1;(statearr_25757_25797[(2)] = null);
(statearr_25757_25797[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (1)))
{var state_25753__$1 = state_25753;var statearr_25758_25798 = state_25753__$1;(statearr_25758_25798[(2)] = null);
(statearr_25758_25798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (4)))
{var inst_25694 = (state_25753[(13)]);var inst_25694__$1 = (state_25753[(2)]);var inst_25695 = (inst_25694__$1 == null);var state_25753__$1 = (function (){var statearr_25759 = state_25753;(statearr_25759[(13)] = inst_25694__$1);
return statearr_25759;
})();if(cljs.core.truth_(inst_25695))
{var statearr_25760_25799 = state_25753__$1;(statearr_25760_25799[(1)] = (5));
} else
{var statearr_25761_25800 = state_25753__$1;(statearr_25761_25800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (15)))
{var state_25753__$1 = state_25753;var statearr_25765_25801 = state_25753__$1;(statearr_25765_25801[(2)] = null);
(statearr_25765_25801[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (21)))
{var state_25753__$1 = state_25753;var statearr_25766_25802 = state_25753__$1;(statearr_25766_25802[(2)] = null);
(statearr_25766_25802[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (13)))
{var inst_25705 = (state_25753[(8)]);var inst_25708 = (state_25753[(9)]);var inst_25706 = (state_25753[(10)]);var inst_25707 = (state_25753[(12)]);var inst_25715 = (state_25753[(2)]);var inst_25716 = (inst_25708 + (1));var tmp25762 = inst_25705;var tmp25763 = inst_25706;var tmp25764 = inst_25707;var inst_25705__$1 = tmp25762;var inst_25706__$1 = tmp25763;var inst_25707__$1 = tmp25764;var inst_25708__$1 = inst_25716;var state_25753__$1 = (function (){var statearr_25767 = state_25753;(statearr_25767[(8)] = inst_25705__$1);
(statearr_25767[(9)] = inst_25708__$1);
(statearr_25767[(10)] = inst_25706__$1);
(statearr_25767[(14)] = inst_25715);
(statearr_25767[(12)] = inst_25707__$1);
return statearr_25767;
})();var statearr_25768_25803 = state_25753__$1;(statearr_25768_25803[(2)] = null);
(statearr_25768_25803[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (22)))
{var state_25753__$1 = state_25753;var statearr_25769_25804 = state_25753__$1;(statearr_25769_25804[(2)] = null);
(statearr_25769_25804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (6)))
{var inst_25694 = (state_25753[(13)]);var inst_25703 = f.call(null,inst_25694);var inst_25704 = cljs.core.seq.call(null,inst_25703);var inst_25705 = inst_25704;var inst_25706 = null;var inst_25707 = (0);var inst_25708 = (0);var state_25753__$1 = (function (){var statearr_25770 = state_25753;(statearr_25770[(8)] = inst_25705);
(statearr_25770[(9)] = inst_25708);
(statearr_25770[(10)] = inst_25706);
(statearr_25770[(12)] = inst_25707);
return statearr_25770;
})();var statearr_25771_25805 = state_25753__$1;(statearr_25771_25805[(2)] = null);
(statearr_25771_25805[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (17)))
{var inst_25719 = (state_25753[(7)]);var inst_25723 = cljs.core.chunk_first.call(null,inst_25719);var inst_25724 = cljs.core.chunk_rest.call(null,inst_25719);var inst_25725 = cljs.core.count.call(null,inst_25723);var inst_25705 = inst_25724;var inst_25706 = inst_25723;var inst_25707 = inst_25725;var inst_25708 = (0);var state_25753__$1 = (function (){var statearr_25772 = state_25753;(statearr_25772[(8)] = inst_25705);
(statearr_25772[(9)] = inst_25708);
(statearr_25772[(10)] = inst_25706);
(statearr_25772[(12)] = inst_25707);
return statearr_25772;
})();var statearr_25773_25806 = state_25753__$1;(statearr_25773_25806[(2)] = null);
(statearr_25773_25806[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (3)))
{var inst_25751 = (state_25753[(2)]);var state_25753__$1 = state_25753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25753__$1,inst_25751);
} else
{if((state_val_25754 === (12)))
{var inst_25739 = (state_25753[(2)]);var state_25753__$1 = state_25753;var statearr_25774_25807 = state_25753__$1;(statearr_25774_25807[(2)] = inst_25739);
(statearr_25774_25807[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (2)))
{var state_25753__$1 = state_25753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25753__$1,(4),in$);
} else
{if((state_val_25754 === (23)))
{var inst_25747 = (state_25753[(2)]);var state_25753__$1 = state_25753;var statearr_25775_25808 = state_25753__$1;(statearr_25775_25808[(2)] = inst_25747);
(statearr_25775_25808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (19)))
{var inst_25734 = (state_25753[(2)]);var state_25753__$1 = state_25753;var statearr_25776_25809 = state_25753__$1;(statearr_25776_25809[(2)] = inst_25734);
(statearr_25776_25809[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (11)))
{var inst_25705 = (state_25753[(8)]);var inst_25719 = (state_25753[(7)]);var inst_25719__$1 = cljs.core.seq.call(null,inst_25705);var state_25753__$1 = (function (){var statearr_25777 = state_25753;(statearr_25777[(7)] = inst_25719__$1);
return statearr_25777;
})();if(inst_25719__$1)
{var statearr_25778_25810 = state_25753__$1;(statearr_25778_25810[(1)] = (14));
} else
{var statearr_25779_25811 = state_25753__$1;(statearr_25779_25811[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (9)))
{var inst_25741 = (state_25753[(2)]);var inst_25742 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_25753__$1 = (function (){var statearr_25780 = state_25753;(statearr_25780[(15)] = inst_25741);
return statearr_25780;
})();if(cljs.core.truth_(inst_25742))
{var statearr_25781_25812 = state_25753__$1;(statearr_25781_25812[(1)] = (21));
} else
{var statearr_25782_25813 = state_25753__$1;(statearr_25782_25813[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (5)))
{var inst_25697 = cljs.core.async.close_BANG_.call(null,out);var state_25753__$1 = state_25753;var statearr_25783_25814 = state_25753__$1;(statearr_25783_25814[(2)] = inst_25697);
(statearr_25783_25814[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (14)))
{var inst_25719 = (state_25753[(7)]);var inst_25721 = cljs.core.chunked_seq_QMARK_.call(null,inst_25719);var state_25753__$1 = state_25753;if(inst_25721)
{var statearr_25784_25815 = state_25753__$1;(statearr_25784_25815[(1)] = (17));
} else
{var statearr_25785_25816 = state_25753__$1;(statearr_25785_25816[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (16)))
{var inst_25737 = (state_25753[(2)]);var state_25753__$1 = state_25753;var statearr_25786_25817 = state_25753__$1;(statearr_25786_25817[(2)] = inst_25737);
(statearr_25786_25817[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25754 === (10)))
{var inst_25708 = (state_25753[(9)]);var inst_25706 = (state_25753[(10)]);var inst_25713 = cljs.core._nth.call(null,inst_25706,inst_25708);var state_25753__$1 = state_25753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(13),out,inst_25713);
} else
{if((state_val_25754 === (18)))
{var inst_25719 = (state_25753[(7)]);var inst_25728 = cljs.core.first.call(null,inst_25719);var state_25753__$1 = state_25753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25753__$1,(20),out,inst_25728);
} else
{if((state_val_25754 === (8)))
{var inst_25708 = (state_25753[(9)]);var inst_25707 = (state_25753[(12)]);var inst_25710 = (inst_25708 < inst_25707);var inst_25711 = inst_25710;var state_25753__$1 = state_25753;if(cljs.core.truth_(inst_25711))
{var statearr_25787_25818 = state_25753__$1;(statearr_25787_25818[(1)] = (10));
} else
{var statearr_25788_25819 = state_25753__$1;(statearr_25788_25819[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto__))
;return ((function (switch__18335__auto__,c__18391__auto__){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25792[(0)] = state_machine__18336__auto__);
(statearr_25792[(1)] = (1));
return statearr_25792;
});
var state_machine__18336__auto____1 = (function (state_25753){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25753);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25793){if((e25793 instanceof Object))
{var ex__18339__auto__ = e25793;var statearr_25794_25820 = state_25753;(statearr_25794_25820[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25821 = state_25753;
state_25753 = G__25821;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25753){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto__))
})();var state__18393__auto__ = (function (){var statearr_25795 = f__18392__auto__.call(null);(statearr_25795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto__);
return statearr_25795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto__))
);
return c__18391__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___25918 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___25918,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___25918,out){
return (function (state_25893){var state_val_25894 = (state_25893[(1)]);if((state_val_25894 === (7)))
{var inst_25888 = (state_25893[(2)]);var state_25893__$1 = state_25893;var statearr_25895_25919 = state_25893__$1;(statearr_25895_25919[(2)] = inst_25888);
(statearr_25895_25919[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (1)))
{var inst_25870 = null;var state_25893__$1 = (function (){var statearr_25896 = state_25893;(statearr_25896[(7)] = inst_25870);
return statearr_25896;
})();var statearr_25897_25920 = state_25893__$1;(statearr_25897_25920[(2)] = null);
(statearr_25897_25920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (4)))
{var inst_25873 = (state_25893[(8)]);var inst_25873__$1 = (state_25893[(2)]);var inst_25874 = (inst_25873__$1 == null);var inst_25875 = cljs.core.not.call(null,inst_25874);var state_25893__$1 = (function (){var statearr_25898 = state_25893;(statearr_25898[(8)] = inst_25873__$1);
return statearr_25898;
})();if(inst_25875)
{var statearr_25899_25921 = state_25893__$1;(statearr_25899_25921[(1)] = (5));
} else
{var statearr_25900_25922 = state_25893__$1;(statearr_25900_25922[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (6)))
{var state_25893__$1 = state_25893;var statearr_25901_25923 = state_25893__$1;(statearr_25901_25923[(2)] = null);
(statearr_25901_25923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (3)))
{var inst_25890 = (state_25893[(2)]);var inst_25891 = cljs.core.async.close_BANG_.call(null,out);var state_25893__$1 = (function (){var statearr_25902 = state_25893;(statearr_25902[(9)] = inst_25890);
return statearr_25902;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25893__$1,inst_25891);
} else
{if((state_val_25894 === (2)))
{var state_25893__$1 = state_25893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(4),ch);
} else
{if((state_val_25894 === (11)))
{var inst_25873 = (state_25893[(8)]);var inst_25882 = (state_25893[(2)]);var inst_25870 = inst_25873;var state_25893__$1 = (function (){var statearr_25903 = state_25893;(statearr_25903[(7)] = inst_25870);
(statearr_25903[(10)] = inst_25882);
return statearr_25903;
})();var statearr_25904_25924 = state_25893__$1;(statearr_25904_25924[(2)] = null);
(statearr_25904_25924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (9)))
{var inst_25873 = (state_25893[(8)]);var state_25893__$1 = state_25893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25893__$1,(11),out,inst_25873);
} else
{if((state_val_25894 === (5)))
{var inst_25873 = (state_25893[(8)]);var inst_25870 = (state_25893[(7)]);var inst_25877 = cljs.core._EQ_.call(null,inst_25873,inst_25870);var state_25893__$1 = state_25893;if(inst_25877)
{var statearr_25906_25925 = state_25893__$1;(statearr_25906_25925[(1)] = (8));
} else
{var statearr_25907_25926 = state_25893__$1;(statearr_25907_25926[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (10)))
{var inst_25885 = (state_25893[(2)]);var state_25893__$1 = state_25893;var statearr_25908_25927 = state_25893__$1;(statearr_25908_25927[(2)] = inst_25885);
(statearr_25908_25927[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25894 === (8)))
{var inst_25870 = (state_25893[(7)]);var tmp25905 = inst_25870;var inst_25870__$1 = tmp25905;var state_25893__$1 = (function (){var statearr_25909 = state_25893;(statearr_25909[(7)] = inst_25870__$1);
return statearr_25909;
})();var statearr_25910_25928 = state_25893__$1;(statearr_25910_25928[(2)] = null);
(statearr_25910_25928[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___25918,out))
;return ((function (switch__18335__auto__,c__18391__auto___25918,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_25914 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25914[(0)] = state_machine__18336__auto__);
(statearr_25914[(1)] = (1));
return statearr_25914;
});
var state_machine__18336__auto____1 = (function (state_25893){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_25893);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e25915){if((e25915 instanceof Object))
{var ex__18339__auto__ = e25915;var statearr_25916_25929 = state_25893;(statearr_25916_25929[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25915;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25930 = state_25893;
state_25893 = G__25930;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_25893){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_25893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___25918,out))
})();var state__18393__auto__ = (function (){var statearr_25917 = f__18392__auto__.call(null);(statearr_25917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___25918);
return statearr_25917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___25918,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___26065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___26065,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___26065,out){
return (function (state_26035){var state_val_26036 = (state_26035[(1)]);if((state_val_26036 === (7)))
{var inst_26031 = (state_26035[(2)]);var state_26035__$1 = state_26035;var statearr_26037_26066 = state_26035__$1;(statearr_26037_26066[(2)] = inst_26031);
(statearr_26037_26066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (1)))
{var inst_25998 = (new Array(n));var inst_25999 = inst_25998;var inst_26000 = (0);var state_26035__$1 = (function (){var statearr_26038 = state_26035;(statearr_26038[(7)] = inst_25999);
(statearr_26038[(8)] = inst_26000);
return statearr_26038;
})();var statearr_26039_26067 = state_26035__$1;(statearr_26039_26067[(2)] = null);
(statearr_26039_26067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (4)))
{var inst_26003 = (state_26035[(9)]);var inst_26003__$1 = (state_26035[(2)]);var inst_26004 = (inst_26003__$1 == null);var inst_26005 = cljs.core.not.call(null,inst_26004);var state_26035__$1 = (function (){var statearr_26040 = state_26035;(statearr_26040[(9)] = inst_26003__$1);
return statearr_26040;
})();if(inst_26005)
{var statearr_26041_26068 = state_26035__$1;(statearr_26041_26068[(1)] = (5));
} else
{var statearr_26042_26069 = state_26035__$1;(statearr_26042_26069[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (15)))
{var inst_26025 = (state_26035[(2)]);var state_26035__$1 = state_26035;var statearr_26043_26070 = state_26035__$1;(statearr_26043_26070[(2)] = inst_26025);
(statearr_26043_26070[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (13)))
{var state_26035__$1 = state_26035;var statearr_26044_26071 = state_26035__$1;(statearr_26044_26071[(2)] = null);
(statearr_26044_26071[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (6)))
{var inst_26000 = (state_26035[(8)]);var inst_26021 = (inst_26000 > (0));var state_26035__$1 = state_26035;if(cljs.core.truth_(inst_26021))
{var statearr_26045_26072 = state_26035__$1;(statearr_26045_26072[(1)] = (12));
} else
{var statearr_26046_26073 = state_26035__$1;(statearr_26046_26073[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (3)))
{var inst_26033 = (state_26035[(2)]);var state_26035__$1 = state_26035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26035__$1,inst_26033);
} else
{if((state_val_26036 === (12)))
{var inst_25999 = (state_26035[(7)]);var inst_26023 = cljs.core.vec.call(null,inst_25999);var state_26035__$1 = state_26035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26035__$1,(15),out,inst_26023);
} else
{if((state_val_26036 === (2)))
{var state_26035__$1 = state_26035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26035__$1,(4),ch);
} else
{if((state_val_26036 === (11)))
{var inst_26015 = (state_26035[(2)]);var inst_26016 = (new Array(n));var inst_25999 = inst_26016;var inst_26000 = (0);var state_26035__$1 = (function (){var statearr_26047 = state_26035;(statearr_26047[(7)] = inst_25999);
(statearr_26047[(10)] = inst_26015);
(statearr_26047[(8)] = inst_26000);
return statearr_26047;
})();var statearr_26048_26074 = state_26035__$1;(statearr_26048_26074[(2)] = null);
(statearr_26048_26074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (9)))
{var inst_25999 = (state_26035[(7)]);var inst_26013 = cljs.core.vec.call(null,inst_25999);var state_26035__$1 = state_26035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26035__$1,(11),out,inst_26013);
} else
{if((state_val_26036 === (5)))
{var inst_25999 = (state_26035[(7)]);var inst_26000 = (state_26035[(8)]);var inst_26003 = (state_26035[(9)]);var inst_26008 = (state_26035[(11)]);var inst_26007 = (inst_25999[inst_26000] = inst_26003);var inst_26008__$1 = (inst_26000 + (1));var inst_26009 = (inst_26008__$1 < n);var state_26035__$1 = (function (){var statearr_26049 = state_26035;(statearr_26049[(12)] = inst_26007);
(statearr_26049[(11)] = inst_26008__$1);
return statearr_26049;
})();if(cljs.core.truth_(inst_26009))
{var statearr_26050_26075 = state_26035__$1;(statearr_26050_26075[(1)] = (8));
} else
{var statearr_26051_26076 = state_26035__$1;(statearr_26051_26076[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (14)))
{var inst_26028 = (state_26035[(2)]);var inst_26029 = cljs.core.async.close_BANG_.call(null,out);var state_26035__$1 = (function (){var statearr_26053 = state_26035;(statearr_26053[(13)] = inst_26028);
return statearr_26053;
})();var statearr_26054_26077 = state_26035__$1;(statearr_26054_26077[(2)] = inst_26029);
(statearr_26054_26077[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (10)))
{var inst_26019 = (state_26035[(2)]);var state_26035__$1 = state_26035;var statearr_26055_26078 = state_26035__$1;(statearr_26055_26078[(2)] = inst_26019);
(statearr_26055_26078[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26036 === (8)))
{var inst_25999 = (state_26035[(7)]);var inst_26008 = (state_26035[(11)]);var tmp26052 = inst_25999;var inst_25999__$1 = tmp26052;var inst_26000 = inst_26008;var state_26035__$1 = (function (){var statearr_26056 = state_26035;(statearr_26056[(7)] = inst_25999__$1);
(statearr_26056[(8)] = inst_26000);
return statearr_26056;
})();var statearr_26057_26079 = state_26035__$1;(statearr_26057_26079[(2)] = null);
(statearr_26057_26079[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___26065,out))
;return ((function (switch__18335__auto__,c__18391__auto___26065,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_26061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26061[(0)] = state_machine__18336__auto__);
(statearr_26061[(1)] = (1));
return statearr_26061;
});
var state_machine__18336__auto____1 = (function (state_26035){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_26035);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e26062){if((e26062 instanceof Object))
{var ex__18339__auto__ = e26062;var statearr_26063_26080 = state_26035;(statearr_26063_26080[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26062;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26081 = state_26035;
state_26035 = G__26081;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_26035){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_26035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___26065,out))
})();var state__18393__auto__ = (function (){var statearr_26064 = f__18392__auto__.call(null);(statearr_26064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___26065);
return statearr_26064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___26065,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18391__auto___26224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18391__auto___26224,out){
return (function (){var f__18392__auto__ = (function (){var switch__18335__auto__ = ((function (c__18391__auto___26224,out){
return (function (state_26194){var state_val_26195 = (state_26194[(1)]);if((state_val_26195 === (7)))
{var inst_26190 = (state_26194[(2)]);var state_26194__$1 = state_26194;var statearr_26196_26225 = state_26194__$1;(statearr_26196_26225[(2)] = inst_26190);
(statearr_26196_26225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (1)))
{var inst_26153 = [];var inst_26154 = inst_26153;var inst_26155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26194__$1 = (function (){var statearr_26197 = state_26194;(statearr_26197[(7)] = inst_26155);
(statearr_26197[(8)] = inst_26154);
return statearr_26197;
})();var statearr_26198_26226 = state_26194__$1;(statearr_26198_26226[(2)] = null);
(statearr_26198_26226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (4)))
{var inst_26158 = (state_26194[(9)]);var inst_26158__$1 = (state_26194[(2)]);var inst_26159 = (inst_26158__$1 == null);var inst_26160 = cljs.core.not.call(null,inst_26159);var state_26194__$1 = (function (){var statearr_26199 = state_26194;(statearr_26199[(9)] = inst_26158__$1);
return statearr_26199;
})();if(inst_26160)
{var statearr_26200_26227 = state_26194__$1;(statearr_26200_26227[(1)] = (5));
} else
{var statearr_26201_26228 = state_26194__$1;(statearr_26201_26228[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (15)))
{var inst_26184 = (state_26194[(2)]);var state_26194__$1 = state_26194;var statearr_26202_26229 = state_26194__$1;(statearr_26202_26229[(2)] = inst_26184);
(statearr_26202_26229[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (13)))
{var state_26194__$1 = state_26194;var statearr_26203_26230 = state_26194__$1;(statearr_26203_26230[(2)] = null);
(statearr_26203_26230[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (6)))
{var inst_26154 = (state_26194[(8)]);var inst_26179 = inst_26154.length;var inst_26180 = (inst_26179 > (0));var state_26194__$1 = state_26194;if(cljs.core.truth_(inst_26180))
{var statearr_26204_26231 = state_26194__$1;(statearr_26204_26231[(1)] = (12));
} else
{var statearr_26205_26232 = state_26194__$1;(statearr_26205_26232[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (3)))
{var inst_26192 = (state_26194[(2)]);var state_26194__$1 = state_26194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26194__$1,inst_26192);
} else
{if((state_val_26195 === (12)))
{var inst_26154 = (state_26194[(8)]);var inst_26182 = cljs.core.vec.call(null,inst_26154);var state_26194__$1 = state_26194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26194__$1,(15),out,inst_26182);
} else
{if((state_val_26195 === (2)))
{var state_26194__$1 = state_26194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26194__$1,(4),ch);
} else
{if((state_val_26195 === (11)))
{var inst_26162 = (state_26194[(10)]);var inst_26158 = (state_26194[(9)]);var inst_26172 = (state_26194[(2)]);var inst_26173 = [];var inst_26174 = inst_26173.push(inst_26158);var inst_26154 = inst_26173;var inst_26155 = inst_26162;var state_26194__$1 = (function (){var statearr_26206 = state_26194;(statearr_26206[(11)] = inst_26172);
(statearr_26206[(12)] = inst_26174);
(statearr_26206[(7)] = inst_26155);
(statearr_26206[(8)] = inst_26154);
return statearr_26206;
})();var statearr_26207_26233 = state_26194__$1;(statearr_26207_26233[(2)] = null);
(statearr_26207_26233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (9)))
{var inst_26154 = (state_26194[(8)]);var inst_26170 = cljs.core.vec.call(null,inst_26154);var state_26194__$1 = state_26194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26194__$1,(11),out,inst_26170);
} else
{if((state_val_26195 === (5)))
{var inst_26162 = (state_26194[(10)]);var inst_26158 = (state_26194[(9)]);var inst_26155 = (state_26194[(7)]);var inst_26162__$1 = f.call(null,inst_26158);var inst_26163 = cljs.core._EQ_.call(null,inst_26162__$1,inst_26155);var inst_26164 = cljs.core.keyword_identical_QMARK_.call(null,inst_26155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26165 = (inst_26163) || (inst_26164);var state_26194__$1 = (function (){var statearr_26208 = state_26194;(statearr_26208[(10)] = inst_26162__$1);
return statearr_26208;
})();if(cljs.core.truth_(inst_26165))
{var statearr_26209_26234 = state_26194__$1;(statearr_26209_26234[(1)] = (8));
} else
{var statearr_26210_26235 = state_26194__$1;(statearr_26210_26235[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (14)))
{var inst_26187 = (state_26194[(2)]);var inst_26188 = cljs.core.async.close_BANG_.call(null,out);var state_26194__$1 = (function (){var statearr_26212 = state_26194;(statearr_26212[(13)] = inst_26187);
return statearr_26212;
})();var statearr_26213_26236 = state_26194__$1;(statearr_26213_26236[(2)] = inst_26188);
(statearr_26213_26236[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (10)))
{var inst_26177 = (state_26194[(2)]);var state_26194__$1 = state_26194;var statearr_26214_26237 = state_26194__$1;(statearr_26214_26237[(2)] = inst_26177);
(statearr_26214_26237[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26195 === (8)))
{var inst_26162 = (state_26194[(10)]);var inst_26158 = (state_26194[(9)]);var inst_26154 = (state_26194[(8)]);var inst_26167 = inst_26154.push(inst_26158);var tmp26211 = inst_26154;var inst_26154__$1 = tmp26211;var inst_26155 = inst_26162;var state_26194__$1 = (function (){var statearr_26215 = state_26194;(statearr_26215[(7)] = inst_26155);
(statearr_26215[(14)] = inst_26167);
(statearr_26215[(8)] = inst_26154__$1);
return statearr_26215;
})();var statearr_26216_26238 = state_26194__$1;(statearr_26216_26238[(2)] = null);
(statearr_26216_26238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__18391__auto___26224,out))
;return ((function (switch__18335__auto__,c__18391__auto___26224,out){
return (function() {
var state_machine__18336__auto__ = null;
var state_machine__18336__auto____0 = (function (){var statearr_26220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26220[(0)] = state_machine__18336__auto__);
(statearr_26220[(1)] = (1));
return statearr_26220;
});
var state_machine__18336__auto____1 = (function (state_26194){while(true){
var ret_value__18337__auto__ = (function (){try{while(true){
var result__18338__auto__ = switch__18335__auto__.call(null,state_26194);if(cljs.core.keyword_identical_QMARK_.call(null,result__18338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18338__auto__;
}
break;
}
}catch (e26221){if((e26221 instanceof Object))
{var ex__18339__auto__ = e26221;var statearr_26222_26239 = state_26194;(statearr_26222_26239[(5)] = ex__18339__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18337__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26240 = state_26194;
state_26194 = G__26240;
continue;
}
} else
{return ret_value__18337__auto__;
}
break;
}
});
state_machine__18336__auto__ = function(state_26194){
switch(arguments.length){
case 0:
return state_machine__18336__auto____0.call(this);
case 1:
return state_machine__18336__auto____1.call(this,state_26194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18336__auto____0;
state_machine__18336__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18336__auto____1;
return state_machine__18336__auto__;
})()
;})(switch__18335__auto__,c__18391__auto___26224,out))
})();var state__18393__auto__ = (function (){var statearr_26223 = f__18392__auto__.call(null);(statearr_26223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18391__auto___26224);
return statearr_26223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18393__auto__);
});})(c__18391__auto___26224,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map