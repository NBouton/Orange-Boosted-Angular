/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, HostListener } from '@angular/core';
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
        this.showMe = false;
    }
    ScrollTopComponent.prototype.onWindowScroll = function () {
        if (document.documentElement.scrollTop > window.innerHeight) {
            this.showMe = true;
        }
        else {
            this.showMe = false;
        }
    };
    ScrollTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'scroll-top',
                    styles: ['a { display: inline;}'],
                    template: "\n    <a href=\"javascript:void(0)\" class=\"o-scroll-up\" title=\"{{label}}\"\n    onclick=\"window.scrollTo(0, 0);\" *ngIf=\"showMe\">\n      <span class=\"o-scroll-up-text hidden-sm-down\">{{label}}</span>\n      <span class=\"o-scroll-up-icon\" aria-hidden=\"true\"></span>\n    </a>\n  "
                },] },
    ];
    ScrollTopComponent.propDecorators = {
        label: [{ type: Input }],
        onWindowScroll: [{ type: HostListener, args: ['window:scroll', [],] }]
    };
    return ScrollTopComponent;
}());
export { ScrollTopComponent };
//# sourceMappingURL=scroll-top.component.js.map