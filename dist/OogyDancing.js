export var OogyDancing;
(function (OogyDancing) {
    let OogyDancingKind;
    (function (OogyDancingKind) {
        OogyDancingKind["carrot"] = "carrot";
    })(OogyDancingKind = OogyDancing.OogyDancingKind || (OogyDancing.OogyDancingKind = {}));
    let OogyDancingAlign;
    (function (OogyDancingAlign) {
        OogyDancingAlign["start"] = "flex-start";
        OogyDancingAlign["center"] = "center";
        OogyDancingAlign["end"] = "flex-end";
    })(OogyDancingAlign = OogyDancing.OogyDancingAlign || (OogyDancing.OogyDancingAlign = {}));
    OogyDancing.kOogyDancingOptionsDefault = {
        kind: OogyDancingKind.carrot,
        duration: 500,
        width: 20,
        height: 20,
        distance: 10,
        horizontal: OogyDancingAlign.end,
        horizontalInset: 10,
        vertical: OogyDancingAlign.end,
        verticalInset: 20
    };
    class OogyDancer {
        constructor(options = OogyDancing.kOogyDancingOptionsDefault) {
            this.kOogyDancingCarrotBackgroundImage = 'data:image/png;base64,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';
            this.kOogyDancingCarrotAnimationName = 'oogy-dancing-carrot';
            this._options = options;
            this.subelement = document.createElement('div');
            this.dancingElement = document.createElement('div');
            this.prepare();
        }
        get options() {
            return this._options;
        }
        get attachedElement() {
            return !this.subelement.parentElement ? undefined : this.subelement.parentElement;
        }
        prepare() {
            const existing = document.head.getElementsByClassName("oogy-dancing-carrot");
            if (existing.length < 1) {
                const rootStylesheet = document.createElement('style');
                rootStylesheet.className = "oogy-dancing-carrot";
                const danceStep = `transform: translateY(${this._options.distance}px);`;
                rootStylesheet.innerHTML = `@keyframes ${this.kOogyDancingCarrotAnimationName} { 50% { ${danceStep} } }`;
                document.head.appendChild(rootStylesheet);
            }
            this.subelement.style.position = 'absolute';
            this.subelement.style.display = 'flex';
            this.subelement.style.left = `${this._options.horizontalInset}px`;
            this.subelement.style.width = `calc(100% - ${this._options.horizontalInset * 2}px)`;
            this.subelement.style.top = `${this._options.verticalInset}px`;
            this.subelement.style.height = `calc(100% - ${this._options.verticalInset * 2}px)`;
            switch (this._options.kind) {
                default:
                case OogyDancingKind.carrot:
                    this.dancingElement.style.backgroundSize = 'contain';
                    this.dancingElement.style.backgroundImage = this._options.icon ? `url(${this._options.icon})` : `url(${this.kOogyDancingCarrotBackgroundImage})`;
                    this.dancingElement.style.animation = `${this._options.duration}ms ${this.kOogyDancingCarrotAnimationName} ease-in-out infinite`;
                    break;
            }
            this.dancingElement.style.width = `${this._options.width}px`;
            this.dancingElement.style.height = `${this._options.height}px`;
            this.subelement.style.alignItems = this._options.vertical;
            this.subelement.style.justifyContent = this._options.horizontal;
            this.subelement.appendChild(this.dancingElement);
        }
        attach(element) {
            if (this.subelement.parentNode) {
                this.subelement.parentNode.removeChild(this.subelement);
            }
            element.prepend(this.subelement);
        }
        detach() {
            if (this.subelement.parentNode) {
                this.subelement.parentNode.removeChild(this.subelement);
            }
        }
    }
    OogyDancing.OogyDancer = OogyDancer;
})(OogyDancing || (OogyDancing = {}));
