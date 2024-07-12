import filterText from "./index.js";

describe("filterText function", () => {
  //   test("일반 문장은 false를 반환해야 함", async () => {
  //     expect(await filterText("안녕하세요, 반갑습니다.")).toBe(false);
  //     expect(await filterText("completely normal sentence")).toBe(false);
  //     expect(
  //       await filterText("오늘 어떤 하루를 보내셨나요? 저는 정말 행복했어요.")
  //     ).toBe(false);
  //   });

  //   test("비속어가 포함된 문장은 true를 반환해야 함", async () => {
  //     expect(await filterText("병신 아니냐.")).toBe(true);
  //     expect(await filterText("병신이지싶다ㅏㅏㅏㅏㅏ")).toBe(true);
  //     expect(await filterText("노무현 꺼져라")).toBe(true);
  //   });

  //   test("변형된 비속어도 감지해야 함", async () => {
  //     expect(await filterText("시111발 놈아")).toBe(true);
  //     expect(await filterText("바11111보 같은 녀석")).toBe(true);
  //     expect(await filterText("개111새끼")).toBe(true);
  //   });

  //   test("맥락에 따라 다른 의미를 가질 수 있는 단어 처리", async () => {
  //     expect(await filterText("개 귀여워")).toBe(false);
  //     expect(await filterText("개자식")).toBe(true);
  //   });

  test("특정 신체 부위와 관련된 욕 처리", async () => {
    expect(await filterText("불ㄴㅁㅁㄴㅇㄹㄹㅇㅁㄴㄹ알 보소")).toBe(true);
    expect(await filterText("부랄놈")).toBe(true);
  });
});
