import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData().token;
  const expiresIn = useLoaderData().expiresIn;
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, expiresIn);
  }, [token, expiresIn, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
