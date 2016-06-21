
interface SurfacePanelInterface extends ContainerMaterialInterface {
    title?: string;
}

namespace Dev {

    export class SurfacePanel extends Blend.container.Container {

        protected title: string;

        public constructor(config: SurfacePanelInterface = {}) {
            super(config);
            var me = this;
            me.title = config.title || "";
        }

        protected render(): Blend.dom.Element {
            var me = this;
            var cb = new Blend.dom.ElementConfigBuilder({
                cls: ['mb-surface-panel']
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
                itm.addCssClass("md-sp-item");
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
