import { styled, Button, alpha } from "@mui/material";

export const StyledButton = styled(Button)<{
  isSecondary?: boolean;
  isOlderRelease?: boolean;
  isDownloadTag?: boolean;
}>`
  padding: 10px 18px 10px 16px;
  border-radius: 24px;
  gap: 8px;
  width: fit-content;
  height: fit-content;
  transition: 0.2s ease-in-out;

  ${({ isSecondary, theme }) =>
    isSecondary
      ? `
      color: ${theme.palette.text.primary};
  
      &:hover {
        background: ${alpha(theme.palette.text.primary, 0.1)};
      }`
      : `color: ${theme.palette.text.extremelyLight};
      background: ${theme.palette.secondary.light};
  
      &:hover {
        background: ${theme.palette.secondary.main};
      }`};

  ${({ isOlderRelease, theme }) =>
    isOlderRelease
      ? `
      &:hover {
        background: ${theme.palette.primary.light};
      }`
      : null};

  ${({ isDownloadTag, theme }) =>
    isDownloadTag
      ? `
      background: transparent;
      border: 1.5px solid ${alpha(theme.palette.text.primary, 0.2)};
      border-radius: 24px;
      color: ${theme.palette.text.secondary};
      font-weight: 500;
      &:disabled {
        background: transparent;
        color: ${theme.palette.text.primary};
      }`
      : null};
`;
