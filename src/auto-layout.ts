var app = new Blend.web.Application(<ApplicationInterface>{
    controller: function (sender: Blend.material.Material, eventName: string) {
        if (sender === this && eventName === "applicationReady") {
            (<any>window).view = this.mainView;
        }
    },
    mainView: {
        ctype: "lay.stack",
        items: [
            {
                ctype: "mb.rect",
                color: "yellow"
            },
            <BoxContainerInterface>{
                ctype: "lay.vbox",
                align: Blend.eBoxAlign.stretch,
                items: [
                    {
                        ctype: "mb.rect",
                        color: "red",
                        width: 0,
                        height: 0,
                        flex: 1
                    },
                    {
                        ctype: "mb.rect",
                        color: "green",
                        width: 0,
                        height: 0,
                        flex: 2

                    },
                ]
            }
        ]
    }
});

app.run();