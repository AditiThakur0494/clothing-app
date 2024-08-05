import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryItemBody,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const navigationHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
