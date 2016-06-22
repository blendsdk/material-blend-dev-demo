
interface SurfacePanelInterface extends ContainerMaterialInterface {
    title?: string;
    flat?: boolean;
}

namespace Dev {

    export class SurfacePanel extends Blend.container.Container {

        protected title: string;
        protected flat: boolean;

        public constructor(config: SurfacePanelInterface = {}) {
            super(config);
            var me = this;
            me.title = config.title || "";
            me.flat = config.flat || false;
        }

        protected render(): Blend.dom.Element {
            var me = this;
            var cb = new Blend.dom.ElementConfigBuilder({
                cls: ['mb-surface-panel' + (me.flat === true ? "-not" : "")]
            });

            var titleEl = cb.addChild({
                text: me.title,
                cls: ['title']
            });

            var bodyEl = cb.addChild(<CreateElementInterface>{
                oid: "bodyElement",
                cls: ['body']
            });

            me.items.forEach(function (itm: Blend.material.Material) {
                itm.addCssClass("mb-sp-item");
                bodyEl.addChild(itm.getElement());
            });

            return Blend.dom.Element.create(cb);
        }

        protected finalizeRender() {
            var me = this;
            super.finalizeRender();
        }
    }
}

Blend.registerClassWithAlias("mb.surface", Dev.SurfacePanel);
