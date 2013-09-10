define([],function(){
    var canvas,gl,
        retobj = {};
    canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 768;
    try{
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }catch(e){
        throw Error("Unable to initialize WebGL. Your browser may not support it.");
    }
    retobj.gl = gl;
    return retobj;
});