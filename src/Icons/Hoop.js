import React from "react";

const SvgHoop = props => (
  <svg width={60} height={60} {...props}>
    <defs>
      <radialGradient
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        id="Hoop_svg__c"
      >
        <stop stopColor="#FBE400" offset="0%" />
        <stop stopColor="#F4C400" offset="100%" />
      </radialGradient>
      <circle id="Hoop_svg__b" cx={26} cy={26} r={26} />
      <filter
        x="-13.5%"
        y="-9.6%"
        width="126.9%"
        height="126.9%"
        filterUnits="objectBoundingBox"
        id="Hoop_svg__a"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feMorphology radius={2} in="SourceAlpha" result="shadowInner" />
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(4 2)" fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#Hoop_svg__a)" xlinkHref="#Hoop_svg__b" />
      <circle
        stroke="url(#Hoop_svg__c)"
        strokeWidth={2}
        strokeLinejoin="square"
        cx={26}
        cy={26}
        r={25}
      />
    </g>
  </svg>
);

export default SvgHoop;
