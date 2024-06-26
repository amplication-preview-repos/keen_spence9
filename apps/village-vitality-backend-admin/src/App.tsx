import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnnouncementList } from "./announcement/AnnouncementList";
import { AnnouncementCreate } from "./announcement/AnnouncementCreate";
import { AnnouncementEdit } from "./announcement/AnnouncementEdit";
import { AnnouncementShow } from "./announcement/AnnouncementShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { MarketPriceList } from "./marketPrice/MarketPriceList";
import { MarketPriceCreate } from "./marketPrice/MarketPriceCreate";
import { MarketPriceEdit } from "./marketPrice/MarketPriceEdit";
import { MarketPriceShow } from "./marketPrice/MarketPriceShow";
import { OfficialList } from "./official/OfficialList";
import { OfficialCreate } from "./official/OfficialCreate";
import { OfficialEdit } from "./official/OfficialEdit";
import { OfficialShow } from "./official/OfficialShow";
import { EmergencyAlertList } from "./emergencyAlert/EmergencyAlertList";
import { EmergencyAlertCreate } from "./emergencyAlert/EmergencyAlertCreate";
import { EmergencyAlertEdit } from "./emergencyAlert/EmergencyAlertEdit";
import { EmergencyAlertShow } from "./emergencyAlert/EmergencyAlertShow";
import { QueryList } from "./query/QueryList";
import { QueryCreate } from "./query/QueryCreate";
import { QueryEdit } from "./query/QueryEdit";
import { QueryShow } from "./query/QueryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VillageVitalityBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Announcement"
          list={AnnouncementList}
          edit={AnnouncementEdit}
          create={AnnouncementCreate}
          show={AnnouncementShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="MarketPrice"
          list={MarketPriceList}
          edit={MarketPriceEdit}
          create={MarketPriceCreate}
          show={MarketPriceShow}
        />
        <Resource
          name="Official"
          list={OfficialList}
          edit={OfficialEdit}
          create={OfficialCreate}
          show={OfficialShow}
        />
        <Resource
          name="EmergencyAlert"
          list={EmergencyAlertList}
          edit={EmergencyAlertEdit}
          create={EmergencyAlertCreate}
          show={EmergencyAlertShow}
        />
        <Resource
          name="Query"
          list={QueryList}
          edit={QueryEdit}
          create={QueryCreate}
          show={QueryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
