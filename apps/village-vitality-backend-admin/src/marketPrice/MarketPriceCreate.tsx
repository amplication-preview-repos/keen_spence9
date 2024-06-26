import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MarketPriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="crop" source="crop" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
