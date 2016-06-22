var app = new Blend.web.Application({
    mainView: <SurfacePanelInterface>{
        ctype: "mb.surface",
        flat:true,
        items: [
            {
                ctype: "mb.surface",
                title: "Flat Buttons",
                css:"sub-surface",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        text: "flat button",
                        buttonType: "flat"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"small",
                        buttonType: "round-flat"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"medium",
                        buttonType: "round-flat"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"large",
                        buttonType: "round-flat"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"xlarge",
                        buttonType: "round-flat"
                    },
                ]
            },
            {
                ctype: "mb.surface",
                title: "Raised Buttons",
                css:"sub-surface",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        text: "raised button",
                        buttonType: "raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"small",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"medium",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"large",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize:"xlarge",
                        buttonType: "round-raised"
                    },
                ]
            },
            {
                ctype: "mb.surface",
                title: "fab buttons in different positions",
                height: 300,
                css:"sub-surface",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"top-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"top-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"top-right"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"center-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"center-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"center-right"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"bottom-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"bottom-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab",
                        fabPosition:"bottom-right"
                    }
                ]
            },
            {
                ctype: "mb.surface",
                title: "mini fab buttons in different positions",
                height: 250,
                css: "sub-surface",
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"top-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"top-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"top-right"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"center-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"center-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"center-right"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"bottom-left"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"bottom-center"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon:"add",
                        buttonType: "fab-mini",
                        fabPosition:"bottom-right"
                    }
                ]
            }


        ]
    }
});

app.run();