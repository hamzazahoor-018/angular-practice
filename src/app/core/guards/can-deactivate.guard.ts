import { CanDeactivateFn } from '@angular/router';

export interface CanLeavePage {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanLeavePage> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
