import styled from "styled-components";

const Text = styled.div``;

const unwrapTextObj = (textObj) => {
  const additionalProps = textObj.props || {};
  switch (textObj.type) {
    case "plain":
      return (
        <Text as={textObj.tag} {...additionalProps}>
          {textObj.content}
        </Text>
      );
    case "list":
      return (
        <Text as={textObj.tag} {...additionalProps}>
          {textObj.items.map((i) => (
            <li {...(i.props || {})}>{i.content}</li>
          ))}
        </Text>
      );
    default:
      break;
  }
};

const unwrapText = (wrappedText) =>
  wrappedText.map((textObj) => unwrapTextObj(textObj));

export const TextUnwrapper = ({ wrappedText }) => {
  return <>{unwrapText(wrappedText)}</>;
};

export default TextUnwrapper;
