const typeEnums = {
  '✨ feat': '신규 기능 추가 시',
  '♻️ refactor': '기존 기능 수정 시',
  '🐛 fix': '오류 해결 / 수정 시',
  '📝 docs': '문서 추가 또는 수정 시',
  '🎨 style': '스타일 추가 / 수정 시',
  '🔨 chore': '스크립트 코드 추가 / 수정 시',
  '✅ test': '테스트 코드 추가 / 수정 시'
};

const maxSpaceLength = Object.keys(typeEnums).reduce(
  (acc, { length }) => (length > acc ? length : acc),
  0,
);

const commitizenConfig = {
  types: Object.entries(typeEnums).map(([type, description]) => ({
    value: type,
    name:
      `${type}:     ${' '.repeat(maxSpaceLength - type.length)}` + description,
  })),
};

module.exports = commitizenConfig;
