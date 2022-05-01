export declare module OogyDancing {
    interface OogyDancingAPI {
        readonly options: OogyDancingOptions;
        readonly attachedElement?: Element;
        attach(element: Element): void;
        detach(): void;
    }
    type OogyDancingOptions = {
        kind: OogyDancingKind;
        icon?: string;
        duration: number;
        width: number;
        height: number;
        distance: number;
        horizontal: OogyDancingAlign;
        horizontalInset: number;
        vertical: OogyDancingAlign;
        verticalInset: number;
    };
    enum OogyDancingKind {
        carrot = "carrot"
    }
    enum OogyDancingAlign {
        start = "flex-start",
        center = "center",
        end = "flex-end"
    }
    const kOogyDancingOptionsDefault: OogyDancingOptions;
    class OogyDancer implements OogyDancingAPI {
        get options(): OogyDancingOptions;
        get attachedElement(): Element | undefined;
        private _options;
        private subelement;
        private dancingElement;
        constructor(options?: OogyDancingOptions);
        private readonly kOogyDancingCarrotBackgroundImage;
        private readonly kOogyDancingCarrotAnimationName;
        private prepare;
        attach(element: Element): void;
        detach(): void;
    }
}
