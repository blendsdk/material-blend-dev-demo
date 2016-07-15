class MyApp extends Blend.web.Application {

    constructor() {
        super();

        var items: Array<MaterialInterface> = [];

        for (var a = 0; a != 100; a++) {
            items.push({
                ctype: "mb.rect",
                width: Math.floor((Math.random() * 100) + 500),
                height: Math.floor((Math.random() * 20) + 1),
                color: this.getRandomColor(),
                style: {
                    margin:10
                }
            });
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