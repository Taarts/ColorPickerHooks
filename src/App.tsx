import React from 'react'

export function App() {
  const [hue, setHue] = React.useState(360)
  const [saturation, setSaturation] = React.useState(100)
  const [lightness, setLightness] = React.useState(100)
  const [alpha, setAlpha] = React.useState(1)

  function handleHueChange(event: React.FormEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    setHue(parseInt(event.currentTarget.value))
  }
  function handleSaturationChange(event: React.FormEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    setSaturation(parseInt(event.currentTarget.value))
  }
  function handleLightnessChange(event: React.FormEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    setLightness(parseInt(event.currentTarget.value))
  }
  function handleAlphaChange(event: React.FormEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    setAlpha(parseInt(event.currentTarget.value))
  }

  const newBackgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
  const colorUp = { backgroundColor: newBackgroundColor }

  return (
    <div style={colorUp} className="container">
      <div className="controls">
        <header id="h1_title">
          HSLA {hue}, {saturation}%, {lightness}%, {alpha}
        </header>
        <div id="selector">
          <p className="para">
            Hue
            <input
              id="hue"
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={handleHueChange}
            />
          </p>
          <p className="para">
            Saturation
            <input
              id="saturation"
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={handleSaturationChange}
            />
          </p>
          <p className="para">
            Lightness
            <input
              id="lightness"
              type="range"
              min="0"
              max="100"
              value={lightness}
              onChange={handleLightnessChange}
            />
          </p>
          <p className="para">
            Alpha
            <input
              id="alpha"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={handleAlphaChange}
            />
          </p>
          <button
            className="random"
            role="button"
            onClick={() => {
              setHue(Math.floor(Math.random() * 360))
              setSaturation(Math.floor(Math.random() * 100))
              setLightness(Math.floor(Math.random() * 100))
              setAlpha(Math.random())
            }}
          >
            Random Color Select
          </button>
          {/* <div id="hsla_foreground" style={colorUp}></div> */}
        </div>
      </div>
    </div>
  )
}
