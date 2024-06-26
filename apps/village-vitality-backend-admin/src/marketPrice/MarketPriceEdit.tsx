import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MarketPriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="crop" source="crop" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
