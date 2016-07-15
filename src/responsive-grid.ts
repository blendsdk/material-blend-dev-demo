Blend.Runtime.ready(function () {

    var bodyEl = Blend.getElement(document.body);
    bodyEl.clearElement();

    var grid = new Blend.container.Grid({
        width: "100%",
        height: "100%",
        items: [
            {
                ctype: "mb.rect",
                color: "red",
                grid: {
                    small: 4,
                    medium: 8,
                    large: 8
                }
            },
            {
                ctype: "mb.rect",
                color: "blue",
                grid: {
                    small: 4,
                    medium: 2,
                    large: 4
                }

            },
            {
                ctype: "mb.rect",
                color: "orange",
                grid: {
                    small: 4,
                    medium: 6,
                    large: 12
                }
            }
        ]
    });

    bodyEl.append(grid.getElement());
    grid.doInitialize();
    grid.performLayout();
    (<any>window).grid = grid;

});

Blend.Runtime.kickStart();
