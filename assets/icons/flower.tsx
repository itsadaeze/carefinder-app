interface brandLogoProps {
//   color: string;
  className?: string;
  width: number;
  height: number;
}

export const FlowerIcon = ({ className, width, height }: brandLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.08 28.4575C10.7304 28.2578 10.5806 28.1579 10.3808 28.108C6.68494 26.6603 4.98686 23.6151 4.18776 20.0208C3.4386 16.6761 6.18551 12.7822 9.68156 11.9835C11.08 11.6341 12.4285 11.7339 13.8269 12.1333C16.7736 13.0318 19.071 14.7791 20.869 17.2751C21.2186 17.7744 21.6181 18.3235 22.0177 18.8726C22.4172 18.4233 22.2674 17.974 22.2674 17.5747C22.4172 14.6792 22.567 11.7339 23.2163 8.88839C23.6658 6.89155 24.2651 4.94462 25.4638 3.24731C26.6624 1.59991 28.1607 0.451723 30.2084 0.102275C31.7567 -0.147331 33.0552 0.252038 34.154 1.30038C35.3526 2.39865 36.1018 3.79644 36.6012 5.34399C37.7999 9.08808 37.7999 12.7822 36.6512 16.5263C36.5513 16.9257 36.4514 17.375 36.5013 17.8742C36.8509 17.6246 37.1506 17.3251 37.5002 17.0755C39.0485 15.9273 40.5468 14.7292 42.145 13.6808C43.893 12.4827 45.8908 11.9835 48.0383 12.1333C52.733 12.3829 56.8784 17.7744 54.6808 22.6666C53.2824 25.8616 50.9351 28.0581 47.8885 29.6057C47.2392 29.9551 46.59 30.2546 45.9407 30.5542C45.8908 30.5542 45.8908 30.6041 45.8408 30.7538C46.2903 30.8537 46.7398 31.0035 47.1893 31.1033C49.237 31.5526 51.1348 32.3513 52.8329 33.5993C53.7319 34.2982 54.4811 35.097 54.9306 36.1453C55.9294 38.5415 55.3801 40.788 53.2824 42.3355C51.1848 43.8831 48.8374 44.8316 46.2404 45.1811C44.8919 45.3807 43.5434 45.5305 42.1949 45.6803C39.8975 45.8799 37.7499 45.3807 35.5025 44.4822C35.4525 44.9314 35.4026 45.2809 35.3526 45.6303C35.1029 49.8237 34.154 53.9173 32.7056 57.861C32.5558 58.3103 32.356 58.7596 32.1562 59.2089C31.3072 61.056 29.9088 62.1542 27.961 62.6534C25.9133 63.2026 24.2152 62.6534 22.9166 61.056C21.8179 59.758 21.0687 58.2604 20.7191 56.613C19.92 52.3198 19.97 48.0266 20.819 43.7833C20.9189 43.284 20.9688 42.7848 21.0687 42.1359C20.7191 42.2856 20.4694 42.3355 20.2197 42.4853C17.4728 43.8831 14.7259 45.2809 11.979 46.6288C11.03 47.0781 10.1311 47.5773 9.18213 47.9766C8.28314 48.3261 7.4341 48.7255 6.48517 48.9251C3.28877 49.624 0.791584 47.6272 0.691697 44.1826C0.641753 42.5352 1.0413 40.9877 1.69057 39.54C3.53849 35.1469 6.28539 31.5526 10.3308 28.9567C10.5306 28.8069 10.7304 28.7071 11.08 28.4575Z"
        fill="#F7D046"
      />
      <path
        d="M36.6522 32.0818C36.5443 34.7741 35.3142 37.3795 32.8755 39.3119C31.2569 40.5929 29.3362 41.114 27.286 40.962C26.0343 40.8751 24.869 40.3975 23.8331 39.681C21.2434 37.9223 19.7543 35.4905 19.3011 32.4074C19.1068 31.1481 19.1284 29.9105 19.3874 28.673C19.7543 26.8926 20.5959 25.3944 21.9771 24.222C23.423 22.9844 25.1064 22.2462 26.9839 22.0508C28.2356 21.9205 29.4225 22.181 30.5663 22.7021C31.7965 23.2667 32.9187 24.0049 33.8898 24.9602C35.7458 26.784 36.609 29.0421 36.6522 32.0818Z"
        fill="black"
      />
    </svg>
  );
};