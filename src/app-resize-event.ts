var app1 = new Blend.web.Application(<ApplicationInterface>{
    controller: function (sender: any, eventName: string, scale: string) {
        var me = this;
        //me.mainView.getElement().setHtml(Blend.Runtime.supportsOrientation());
        //console.log(Blend.Runtime.getWindowSize());
        if (eventName === "responsiveChanged") {
            console.log(Blend.Runtime.getOrientation());
             me.mainView.getElement().setHtml(Blend.Runtime.getOrientation() + " " + scale + " " +  window.navigator.userAgent);
        }

    },
    mainView: "mb.rect"
});
app1.run();