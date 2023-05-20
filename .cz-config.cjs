const typeEnums = {
  feat: '새로운 기능 추가 시',
  fix: '버그 해결 / 수정 시',
  docs: '도큐멘테이션 추가 또는 수정 시',
  style: '스타일 추가시',
  chore: '스크립트 변경 시',
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
