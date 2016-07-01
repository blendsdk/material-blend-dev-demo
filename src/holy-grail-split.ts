var app = new Blend.web.Application({
    fitMainView: true,
    mainView: {
        ctype: "lay.hsplit",
        padding:"1%",
        items: [
            {
                ctype: "mb.rect",
                color: "#fff",
                css: "paper",
                lorum: true
            },
            {
                ctype: "lay.vsplit",
                items: [
                    {
                        ctype: "mb.rect",
                        color: "#fff",
                        css: "paper",
                        lorum: true
                    },
                    {
                        ctype: "mb.rect",
                        color: "#fff",
                        css: "paper",
                        lorum: true
                    },
                    {
                        ctype: "mb.rect",
                        color: "#fff",
                        css: "paper",
                        lorum: true
                    }
                ]
            },
            {
                ctype: "mb.rect",
                color: "#fff",
                css: "paper",
                lorum: true
            }
        ]
    }
});
app.run();