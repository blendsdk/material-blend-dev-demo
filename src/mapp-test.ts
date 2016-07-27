(function () {
    var app = new Blend.material.Application({
        content: {
            ctype: "mb.rect",
            color: "lightblue"
        },
        leftNavigation: <MaterialInterface>{
            ctype: "mb.rect",
            color: "cyan"
        }
    });
    app.run();
    (<any>window).app = app;
} ());