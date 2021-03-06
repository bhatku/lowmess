import React from 'react'
import { Global, css } from '@emotion/core'
import { useThemeUI } from 'theme-ui'

// Import fonts
import '../../assets/fonts'

const GlobalStyles: React.FC = () => {
  const { theme } = useThemeUI()

  return (
    <Global
      styles={css`
        ::selection {
          background-color: ${theme.colors.highlight};
          color: ${theme.colors.text};
        }

        html {
          font-feature-settings: 'calt', 'rlig', 'case', 'cv01';
          scroll-behavior: smooth;
          scroll-padding-top: ${theme.space[5]};

          @media (prefers-reduced-motion: reduce) {
            scroll-behavior: auto;
          }

          @media (min-width: 90em) {
            font-size: 112.5%;
          }
        }

        @media print {
          * {
            background-color: transparent !important;
            color: ${theme.colors.black} !important;
          }

          nav,
          footer {
            display: none;
          }
        }

        body {
          margin: 0;
          cursor: default;
        }

        nav ul,
        nav ol {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        nav li {
          display: inline-block;
        }

        /*
         * Will be overridden by Theme UI's Link styles, but allows us to use
         * Link to style text inside of Gatsby links without also having to
         * style the anchor element directly. This allows us to have control
         * over the styling without using a polymorphic component.
         */
        a {
          text-decoration: none;
        }

        a,
        button,
        select,
        summary,
        [type='button'],
        [type='submit'],
        [type='reset'],
        [type='checkbox'],
        [type='radio'],
        [role='button'],
        [aria-controls]:not(input) {
          cursor: pointer;
        }

        svg:not([fill]) {
          fill: currentColor;
        }

        pre,
        code {
          font-family: ${// TS doesn't like that we're calling this by name
          // instead of by index, but that's insane. Probably there's a way to
          // get this to be typed properly but we'll come back to it.
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          theme.fonts.mono};
        }

        audio,
        canvas,
        iframe,
        img,
        svg,
        video {
          vertical-align: middle;
        }

        [type='search'] {
          appearance: textfield; /* Remove "clear" button */
          outline-offset: -2px; /* Safari fix */
        }

        /* Hack specificty to override interactive cursor rule above */
        [aria-disabled='true'][aria-disabled='true'],
        [disabled][disabled] {
          cursor: not-allowed;
        }
      `}
    />
  )
}

export default GlobalStyles
