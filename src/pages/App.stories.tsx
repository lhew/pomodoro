import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Index from ".";
import { RequestError, UserProvider } from "@auth0/nextjs-auth0";

export default {
  component: Index,
} as ComponentMeta<typeof Index>;

const mockedFetcher = async (url = "") => {
  let response;
  try {
    response = await {
      ok: true,
      status: 200,
      json: () => ({
        user: {
          email: "john@doe.com",
          email_verified: true,
          nickname: "Joe",
          picture: "https://picsum.photos/200",
          sub: "mock:johndoe",
          updated_at: "2021-04-02T12:42:42.042Z",
        },
      }),
    };
  } catch {
    throw new RequestError(0); // Network error
  }
  if (response.ok) {
    return response.json();
  } else if (response.status === 401) {
    return undefined;
  }
  throw new RequestError(response.status);
};

const Template: ComponentStory<typeof Index> = (args) => (
  <UserProvider fetcher={mockedFetcher}>
    <Index {...args} />
  </UserProvider>
);
export const Home = Template.bind({});
