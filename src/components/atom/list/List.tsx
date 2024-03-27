import React from "react";
import styles from "./List.module.css";

export type TFriend = {
  id: number;
  uuid: string;
  favorite: boolean;
  profile_nickname: string;
  ynDel: boolean;
};

type props = {
  list?: TFriend[];
};
export default function List(props: props) {
  return (
    <div className={styles.list}>
      {props.list ? (
        props.list.map((friend) => {
          return (
            <span
              key={friend.id}
              className={styles.item}
            >
              {friend.profile_nickname} / {friend.uuid}
            </span>
          );
        })
      ) : (
        <span className="none">친구목록 조회에 실패하였습니다.</span>
      )}
    </div>
  );
}
