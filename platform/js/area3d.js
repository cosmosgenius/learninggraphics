define([],function(){
    var canvas,gl,
        retobj = {};
    canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    retobj.gl = gl;
    return retobj;
});