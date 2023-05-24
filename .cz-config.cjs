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
  allowBreakingChanges: ["✨ feat", "🐛 fix", "🔨 chore"],
  messages: {
    type: "커밋 메시지의 타입을 설정해주세요",
    customScope: "변경하려는 스코프는 무엇인가요?",
    subject: "커밋 메시지를 적어주세요",
    body: '(optional) 변화에 대하여 자세한 설명을 적어주세요',
    breaking: "(optional) BREAKING CHANGES으로 추가할 내용이 있나요?",
    footer:
      "(optional) 이 커밋으로 ISSUES CLOSED로 추가할 내용이 있나요? ex) #31, #34",
    confirmCommit: "이대로 커밋할까요?",
  }
}

module.exports = commitizenConfig;
