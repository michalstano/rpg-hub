import { FormGroup } from '@angular/forms';

const isErrorVisible = (invalid: boolean, dirty: boolean): boolean => {
  return invalid && dirty;
};

const markAllAsDirty = ({ controls }: FormGroup): void => {
  Object.keys(controls).forEach((key) => {
    controls[key].markAsDirty();
  });
};

export const LandingPageUtils = {
  isErrorVisible,
  markAllAsDirty,
};
