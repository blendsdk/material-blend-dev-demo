(function () {

    var app = new Blend.material.Application({
        content: {
            ctype: "mb.rect",
            color: "lightblue"
        },
        leftNavigation: <MaterialInterface>{
            ctype: "mb.rect",
            color: "cyan"
        },
        applicationBar: <BoxContainerInterface>{
            ctype: "mb.appbar",
            items: [
                <ButtonInterface>{
                    ctype: "mb.button",
                    buttonType: Blend.eButtonType.roundFlat,
                    icon: "view_headline"
                },
                {
                    ctype: "mb.rect",
                    flex: 1,
                    color: "transparent",
                    width: 0,
                    height: 0
                },
                <ButtonInterface>{
                    ctype: "mb.button",
                    buttonType: Blend.eButtonType.roundFlat,
                    icon: "more_vert"
                }
            ]
        },
    });
    app.run();

})();