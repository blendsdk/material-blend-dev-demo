var app = new Blend.web.Application(<ApplicationInterface>{
    controller: function () {
        console.log(arguments);
    },
    mainView: "mb.rect"
});
app.run();