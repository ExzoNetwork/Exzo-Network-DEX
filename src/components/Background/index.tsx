import React from 'react'
import styled from 'styled-components'

const BgContainer = styled.div`
  position: absolute;
  top: 0;
  height: 25rem;
  width: 100vw;
  -webkit-mask-image: linear-gradient(#fff, transparent);
`

const BgPanel = styled.div`
  position: absolute;
  inset: 0;
  opacity: 1;
  -webkit-mask-image: radial-gradient(farthest-side at top, #fff, transparent);
  background-image: linear-gradient(to right, rgba(54, 180, 159, 0.3), rgba(219, 255, 117, 0.3));
`

const SvgLiners = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  top: -50%;
  bottom: -50%;
  height: 200%;
  width: 100%;
  transform: skewY(-18deg);
  fill: hsla(0, 0%, 100%, 0.025);
  stroke: hsla(0, 0%, 100%, 0.05);
  mix-blend-mode: overlay;
`

export default function Background() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <BgContainer>
        <BgPanel>
          <SvgLiners aria-hidden="true">
            <defs>
              <pattern id=":r2o:" width="72" height="56" patternUnits="userSpaceOnUse" x="-12" y="4">
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:r2o:)"></rect>
            <svg x="-12" y="4" style={{ overflow: 'visible' }}>
              <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
              <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
              <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
              <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
            </svg>
          </SvgLiners>
        </BgPanel>
      </BgContainer>
    </div>
  )
}
