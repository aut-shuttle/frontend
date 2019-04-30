// @flow
// hi
import * as React from "react";

import {
  FormCard,
  FormTextInput,
  FormCheckboxInput,
  StandaloneFormPage,
} from 'tabler-react';
import withTouchedErrors from "./withTouchedErrors.react";

import defaultStrings from "./RegisterPage.strings.js";

import type { FormEvents, FocusEvents } from "../../../";

type fieldTypes = {|
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  terms?: string,
|};

type touchedTypes = {|
  first_name?: boolean,
  last_name?: boolean,
  email?: boolean,
  password?: boolean,
  terms?: boolean,
|};

type Props = {|
  ...FormEvents,
  ...FocusEvents,
  +strings?: stringTypes,
  +action?: string,
  +method?: string,
  +values?: fieldTypes,
  +errors?: fieldTypes,
  +touched?: touchedTypes,
|};

/**
 * A register page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function RegisterPageTabler(props: Props): React.Node {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
  } = props;

  return (
    <StandaloneFormPage>
      <FormCard
        buttonText={strings.buttonText || defaultStrings.buttonText}
        title={strings.title || defaultStrings.title}
        onSubmit={onSubmit}
        action={action}
        method={method}
      >
      <h1>hII!!</h1> 
        <FormTextInput
          name="first_name"
          label={strings.first_nameLabel || defaultStrings.first_nameLabel}
          placeholder={
            strings.first_namePlaceholder || defaultStrings.first_namePlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.first_name}
          error={errors && errors.first_name}
        />

          <FormTextInput
          name="last_name"
          label={strings.last_nameLabel || defaultStrings.last_nameLabel}
          placeholder={
            strings.last_namePlaceholder || defaultStrings.last_namePlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.last_name}
          error={errors && errors.last_name}
        />
        <FormTextInput
          name="email"
          label={strings.emailLabel || defaultStrings.emailLabel}
          placeholder={
            strings.emailPlaceholder || defaultStrings.emailPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.email}
          error={errors && errors.email}
        />
        <FormTextInput
          name="password"
          type="password"
          label={strings.passwordLabel || defaultStrings.passwordLabel}
          placeholder={
            strings.passwordPlaceholder || defaultStrings.passwordPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.password}
          error={errors && errors.password}
        />
        <FormCheckboxInput
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.terms}
          name="terms"
          label={strings.termsLabel || defaultStrings.termsLabel}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const RegisterPageWithTouchedErrors: React.ComponentType<
  Props
> = withTouchedErrors(["first_name","last_name", "email", "password", "terms"])(RegisterPageTabler);

export default RegisterPageWithTouchedErrors;
