import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // 배경색
      Bg: string;

      // 포인트 색상
      Point: string;

      // 메인 색상
      Orange01: string;
      Orange02: string;
      Gray01: string;

      // 텍스트 색상
      Black01: string;
      Black02: string;

      // 기타 색상
      White: string;
      Black: string;
    };
    fonts: {
      // Title
      ExtraBold24: any;
      Bold24: any;
      ExtraBold20: any;
      Bold20: any;
      ExtraBold18: any;
      Bold18: any;

      // SubTitle
      ExtraBold16: any;
      Bold16: any;
      SemiBold16: any;
      Medium16: any;

      // Body
      ExtraBold14: any;
      Bold14: any;
      SemiBold14: any;
      Medium14: any;

      // Caption
      ExtraBold12: any;
      Bold12: any;
      SemiBold12: any;
      Medium12: any;
      SemiBold10: any;
    };
  }
}
