import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OfficialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactNumber" source="contactNumber" />
        <TextInput label="name" source="name" />
        <TextInput label="position" source="position" />
      </SimpleForm>
    </Edit>
  );
};
