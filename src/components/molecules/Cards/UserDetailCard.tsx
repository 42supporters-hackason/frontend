import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import { UserProfileList } from "../UserProfileList";

export const UserDetailCard = memo(() => {
  return (
    <>
      <CardPosition>
        <Card style={{ width: 375 }}>
          <CardContent>
            <CardCommentBackGround>
              <UserProfileList
                title="使える言語"
                listItemTitle="language (can use)"
                listItem={["C言語", "Go", "Ruby", "TypeScript"]}
              />
              <UserProfileList
                title="所持しているポイント"
                listItemTitle="evaluation point"
                listItem={["5"]}
              />
              <UserProfileList
                title="自己PR"
                listItemTitle="self promotion"
                listItem={[
                  "普段はフロントエンドエンジニアとして働いています。 ただ、フルスタックなエンジニアを目指しているので、ぜひバックエンドの知識が豊富な方とmatchingしたいです!!",
                ]}
              />
              <UserProfileList
                title="Githubのリンク"
                listItemTitle="github id"
                listItem={["https://github.com/taisei-13046"]}
              />
            </CardCommentBackGround>
          </CardContent>
        </Card>
      </CardPosition>
    </>
  );
});

const CardCommentBackGround = styled.div`
  background-color: #f1f1f2;
  min-height: 350px;
  border-radius: 5px;
  padding: 15px;
`;

const CardPosition = styled.div`
  margin: 20px 100px 10px 50px;
`;
