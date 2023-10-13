import React from 'react'
import { useProgress } from "@react-three/drei";


export default function Loader() {
    const { progress, active } = useProgress();
    return (
        <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
        <div className="loading-screen__container">
          <h1 className="loading-screen__title">FARI STAND</h1>
          <div className="progress__container">
            <div
              className="progress__bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    )
}
