import { FormControl, FormGroup } from '@angular/forms';

const isErrorVisible = ({ invalid, dirty }: FormControl): boolean => {
  return invalid && dirty;
};

const markAllAsDirty = (formGroup: FormGroup): void => {
  Object.keys(formGroup.controls).forEach((key) => {
    formGroup.controls[key].markAsDirty();
  });
};

export const LandingPageUtils = {
  isErrorVisible,
  markAllAsDirty,
};
