import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: true,
  theme: {
    extend: {
      colors: {
        primary: {
          5: '#597ef7',
          6: '#2f54eb',
          7: '#1d39c4',
        },
        error: {
          base: '#ff4d4f',
          hover: '#ff7875',
          active: '#d9363e',
        },
        disabled: {
          text: '#00000040',
          bg: '#f5f5f5',
        },
      },
      height: {
        sm: '24px',
        base: '32px',
        lg: '40px',
      },
      fontSize: {
        base: '14px',
        sm: '12px',
        lg: '16px',
      },
      lineHeight: {
        base: '1.5715',
      },
      textColor: {
        content: '#000000d9',
        inverse: '#ffffff',
      },
      borderColor: {
        base: '#d9d9d9',
      },
      borderRadius: {
        DEFAULT: '2px',
      },
      textShadow: {
        button: '0 -1px 0 rgba(0, 0, 0, 0.12)',
      },
      boxShadow: {
        button: '0 2px 0 rgba(0, 0, 0, 0.015)',
        primary: '0 2px 0 rgba(0, 0, 0, 0.045)',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      padding: {
        /** more small */
        xss: '4px',
        /** small items */
        xs: '8px',
        /** Form controls and items */
        sm: '12px',
        /** small containers and buttons */
        md: '16px',
        /** containers */
        lg: '24px',
      },
      margin: {
        xss: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
      },
    },
  },
  shortcuts: {
    // Button
    'n-button':
      'relative inline-block font-normal whitespace-nowrap text-center text-content bg-none border-1 border-solid border-base shadow-button cursor-pointer transition-all duration-300 ease-in-out select-none touch-manipulation h-base px-15px py-xss text-base leading-base rounded bg-white outline-none hover:(no-underline bg-white text-primary-5 border-primary-5) active:(outline-none bg-white text-primary-7 border-primary-7) focus:(outline-none bg-white text-primary-5 border-primary-5)',
    'n-button-default':
      'disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed) disabled:hover:border-base disabled:hover:text-disabled-text',
    'n-button-primary':
      'text-white border-primary-6 bg-primary-6 text-shadow-button shadow-primary hover:(border-primary-5 bg-primary-5 text-white) focus:(border-primary-5 bg-primary-5 text-white) active:(border-primary-7 bg-primary-7 text-white) disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed)',
    'n-button-dashed':
      'border-dashed disabled:(text-disabled-text bg-disabled-bg border-base shadow-none text-shadow-none cursor-not-allowed)',
    'n-button-text':
      'border-transparent bg-transparent shadow-transparent hover:(text-content border-transparent bg-[rgba(0,0,0,0.018)]) focus:(text-content border-transparent bg-[rgba(0,0,0,0.018)]) active:(text-content border-transparent bg-[rgba(0,0,0,0.028)]) disabled:(text-disabled-text bg-transparent cursor-not-allowed) disabled:hover:text-disabled-text',
    'n-button-link':
      'text-primary-6 border-transparent bg-transparent shadow-transparent hover:(border-transparent bg-transparent) focus:(border-transparent bg-transparent) active:(border-transparent bg-transparent) disabled:(text-disabled-text bg-transparent cursor-not-allowed) disabled:hover:text-disabled-text',
    'n-button-block': 'w-full',
    'n-button-default-danger':
      'text-error-base border-error-base hover:(text-error-hover border-error-hover) focus:(text-error-hover border-error-hover) active:(text-error-active border-error-active)',
    'n-button-primary-danger':
      'bg-error-base border-error-base hover:(bg-error-hover border-error-hover) focus:(bg-error-hover border-error-hover) active:(bg-error-active border-error-active)',
    'n-button-dashed-danger': 'n-button-default-danger',
    'n-button-text-danger':
      'text-error-base hover:text-error-hover focus:text-error-hover active:text-error-active',
    'n-button-link-danger': 'n-button-text-danger',
    'n-button-default-ghost':
      'text-white bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent',
    'n-button-primary-ghost':
      'text-primary-6 bg-transparent text-shadow-none hover:(text-primary-5 bg-transparent) focus:(text-primary-5 bg-transparent) active:(text-primary-7 bg-transparent)',
    'n-button-dashed-ghost': 'n-button-default-ghost',
    'n-button-danger-ghost':
      'text-error-base hover:text-error-hover focus:text-error-hover active:text-error-active',
  },
})
