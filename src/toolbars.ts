Blend.Runtime.ready(function () {

    var bodyEl = Blend.getElement(document.body);
    bodyEl.clearElement();

    var box = new Blend.container.HorizontalBox({
        width: "100%",
        pack: Blend.eBoxPack.spaceBetween,
        items: [
            {
                ctype: "mb.toolbar",
                flex: 1,
                type: "raised",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        buttonType: Blend.eButtonType.roundFlat,
                        icon: "view_headline"
                    },
                    {
                        ctype: "mb.rect",
                        flex: 1,
                        color: "red",
                        width: 0,
                        height:0
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        buttonType: Blend.eButtonType.roundFlat,
                        icon: "more_vert"
                    }
                ]
            },
            {
                ctype: "mb.rect",
            },
            {
                ctype: "mb.toolbar",
                flex: 1,
                type: "flat",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        buttonType: Blend.eButtonType.roundFlat,
                        icon: "view_headline"
                    },
                    {
                        ctype: "mb.rect",
                        flex: 1,
                        color: "red",
                        width: 0,
                        height:0
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        buttonType: Blend.eButtonType.roundFlat,
                        icon: "more_vert"
                    }
                ]
            }
        ]

    });


    bodyEl.append(box.getElement());
    bodyEl.setStyle({
        padding: 25
    });
    box.doInitialize();
    box.performLayout();
});

Blend.Runtime.kickStart();
