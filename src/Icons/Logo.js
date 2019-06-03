import React from "react";

const SvgLogo = props => (
  <svg width={77} height={49} {...props}>
    <defs>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="83.354%"
        y2="11.656%"
        id="Logo_svg__c"
      >
        <stop stopColor="#F39927" offset="0%" />
        <stop stopColor="#979797" offset="100%" />
      </linearGradient>
      <path
        d="M42.34 27.749c1.41 4.094 5.088 3.61 7.13 2.124 2.302-1.674 3.25-7.402 3.534-12.562.498-9.023-6.484-19.483-11.963-7.75 4.03-4.947 6.528-3.988 7.998-1.847 1.279 1.864 2.191 4.68 2.628 7.632.079.534-.251 1.055-.173 1.594.14.965-.347 2.21-.5 3.49-.733 6.12-4.102 14.062-8.654 7.319z"
        id="Logo_svg__b"
      />
      <filter
        x="-62.7%"
        y="-18.8%"
        width="221.1%"
        height="154.6%"
        filterUnits="objectBoundingBox"
        id="Logo_svg__a"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feMorphology radius={1} in="SourceAlpha" result="shadowInner" />
        <feOffset dy={2} in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.807843137 0 0 0 0 0.596078431 0 0 0 0 0.329411765 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <path
        d="M46.589 40.579c2.587 5.54 6.117 7.346 9.865 5.336 4.224-2.265 6.927-9.038 7.525-22.51-1.62-10.844-4.088-19.258-11.024-18.054-2.787.484-3.777 2.693-6.658 7.243 4.171-3.762 4.467-6.216 8.758-5.695 1.027.124 2.938 3.787 3.957 6.975 1.685 5.274 2.04 11.149 2.024 12.3-.071 4.789-.664 13.18-4.375 16.52-2.697 2.425-6.557 1.723-10.072-2.115z"
        id="Logo_svg__e"
      />
      <filter
        x="-39.6%"
        y="-12.1%"
        width="179.2%"
        height="133.8%"
        filterUnits="objectBoundingBox"
        id="Logo_svg__d"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={2}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.807843137 0 0 0 0 0.596078431 0 0 0 0 0.329411765 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <text
        fontFamily="Futura-Medium, Futura"
        fontSize={7}
        fontWeight={400}
        fill="#4A4A4A"
        transform="translate(-6 -3)"
      >
        <tspan x={6.434} y={37}>
          {"Santa Barbara "}
        </tspan>
      </text>
      <text
        fontFamily="Futura-Medium, Futura"
        fontSize={7}
        fontWeight={400}
        fill="#4A4A4A"
        transform="translate(-6 -3)"
      >
        <tspan x={63.615} y={37}>
          {"Flyers"}
        </tspan>
      </text>
      <text
        fontFamily="Futura-Medium, Futura"
        fontSize={5}
        fontWeight={400}
        fill="#A32D38"
        transform="translate(-6 -3)"
      >
        <tspan x={58.981} y={42}>
          {"dog sports"}
        </tspan>
      </text>
      <path
        d="M20.28 2c4.682 1.32 7.946 2.167 9.792 2.541 3.619.735 6.459.724 8.207 1.17 6.335 1.618 9.667 3.45 12.33 3.81 7.66 1.032 9.277-2.065 12.032-1.853 3.288.252-5.268-2.674-2.838-2.506 1.08.074 1.132-.055 2.001 0 3.847.243 5.3.243 4.357 0 .168.503.374.827.618.973 1.362.812 2.88 1.142 3.41 1.533.872.643 1.019 1.602 1.707 1.853 3.383 1.232 3.976 1.73 3.383 2.424-.694.813-1.953 1.456-3.383 1.627-1.268.15-3.059-.653-4.233-.68-1.437-.034-2.153.723-2.367 1.204-.378.847.402 2.078.402 3.029 0 1.355-.402 2.393-.402 3.23 0 1.6 4.74 2.825 6.6 3.806 3.589 1.893 4.552 3.46 2.89 4.7-2.838-1.898-4.967-3.142-6.387-3.73-1.777-.737-4.632-1.038-5.758-1.384-2.057-.631-3.623-1.776-5.362-2.24-2.659-.71-5.224-.65-6.67-1.153-2.044-.71-3.73-.91-5.278-1.874-1.64-1.021-3.112-2.79-4.224-2.79-2.161 0-.928 2.305-6.349 2.79-3.293.295-6.86-2.454-8.772-2.79-2.566-.45-4.565 3.78-6.669 3.38-1.137-.216-1.538-.865-1.202-1.945 3.41-2.329 5.894-3.74 7.454-4.234 1.659-.525 3.212.333 4.503 0 1.237-.319 1.268-1.273 2.045-1.913 1.054-.869 2.641-1.53 2.641-2.704 0-.967-.65-.852-1.501-1.01-1.185-.218-2.855-.528-4.545-1.13-.856-.304-2.726-.423-5.068-.972-.544-.128.018-.783-.42-1.079-.308-.207-1.09-.18-1.677-.598-.3-.213-.723-.708-1.268-1.485z"
        fill="#60371D"
      />
      <g transform="rotate(19 53 -1.782)">
        <use
          fill="#F4C400"
          filter="url(#Logo_svg__a)"
          xlinkHref="#Logo_svg__b"
        />
        <path
          stroke="url(#Logo_svg__c)"
          d="M47.262 30.372c.644-.149 1.296-.453 1.914-.903 1.85-1.346 2.987-5.986 3.329-12.185.238-4.321-1.304-9.075-3.588-11.27-1.727-1.662-3.585-1.615-5.374.435 2.408-1.656 4.414-1.195 5.908.982 1.287 1.875 2.248 4.71 2.71 7.842.04.267.015.508-.06.841l-.034.143c-.08.335-.098.47-.078.611.088.606.025 1.034-.266 2.358-.127.576-.19.906-.233 1.263-.411 3.44-1.533 6.874-2.998 8.733-.392.498-.804.882-1.23 1.15z"
          strokeLinejoin="square"
        />
      </g>
      <g transform="rotate(19 61.101 6.546)">
        <use
          fill="#F4C400"
          filter="url(#Logo_svg__d)"
          xlinkHref="#Logo_svg__e"
        />
        <use fill="#F39927" xlinkHref="#Logo_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgLogo;
