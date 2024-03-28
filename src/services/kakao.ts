import { signIn } from "next-auth/react";
import { env } from "process";

export const apiKakaoProfile = async () => {
  await signIn("kakao", {
    redirect: true,
    callbackUrl: "/message/target",
  }).then((data) => {
    console.log("? ", data);
  });
};

export const apiKakaoFriends = () => {
  fetch("https://kapi.kakao.com/v1/api/talk/friends", {
    headers: { Authorization: `Bearer ${""}` },
    method: "GET",
  }).then((data) => {
    console.log(data);
  });

  // -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  // -d "limit=3"
};
