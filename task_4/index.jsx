import { useState } from "react";

export const Wrapper = ({ children, mouseEnterCallback }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };
  
  return <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>{children}</div>
}

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => {
  return (
    <Wrapper mouseEnterCallback={mouseEnterCallback}>
      <img src={imgSrc} alt={imgAlt} />
    </Wrapper>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <Wrapper mouseEnterCallback={mouseEnterCallback}>
      <p>{content}</p>
    </Wrapper>
  );
};

export const Block3 = ({ mouseEnterCallback, userData }) => {
  return (
    <Wrapper mouseEnterCallback={mouseEnterCallback}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </Wrapper>
  );
};
