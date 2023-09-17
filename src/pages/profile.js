import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";
const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      {session?.user?.image ? (
        <Avatar src={session?.user?.image} />
      ) : (
        <Avatar icon={<UserOutlined />} />
      )}
    </div>
  );
};

export default ProfilePage;
