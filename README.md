  <div style="justify-content: center; align-items: center; display: flex;">
    <h1>React.Glass</h1>
    <img src="ReactGlass.png" alt="alt text" width="60" height="60" style="margin-bottom: 30px;">
  </div>
<div align="center">
  <h3>
    React.Glass is a React component library that allows  you to create components with a glassmorphism style  quickly.
  </h3>
</div>

## Table of Contents

- [Installation](#installation)
- [Components](#components)
  - [GlassForm](#glassform)

---

## Installation

```bash
yarn add https://github.com/ErickDevv/react.glass
```

---

## Components

### In react.glass you can find the following components

## **-GlassForm**

### *Example of use*

```tsx
import { GlassForm, GlassFormParams } from 'react.glass'

const App = () => {

  const params: GlassFormParams = {
    Form: {
      title: "Login",
      buttonText: "Login",
      submitFunction: () => { console.log("Submitted") }
    },
    Inputs: [
      {
        label: "Username",
        type: "text",
        placeholder: "Username",
        changeFunction: (e: any) => { console.log(e.target.value) }
      },
      {
        label: "Password",
        type: "password",
        placeholder: "Password",
        changeFunction: (e: any) => { console.log(e.target.value) }
      }
    ]
  }
  
  return (
    <div>
      <GlassForm {...params} />
    </div>
  )
}

export default App
```
