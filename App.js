const heading = React.createElement("h1",{},"Hello world");
const heading2 = React.createElement("h2",{},"Hello world2");
console.log(heading); //will print object in console because all the react elements are javascript objects.
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

// root.unmount(heading);


/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/

const child = React.createElement("div",{id: "child"}, [heading,heading2]);
const child2 = React.createElement("div",{id: "child2"}, [heading,heading2]);

const parent = React.createElement("div",{id: "parent"},[child,child2]);

root.render(parent);