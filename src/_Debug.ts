module Fayde {
    export function debugLayers (): any[] {
        var arr = [];
        var app = Fayde.Application.Current;
        for (var walker = app.MainSurface.walkLayers(); walker.step();) {
            arr.push(sexify(walker.current));
        }
        return arr;
    }

    export function sexify (updater: minerva.core.Updater) {
        var node = updater.getAttachedValue("$node");
        var xobj = node.XObject;

        var ctor = new Function("return function " + xobj.constructor.name + "() { }")();
        var obj = new ctor();

        obj.assets = updater.assets;
        obj.children = [];
        /*
        var obj = {
            type: xobj.constructor.name,
            assets: updater.assets,
            node: node,
            xobject: xobj,
            updater: updater,
            children: []
        };
        */

        for (var walker = updater.tree.walk(); walker.step();) {
            obj.children.push(sexify(walker.current));
        }

        return obj;
    }
}