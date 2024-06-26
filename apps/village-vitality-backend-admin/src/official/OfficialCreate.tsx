import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OfficialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
      </SimpleForm>
    </Create>
  );
};
