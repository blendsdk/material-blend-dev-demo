Blend.Runtime.ready(function () {

    var bodyEl = Blend.getElement(document.body);
    bodyEl.clearElement();


    var grid = new Blend.container.Grid(<ContainerInterface>{
        width: "100%",
        height: "100%",
        gutterSize: 0,
        items: [
            {
                ctype: "mb.rect",
                color: "red",
                grid: {
                    small: 4,
                    medium: 4,
                    large: 12
                }
            },
            {
                ctype: "mb.rect",
                color: "blue",
                grid: {
                    small: 4,
                    medium: 4,
                    large: 6
                }

            },
            {
                ctype: "mb.rect",
                color: "orange",
                grid: {
                    small: 4,
                    medium: 8,
                    large: 6
                }
            },
            {
                ctype: "mb.rect",
                color: "magenta",
                grid: {
                    small: {
                        size: 2,
                        offset: 1
                    },
                    medium: {
                        size: 2,
                        offset: 1
                    },
                    large: <GridColumnConfigValue>{
                        hide:true
                    }
                }
            }
        ]
    })

    bodyEl.append(grid.getElement());

    Blend.delay(50, this, function () {
        grid.doInitialize();
        grid.performLayout();
    });
});

Blend.Runtime.kickStart();
