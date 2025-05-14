import styled from "styled-components";

const LoginPage = () => {
  return (
    <div>
      <Title>디오더 로그인</Title>
      <SubTitle>D-Order 맛있는 음식을 주문해보세요</SubTitle>

      <TitleExtraBold24>Title ExtraBold 24px</TitleExtraBold24>
      <TitleBold24>Title Bold 24px</TitleBold24>
      <TitleExtraBold20>Title ExtraBold 20px</TitleExtraBold20>
      <TitleBold20>Title Bold 20px</TitleBold20>
      <TitleExtraBold18>Title ExtraBold 18px</TitleExtraBold18>
      <TitleBold18>Title Bold 18px</TitleBold18>

      <SubTitleExtraBold16>SubTitle ExtraBold 16px</SubTitleExtraBold16>
      <SubTitleBold16>SubTitle Bold 16px</SubTitleBold16>
      <SubTitleSemiBold16>SubTitle SemiBold 16px</SubTitleSemiBold16>
      <SubTitleMedium16>SubTitle Medium 16px</SubTitleMedium16>

      <BodyExtraBold14>Body ExtraBold 14px</BodyExtraBold14>
      <BodyBold14>Body Bold 14px</BodyBold14>
      <BodySemiBold14>Body SemiBold 14px</BodySemiBold14>
      <BodyMedium14>Body Medium 14px</BodyMedium14>

      <CaptionExtraBold12>Caption ExtraBold 12px</CaptionExtraBold12>
      <CaptionBold12>Caption Bold 12px</CaptionBold12>
      <CaptionSemiBold12>Caption SemiBold 12px</CaptionSemiBold12>
      <CaptionMedium12>Caption Medium 12px</CaptionMedium12>
      <CaptionSemiBold10>Caption SemiBold 10px</CaptionSemiBold10>
    </div>
  );
};

export default LoginPage;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.ExtraBold24};
  color: ${({ theme }) => theme.colors.Orange01};
  margin-bottom: 8px;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold16};
  color: ${({ theme }) => theme.colors.Black01};
  margin-bottom: 40px;
`;

// Title 스타일
const TitleExtraBold24 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold24};
`;

const TitleBold24 = styled.div`
  ${({ theme }) => theme.fonts.Bold24};
`;

const TitleExtraBold20 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold20};
`;

const TitleBold20 = styled.div`
  ${({ theme }) => theme.fonts.Bold20};
`;

const TitleExtraBold18 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold18};
`;

const TitleBold18 = styled.div`
  ${({ theme }) => theme.fonts.Bold18};
`;

// SubTitle 스타일
const SubTitleExtraBold16 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold16};
`;

const SubTitleBold16 = styled.div`
  ${({ theme }) => theme.fonts.Bold16};
`;

const SubTitleSemiBold16 = styled.div`
  ${({ theme }) => theme.fonts.SemiBold16};
`;

const SubTitleMedium16 = styled.div`
  ${({ theme }) => theme.fonts.Medium16};
`;

// Body 스타일
const BodyExtraBold14 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold14};
`;

const BodyBold14 = styled.div`
  ${({ theme }) => theme.fonts.Bold14};
`;

const BodySemiBold14 = styled.div`
  ${({ theme }) => theme.fonts.SemiBold14};
`;

const BodyMedium14 = styled.div`
  ${({ theme }) => theme.fonts.Medium14};
`;

// Caption 스타일
const CaptionExtraBold12 = styled.div`
  ${({ theme }) => theme.fonts.ExtraBold12};
`;

const CaptionBold12 = styled.div`
  ${({ theme }) => theme.fonts.Bold12};
`;

const CaptionSemiBold12 = styled.div`
  ${({ theme }) => theme.fonts.SemiBold12};
`;

const CaptionMedium12 = styled.div`
  ${({ theme }) => theme.fonts.Medium12};
`;

const CaptionSemiBold10 = styled.div`
  ${({ theme }) => theme.fonts.SemiBold10};
`;
