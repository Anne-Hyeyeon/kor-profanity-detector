import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 비속어 목록 읽기
const loadBadWords = async () => {
  const data = await fs.readFile(path.join(__dirname, "badwords.csv"), "utf-8");
  return data
    .split(/,|\n/)
    .map((word) => word.trim())
    .filter((word) => word !== "");
};

const filterText = async (text) => {
  const badWords = await loadBadWords();

  // 정규 표현식 생성
  const badWordsRegex = badWords.map((word) => {
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(escapedWord.split("").join("[\\d\\W]*"), "gi");
  });

  // 문장 부호 제거 및 소문자 변환
  const cleanText = text.toLowerCase();

  // 비속어 검색
  for (let regex of badWordsRegex) {
    if (regex.test(cleanText)) {
      console.log(`금칙어 감지: ${regex.source}`);
      return true;
    }
  }

  return false;
};

export default filterText;
