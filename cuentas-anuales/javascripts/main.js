!function(o){function n(e){if(t[e])return t[e].exports;var r=t[e]={exports:{},id:e,loaded:!1};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=o,n.c=t,n.p="",n(0)}([function(o,n,t){var e=t(1);e.init()},function(o,n){o.exports={init:function(){console.log("foo"),$(document).ready(function(){$(".js-dropdown").click(function(){$(".content-dropdown").toggleClass("is-open")}),$("table").tableHover({colClass:"hover",ignoreCols:[1]})})}}}]);