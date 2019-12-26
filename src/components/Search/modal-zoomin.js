/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { css } from 'styled-components';

const modalZoomin = css`
  display: block;

  .search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: calc(100% + 15px);
      height: calc(100% + 15px);
      pointer-events: none;
    }

    &::before {
      top: 0;
      left: 0;
      border-right-width: 0;
      border-bottom-width: 0;
      transform: translate3d(-15px, -15px, 0);
    }

    &::after {
      right: 0;
      bottom: 0;
      border-top-width: 0;
      border-left-width: 0;
      transform: translate3d(15px, 15px, 0);
    }

    button {
      position: absolute;
      top: 3rem;
      ${({ theme }) => (theme.dir === 'rtl' ? 'left: 3rem;' : 'right: 3rem;')}
      font-size: 2.5rem;
    }

    input {
      font-size: 10vw;
      width: 75%;
    }

    button {
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
    }

    .form {
      opacity: 0;
      transform: scale3d(0.8, 0.8, 1);
      transition: opacity 0.5s, transform 0.5s;
    }
  }

  &.show {
    .search {
      pointer-events: auto;
      opacity: 1;

      &::before,
      &::after {
        transform: translate3d(0, 0, 0);
        transition: transform 0.5s;
      }

      button {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }

      .form {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
  }

  @media screen and (max-width: 40rem) {
    .form {
      margin: 5rem 0 1rem;
    }

    span {
      text-align: left;
    }
  }
`;
export default modalZoomin;
