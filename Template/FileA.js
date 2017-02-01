/*
 * MyLib Shared Library
 *
 *  This shared library is for interacting with Application XYZ
 * 
 *  Exposed methods:
 *    doStuff - Does stuff and makes calls to other stuff. 
 *       parameter1 - string - action name
 *       parameter2 - object - Object to do stuff with
 *
 *    getStuff - Gets stuff from the thing
 *       parameter1 - string - The name of stuff to get
 *
 *  Usage:
    If not included in the Installation, then some useage example(s) for making calls to the methods in this file
    
    var myLib = require( 'FileA' );
    var stuff = myLib.getStuff( 'tasty' );

 */
 
exports.doStuff( p1, p2 ) {
   // Do stuff here
}

exports.getStuff( p1 ) {
   // Go get stuff
}
