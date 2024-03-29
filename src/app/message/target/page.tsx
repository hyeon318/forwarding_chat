"use client";
import Button from "@/components/atom/button/Button";
import Container from "@/components/atom/container/Container";
import Link from "next/link";
import styles from "./page.module.css";
import TextField from "@/components/atom/input/TextField";
import Label from "@/components/label/Label";
import List from "@/components/atom/list/List";
import { useState } from "react";
import { apiKakaoFriends, shareKakao } from "@/services/kakao";
import { useSession } from "next-auth/react";

export default function TargetPage() {
  const [keyword, setKeyword] = useState<string>();
  const { data: session, status } = useSession();
  console.log(session);
  const getFriends = () => {
    // apiKakaoMe(session?.accessToken).then(async (data) => {
    apiKakaoFriends(session?.accessToken);
    // });
  };

  return (
    <Container
      prev="/message/start"
      next="/message/write"
      style={{
        height: "600px",
        marginTop: "25px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        className={styles.btnFriends}
        onClick={() => getFriends()}
      >
        친구목록 가져오기
      </Button>
      <Button
        className={styles.btnFriends}
        onClick={() => shareKakao("https://developers.kakao.com", "")}
      >
        친구목록 가져오기
      </Button>
      <TextField
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        type="text"
        placeholder="텍스트가 포함된 대상자 설정"
        name="keyword"
        style={{ width: "400px" }}
      />

      <div className={styles.targets}>
        <Label> 총 0 명</Label>
        <List />
      </div>
      <Button className={styles.btnNext}> 다음으로 넘어가기</Button>
    </Container>
  );
}
