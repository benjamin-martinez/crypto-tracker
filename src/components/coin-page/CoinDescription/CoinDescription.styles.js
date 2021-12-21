import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 912px;
`;

export const Title = styled.div`
  justify-self: start;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const TextWrapper = styled.div`
  width: 912px;
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 19px;
`;

export const InnerTextWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding-right: 19px;
  padding-left: 19px;
  padding-top: 4px;
  padding-bottom: 34px;
`;

export const StackIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DescText = styled.div`
  line-height: 150% !important;
  text-align: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 13px;
`;

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  padding: 0px 45px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LinkIcon = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  left: 13px;
`;

export const CopyIcon = styled.img`
  position: absolute;
  right: 12px;
  height: 16px;
  width: 16px;
`;
