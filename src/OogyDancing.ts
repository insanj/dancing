
/**
 * oogy-dancing
 * github.com/insanj/dancing
 * (c) 2022 julian weiss <@insanj>
 */
export module OogyDancing {

  /**
   * Public API
   * @see OogyDancer
   * @see OogyDancingOptions
   */
  export interface OogyDancingAPI {
    
    /**
     * Configurable options for the Dancer, usually assigned in the constructor by the Dancer. 
     */
    readonly options: OogyDancingOptions;

    /**
     * Represents current host element, if there is one.
     */
    readonly attachedElement?: Element;

    /**
     * Attach and automatically begin animating in the given element.
     * If already attached, will remove and reattach to this element instead. If more than 1 element needs to be handled, create a Dancer for each element.
     * @param element 
     */
    attach(element: Element): void;

  }

  /**
   * Configurable options for the Dancing API
   */
  export type OogyDancingOptions = {

    /**
     * Kind of dancer; wraps the visual/UI presets to handle auto styling.
     */
    kind: OogyDancingKind;

    /**
     * Duration of each individual bounce/movement in any direction.
     */
    duration: number;

    /**
     * Width of the dancing element (not the container, which matches the element we are attached to).
     */
    width: number;

    /**
     * Height of the dancing element (not the container, which matches the element we are attached to).
     */
    height: number;

    /**
     * Distance/offset in pixels that the dance should cover in one direction.
     */
    distance: number;

    /**
     * Horizontal alignment of the dancing element.
     */
    horizontal: OogyDancingAlign;

    /**
     * Horizontal padding to apply to the dancing element within its container.
     */
    horizontalInset: number;

    /**
     * Vertical alignment of the dancing element.
     */
    vertical: OogyDancingAlign;

    /**
     * Vertical padding to apply to the dancing element within its container.
     */
    verticalInset: number;
  }

  /**
   * Wraps UI/visual characteristics of the dancing element.
   */
  export enum OogyDancingKind {
    carrot = 'carrot'
  }

  /**
   * Alignment of the dancing element, following flexbox styles.
   */
  export enum OogyDancingAlign {
    start = 'flex-start',
    center = 'center',
    end = 'flex-end'
  }

  /**
   * Default options for OogyDancingOptions, used in the constructor of the OogyDancer.
   * @see OogyDancer
   */
  export const kOogyDancingOptionsDefault: OogyDancingOptions = {
    kind: OogyDancingKind.carrot,
    duration: 500,
    width: 20,
    height: 20,
    distance: 10,
    horizontal: OogyDancingAlign.end,
    horizontalInset: 0,
    vertical: OogyDancingAlign.end,
    verticalInset: 20
  }

  /**
   * Standard Dancer which implements the Dancing API
   * @see OogyDancingAPI
   */
  export class OogyDancer implements OogyDancingAPI {

    get options(): OogyDancingOptions {
      return this._options;
    }

    get attachedElement(): Element | undefined {
      return !this.subelement.parentElement ? undefined : this.subelement.parentElement;
    }

    private _options: OogyDancingOptions;

    private subelement: HTMLElement;

    /**
     * The actual element which has the animation applied to it, as the subelement is a container used for layout.
     */
    private dancingElement: HTMLElement;

    constructor(options: OogyDancingOptions = kOogyDancingOptionsDefault) {
      this._options = options;

      this.subelement = document.createElement('div');
      this.dancingElement = document.createElement('div');

      this.prepare();
    }

    // private readonly kOogyDancingCarrotBackgroundSize = 'contain';
    private readonly kOogyDancingCarrotBackgroundImage = 'data:image/png;base64,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'; // downward facing triangle, yellow color, base64 inline img

    private readonly kOogyDancingCarrotAnimationName = 'oogy-dancing-carrot';

    /**
     * Use .options to set up the subelement.
     * Only needs to be called once (in the constructor, normally), as the .options are readonly.
     */
    private prepare() {

      // step 1: add root style sheets if they do not exist for the oogy-dancer module for each kind
      const existing = document.head.getElementsByClassName("oogy-dancing-carrot");
      if (existing.length < 1) {
        const rootStylesheet = document.createElement('style');
        rootStylesheet.className = "oogy-dancing-carrot";
        const danceStep = `transform: translateY(${this._options.distance}px);`;
        rootStylesheet.innerHTML = `@keyframes ${this.kOogyDancingCarrotAnimationName} { 50% { ${danceStep} } }`;
        document.head.appendChild(rootStylesheet);
      }

      // step 2: setup the subelement, which is the same for every kind
      this.subelement.style.position = 'absolute';
      this.subelement.style.display = 'flex';

      this.subelement.style.left = `${this._options.horizontalInset}px`;
      this.subelement.style.width = `calc(100% - ${this._options.horizontalInset * 2}px)`;

      this.subelement.style.top = `${this._options.verticalInset}px`;
      this.subelement.style.height = `calc(100% - ${this._options.verticalInset * 2}px)`;

      // step 3: setup the dancingElement, which varies based on the options.kind
      switch (this._options.kind) {
        default:
        case OogyDancingKind.carrot:
          this.dancingElement.style.backgroundSize = 'contain';
          this.dancingElement.style.backgroundImage = `url(${this.kOogyDancingCarrotBackgroundImage})`;
          this.dancingElement.style.animation = `${this._options.duration}ms ${this.kOogyDancingCarrotAnimationName} ease-in-out infinite`;
          break;
      }

      // step 4: handle .options customizable options that are independant of kind
      this.dancingElement.style.width = `${this._options.width}px`;
      this.dancingElement.style.height = `${this._options.height}px`;

      this.subelement.style.alignItems = this._options.vertical; // 'flex-end';
      this.subelement.style.justifyContent = this._options.horizontal; //'flex-end';

      // step 5: finally, compose the final element (right now, just adding dancingEl to subelement)
      this.subelement.appendChild(this.dancingElement);

    }
    
    attach(element: Element): void {

      if (this.subelement.parentNode) {
        // need to remove existing subelement
        this.subelement.parentNode.removeChild(this.subelement);
      }

      element.prepend(this.subelement);

    }

  }
  
}