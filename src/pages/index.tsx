import type { NextPage } from "next";
import Head from "next/head";

import { useUser } from "@auth0/nextjs-auth0";
import TaskTimer from "../components/tasktimer";
import TaskProvider from "../provider/task/TaskProvider";
import TimerProvider from "../provider/timer/TimerProvider";

import SettingsProvider from "../provider/settings/SettingsProvider";
import RepositoryProvider from "../provider/repository/RepositoryProvider";
import AlarmProvider from "../provider/alarm/AlarmProvider";

const Home: NextPage = () => {
  const { error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col text-center mb-10">
          <h1>Pomodoro</h1>
          <span>Get stuff done today</span>
        </div>
        <AlarmProvider>
          <RepositoryProvider>
            <SettingsProvider>
              <TimerProvider>
                <TaskProvider>
                  <TaskTimer />
                </TaskProvider>
              </TimerProvider>
            </SettingsProvider>
          </RepositoryProvider>
        </AlarmProvider>

        {/* <div className={styles.grid}>
          {!user?.name && <a href="/api/auth/login">Login</a>}
          {user?.name && <a href="/api/auth/logout">Logout</a>}
        </div> */}
      </main>
    </>
  );
};

export default Home;
