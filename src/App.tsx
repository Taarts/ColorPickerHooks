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
  }

  return (
    <div className="App">
      <div id="container">
        <header id="h1_title">
          hsla{hue}, {saturation}%, {lightness}%, {alpha}
        </header>
        <p>
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
        <p>
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
        <p>
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
        <p>
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
        {/* </header> */}
        <div id="hslapicker">
          <div
            id="hsla"
            style={{
              backgroundColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
