var app = new Blend.web.Application({
    mainView: <SurfacePanelInterface>{
        ctype: "mb.surface",
        title:"Buttons",
        items: [
            <ButtonInterface>{
                ctype: 'mb.button',
                text:'flat button'
            }
        ]
    }
});

app.run();