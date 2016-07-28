class MyApp extends Blend.web.Application {

    constructor() {
        super();

        var appbar = {
            ctype: "mb.toolbar",
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
                    color: "transparent",
                    width: 0,
                    height: 0
                },
                <ButtonInterface>{
                    ctype: "mb.button",
                    buttonType: Blend.eButtonType.roundFlat,
                    icon: "more_vert"
                }
            ]
        };

        var items: Array<MaterialInterface> = [];

        for (var a = 0; a != 100; a++) {
            items.push({
                ctype: "mb.rect",
                width: Math.floor((Math.random() * 100) + 500),
                height: Math.floor((Math.random() * 20) + 1),
                color: this.getRandomColor(),
                style: {
                    margin: 10
                }
            });
            if (a == 6) {
                items.push(appbar);
            }
        }

        this.mainView = new Blend.container.Flow({
            items: items
        });
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

(new MyApp()).run();