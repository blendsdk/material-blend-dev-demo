var app = new Blend.web.Application({
    mainView: <BoxContainerInterface>{
        ctype: "lay.hbox",
        wrap: Blend.eBoxWrap.yes,
        css: "paper",
        padding:10,
        items: [
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button flat no ripple",
                ripple: false
            },
            {
                ctype: "mb.button",
                text: "button flat with ripple"
            },
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button flat disabled",
                disabled: true
            },
            /////////////////////////////////////////////
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button raised no ripple",
                ripple: false,
                buttonType: Blend.eButtonType.raised
            },
            {
                ctype: "mb.button",
                text: "button raised with ripple",
                buttonType: Blend.eButtonType.raised
            },
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button raised disabled",
                disabled: true,
                buttonType: Blend.eButtonType.raised
            },
            /////////////////////////////////////////////
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button flat primary no ripple",
                ripple: false,
                buttonType: Blend.eButtonType.flat,
                theme: "primary"
            },
            {
                ctype: "mb.button",
                text: "button flat primary with ripple",
                buttonType: Blend.eButtonType.flat,
                theme: "primary"
            },
            <ButtonInterface>{
                ctype: "mb.button",
                text: "button flat primary disabled",
                disabled: true,
                buttonType: Blend.eButtonType.flat,
                theme: "primary"
            }
        ]
    }
});
app.run();