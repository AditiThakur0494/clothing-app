import { FormInputLabel, FormInputContainer, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <FormInputContainer {...otherprops} />
      {label && (
        <FormInputLabel shrink={otherprops.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
