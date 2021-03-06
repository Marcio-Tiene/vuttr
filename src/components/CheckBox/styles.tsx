import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  display: box;
  position: relative;
  padding-left: 20px;
  font-size: 1.25rem;
  line-height: 1.625rem;

  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  & .checkmark {
    border-radius: 2px;
    position: absolute;
    top: 7px;
    left: 0px;
    height: 15px;
    width: 15px;
    background: var(--DarkerWhite) 0% 0% no-repeat padding-box;
    border: 1px solid var(--MostDarkestWhite);
    transition: linear 0.2s;
    :hover {
      background-color: var(--MostDarkestWhite);
    }
  }

  /* When the checkbox is checked, add a blue background */
  & input:checked ~ .checkmark {
    background-color: #365df0;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  & .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  & input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  & .checkmark:after {
    left: 5px;
    bottom: 2px;
    width: 3px;
    height: 9px;
    border: 2px solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
