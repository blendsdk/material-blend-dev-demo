Blend.Runtime.ready(function () {

    var bodyEl = Blend.getElement(document.body);
    bodyEl.clearElement();

    var appbar = new Blend.toolbar.ApplicationBar({
            title:"Title",
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
                },
                <ButtonInterface>{
                    ctype: "mb.button",
                    buttonType: Blend.eButtonType.roundFlat,
                    icon: "language"
                }
            ]
        });

    bodyEl.append(appbar.getElement());
    appbar.doInitialize();
    appbar.performLayout();
    (<any>window).appbar = appbar;

});

Blend.Runtime.kickStart();
