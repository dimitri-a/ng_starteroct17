import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string
   */
  selector: 'landing',
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [

  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  template: '<div>this is the landing component for sure</div>'
})
export class LandingComponent implements OnInit {
  /**
   * Set our default values
   */

  /**
   * TypeScript public modifiers
   */
  constructor(

  ) {}

  public ngOnInit() {
    console.log('hello `landing` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }


}
