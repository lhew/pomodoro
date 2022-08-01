/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useUser } from "@auth0/nextjs-auth0";
import TaskTimer from "../components/tasktimer";
import TaskProvider from "../provider/task/TaskProvider";
import TimerProvider from "../provider/timer/TimerProvider";
import RepositoryProvider from "../provider/repository/RepositoryProvider";
import { ITask, Task } from "../provider/task/types";
import { useEffect, useState } from "react";
import SettingsProvider from "../provider/settings/SettingsProvider";

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="flex flex-col text-center mb-10">
          <h1>Pomodoro</h1>
          <span>Get stuff done today</span>
        </div>
        <RepositoryProvider>
          <SettingsProvider>
            <TimerProvider>
              <TaskProvider>
                <TaskTimer />
              </TaskProvider>
            </TimerProvider>
          </SettingsProvider>
        </RepositoryProvider>

        <div className={styles.grid}>
          {!user?.name && <a href="/api/auth/login">Login</a>}
          {user?.name && <a href="/api/auth/logout">Logout</a>}
        </div>
      </main>
    </div>
  );
};

export default Home;
