var app = new Blend.web.Application({
    mainView: <BoxContainerInterface>{
        ctype: "lay.vbox",
        align: Blend.eBoxAlign.stretch,
        pack: Blend.eBoxPack.center,
        padding:10,
        items: [
            <BoxContainerInterface>{
                ctype: "lay.hbox",
                css:["mb-surface-panel"],
                pack: Blend.eBoxPack.spaceBetween,
                align: Blend.eBoxAlign.center,
                padding:10,
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
                    }
                ]
            },
            <BoxContainerInterface>{
                ctype: "lay.hbox",
                css:["mb-surface-panel"],
                pack: Blend.eBoxPack.spaceBetween,
                align: Blend.eBoxAlign.center,
                padding:10,
                items: [
                    <ButtonInterface>{
                        ctype: "mb.button",
                        text: "raised button",
                        buttonType: "raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize: "small",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize: "medium",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize: "large",
                        buttonType: "round-raised"
                    },
                    <ButtonInterface>{
                        ctype: "mb.button",
                        icon: "info",
                        iconSize: "xlarge",
                        buttonType: "round-raised"
                    },

                ]
            },
            <BoxContainerInterface>{
                ctype: "lay.hbox",
                css:["mb-surface-panel"],
                padding: 10,
                flex:1,
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
            <BoxContainerInterface>{
                ctype: "lay.hbox",
                css:["mb-surface-panel"],
                pack: Blend.eBoxPack.spaceBetween,
                align:Blend.eBoxAlign.center,
                items: [
                ]
            },
            <BoxContainerInterface>{
                ctype: "lay.hbox",
                css:["mb-surface-panel"],
                pack: Blend.eBoxPack.spaceBetween,
                align:Blend.eBoxAlign.center,
                items: [
                ]
            }
        ]
    }
});

app.run();


    // mainView: <SurfacePanelInterface>{
    //     ctype: "mb.surface",
    //     flat:true,
    //     items: [
    //         {
    //             ctype: "mb.surface",
    //             title: "Flat Buttons",
    //             css:"sub-surface",
    //         },
    //         {
    //             ctype: "mb.surface",
    //             title: "Raised Buttons",
    //             css:"sub-surface",
    //             items: [
    //             ]
    //         },
    //         {
    //             ctype: "mb.surface",
    //             title: "fab buttons in different positions",
    //             height: 300,
    //             css:"sub-surface",
    //             items: [
    //             ]
    //         },
    //         {
    //             ctype: "mb.surface",
    //             title: "mini fab buttons in different positions",
    //             height: 250,
    //             css: "sub-surface",
    //             items: [
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"top-left"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"top-center"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"top-right"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"center-left"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"center-center"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"center-right"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"bottom-left"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"bottom-center"
    //                 },
    //                 <ButtonInterface>{
    //                     ctype: "mb.button",
    //                     icon:"add",
    //                     buttonType: "fab-mini",
    //                     fabPosition:"bottom-right"
    //                 }
    //             ]
    //         }


    //     ]
    // }
