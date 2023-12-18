/* eslint-disable import/no-extraneous-dependencies */
import { clerkClient } from "@clerk/nextjs";

export default async function handler(req, res) {
  console.log("==========================");
  console.log(req.body);
  const { id: userId } = await req.body;


  const user = await clerkClient.users.getUser(userId);

  res.status(200).json(user.privateMetadata);
}
