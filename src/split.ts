Blend.Runtime.ready(function () {

    var bodyEl = Blend.getElement(document.body);
    bodyEl.clearElement();

    var getRegions = function () {
        var max = 0,
            result: Array<MaterialInterface> = [];
        while (max <= 1) {
            max = Math.floor((Math.random() * 5) + 1)
        }

        for (var a = 0; a != max; a++) {
            result.push({ ctype: "mb.rect" });
        }
        return result;
    }

    var getConfig = function (ctype: string): MaterialInterface {
        return {
            ctype: ctype,
            flex: 1,
            style: {
                margin: 10
            },
            defaults: <MaterialInterface>{
                color: "#fff",
                css: "paper",
                lorum: true,
                minSplittedSize:32
            },
            items: getRegions()
        }
    }

    var box = new Blend.container.HorizontalBox({
        width: "100%",
        height: "100%",
        align: Blend.eBoxAlign.stretch,
        pack: Blend.eBoxPack.spaceBetween,
        items: [
            getConfig("lay.vsplit"),
            getConfig("lay.hsplit"),
        ]
    })

    bodyEl.append(box.getElement());
    bodyEl.setStyle({
        padding: 25
    });
    box.doInitialize();
    box.performLayout();
});

Blend.Runtime.kickStart();
