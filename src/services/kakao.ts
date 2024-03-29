import { signIn } from "next-auth/react";

// export const apiKakaoMe = async (accessToken?: string) => {
//   // https://kapi.kakao.com/v2/user/me
//   const apikey = "9a37d4fd6cac75055bdedec74bdea7ea";
//   const REDIRECT_URI = encodeURIComponent("http://localhost:3000/message/target");
//   console.log(
//     `https://kauth.kakao.com/oauth/authorize?client_id=${apikey}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=friends,openid`
//   );
//   fetch(
//     `https://kauth.kakao.com/oauth/authorize?client_id=${apikey}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=friends,openid`,
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         ContentType: "application/x-www-form-urlencoded;charset=utf-8",
//       },
//       method: "GET",
//     }
//   ).then((data) => {
//     console.log(data);
//   });
// };

export const apiKakaoProfile = async () => {
  await signIn("kakao", {
    redirect: true,
    callbackUrl: "/message/target",
  }).then((data) => {
    console.log("? ", data);
  });
};

export const apiKakaoFriends = async (accessToken?: string) => {
  const data = await fetch("https://kapi.kakao.com/v1/api/talk/friends", {
    headers: { Authorization: `Bearer ${accessToken}` },
    method: "GET",
  }).then((data) => {
    console.log("response", data);
    return data;
  });
  const res = await data?.json();
  console.log(res);
  // -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  // -d "limit=3"
};
export const shareKakao = (route1: string, title: string) => {
  const route = "https://developers.kakao.com";
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      // kakao.init(process.env.REACT_APP_KAKAO_API_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
      kakao.init("1d66482d99284dc493995e4a7affb3f4");
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: "설명", // 인자값으로 받은 title
        imageUrl: "이미지 url",
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "title",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};
