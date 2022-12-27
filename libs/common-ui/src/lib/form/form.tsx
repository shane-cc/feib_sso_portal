import styled from '@emotion/styled';
import { FormEvent } from 'react';

/* eslint-disable-next-line */
export interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  disabled?: boolean;
}

const StyledForm = styled.form`
  display: flex;
`;

export const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  className,
  disabled = false,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled) return;
    onSubmit(e);
  };

  return (
    <StyledForm className={className} onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  );
};

export default Form;
