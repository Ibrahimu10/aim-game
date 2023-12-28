AFRAME.registerComponent("button", {
    init: function (){

        var scale = { x: 2, y: 2, z: 2 };

        var button1 = document.createElement("a-entity");
        var button2 = document.createElement("a-entity");

        button1.setAttribute("id", "button1" + i);
        button2.setAttribute("id", "button2" + i);

        button1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        button2.setAttribute("position", { x: posX, y: 2.5, z: 85 });


        button1.setAttribute("scale", scale);
        button2.setAttribute("scale", scale);

        button1.setAttribute(
            "gltf-model",
            "models/gridshotbutton.glb"
        );

        button2.setAttribute(
            "gltf-model",
            "models/headbutton.glb"
        );

    button1.setAttribute("rotation", { x: 0, y: 90, z: 0 });
    button2.setAttribute("rotation", { x: 0, y: 90, z: 0 });

    button1.setAttribute("static-body", {});
    button2.setAttribute("static-body", {});

    var sceneEl = document.querySelector("#scene");

    sceneEl.appendChild(button1);
    sceneEl.appendChild(button2);
    }
})